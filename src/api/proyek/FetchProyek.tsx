import axios from "axios";

export const FetchProyek = async () => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL_PROYEK!, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message || "Error fetching Proyek");
    } else {
      throw new Error("Error fetching Proyek");
    }
  }
};
