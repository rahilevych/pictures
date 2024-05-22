import { ReactNode, createContext, useState } from 'react';
import { UserType } from '../assets/types/UserType';
//define type of context
type AuthContextType = {
  user: UserType | null;
  setUser: (user: UserType) => void;
};

//define the initial value of context
const initAuthContextValue = {
  user: {} as UserType,
  setUser: () => {
    throw new Error('context not initialised');
  },
};

//define type of props the AuthContextProvider recived

type AuthContextProviderProps = {
  children: ReactNode;
};
export const AuthContext = createContext<AuthContextType>(initAuthContextValue);
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
