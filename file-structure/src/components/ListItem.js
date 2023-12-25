import { useState } from "react";
import { Action } from "./Actions";
import { List } from "./List";

export const ListItem = ({ itemDetails, level, addFolder, fileStructure }) => {
  const [newFileName, setNewFileName] = useState("");
  const [addNew, setAddNew] = useState(false);
  const handleAddFolder = (e) => {
    const { key = "", keyCode = "", type = "" } = e;
    if (key == "Enter" || keyCode == 13 || type === "blur") {
      if (newFileName.length) {
        const node = {
          parent: itemDetails.id,
          name: newFileName,
          level: level + 1,
        };
        addFolder(node);
        setAddNew(false);
      } else {
        setAddNew(false);
      }
    }
  };
  return (
    <div className="list-item-container">
      <div
        className="list-item"
        style={{ paddingLeft: `calc(${level} * 12px)` }}
      >
        <span className="file-name">{itemDetails.name}</span>
        <Action
          type={itemDetails.type}
          addFolder={() => {
            setAddNew(true);
            setNewFileName("");
          }}
        />
      </div>
      {addNew ? (
        <div
          className="list-item"
          style={{ paddingLeft: `calc(${level + 1} * 12px)` }}
        >
          <input
            type="text"
            value={newFileName}
            onChange={(e) => setNewFileName(e.target.value)}
            onBlur={handleAddFolder}
            onKeyDown={handleAddFolder}
            autoFocus
          ></input>
        </div>
      ) : (
        <></>
      )}
      {itemDetails.children.length ? (
        <List
          fileStructure={fileStructure}
          ids={itemDetails.children}
          level={level + 1}
          addFolder={addFolder}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
/**
 * 1. isNew -> then show input box
 * 2. show - hide
 * 3. Hover - color change
 */
