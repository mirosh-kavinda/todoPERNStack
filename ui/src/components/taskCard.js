const TaskCard = ({ task, markDone }) => {
  return (
    <div className=" p-2 mb-2 bg-secondary bg-opacity-25 row rounded ">
      <div className="col-8 text-left ">
        <h5 className="fw-bold ">{task.title}</h5>
        <p className="text-left">{task.description}</p>
      </div>
      <div className="col-4 pb-1 d-flex align-items-end">
        <button
          className="btn btn-outline-dark col-12"
          onClick={() => markDone(task.id)}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
