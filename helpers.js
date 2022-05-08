import axios from "axios";

const helpers = {};

helpers.login = async (data) => {
  try {
    const res = await axios
      .post("https://radiant-savannah-73457.herokuapp.com/auth/login", data)
      .then((v) => {
        console.log(v);
        return v;
      });

    return res;
  } catch (error) {
    return error;
  }
};

helpers.logout = () => {
  localStorage.clear();
};

helpers.getUserDetailsFromLocalStorage = () => {
  const data = localStorage.getItem("user");
  return JSON.parse(data);
};

helpers.register = async (data) => {
  try {
    const res = await axios
      .post("https://radiant-savannah-73457.herokuapp.com/auth/register", data)
      .then((v) => {
        return v;
      })
      .catch((error) => {
        return error;
      });

    return res;
  } catch (error) {
    return error;
  }
};

export default helpers;
