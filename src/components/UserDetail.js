import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a fetch call
    setTimeout(() => {
      const users=[
        { id: 1, Name: 'Leanne Graham', Username:"Bret",Email:"Sincere@april.biz",Phone:12332,Website:"john.com" },
        { id: 2, Name: 'Ervin Howell', Username:"Antonette",Email:"bran@122.ewe",Phone:12332,Website:"bran.com" },
        { id: 3, Name: 'Clementine Bauch', Username:"Samantha",Email:"Ram@122.wew",Phone:12332,Website:"Ram.com" },
        { id: 4, Name: 'Patricia Lebsack', Username:"Shyam",Email:"Shyam@122.www",Phone:12332,Website:"Shyam.com" },
        { id: 5, Name: 'Chelsey Dietrich', Username:"Rahul",Email:"Rahul@122.wqq",Phone:12332,Website:"Rahul.com" },
        { id: 6, Name: 'Mrs Dennis Schulist', Username:"Alkesh",Email:"Alkesh@122.sxs",Phone:12332,Website:"Alkesh.com" },
        { id: 8, Name: 'Kurtis Weissnat', Username:"Tushar",Email:"Tushar@122.eww",Phone:12332,Website:"Tushar.com" },
        { id: 9, Name: 'Nicholas Runolfsdottir V', Username:"Tushar",Email:"Tushar@122.dwa",Phone:12332,Website:"Tushar.com" },
        { id: 10, Name: 'Glenna Reichert', Username:"Tushar",Email:"Tushar@122.dss",Phone:12332,Website:"Tushar.com" },
        { id: 11, Name: 'Clementina DuBuque', Username:"Tushar",Email:"Tushar@122.xss",Phone:12332,Website:"Tushar.com" },
      
      ]
      const user = users.find(user => user.id === parseInt(id));
      setUser(user);
      setLoading(false);
    }, 2000); // Simulating network delay
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
        <h1>User Details</h1>
         <p>Name: {user.Name}</p>
         <p>Username: {user.Username}</p>
         <p>Email: {user.Email}</p>
         <p>Phone: {user.Phone}</p>
         <p>Website: {user.Website}</p>
    </div>
  )
}

export default UserDetail