import axios from 'axios';

const API_URL = "http://localhost:5000/api/tasks";

const taskRepository = {
  fetchTasks: async () => {
    try {
      const res = await axios.get(API_URL);
      return res.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return [];
    }
  },
  
  addTask: async (task) => {
    try {
      await axios.post(API_URL, task);
      return true;
    } catch (error) {
      console.error('Error adding task:', error);
      return false;
    }
  },

  completeTask: async (id, completed) => {
    try {
      await axios.patch(`${API_URL}/${id}`, { completed });
      return true;
    } catch (error) {
      console.error('Error updating task:', error);
      return false;
    }
  }
};

export default taskRepository;
