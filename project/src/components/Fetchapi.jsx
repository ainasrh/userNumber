import React, { useEffect, useState } from 'react'

function Fetchapi() {
    const [users,setUsers]=useState([])
    const [userId,setUserId]=useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => response.json())  
          .then(data => {                     
            setUsers(data);                  
            // console.log('Dataaaaaaaaaa:', data);
          })
          .catch(error => console.error('Error fetching data:', error));

        }, []);
        
        console.log('usersas',users )
    
         
    function handleClick(id){
        setUserId(id)
        
    }

    
  return (
    <>
    <h1>GEcth daat</h1>
   {
    users.length==0 ? <h2>users not found </h2> : users.map((user)=>(
        <div key={user.id}>
            <h2 onClick={()=>handleClick(user.id)}>{user.name}</h2>
            {/* {console.log('name',user.name)} */}
            {userId === user.id && <h2>{user.phone}</h2>}
            {/* {console.log('name',user.phone)} */}
        </div>
    ))
   }
    </>
  )
}

export default Fetchapi
