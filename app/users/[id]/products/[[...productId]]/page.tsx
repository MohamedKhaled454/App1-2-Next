import React from 'react'

interface Props{
    params : {id:number , productId:number}
}




const UserProductPage = ({params:{id,productId}}:Props) => {
  return (
    <div>
      <h1> User id {id} Product page id {productId} </h1>
    </div>
  )
}

export default UserProductPage
