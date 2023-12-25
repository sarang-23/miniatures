import { useState } from "react";
import { Action } from "./Actions";
import { List } from "./List";
import { TYPE } from "../utils/constants";

export const ListItem = ({ itemDetails, level, add, fileStructure }) => {
  const [newFileName, setNewFileName] = useState("");
  const [addNew, setAddNew] = useState(false);
  const [newFileType, setNewFileType] = useState("");

  const onAddClick = (type) => {
    setAddNew(true);
    setNewFileName("");
    setNewFileType(type);
  };
  const handleAdd = (e) => {
    const { key = "", keyCode = "", type = "" } = e;
    if (key == "Enter" || keyCode == 13 || type === "blur") {
      if (newFileName.length) {
        const node = {
          parent: itemDetails.id,
          name: newFileName,
          level: level + 1,
          type: newFileType,
        };
        add(node);
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
          addFolder={() => onAddClick(TYPE.FOLDER)}
          addFile={() => onAddClick(TYPE.FILE)}
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
            onBlur={handleAdd}
            onKeyDown={handleAdd}
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
          add={add}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
