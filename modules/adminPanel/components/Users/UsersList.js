import React from "react";
import UserItem from "./UserItem";

export default function UsersList({ dataList }) {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
          <th>address</th>
          <th>website</th>
          <th>company</th>
        </tr>
      </thead>
      <tbody>
        {dataList.map((item) => (
          <UserItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}
