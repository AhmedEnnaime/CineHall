import Cookies from "universal-cookie";

const cookies = new Cookies();
const cookie = cookies.get("jwt");
const ParseJwt = () => {
  if (!cookie) {
    return;
  }
  const base64Url = cookie.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
};

export default ParseJwt;
