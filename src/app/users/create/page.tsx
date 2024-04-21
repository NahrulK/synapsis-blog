import CreateUser from "@/components/Users/CreateUser"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Synapsis | Create New User",
  description: "Create New user of synapsis blog",
};

const CreateUserPage = () => {
  return (
    <CreateUser />
  )
}

export default CreateUserPage