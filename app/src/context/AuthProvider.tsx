import { type ReactNode, createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

interface Props {
	children?: ReactNode;
}

const AuthProvider = ({ children, ...props }: Props) => {
	const [user, setUser] = useState(null);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
