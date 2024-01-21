import { useRef } from "react";
import Input from "./Input";
import ListItem from "./ListItem";

const List = ({ addItem, listItems, updateChecked }) => {
  const selectAll = () => {
    console.log("select all");
  };
  const inputRef = useRef();

  const handleCheckbox = (itemId, val, item) => {
    console.log(item);
  };

  console.log(listItems);
  debugger;

  return (
    <div className="list-container">
      <Input ref={inputRef} addItem={addItem} />

      {/* {keysArr.length ? (
        <ListItem itemName="Select All" updateChecked={selectAll} />
      ) : (
        <></>
      )} */}
      {/* {Array.from(listItems?.keys())?.map((itemKey) => {
        console.log(itemKey);
        const item = listItems?.get(itemKey);
        return (
          <ListItem
            key={itemKey}
            itemName={item?.name}
            updateChecked={(val) => handleCheckbox(item.key, val, item)}
            checked={item?.checked}
          />
        );
      })} */}
    </div>
  );
};

export default List;
