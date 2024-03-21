import React from "react";
import "./UserList";
import UserItem from "./UserItem";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>No User Found.</h2>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((user) => {
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />;
      })}
    </ul>
  );
};

export default UserList;
