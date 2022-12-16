import axios from "axios";

export const hostRequest = async (hostData) => {
  const url = `${process.env.REACT_APP_API_URL}/user/${hostData?.email}`;
  const { data } = await axios.put(url, hostData);
  console.log('using axios', data);
  return data;

  // const url = `${process.env.REACT_APP_API_URL}/user/${hostdata?.email}`;
  // const response = await fetch(url, {
  //   method: "PUT",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(hostdata),
  // });
  // const data = await response.json();
  // return data;
};

// Get user role
export const getRole = async (email) => {
  const url = `${process.env.REACT_APP_API_URL}/user/${email}`;
  const response = await fetch(url);
  const user = await response.json();
  return user?.role;
};

// Get All Users
export const getAllUsers = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
  console.log('using axios', data)
  return data;

  // const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
  // const users = await response.json();
  // return users;
};

//make a host
export const makeHost = async (user) => {
  delete user._id;
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/user/${user?.email}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...user, role: "host" }),
    }
  );
  const users = await response.json();

  return users;
};
