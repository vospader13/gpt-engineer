import React, { useState, useEffect } from 'react';
import AuthService from '../services/AuthService';

const MembersLandingPage: React.FC = () => {
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
      <h1>Hello, {user ? user.firstName : ''}</h1>
    </div>
  );
};

export default MembersLandingPage;
