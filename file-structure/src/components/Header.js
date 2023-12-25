import { ListItem } from "./ListItem";

export const Header = ({ fileStructure, add }) => {
  const nodeIds = Object.keys(fileStructure);
  let rootId = "";
  if (fileStructure) {
    rootId = nodeIds.filter((n) => fileStructure[n].parent === null)[0];
  }

  return (
    <>
      {rootId ? (
        <div className="header">
          <ListItem
            isNew={false}
            itemDetails={fileStructure[rootId]}
            add={add}
            level={0}
            fileStructure={fileStructure}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
