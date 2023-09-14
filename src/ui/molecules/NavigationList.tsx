import { ActiveLink } from "../atoms/ActiveLink";

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
] as const;

export const NavigationList = () => {
	return (
		<nav
			className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global navigation"
		>
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
	);
};
