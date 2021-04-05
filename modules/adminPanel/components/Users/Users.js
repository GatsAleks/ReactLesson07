import React from "react";
import { USERS_URL } from "../../../../modules/constants";
import useData from "../../../../hooks/useData";
import UsersList from "./UsersList";

export default function Users() {
  const { dataList } = useData(USERS_URL);

  return (
    <div>
      <h1>List of users</h1>
      <UsersList dataList={dataList} />
    </div>
  );
}
