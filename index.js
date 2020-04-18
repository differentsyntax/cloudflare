const Router = require('./router')

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  try {
	let url = new URL("https://cfw-takehome.developers.workers.dev/api/variants")
	let req = new Request(url)
	let div = 0
	let res = fetch(req)
			.then(response => response.json())
			.then(data => {
				div = Math.random()
				if (div < 0.5) {
						url = data.variants[0]
						
				}
				else {
						url = data.variants[1]
				}
				return fetch(url)
		})
		return res
	}
  catch (err) {
    return new Response(err)
  }
}
