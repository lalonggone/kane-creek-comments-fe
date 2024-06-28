const API_URL = import.meta.env.VITE_API_URL;

const getResponses = async () => {
  try {
    const response = await fetch(`${API_URL}/responses`);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching responses:', error);
    throw error;
  }
};

export default getResponses;
