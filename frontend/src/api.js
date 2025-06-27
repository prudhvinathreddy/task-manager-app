import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/tasks';

export const getTasks = () => axios.get(API_BASE);
export const addTask = (task) => axios.post(API_BASE, task);
export const completeTask = (id) => axios.put(`${API_BASE}/${id}`);
export const deleteTask = (id) => axios.delete(`${API_BASE}/${id}`);
