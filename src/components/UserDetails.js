import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import '../styles/UserDetails.css';

const UserDetails = () => {

  const {userId} = useParams(); // Access URL parameter
  const [user, setUser] = useState({});

  useEffect(()=> {
    (
      
        async ()=> {

          try{
            const response = await axios.
                      get( `https://jsonplaceholder.typicode.com/users/${userId}` );
            console.log( response.data );
            setUser( response.data );
          }catch( error ){
            console.log( error );
            alert( `User not found with id: ${userId}`);
          }
        }
      )();
    
  }, [userId]);

  if (!user) return <div>Loading...</div>;
  if( !user.address || !user.address.street ) return <div>loading...</div>

  return (
    <div className="user-details-container">
    <h1 className="user-title">{user.name}</h1>
    <div className="horizontal-layout">
      <div className="user-info">
        <h2>User Info</h2>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      </div>

      <div className="address-info">
        <h2>Address</h2>
        <p><strong>Street:</strong> {user.address.street}</p>
        <p><strong>Suite:</strong> {user.address.suite}</p>
        <p><strong>City:</strong> {user.address.city}</p>
        <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
      </div>

      <div className="geo-info">
        <h2>Geolocation</h2>
        <p><strong>Latitude:</strong> {user.address.geo.lat}</p>
        <p><strong>Longitude:</strong> {user.address.geo.lng}</p>
      </div>

      <div className="company-info">
        <h2>Company</h2>
        <p><strong>Name:</strong> {user.company.name}</p>
        <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
        <p><strong>BS:</strong> {user.company.bs}</p>
      </div>
    </div>
  </div>
  );
}

export default UserDetails;
