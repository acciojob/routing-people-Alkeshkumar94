import React from 'react'
import {Link} from 'react-router-dom';
function UserList() {
    const users=[
        { id: 1, Name: 'Leanne Graham', Username:"Bret",Email:"john@122",Phone:12332,Website:"john.com" },
        { id: 2, Name: 'Ervin Howell', Username:"Antonette",Email:"bran@122",Phone:12332,Website:"bran.com" },
        { id: 3, Name: 'Clementine Bauch', Username:"Samantha",Email:"Ram@122",Phone:12332,Website:"Ram.com" },
        { id: 4, Name: 'Patricia Lebsack', Username:"Shyam",Email:"Shyam@122",Phone:12332,Website:"Shyam.com" },
        { id: 5, Name: 'Chelsey Dietrich', Username:"Rahul",Email:"Rahul@122",Phone:12332,Website:"Rahul.com" },
        { id: 6, Name: 'Mrs Dennis Schulist', Username:"Alkesh",Email:"Alkesh@122",Phone:12332,Website:"Alkesh.com" },
        { id: 8, Name: 'Kurtis Weissnat', Username:"Tushar",Email:"Tushar@122",Phone:12332,Website:"Tushar.com" },
        { id: 9, Name: 'Nicholas Runolfsdottir V', Username:"Tushar",Email:"Tushar@122",Phone:12332,Website:"Tushar.com" },
        { id: 10, Name: 'Glenna Reichert', Username:"Tushar",Email:"Tushar@122",Phone:12332,Website:"Tushar.com" },
        { id: 11, Name: 'Clementina DuBuque', Username:"Tushar",Email:"Tushar@122",Phone:12332,Website:"Tushar.com" },
      
      ]
  return (
    <div>
        <h1>User List</h1>
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