import axios from "axios";

export const getSkillsToken = async () => {
  try {
    const formData = new URLSearchParams();
    formData.append("client_id", import.meta.env.VITE_SKILLS_CLIENT_ID);
    formData.append("client_secret", import.meta.env.VITE_SKILLS_CLIENT_SECRET);
    formData.append("grant_type", "client_credentials"); // Fixed value
    formData.append("scope", import.meta.env.VITE_SKILLS_SCOPE);

    const response = await axios.post(
      "https://auth.emsicloud.com/connect/token",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log("Access Token:", response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching token:", error.response?.data || error.message);
  }
};
