import { ListItem } from "./ListItem";

export const List = ({ fileStructure, ids, level, add }) => {
  console.log(fileStructure);
  return (
    <div className="list">
      {ids.map((itemId) => {
        if (fileStructure[itemId].parent) {
          return (
            <ListItem
              key={itemId}
              itemDetails={fileStructure[itemId]}
              fileStructure={fileStructure}
              level={level}
              add={add}
            />
          );
        }
      })}
    </div>
  );
};
