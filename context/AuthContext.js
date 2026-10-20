// if token = inloggad
// if no token = utloggad
import { createContext, useState } from "react";
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);


  async function login (username, password) {
  console.log("login körs", username);
    const response = await fetch(
       process.env.EXPO_PUBLIC_API_URL + "/api/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: username, userPassword: password
        })
      },
    );
     const data = await response.json(); 
     console.log("svar", data);
     setToken(data.token);
     setUsername(username);
     await SecureStore.setItemAsync("token", data.token);
  }

    async function logout() {
      setToken(null);
      setUsername(null);
      await SecureStore.deleteItemAsync("token");
    }

    async function register (username, password) {
      const response = await fetch(
        process.env.EXPO_PUBLIC_API_URL + "/api/register",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            userName: username, userPassword: password
          })
        },
      );
      await login (username, password);
    }

  return <AuthContext.Provider value={{token, login, logout, register, username}}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
