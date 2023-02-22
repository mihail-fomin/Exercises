const SWAPI_API_URL = `https://swapi.dev/api`
const JSONPLACEHOLDER_URL = `https://jsonplaceholder.typicode.com`

// BASE API ("superclass")
class MakeBaseAPI {
	constructor(baseURL) {
		this.baseURL = baseURL
	}

	async fetchJSON(relativeURL, headers = {}) {
		console.log(this.baseURL + relativeURL);
		const response = await fetch(this.baseURL + relativeURL, {
			headers: {
				...headers,
				"Content-Type": headers.contentType || "application/json",
			}
		})
		return await response.json()
	}
}

// SWAPI API ("subclass-1")
class MakeSwapiAPI extends MakeBaseAPI {
	constructor(baseURL = SWAPI_API_URL) {
		super(baseURL)
	}

	async fetchVehicles(headers = {}) {
		console.log(`Fetch vehicles started...`)
		return await super.fetchJSON('/vehicles', headers)
	}

	async fetchVehicle(id, headers = {}) {
		console.log('Fetch vehicle started...')
		return await super.fetchJSON(`/vehicles/${id}`, headers)
	}

	async fetchPeople(headers = {}) {
		console.log('Fetch people started...')
		return await super.fetchJSON('/people', headers)
	}

	async fetchPerson(id, headers = {}) {
		console.log('Fetch person started...')
		return await super.fetchJSON(`/people/${id}`, headers)
	}
}

// JSON Placeholder ("subclass-1")
class MakeJSONPlaceholderAPI extends MakeBaseAPI {
	constructor(baseURL = JSONPLACEHOLDER_URL) {
		super(baseURL)
	}

	async fetchTodos(headers = {}) {
		console.log(`Fetch todos started...`)
		return await super.fetchJSON('/todos', headers)
	}

	async fetchTodo(id, headers = {}) {
		console.log('Fetch todos started...')
		return await super.fetchJSON(`/todos/${id}`, headers)
	}

	async fetchPosts(headers = {}) {
		console.log('Fetch posts started...')
		return await super.fetchJSON('/posts', headers)
	}

	async fetchPost(id, headers = {}) {
		console.log('Fetch posts started...')
		return await super.fetchJSON(`/posts/${id}`, headers)
	}
}

// SWAPI Extend API ("subclass-2")
class ExtendSwapiAPI extends MakeSwapiAPI {
	constructor(baseURL) {
		super(baseURL)
	}
	async fetchSpecies(headers = {}) {
		console.log('Fetch species started...')
		return await super.fetchJSON('/species', headers)
	}
}

let show = await new ExtendSwapiAPI().fetchSpecies()
console.log(show);

