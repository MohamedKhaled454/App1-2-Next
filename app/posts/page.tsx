import React from 'react'
import UserTable from './userTable'
import styles from '../Posts.module.css';

interface Props{
    searchParams:{orderBy:string}
}
const UsersPage = async({searchParams:{orderBy}}:Props) => {
   
    return (
        <div className={styles.body}>UsersPage {orderBy}
            <UserTable orderBy={orderBy} ></UserTable>
        </div>
  )
}

export default UsersPage