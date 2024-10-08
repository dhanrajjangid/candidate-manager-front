import { getApiData, putApiData } from '@/services/ApiService';
import { toast } from 'react-toastify';

export const useProfile = () => {

  const getPlayerById = async (player_id) => {
    try {
      const response = await getApiData(`/players/get-player/${player_id}`);
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const updatePlayer = async (player_id, details) => {
    try {
      const response = await putApiData(`/players/update-player/${player_id}`, details);
      toast.success('Profile updated successfully');
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };


  return {getPlayerById, updatePlayer};
};
