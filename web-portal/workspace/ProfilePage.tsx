import React, { useState, useEffect } from 'react';
import AuthService from '../services/AuthService';

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await AuthService.getUser();
      if (response.success) {
        setUser(response.user);
      } else {
        // Show error message
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      {user && (
        <div>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
