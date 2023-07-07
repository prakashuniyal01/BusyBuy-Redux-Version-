import { createContext, useContext, useState } from "react";

const userContext = createContext();

export function useAuth() {
  const value = useContext(userContext);
  return value;
}

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;
