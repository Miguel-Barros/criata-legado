import { createContext, useContext, useState } from "react";
import AuthService from "../service/AuthService";

const authContext = createContext();

export default function useAuth() {
	return useContext(authContext);
}

export function AuthProvider(props) {
	const [user, setUser] = useState(null);
	const [error, setError] = useState("");

	async function loginWithGoogle() {
		const { error, user } = await AuthService.loginWithGoogle();
		setUser(user ?? null);
		setError(error ?? "");
	}

	async function logout() {
		await AuthService.logout();
		setUser(null);
	}

	async function signInWithEmailAndPassword(email, password) {
		const { error, user } = await AuthService.signInWithEmailAndPassword(email, password);
		setUser(user ?? null);
		setError(error ?? "");
	}

	const value = { user, error, 
		loginWithGoogle, 
		signInWithEmailAndPassword, 
		logout, 
		setUser };

	return <authContext.Provider value={value} {...props} />;
}