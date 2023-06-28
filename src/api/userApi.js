import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:6000/api/user/getall");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


