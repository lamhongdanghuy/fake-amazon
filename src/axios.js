import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-fake-860f4.cloudfunctions.net/api",
  //"http://localhost:5001/fake-860f4/us-central1/api",
  //https://us-central1-fake-860f4.cloudfunctions.net/api
});

export default instance;
