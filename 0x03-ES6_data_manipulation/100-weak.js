const weakMap = new WeakMap();
export { weakMap };

export function queryAPI(endpoint) {
	if (weakMap.has(endpoint)) {
		const count = weakMap.get(endpoint) + 1;
		weakMap.set(endpoint, count);

		if (count >= 5) {
			throw new Error('Endpoint load is high');
		}
	} else {
		weakMap.set(endpoint, 1);
	}
}
