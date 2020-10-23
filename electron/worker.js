console.log('Im the worker!');

const sleep = async time => new Promise(r => setTimeout(r, time))

~(async function main() {
	while (true) {
		console.log('Worker function executed')
		await sleep(1000)
	}
})()
