import React from 'react'
import {Link} from 'react-router-dom';
function UserList() {
    const users=[
        { id: 1, Name: 'John Doe', Username:"John",Email:"john@122",Phone:12332,Website:"john.com" },
        { id: 2, Name: 'Bran Doe', Username:"Bran",Email:"bran@122",Phone:12332,Website:"bran.com" },
        { id: 3, Name: 'Ram', Username:"Ram",Email:"Ram@122",Phone:12332,Website:"Ram.com" },
        { id: 4, Name: 'Shyam', Username:"Shyam",Email:"Shyam@122",Phone:12332,Website:"Shyam.com" },
        { id: 5, Name: 'Rahul', Username:"Rahul",Email:"Rahul@122",Phone:12332,Website:"Rahul.com" },
        { id: 6, Name: 'Alkesh', Username:"Alkesh",Email:"Alkesh@122",Phone:12332,Website:"Alkesh.com" },
        { id: 7, Name: 'Tushar', Username:"Tushar",Email:"Tushar@122",Phone:12332,Website:"Tushar.com" },

    ]
  return (
    <div>
        <h1>UserList</h1>
        <ul>
            {
               users.map(user=>(
                <li key={user.id}>
                    <Link to={`/users/${user.id}`}>
                    {user.Name}
                    </Link>
                </li>
               ))
            }
        </ul>
    </div>
  )
}

export default UserList