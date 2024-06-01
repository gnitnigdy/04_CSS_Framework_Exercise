/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import FormAddToDo from "./components/FormAddToDo";
import DoneCounter from "./components/DoneCounter";
import ListItem from "./components/ListItem";

const initialsList = [
  { id: 1, desc: "Create Guest Experience Mobile Check-In", taskStatus: false },
  { id: 2, desc: "Documment current CI/CD process", taskStatus: false },
  {
    id: 3,
    desc: "Perform Code Review for Final Pillow-Talk Release",
    taskStatus: false,
  },
  {
    id: 4,
    desc: "Implement New Color Palette from Design Team",
    taskStatus: false,
  },
  {
    id: 5,
    desc: "Fix image uploading process for guest check-in",
    taskStatus: false,
  },
  { id: 6, desc: "Provide on-boarding documentation", taskStatus: false },
];

function App() {
  const [listItem, setListItem] = useState(initialsList);
  const taskStatusCounter = listItem?.filter(
    (item) => item.taskStatus === true
  ).length;
  function AddNewItem(item) {
    setListItem((listItem) => [...listItem, item]);
  }
  function DeleteItem(id) {
    setListItem((listItem) => listItem.filter((item) => item.id !== id));
  }

  function UpdateStatusItem(id) {
    setListItem((listItem) =>
      listItem.map((item) => {
        if (item.id === id) {
          return { ...item, taskStatus: !item.taskStatus };
        } else {
          return item;
        }
      })
    );
  }
  return (
    <>
      <div className="container">
        <h1 className="text-center">Chores To Do</h1>
        <div className="main-container-list text-start">
          <ListItem
            items={listItem}
            onDeleteItem={DeleteItem}
            onUpdateStatus={UpdateStatusItem}
          ></ListItem>
        </div>
        <hr />
        <DoneCounter taskDone={taskStatusCounter}></DoneCounter>
        <FormAddToDo onAddNewItem={AddNewItem}></FormAddToDo>
      </div>
    </>
  );
}

export default App;
