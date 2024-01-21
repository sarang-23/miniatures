import Controls from "./Control";
import List from "./List";
import useListData from "../hooks/useListData";

const Container = () => {
  const { listData, addItem, updateChecked } = useListData();

  return (
    <div className="container">
      <List
        listItems={listData[0]}
        addItem={(itemName) => addItem(itemName, 0)}
        updateChecked={(itemId, val) => updateChecked(itemId, val, 0)}
      />
      <Controls listItems={listData} />
      <List
        listItems={listData[1]}
        addItem={(itemName) => addItem(itemName, 1)}
        updateChecked={(itemId, val) => updateChecked(itemId, val, 1)}
      />
    </div>
  );
};

export default Container;
