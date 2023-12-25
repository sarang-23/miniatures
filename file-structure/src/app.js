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

  const updateFileStructure = () => {
    console.log("update");
  };

  const addFolder = (itemDetails) => {
    const id = Date.now();
    const node = {
      id,
      name: itemDetails.name,
      parent: itemDetails.parent,
      children: [],
      type: TYPE.FOLDER,
      level: itemDetails.level,
    };

    let tempFileStructure = fileStructure;

    tempFileStructure[itemDetails.parent].children.push(id);
    tempFileStructure[id] = node;
    setFileStructure(tempFileStructure);
  };

  const addFile = () => {};
  const rename = () => {};
  const deleteItem = () => {};

  return (
    <div className="app">
      <Header
        addFolder={addFolder}
        addFile={addFile}
        fileStructure={fileStructure}
      />
      <List
        addFolder={addFolder}
        addFile={addFile}
        rename={rename}
        deleteItem={deleteItem}
        fileStructure={fileStructure}
        ids={Object.keys(fileStructure)}
        level={1}
      />
    </div>
  );
}
