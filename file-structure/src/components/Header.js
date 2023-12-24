import { TYPE } from "../utils/constants";
import { Action } from "./Actions";

export const Header = ({ addFolder, addFile, fileStructure }) => {
  const handleAddFolder = () => {
    const nodeIds = Object.keys(fileStructure);
    const parentDetails = {
      isRoot: true,
    };
  };
  return (
    <div className="header">
      <span>Files</span>
      <Action type={TYPE.ROOT} addFolder={addFolder} addFile={addFile} />
    </div>
  );
};
