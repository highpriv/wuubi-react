import axios from "axios";

const createAxiosInstance = (apiUrl, session, contentType) => {
  const axiosInstance = axios.create({
    baseURL: apiUrl,
    //timeout: 15000, # disabled for debugging purposes in development nodejs server
    headers: {
      "Content-Type": contentType || "application/json",
      Authorization: session ? `Bearer ${session.user.token}` : "",
    },
  });

  return axiosInstance;
};

export default createAxiosInstance;
