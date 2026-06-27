import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
 const [token, setToken] = useState(
  localStorage.getItem("token")
);

const login = (newToken) => {
  localStorage.setItem("token", newToken);
  setToken(newToken);
};

const logout = () => {
  localStorage.removeItem("token");
  setToken(null);
};

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;