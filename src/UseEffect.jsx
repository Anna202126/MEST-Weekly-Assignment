import { useState, useEffect } from "react";
import "./UseEffect.css"

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // async/await
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await result.json();
      console.log(users);
      setUsers(users);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Use Effect</h1>
      <div className="card-container">
      {users.map((user, i) => (
        <div key={i} className="card">
          <h5 className="mb"> 
            <strong>Name:</strong> {user.name}
          </h5>
          <p className="mb">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="mb">
            <strong>Username:</strong> {user.username}
          </p>
          <p className="mb">
            <strong>Phone Number:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default UseEffect;
