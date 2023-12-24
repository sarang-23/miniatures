import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";

export default function App() {
  const [fileStructure, setFileStructure] = useState({});

  useEffect(() => {
    const id = Date.now();
    const rootNode = {
      id,
      name: "Files",
      parents: null,
      children: [],
    };
    setFileStructure({ [id]: rootNode });
  }, []);

  const updateFileStructure = () => {
    console.log("update");
  };

  const addFolder = (itemDetails) => {
    console.log(itemDetails);
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
      />
    </div>
  );
}
