export function addUpTo(n){
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
    return total
}	

export function addUpToN(n){
	return n * (n + 1) / 2;
}

