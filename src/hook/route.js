import { useRouter } from "next/router";
import useAuth from "./auth";

export function withPublic(Component) {
	return function WithPublic(props) {
		const auth = useAuth();
		const router = useRouter();

		if (auth.user) {
			router.replace("/home");
		}
		return <Component auth={auth} {...props} />;
	};
}

export function withProtected(Component) {
	return function WithProtected(props) {
		const auth = useAuth();
		const router = useRouter();

		if (!auth.user) {
			router.replace("/signIn");
			// return <h1>Loading...</h1>; Loading
		}
		return <Component auth={auth} {...props} />;
	};
}