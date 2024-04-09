import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/order`, orderData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/order`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchOrder = async (orderId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/order/${orderId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateOrder = async (orderId, orderData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/order/${orderId}`, orderData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/order/${orderId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};