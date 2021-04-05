import React from "react";
import { ALBUMS_URL } from "../../../../modules/constants";
import useData from "../../../../hooks/useData";
import AlbumsList from "./AlbumsList";

export default function Albums() {
  const { dataList } = useData(ALBUMS_URL);

  return (
    <div>
      <h1>List of albums</h1>
      <AlbumsList dataList={dataList} />
    </div>
  );
}
