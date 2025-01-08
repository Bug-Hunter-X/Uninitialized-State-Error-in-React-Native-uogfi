To solve this, you need to ensure that the state is initialized before you try to access it. One common way to do this is to use a conditional rendering: 

```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default MyComponent;
```
This will prevent the error from occurring. Note the use of the `useEffect` hook with an empty dependency array `[]` to ensure that the fetchUser function is called only once after the component is mounted.