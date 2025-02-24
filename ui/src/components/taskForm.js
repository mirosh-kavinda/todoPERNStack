import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskForm = ({ addTask }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.description) {
      addTask(formData);
      setFormData({ title: "", description: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const customShadow = {
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  };

  const isValid = formData.title && formData.description;

  return (
    <div className="p-4 col-10">
      <h4>Add a Task</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="form-control cus_shadow border-0 mb-4 mt-3 rounded"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
          style={customShadow}
          required
        />
        <textarea
          name="description"
          className="form-control cus_shadow border-0 mb-4 rounded"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          style={customShadow}
          required
        ></textarea>

        <div className="text-end mt-2">
          <button type="submit" className="btn btn-primary col-3" disabled={!isValid}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;