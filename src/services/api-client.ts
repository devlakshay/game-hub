import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "29f274d99deb461eb8cb83bfbbe93736",
  },
});
