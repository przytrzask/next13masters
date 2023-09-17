export default function RootLayout({ children }: { children: React.ReactNode }) {
	return <article className="prose lg:prose-xl mx-auto">{children}</article>;
}
