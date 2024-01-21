const Controls = ({ listItems }) => {
  const leftEnabled = listItems[1]?.size > 0;
  const rightEnabled = listItems[0]?.size > 0;
  return (
    <div className="controls">
      <button disabled={!leftEnabled}>{"<"}</button>
      <button disabled={!rightEnabled}>{">"}</button>
    </div>
  );
};

export default Controls;
