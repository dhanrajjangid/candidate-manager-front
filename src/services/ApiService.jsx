import axios from "axios";
import { toast } from "react-toastify";
import store from "@/redux/store";
import { setLoading } from "@/redux/slices/loadingSlice"; // Import the setLoading action

// const API_BASE_URL = "https://my-squad-two.vercel.app/"; // Your API base URL
const API_BASE_URL = "https://candidate-backend-mkcp.onrender.com"
// const API_BASE_URL = 'http://localhost:8000'; // Your API base URL
// const API_BASE_URL = 'http://192.168.0.107:8000'; // Your API base URL

const apiService = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Set timeout as per your requirement
});

// Function to handle API errors and display toast messages
const handleApiError = (error) => {
  if (error.response) {
    const { status, data } = error.response;
    toast.error(`${status}: ${data.message}` || "Bad Request");
  } else if (error.request) {
    // The request was made but no response was received
    toast.error("No response received from server");
  }
};

// Function to make HTTP requests with error handling and dispatching loading action
const makeHttpRequest = async (method, endpoint, requestData) => {
  try {
    store.dispatch(setLoading(true)); // Dispatch setLoading action to indicate loading has started
    let response;
    switch (method.toLowerCase()) {
      case "get":
        response = await apiService.get(endpoint);
        break;
      case "post":
        response = await apiService.post(endpoint, requestData);
        break;
      case "put":
        response = await apiService.put(endpoint, requestData);
        break;
      case "delete":
        response = await apiService.delete(endpoint);
        break;
      // Add other HTTP methods as needed
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
    store.dispatch(setLoading(false)); // Dispatch setLoading action to indicate loading has stopped
    return response.data;
  } catch (error) {
    handleApiError(error);
    store.dispatch(setLoading(false)); // Dispatch setLoading action to indicate loading has stopped even in case of error
    throw error;
  }
};

// API service function for GET requests
export const getApiData = async (endpoint) => {
  return makeHttpRequest("get", endpoint);
};

// API service function for POST requests
export const postApiData = async (endpoint, requestData) => {
  return makeHttpRequest("post", endpoint, requestData);
};

// API service function for PUT requests
export const putApiData = async (endpoint, requestData) => {
  return makeHttpRequest("put", endpoint, requestData);
};

// API service function for DELETE requests
export const deleteApiData = async (endpoint) => {
  return makeHttpRequest("delete", endpoint);
};

export default apiService;
