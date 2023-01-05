import React from "react";
import { User } from "./User";

export const Page = ({ users }) => {
  return (
    <div className="container">
      <div>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4"></header>
        <h1>here is page</h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {users.map((user, idx) => (
          <User key={idx} user={user} />
        ))}
      </div>
    </div>
  );
};
