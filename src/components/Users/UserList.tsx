"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";
import {
  GetAllUserstList,
  GetAllUserstListDatum,
} from "@/types/users/GetAllUserstList";
import { deleteAUser, fetchAllUserList } from "@/api/users";
import { toast } from "sonner";
import TableSkeleton from "../Skeleton/TableSkeleton";
import { AlertDeleteUser } from "../Alert/AlertDeleteUser";

const UserList = () => {
  const router = useRouter();

  const [userList, setUserList] = useState<GetAllUserstList>();
  const [loading, setLoading] = useState<boolean>(false);

  const [openVerifyDelete, setOpenVerifyDelete] = useState<boolean>(false);
  const [openAlertText, setOpenAlertText] = useState<string>("");
  const [idToDelete, setIdToDelete] = useState<number>();
  const [nameToDelete, setNameToDelete] = useState<string>();
  let [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const requestUsers = await fetchAllUserList(1, 5);

        if (requestUsers.data?.length) {
          setUserList(requestUsers);
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
  }, [toggle]);

  const handlerOpenDialog = (name: string, id: number) => {
    setOpenVerifyDelete(true);
    setOpenAlertText(`Apakah anda yakin untuk menghapus user : ${name}`);
    setNameToDelete(name)
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
      <div className="table-responsive">
        {loading ? (
          <TableSkeleton long={5} />
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
      <div className="w-full flex justify-end p-4">
        <ul className="inline-flex gap-2">
          <li>
            <button
              type="button"
              className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
            >
              1
            </button>
          </li>

          <li>
            <button
              type="button"
              className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-primary text-white dark:text-white-light dark:bg-primary"
            >
              2
            </button>
          </li>

          <li>
            <button
              type="button"
              className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
            >
              3
            </button>
          </li>
        </ul>
      </div>
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
