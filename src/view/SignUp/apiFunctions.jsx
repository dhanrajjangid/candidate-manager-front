import { postApiData } from '@/services/ApiService';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const navigate = useNavigate()
  const register = async ({name, email, password}) => {
    try {
      const response = await postApiData('/auth/register', { name, email, password });
      navigate('/login');

      return;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  return register;
};
