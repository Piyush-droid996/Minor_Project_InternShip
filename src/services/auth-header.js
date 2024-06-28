export default function AuthHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user && user.accessToken) {
      // For Other back-end
      // return { Authorization: "Bearer " + user.accessToken };
  
      // for Node.js Express back-end
      return { "x-access-token": user.accessToken };
    } else {
      return {};
    }
  }