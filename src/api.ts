// src/utils/api.js

const API_URL = import.meta.env.VITE_API_URL;

export const fetchResponses = async () => {
  try {
    const response = await fetch(`${API_URL}/responses`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching responses:', error);
    throw error;
  }
};