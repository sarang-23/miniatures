import { forwardRef } from "react";

const ListItem = forwardRef(
  ({ checked, updateChecked, itemName, itemId }, ref) => {
    const handleUpdate = () => {
      updateChecked(!checked);
    };
    return (
      <div key={itemId}>
        <input type="checkbox" checked={checked} onChange={handleUpdate} />
        <label>{itemName}</label>
      </div>
    );
  }
);
export default ListItem;
