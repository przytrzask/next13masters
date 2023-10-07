import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import { ActiveLink } from "../atoms/ActiveLink";
import { Login } from "../organisms/Login";
import { CartLink } from "./CartLink";
import { type Database } from "@/types/supabase";

const navigation = [
	{
		name: "Home",
		href: "/",
		exact: true,
	},
	{
		name: "All",
		href: "/products",
		exact: false,
	},
	{
		name: "Terms and conditions",
		href: "/terms",
		exact: true,
	},
	{
		name: "Collections",
		href: "/collections",
		exact: true,
	},
	{
		name: "T-shirts",
		href: "/categories/t_shirts",
		exact: false,
	},
	{
		name: "Shoes",
		href: "/categories/shoes",
		exact: false,
	},
] as const;

export const NavigationList = async () => {
	const supabase = createServerComponentClient<Database>({
		cookies,
	});

	const userSession = await supabase.auth.getSession();

	console.table(userSession.data?.session?.user.user_metadata.avatar_url);

	return (
		<div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
			<nav aria-label="Global navigation">
				<div className="flex flex-1">
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<ActiveLink
								key={item.name}
								href={item.href}
								activeClassName="border-indigo-500 text-indigo-600 border-b-2"
								className="text-sm font-semibold leading-6 text-gray-900"
								exact={item.exact}
							>
								{item.name}
							</ActiveLink>
						))}
					</div>
				</div>
			</nav>
			<div className="ml-auto flex gap-4">
				{userSession.data.session ? (
					<Image
						width={24}
						height={24}
						className="inline-block h-6 w-6 rounded-full"
						src={userSession.data?.session?.user.user_metadata.avatar_url}
						alt=""
					/>
				) : (
					<Login />
				)}
				<CartLink />
			</div>
		</div>
	);
};
