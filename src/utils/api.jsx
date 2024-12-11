import axios from "axios";
const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "x-rapidapi-key": '6b88ac2782mshb0e161da92ca78dp11adc9jsn59baa49c2230',
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log('data',data)
  return data;
};

