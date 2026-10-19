// if token = inloggad
// if no token = utloggad
import { createContext, useState } from "react";
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

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
     await SecureStore.setItemAsync("token", data.token);
  }

  return <AuthContext.Provider value={{token, login}}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
