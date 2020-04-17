const Router = require('./router')

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  try {
    let div = Math.random()
    let url = ""
    if (div < 0.5) {
	url = "https://cfw-takehome.developers.workers.dev/variants/1"
    }
    else {
	url = "https://cfw-takehome.developers.workers.dev/variants/2"
    }
    return fetch(url)
  }
  catch (err) {
    return new Response(err)
  }
}
