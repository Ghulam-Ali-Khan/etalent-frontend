import axios from "axios";

// Function to fetch skills data using the Bearer token
export const fetchSkillsData = async (skillName = '') => {
    try {
        const token = localStorage.getItem('skills_token');  // Fetch the token first

        const response = await axios.get('https://emsiservices.com/skills/versions/latest/skills', {
            headers: {
                Authorization: `Bearer ${token}`   // Add the token to Authorization header
            },
            params: {
                ...(skillName !== '' ? { q: skillName } : {}),  // The search query, adjust as needed
                limit: 10     // Number of results to limit
            }
        });

        return  response.data;
        console.log('Skills Data:', response.data);  // Handle the response data
    } catch (error) {
        console.error('Error fetching skills data:', error.response?.data || error.message);
    }
};