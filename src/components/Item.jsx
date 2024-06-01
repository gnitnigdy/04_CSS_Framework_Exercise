/* eslint-disable react/prop-types */
function Item({ item, onDeleteItem, onUpdateStatus }) {
  return (
    <li>
      <input
        className="form-check-input"
        type="checkbox"
        value={item.taskStatus}
        onClick={() => onUpdateStatus(item.id)}
        id="flexCheckDefault"
      />
      <label
        className="form-check-label"
        htmlFor="flexCheckDefault"
        style={
          item.taskStatus === true ? { textDecoration: "line-through" } : {}
        }
      >
        {item.desc}
      </label>
      <button
        type="button"
        className="btn btn-primary btn-list-item"
        onClick={() => onDeleteItem(item.id)}
      >
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </li>
  );
}

export default Item;
