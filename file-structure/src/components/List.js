import { useState } from "react";
import { ListItem } from "./ListItem";

export const List = ({ fileStructure, add }) => {
  const [showEditableInput, setShoEditableInput] = useState(false);
  const [listItemName, setListItemName] = useState("");
  console.log(fileStructure);
  return (
    <div className="list">
      {Object.keys(fileStructure).map((itemId) => {
        if (fileStructure[itemId].parent) {
          return (
            <ListItem
              key={itemId}
              itemDetails={fileStructure.itemId}
              setShoEditableInput={setShoEditableInput}
            />
          );
        }
      })}
      {showEditableInput ? (
        <input type="text" placeholder="" value={listItemName}></input>
      ) : (
        <></>
      )}
    </div>
  );
};
