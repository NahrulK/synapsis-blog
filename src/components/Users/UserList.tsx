"use client"

import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";

const UserList = () => {

  const router = useRouter()

  return (
    <div className="relative rounded-md bg-white p-5 shadow dark:bg-background mt-5 overflow-hidden border-0 ">
      <div className="table-responsive">
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
           {[1,1,1,1,1].map((_, index) => (
             <tr key={index}>
              <td>{(index+1)}</td>
             <td>
               <div className="font-medium">Abani Adiga</div>
             </td>
             <td className="italic text-sm hover:text-primary-500">abani_adiga@streich.test</td>
             <td > <Badge variant={"outline"}>Male</Badge></td>
             <td><Badge variant={"secondary"}>Active</Badge></td>

             <td>
               <div className="flex items-center justify-center gap-4">
                 <Button
                   type="button"
                   variant={"default"}
                   className="text-xs text-white "
                   onClick={()=> router.push("/users/edit/1")}
                 >
                   Edit
                 </Button>
                 <Button
                   type="button"
                   variant={"outline"}
                   className="text-xs hover:bg-red-400 hover:text-white"
                 >
                  Delete
                 </Button>
               </div>
             </td>
           </tr>
           ))}
          </tbody>
        </table>
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
    </div>
  );
};

export default UserList;
