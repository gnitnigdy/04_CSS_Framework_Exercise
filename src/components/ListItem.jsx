/* eslint-disable react/prop-types */
import Item from "./Item";
function ListItem({ items, onDeleteItem, onUpdateStatus }) {
  return (
    <ul>
      {items?.map((item) => {
        return (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onUpdateStatus={onUpdateStatus}
          ></Item>
        );
      })}
    </ul>
  );
}

export default ListItem;
