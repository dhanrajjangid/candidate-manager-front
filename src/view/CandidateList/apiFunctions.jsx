import { postApiData, getApiData, putApiData } from "@/services/ApiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { actions as candidateActions } from "@/redux/slices/candidateSlice";
import { useDispatch } from "react-redux";

export const useCandidate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createCandidateApi = async (data) => {
    console.log(data)
    try {
      const response = await postApiData(`/candidate/add`, data);
      toast.success(response?.message ?? "Team created successfully");
    
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const getCandidateList = async () => {
    try {
      const response = await getApiData(`/candidate/getCandidates`);
      dispatch(candidateActions.setCandidateListState(response?.data));

      return response;
    } catch (error) {
      console.error("Failed to fetch team list", error);
    }
  };

  const updateCandidate = async (data) => {
    try {
      const response = await putApiData(`/candidate/update/${data.id}`, data);
      toast.success(response?.message ?? "Candidate updated successfully");
      getCandidateList()
      return response;
    } catch (error) {
      console.error("Failed to fetch team list", error);
    }
  };

  return { createCandidateApi, getCandidateList, updateCandidate };
};
