import React from "react";

import LinkComponent from "../LinkComponent/LinkComponent";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <div>
        <LinkComponent path="/users" name="Users" />
        <LinkComponent path="/albums" name="Albums" />
        {/* <li>
            <Link to="/albums">Albums</Link>
          </li> */}
      </div>
    </>
  );
}
