import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setDoctors] = useState([]);
const [token, setToken] = useState(() => localStorage.getItem("token") || null);

  const [userData, setUserData] = useState(null);

  // Log the backend URL for debugging
  useEffect(() => {
    console.log("Backend URL:", backendUrl);
  }, [backendUrl]);

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message || "Error loading doctors");
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
      toast.error("Failed to load doctors");
    }
  };

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: { token },
      });

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message || "Error loading profile");
      }
    } catch (error) {
      console.error("Error loading user profile:", error);
      toast.error("Failed to load user profile");
    }
  };

  useEffect(() => {
    getDoctorsData();
  }, [backendUrl]);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(null);
    }
  }, [token]);

  return (
    <AppContext.Provider
      value={{
        doctors,
        getDoctorsData,
        currencySymbol,
        token,
        setToken,
        backendUrl,
        userData,
        setUserData,
        loadUserProfileData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
