"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import {
  GetAllUserstList,
  GetAllUserstListDatum,
} from "@/types/users/GetAllUserstList";
import { deleteAUser, fetchAllUserList } from "@/api/users";
import { toast } from "sonner";
import TableSkeleton from "../Skeleton/TableSkeleton";
import { AlertDeleteUser } from "../Alert/AlertDeleteUser";
import {
  MagnifyingGlassCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import Input from "../shared/Input/Input";
import PaginationUser from "../Pagination/PaginationUser";

const UserList = () => {
  const router = useRouter();
 
  


  const [userList, setUserList] = useState<GetAllUserstList>();
  const [loading, setLoading] = useState<boolean>(false);

  const [openVerifyDelete, setOpenVerifyDelete] = useState<boolean>(false);
  const [openAlertText, setOpenAlertText] = useState<string>("");
  const [idToDelete, setIdToDelete] = useState<number>();
  const [nameToDelete, setNameToDelete] = useState<string>();
  let [toggle, setToggle] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState("");

  const searchParams = useSearchParams();
  const search = searchParams.get("name");
  const pageIndex = searchParams.get("pageIndex")
  const filterSearch = search ? `&name=${search}` : "";

  const handleSubmitSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    router.push(`/users/list?name=${inputValue}`);
   
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Update the input value as it changes
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const requestUsers = await fetchAllUserList(Number(pageIndex), 5, filterSearch);

        if (requestUsers.data?.length) {
          setUserList(requestUsers);
          console.log(requestUsers);
          setLoading(false);
        } else {
          toast.warning("No users found");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [toggle, search, searchParams, filterSearch, pageIndex]);

  const handlerOpenDialog = (name: string, id: number) => {
    setOpenVerifyDelete(true);
    setOpenAlertText(`Apakah anda yakin untuk menghapus user : ${name}`);
    setNameToDelete(name);
    setIdToDelete(id);
  };

  const handlerCloseDialog = () => {
    setOpenVerifyDelete(false);
  };

  const handleDeleteUser = async () => {
    try {
      setLoading(true);
      const deleterUser = await deleteAUser(idToDelete as number);

      if (!deleterUser) {
        toast.warning(`Gagal Menghapus User : ${nameToDelete}`);
        setLoading(false);
      } else if (deleterUser) {
        toast.success(`Berhasil Menghapus User : ${nameToDelete}`);
        setLoading(false);
        setToggle((toggle = !toggle));
        setOpenVerifyDelete(false);
      } else {
        return;
      }
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
    <div className="relative rounded-md bg-white p-5 shadow dark:bg-background mt-5 overflow-hidden border-0 ">
    
     <form className="w-[70vw] gap-4 py-4 mx-auto  flex justify-end item-center" onSubmit={handleSubmitSearch}>
        <Input
          type="text"
          placeholder="Search User.."
          className="px-2 placeholder:text-xs placeholder:italic "
          value={inputValue}
          onChange={handleChangeSearch}
        />
        {search ? (
          
            <span
              onClick={() => {
              
                setInputValue("");
                router.push("/users/list")
              }}
              className="relative flex items-center justify-center rounded-md border px-5 py-2 text-sm font-semibold shadow-[0_10px_20px_-10px] outline-none transition duration-300 hover:shadow-none cursor-pointer bg-red-500 text-white shadow-red-300"
            >
              Clear
            </span>
        
        ) : (
          <button
            type="submit"
            className=" relative flex items-center justify-center rounded-md border px-5 py-2 text-sm font-semibold shadow-[0_10px_20px_-10px] outline-none transition duration-300 hover:shadow-none cursor-pointer border-primary bg-primary text-white shadow-primary/60"
          >
             Search
          </button>
        )}
      </form>

    
      <div className="table-responsive">
        {loading ? (
          <TableSkeleton long={9} />
        ) : (
          <>
            <table className="table-striped table-hover">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Status</th>

                  <th className="!text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {userList?.data?.map((user: GetAllUserstListDatum, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="font-medium">{user.name}</div>
                    </td>
                    <td className="italic text-sm hover:text-primary-500">
                      {user.email}
                    </td>
                    <td>
                      {" "}
                      <Badge
                        variant={user.gender == "male" ? "default" : "outline"}
                      >
                        {user.gender}
                      </Badge>
                    </td>
                    <td>
                      <Badge
                        variant={
                          user.status == "active" ? "secondary" : "destructive"
                        }
                      >
                        {user.status}
                      </Badge>
                    </td>

                    <td>
                      <div className="flex items-center justify-center gap-4">
                        <Button
                          type="button"
                          variant={"default"}
                          className="text-xs text-white bg-foreground text-background"
                          onClick={() => router.push(`/users/edit/${user.id}`)}
                        >
                          Edit
                        </Button>
                        <Button
                          type="button"
                          variant={"outline"}
                          className="text-xs hover:bg-red-400 hover:text-white"
                          onClick={() =>
                            handlerOpenDialog(
                              user.name as string,
                              user.id as number
                            )
                          }
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
      {userList?.data?.length && (
        <div className="w-full py-4 flex justify-center items-center">
        <PaginationUser searchParams={{pageIndex: String(pageIndex), name : String(search)}} userList={userList ? userList : null } />
        </div>
      )}
      <AlertDeleteUser
        loading={loading}
        handleClose={handlerCloseDialog}
        handleClick={handleDeleteUser}
        title="Verifikasi Action Delete"
        body={openAlertText}
        open={openVerifyDelete}
      />
    </div>
  );
};

export default UserList;
