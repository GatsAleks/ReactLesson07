import { useEffect, useState } from "react";
import api from "../api";

export default function useData(url_component) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    api.get(url_component).then(({ data }) => setDataList(data));
  }, [url_component]);

  return { dataList };
}
