import axios from 'axios';

const API_URL = "http://localhost:5000/tasks";

const taskRepository = {
  fetchTasks: async () => {
    const res = await axios.get(API_URL);
    return res.data;
  },

  addTask: async (task) => {
    await axios.post(API_URL,task);
    return true;
  },

  completeTask: async (id) => {
    await axios.put(`${API_URL}/${id}/done`);
    return true;
  }
};

export default taskRepository;
