import axios from "axios";

export default class API {
  constructor(baseURL = "http://localhost:3001/") {
    this.baseURL = baseURL;

    this.instance = axios.create({
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json"
      }
    });
    //   this.instance.interceptors.request.use(config => {
    //     let token = getAccessToken();
    //     if (token) {
    //       config.headers["Authorization"] = token;
    //     }
    //     return config;
    //   });
  }

  callApi({ method = "get", ...rest }) {
    return this.instance({ method, ...rest });
  }
}
