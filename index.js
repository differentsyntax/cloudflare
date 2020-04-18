addEventListener('fetch', event => {
event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
try {
	let url = new URL("https://cfw-takehome.developers.workers.dev/api/variants")
	const req = new Request(url)
	let div = 0

	let res = fetch(req)
			.then(response => response.json())
			.then(data => {
				//generating random number between 0 and 1
				div = Math.random()
				
				//logic to redistribute traffic A/B testing style  
				if (div < 0.5) {
						url = data.variants[0]
				}
				else {
						url = data.variants[1]
				} 
				return fetch(url)
		})
	//response to original fetch
	return res
	}
catch (err) {
	return new Response(err)
}
}