export function titleWithUnit(title, unit) {
	return `${title}${unit ? ` (${unit})` : ``}`;
}
