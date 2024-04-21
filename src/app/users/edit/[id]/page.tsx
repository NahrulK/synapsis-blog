import { fetchAUser } from '@/api/users';
import EditUser from '@/components/Users/EditUser'
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react'

type Props = {
  params: { id: number };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  // fetch data
  const userData = await fetchAUser(params.id);

  return {
    title: `Synapsis Edit | ${userData.data?.name}`,
    description: `Edit a user : ${userData.data?.name} | ${userData.data?.email}`,
  };
}

const EditUserPage = ({params}: {params : {id : number}}) => {
  return (
    <div><EditUser params={params}/></div>
  )
}

export default EditUserPage