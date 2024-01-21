import { useEffect, useState } from "react";

const useListData = () => {
  const [listData, setListData] = useState([new Map(), new Map()]);
  const [checkedIds, setCheckedIds] = useState([new Set(), new Set()]);

  const addItem = (itemName, targetListIndex) => {
    setListData((listData) => {
      listData[targetListIndex].set(Date.now(), itemName);
      return [...listData];
    });
  };

  const updateChecked = (itemId, checkVal, targetListIndex) => {
    console.log(itemId);
    setListData((listData) => {
      listData[targetListIndex].set(itemId, checkVal);
    });
  };

  return { listData, addItem, updateChecked };
};

export default useListData;
