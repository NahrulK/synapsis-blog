import EditUser from '@/components/Users/EditUser'
import React from 'react'

const EditUserPage = ({params}: {params : {id : number}}) => {
  return (
    <div><EditUser params={params}/></div>
  )
}

export default EditUserPage