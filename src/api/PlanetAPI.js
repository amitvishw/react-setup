import API from "./API";

const api = new API();
const prefix = "/auth";

const fetch = data =>
  api
    .callApi({
      url: `https://api.myjson.com/bins/h91ma`,
      method: "GET",
      data
    })
    .then(({ data }) => data);

export default {
  fetch
};
