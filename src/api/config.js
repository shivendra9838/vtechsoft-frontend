// API configuration
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

// Helper for API calls
export async function apiRequest(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;
  
  console.log('API Request:', { url, method: options.method || 'GET', endpoint });
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  // Add auth token if available
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, config);
    
    // Check if response is ok
    if (!response.ok) {
      // Handle network errors or server errors
      if (response.status === 0) {
        throw new Error('Network error - unable to connect to server');
      }
      
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('API Response:', { status: response.status, ok: response.ok, data });
    return data;
  } catch (error) {
    console.error('API Error:', { url, error: error.message });
    
    // Provide more user-friendly error messages
    if (error.message.includes('Failed to fetch') || error.message.includes('Network error')) {
      throw new Error('Unable to connect to the server. Please check your internet connection and try again.');
    }
    
    throw error;
  }
}

// Auth API
export const authAPI = {
  register: (userData) =>
    apiRequest('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),

  login: (credentials) =>
    apiRequest('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),

  getMe: () => apiRequest('/api/auth/me'),
};

// Blog API
export const blogAPI = {
  getAll: () => apiRequest('/api/blog'),
  
  getOne: (id) => apiRequest(`/api/blog/${id}`),
  
  create: (postData) =>
    apiRequest('/api/blog', {
      method: 'POST',
      body: JSON.stringify(postData),
    }),
  
  update: (id, postData) =>
    apiRequest(`/api/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify(postData),
    }),
  
  delete: (id) =>
    apiRequest(`/api/blog/${id}`, {
      method: 'DELETE',
    }),

  // Like a blog post
  like: (id) =>
    apiRequest(`/api/blog/${id}/like`, {
      method: 'POST',
    }),

  // Add comment to a blog post
  addComment: (id, content) =>
    apiRequest(`/api/blog/${id}/comment`, {
      method: 'POST',
      body: JSON.stringify({ content }),
    }),

  // Get comments for a blog post
  getComments: (id) => apiRequest(`/api/blog/${id}/comments`),
};

// Contact API
export const contactAPI = {
  submit: (contactData) =>
    apiRequest('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    }),
  getAll: () => apiRequest('/api/contact'),
  getById: (id) => apiRequest(`/api/contact/${id}`),
  update: (id, data) =>
    apiRequest(`/api/contact/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
};

// Chatbot API
export const chatbotAPI = {
  sendMessage: (message, sessionId) =>
    apiRequest('/api/chatbot', {
      method: 'POST',
      body: JSON.stringify({ message, sessionId }),
    }),

  clearHistory: (sessionId) =>
    apiRequest(`/api/chatbot/${sessionId}`, {
      method: 'DELETE',
    }),
};
