import { VscFile, VscFolder } from "react-icons/vsc";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { TYPE } from "../utils/constants";

export const Action = ({
  type,
  addFolder,
  addFile,
  onRenameClick,
  onDeleteClick,
}) => {
  return (
    <div className="actions">
      {type === TYPE.ROOT || type === TYPE.FOLDER ? (
        <span className="action" onClick={addFolder}>
          <VscFolder />
        </span>
      ) : (
        <></>
      )}
      {type === TYPE.ROOT || type === TYPE.FOLDER ? (
        <span className="action" onClick={addFile}>
          <VscFile />
        </span>
      ) : (
        <></>
      )}
      {type !== TYPE.ROOT ? (
        <span className="action" onClick={onRenameClick}>
          <MdDriveFileRenameOutline />
        </span>
      ) : (
        <></>
      )}
      {type !== TYPE.ROOT ? (
        <span className="action" onClick={onDeleteClick}>
          <MdDelete />
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};
