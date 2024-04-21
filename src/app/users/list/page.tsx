import UserList from '@/components/Users/UserList'
import React, { Suspense } from 'react'

const UserListPage = () => {
  return (
    <Suspense>
    <UserList/>
    </Suspense>
  )
}

export default UserListPage