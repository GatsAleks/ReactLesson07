import React from "react";

export default function UserItem({ item }) {
  const {
    id,
    name,
    username,
    email,
    address: { street, suite, city, zipcode },
    website,
    company: { catchPhrase, bs },
  } = item;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        {street}
        {suite}
        {city}
        {zipcode}
      </td>
      <td>{website}</td>
      <td>
        {catchPhrase}
        {bs}
      </td>
    </tr>
  );
}
