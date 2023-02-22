// Implement an SDK (set of functions/methods/datastructures) to work with the selected API.

// As an example I use free SWAPI and JSON placeholder free API services

export { };

const SWAPI_API_URL = `https://swapi.dev/api`
const JSONPLACEHOLDER_URL = `https://jsonplaceholder.typicode.com`

function delay(ms) {
	return new Promise(resolve => setTimeout(() => resolve(), ms))
}

// BASE API ("superclass")
function makeBaseAPI(baseURL) {
	async function fetchJSON(relativeUrl, headers = {}) {
		const response = await fetch(baseURL + relativeUrl, {
			headers: {
				...headers,
				"Content-Type": headers.contentType || "application/json",
			}
		})
		return await response.json()
	}

	return {
		fetchJSON,
	}
}

//===========================================================
// SWAPI API ("subclass-1")

function makeSwapiAPI(baseURL = SWAPI_API_URL) {

	const baseAPI = makeBaseAPI(baseURL)

	async function fetchVehicles(headers = {}) {
		console.log('Fetch vehicles started...')
		await delay(2000)
		return await baseAPI.fetchJSON('/vehicles', headers)
	}

	async function fetchVehicle(id, headers = {}) {
		console.log('Fetch vehicle started...')
		await delay(2000)
		return await baseAPI.fetchJSON(`/vehicles/${id}`, headers)
	}

	async function fetchPeople(headers = {}) {
		console.log('Fetch people started...')
		await delay(2000)
		return await baseAPI.fetchJSON('/people', headers)
	}

	async function fetchPerson(id, headers = {}) {
		console.log('Fetch person started...')
		await delay(2000)
		return await baseAPI.fetchJSON(`/people/${id}`, headers)
	}

	return {
		fetchVehicles,
		fetchVehicle,
		fetchPeople,
		fetchPerson
	}
}

//===========================================================
// JSON Placeholder ("subclass-1")

function makeJsonPlaceholderAPI(baseURL = JSONPLACEHOLDER_URL) {
	const baseAPI = makeBaseAPI(baseURL)

	async function fetchTodos(headers = {}) {
		console.log('Fetch todos started...')
		await delay(2000)
		return await baseAPI.fetchJSON('/todos', headers)
	}

	async function fetchTodo(id, headers = {}) {
		console.log('Fetch todo started...')
		await delay(2000)
		return await baseAPI.fetchJSON(`/todos/${id}`, headers)
	}

	async function fetchPosts(headers = {}) {
		console.log('Fetch posts started...')
		await delay(2000)
		return await baseAPI.fetchJSON('/posts', headers)
	}

	async function fetchPost(id, headers = {}) {
		console.log('Fetch post started...')
		await delay(2000)
		return await baseAPI.fetchJSON(`/posts/${id}`, headers)
	}

	return {
		fetchTodos,
		fetchTodo,
		fetchPosts,
		fetchPost,
	}
}

//===========================================================
// SWAPI Extend API ("subclass-2")

function makeExtendSwapiAPI(baseURL = SWAPI_API_URL) {
	const baseAPI = makeBaseAPI(baseURL)

	async function fetchSpecies(headers = {}) {
		console.log('Fetch species started...')
		await delay(2000)
		return await baseAPI.fetchJSON('/species', headers)
	}

	async function fetchSingleSpecies(id, headers = {}) {
		console.log('Fetch species started...')
		await delay(2000)
		return await baseAPI.fetchJSON(`/species/${id}`, headers)
	}

	return {
		...baseAPI,
		fetchSingleSpecies,
		fetchSpecies
	}
}

const api = makeExtendSwapiAPI()
const singleSpecies = await api.fetchSingleSpecies(2)
console.log(singleSpecies);

