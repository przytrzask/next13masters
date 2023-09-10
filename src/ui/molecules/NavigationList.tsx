import { NavItem } from "../atoms/LinkItem";

const navigation = [
	{
		name: "Homepage",
		href: "/",
	},
	{
		name: "Products",
		href: "/products",
	},
	{
		name: "Terms and conditions",
		href: "/terms",
	},
];

export const NavigationList = () => {
	return (
		<nav
			className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global navigation"
		>
			<div className="flex flex-1">
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<NavItem key={item.name} item={item} />
					))}
				</div>
			</div>
		</nav>
	);
};
