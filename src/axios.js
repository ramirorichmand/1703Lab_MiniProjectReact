// install axios library
import axios from "axios";

//  it can be used to make HTTP requests to the movie database API
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
