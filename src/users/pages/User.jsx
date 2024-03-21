import React from "react";
import UserList from "../component/UserList";
const UserDemo = () => {
  // dummy User later we will get from db

  const USERS = [
    {
      id: "u1",
      image:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "Ronit Roushan",
    },
  ];
  return <UserList items={USERS} />;
};

export default UserDemo;
