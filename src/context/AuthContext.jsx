import { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../api/config';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing token on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      authAPI.getMe()
        .then((res) => {
          console.log('GetMe response:', res);
          
          // API function returns data directly, so access res.data
          const user = res.data.user;
          
          if (user) {
            setUser(user);
          } else {
            console.error('Invalid user response structure:', res);
            localStorage.removeItem('token');
          }
        })
        .catch((error) => {
          console.error('GetMe error:', error);
          localStorage.removeItem('token');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await authAPI.login({ email, password });
      console.log('Login response:', res);
      
      // API function returns data directly, so access res.data
      const token = res.data.token;
      const user = res.data.user;
      
      if (!token || !user) {
        console.error('Invalid response structure:', res);
        throw new Error('Invalid response from server');
      }
      
      localStorage.setItem('token', token);
      setUser(user);
      return res;
    } catch (error) {
      console.error('Login error in AuthContext:', error);
      throw error;
    }
  };

  const register = async (name, email, password) => {
    try {
      console.log('AuthContext Register:', { name, email, password: '***' });
      const res = await authAPI.register({ name, email, password });
      console.log('Registration response:', res);
      
      // API function returns data directly, so access res.data
      const token = res.data.token;
      const user = res.data.user;
      
      if (!token || !user) {
        console.error('Invalid response structure:', res);
        throw new Error('Invalid response from server');
      }
      
      localStorage.setItem('token', token);
      setUser(user);
      return res;
    } catch (error) {
      console.error('Registration error in AuthContext:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
