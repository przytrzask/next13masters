export function formatMoney(amount: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
}

type ParamsObject = {
	field?: "rating" | "price";
	direction?: "ASC" | "DESC";
};

export function createOrderByParams(existingSearchParams: string) {
	const params = new URLSearchParams(existingSearchParams);

	const paramsObject: ParamsObject = {};
	for (const [key, value] of params.entries()) {
		if (key === "field" && (value === "rating" || value === "price")) {
			paramsObject.field = value;
		} else if (key === "direction" && (value === "ASC" || value === "DESC")) {
			paramsObject.direction = value;
		}
	}

	return paramsObject as { field: "rating" | "price"; direction: "ASC" | "DESC" };
}
