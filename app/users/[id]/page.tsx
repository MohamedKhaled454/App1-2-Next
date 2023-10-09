import React from 'react'

interface Props{

params:{id:number}

}
const UserDetailsPage = ({params:{id}}:Props) => {
  return (
    <div>
     <h1> User Details page {id} </h1>
    </div>
  )
}

export default UserDetailsPage
