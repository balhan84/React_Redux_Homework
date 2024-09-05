import React from "react";

function UserCard({ user }) {
  const { firstname, lastname } = user;
  return (
    <div>
      <h2>
        {firstname}
        {lastname}
      </h2>
      <button>+</button>
    </div>
  );
}

export default UserCard;
