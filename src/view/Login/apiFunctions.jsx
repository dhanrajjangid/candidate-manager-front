import { postApiData } from '@/services/ApiService';
import { actions as authActions } from '@/redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await postApiData('/auth/login', { email, password });

      localStorage.setItem('token', response?.data?.token);

      dispatch(authActions.login(response?.data));
      navigate("/"); 
      return response.user.token;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  return login;
};
