import { useState } from "react";
import { Action } from "./Actions";
import { List } from "./List";
import { TYPE } from "../utils/constants";

export const ListItem = ({
  itemDetails,
  level,
  add,
  fileStructure,
  rename,
  deleteNode,
}) => {
  const [newFileName, setNewFileName] = useState("");
  const [addNew, setAddNew] = useState(false);
  const [newFileType, setNewFileType] = useState("");
  const [editedName, setEditedName] = useState(itemDetails.name);
  const [isEditMode, setIsEditMode] = useState(false);

  const onAddClick = (type) => {
    setAddNew(true);
    setNewFileName("");
    setNewFileType(type);
  };

  const onRenameClick = () => {
    setIsEditMode(true);
  };

  const handleAdd = (e) => {
    if (performAction(e)) {
      if (newFileName.length) {
        const node = {
          parent: itemDetails.id,
          name: newFileName,
          level: level + 1,
          type: newFileType,
        };
        add(node);
      }
      setAddNew(false);
    }
  };

  const handleDelete = () => {
    deleteNode(itemDetails);
  };
  const performAction = (e) => {
    const { key = "", keyCode = "", type = "" } = e;
    return key == "Enter" || keyCode == 13 || type === "blur";
  };

  const handleRename = (e) => {
    if (performAction(e)) {
      if (editedName.length) {
        const node = {
          name: editedName,
          id: itemDetails.id,
        };
        rename(node);
      } else {
        setEditedName(itemDetails.name);
      }
      setIsEditMode(false);
    }
  };

  return (
    <div className="list-item-container">
      <div
        className="list-item"
        style={{ paddingLeft: `calc(${level} * 12px)` }}
      >
        <span className="file-name">
          {isEditMode ? (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              autoFocus
              onBlur={handleRename}
              onKeyDown={handleRename}
            ></input>
          ) : (
            itemDetails.name
          )}
        </span>
        <Action
          type={itemDetails.type}
          addFolder={() => onAddClick(TYPE.FOLDER)}
          addFile={() => onAddClick(TYPE.FILE)}
          onRenameClick={onRenameClick}
          onDeleteClick={handleDelete}
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
          rename={rename}
          deleteNode={deleteNode}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
