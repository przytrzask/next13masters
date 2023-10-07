"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { type Database } from "@/types/supabase";

export function Login() {
	const supabase = createClientComponentClient<Database>();

	const handleLogin = async () => {
		const res = await supabase.auth.signInWithOAuth({
			provider: "github",
			options: {
				redirectTo: "http://localhost:3000/auth/callback",
			},
		});
	};

	return (
		<form>
			<button type="button" onClick={handleLogin}>
				Log In
			</button>
			{/* <button formAction="/auth/sign-up">Sign Up</button> */}
		</form>
	);
}
