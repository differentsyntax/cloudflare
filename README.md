# Cloudflare Challenge for Cloudflare Workers Internship Application: Full-Stack

## What is it?

Using Cloudflare Workers, I deployed an application that will randomly send users to one of the two webpages received as json data from a given URL. This project is built with the Cloudflare Workers API, managed and developed using the command-line tool Wrangler, and deployed to the free workers.dev deployment playground.

### 1. Installed the workers command-line tool wrangler

To begin, installed the [Wrangler](https://github.com/cloudflare/wrangler) command-line tool. In my opinion installing it using *cargo* was the easiest.

### 2. Generated a new project using `wrangler generate` command

Using the `generate` command (covered in the Quick Start), generated a new project with the desired name:

```sh
$ wrangler generate project-name <template-URL>
```

### 3. Used `wrangler dev` and `wrangler preview --watch` to locally test/develop the application and preview it respectively

[`wrangler dev`](https://github.com/cloudflare/wrangler#-dev) feature allowed me to begin developing my application using `localhost` - this means that I was able to test the project locally to make sure it works, without having to sort out deployment until later.

## Deployment

### Registered a workers.dev subdomain

Deployed using the free, unique workers.dev subdomain.
The project is live at [https://cloudflare.cloudflarechallenge.workers.dev]