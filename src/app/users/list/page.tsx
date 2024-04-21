import UserList from '@/components/Users/UserList'
import { Metadata } from 'next';
import React, { Suspense } from 'react'

export const metadata: Metadata = {
  title: "Synapsis | List of User",
  description: "List user of synapsis blog",
};

const UserListPage = () => {
  return (
    <Suspense>
    <UserList/>
    </Suspense>
  )
}

export default UserListPage