// if token = inloggad
// if no token = utloggad

import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
