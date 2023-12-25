import { ListItem } from "./ListItem";

export const List = ({
  fileStructure,
  ids,
  level,
  add,
  rename,
  deleteNode,
}) => {
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
              rename={rename}
              deleteNode={deleteNode}
            />
          );
        }
      })}
    </div>
  );
};
