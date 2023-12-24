import { useState } from "react";
import { Action } from "./Actions";

export const ListItem = ({ itemDetails, showEditableInput, isNew }) => {
  const [newFileName, setNewFileName] = useState("");
  return (
    <div className="list-item">
      <span className="file-name">{itemDetails.name}</span>
      <Action type={itemDetails.type} showEditableInput={showEditableInput} />

      {isNew ? (
        <input
          type="text"
          value={newFileName}
          onChange={() => setNewFileName(e.targe.value)}
        ></input>
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
