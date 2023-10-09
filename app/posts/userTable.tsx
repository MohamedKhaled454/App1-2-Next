import React from 'react'
import Link from 'next/link'
import { sort } from 'fast-sort';
import styles from '../Posts.module.css';
interface Post{
    id:number,
    title:string,
    body:string
}
interface Props{
    orderBy:string;
}
const UserTable = async({orderBy}:Props) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts:Post[] = await res.json();
    const sortedUsers = sort(posts).
    asc(orderBy==="title"?post=>post.title:post=>post.body);
  return (
    <div>   
        <table className={styles.body}>
            <thead>
                <th><Link className={styles.bg} href="/posts?orderBy=title">title</Link></th>
                <th><Link className={styles.bg} href="/posts?orderBy=body">body</Link></th>
            </thead>
            <tbody>
                {sortedUsers.map(Post=>
                <tr key={Post.id}>
                    <td>{Post.title}</td>
                    <td>{Post.body}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default UserTable