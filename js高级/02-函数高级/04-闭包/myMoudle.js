function myMoudle() {
	var msg = 'Hello'
	function fn1() {
		console.log('fn1' + msg.toUpperCase())
	}
	function fn2() {
		console.log('fn2' + msg.toLowerCase())
	}
	return {
		fn1: fn1,
		fn2: fn2
	}
}