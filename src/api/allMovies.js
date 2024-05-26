import axios from "axios";
import toast from "react-hot-toast";

export async function getAllMovies() {
  const url =
    process.env.REACT_APP_MOVIES_API_URL ||
    "https://dummyapi.online/api/movies";

  try {
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    const data = response.data;

    console.info("Movies fetched successfully:", data);
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    toast.error("Error fetching movies!!");
  }
}
