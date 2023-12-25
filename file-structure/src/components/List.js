import { ListItem } from "./ListItem";

export const List = ({ fileStructure, addFolder, ids, level, addFolder }) => {
  console.log(fileStructure);
  return (
    <div className="list">
      {ids.map((itemId) => {
        if (fileStructure[itemId].parent) {
          return (
            <ListItem
              key={itemId}
              itemDetails={fileStructure[itemId]}
              addFolder={addFolder}
              fileStructure={fileStructure}
              level={level}
            />
          );
        }
      })}
    </div>
  );
};
