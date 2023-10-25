import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserDetails.css';

function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/users/${userId}`);
        if (response.status === 200) {
          setUser(response.data);
        } else {
          console.error('API request failed with status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetail();
  }, [userId]);

  return (
    <div className="user-detail">
      {user ? (
        <div className="user-info">
          <div className="user-image">
            <img src={user.image} alt={user.username} />
          </div>
          <div className="user-details">
            <h2>{user.firstName} {user.maidenName} {user.lastName}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Date of Birth: {user.birthDate}</p>
            <p>Address: {user.address.address}, {user.address.city}, {user.address.state}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button className="go-back-button" onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
}

export default UserDetails;
