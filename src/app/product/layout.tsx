import { type ReactNode } from "react";

export default function Product({ children }: { children: ReactNode }) {
	return <div className="bg-white py-8">{children}</div>;
}
