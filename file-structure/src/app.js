import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { TYPE } from "./utils/constants";

export default function App() {
  const [fileStructure, setFileStructure] = useState({});

  useEffect(() => {
    const id = Date.now();
    const rootNode = {
      id,
      name: "Files",
      parent: null,
      children: [],
      type: TYPE.ROOT,
      level: 0,
    };
    setFileStructure({ [id]: rootNode });
  }, []);

  const add = (itemDetails) => {
    const id = Date.now();
    const node = {
      id,
      name: itemDetails.name,
      parent: itemDetails.parent,
      children: [],
      type: itemDetails.type,
      level: itemDetails.level,
    };

    let tempFileStructure = fileStructure;

    tempFileStructure[itemDetails.parent].children.push(id);
    tempFileStructure[id] = node;
    setFileStructure(tempFileStructure);
  };

  const rename = (itemDetails) => {
    let tempFileStructure = fileStructure;
    tempFileStructure[itemDetails.id].name = itemDetails.name;
    setFileStructure(tempFileStructure);
  };

  const deleteNode = (node) => {
    let tempFileStructure = fileStructure;
    tempFileStructure[node.parent].children.splice(
      tempFileStructure[node.parent].children.indexOf(node.id, 1)
    );
    delete tempFileStructure[node.id];
    console.log(tempFileStructure);
  };

  console.log(fileStructure);

  return (
    <div className="app">
      <Header
        fileStructure={fileStructure}
        add={add}
        rename={rename}
        deleteNode={deleteNode}
      />
      <List
        add={add}
        rename={rename}
        fileStructure={fileStructure}
        ids={Object.keys(fileStructure)}
        level={1}
        deleteNode={deleteNode}
      />
    </div>
  );
}
