// Implement an SDK (set of functions/methods/datastructures) to work with the selected API.

// As an example I use free SWAPI and JSON placeholder free API services


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
		return await fetchJSON(`/todos/${id}`, headers)
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


const api = makeSwapiAPI()
const vehicles = api.fetchVehicles()
console.log("vehicles:", vehicles);

// ===============================================================
//  WIP


//===========================================================
// SWAPI Extend API ("subclass-2")

// function extendAPI(number) {
// 	const api = makeBaseAPI()

// 	async function fetchSpecies(id) {

// 		console.log('Fetch species started...')
// 		await delay(5000)
// 		const response = await fetch(newURL)
// 		const data = await response.json()
// 		console.log('Species:', data)

// 	}

// 	return {
// 		...api,
// 		fetchSpecies
// 	}
// }

// class MakeAPI {
// 	constructor(number) {
// 		this.number = number
// 	}

// 	async fetchVehicles() {
// 		let newURL = vehiclesURL + this.number
// 		try {
// 			console.log('Fetch vehicles started...')
// 			await delay(1000)
// 			const response = await fetch(newURL)
// 			const data = await response.json()
// 			return data
// 		} catch (e) {
// 			console.error(e)
// 		}
// 	}

// 	async fetchPeople() {
// 		let newURL = peopleURL + this.number
// 		try {
// 			console.log('Fetch people started...')
// 			await delay(3000)
// 			const response = await fetch(newURL)
// 			const data = await response.json()
// 			return data
// 		} catch (e) {
// 			console.error(e)
// 		}
// 	}
// }

// class ExtendAPI extends MakeAPI {
// 	async fetchSpecies() {
// 		try {
// 			let newURL = speciesURL + this.number
// 			console.log('Fetch species started...')
// 			await delay(5000)
// 			const response = await fetch(newURL)
// 			const data = await response.json()
// 			console.log('Species:', data)
// 		} catch (e) {
// 			console.error(e)
// 		}
// 	}
// }

// const item4 = new ExtendAPI(4)

// console.log(item4.fetchSpecies());


