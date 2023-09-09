import axios from "axios";

const key_api = "9647edf2e16e10bf8133acf7cb83f6c5";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = "import.meta.enc.VITE_APP_TMDB_TOKEN";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjQ3ZWRmMmUxNmUxMGJmODEzM2FjZjdjYjgzZjZjNSIsInN1YiI6IjY0ZmFlZTljZmZjOWRlMDBhYzUwOTZmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3mUxj3ltk42sWlvAOz0mkY9W6Sg4Wjo6Alnx6IfpGs4";
const headers = {
  Authorization: "bearer " + "TMDB_TOKEN",
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
