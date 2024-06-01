/* eslint-disable react/prop-types */
function DoneCounter({ taskDone }) {
  return (
    <div className="main-container-list mb-3">
      <h2 className="text-center">Done : {taskDone}</h2>
    </div>
  );
}

export default DoneCounter;
