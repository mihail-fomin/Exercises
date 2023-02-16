// Collect all item names from orders into a single array of string items:

const orders = [
	{
		orderId: 42,
		items: [
			{ name: 'soap', price: 1.99 },
			{ name: 'shampoo', price: 4.99 }
		]
	},
	{
		orderId: 1337,
		items: [
			{ name: 'toothpaste', price: 5.59 },
			{ name: 'toothbrush', price: 8.99 }
		]
	}
]

// Expected Result:

// ["soap", "shampoo", "toothpaste", "toothbrush"]

/*===============================================================================*/

function collectOrders(orders) { return orders.flatMap(x => x.items).map(x => x.name) }

console.log(collectOrders(orders)) // [ 'soap', 'shampoo', 'toothpaste', 'toothbrush' ]