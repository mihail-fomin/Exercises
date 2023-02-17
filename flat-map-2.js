// Collect all boxarts from movieLists into a single array of {width, height, url} items:

let movieLists = [
	{
		listId: 1,
		videos: [
			{
				id: 70111470,
				title: "Die Hard",
				boxarts: [
					{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
					{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
				],
			},
			{
				id: 654356453,
				title: "Bad Boys",
				boxarts: [
					{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
					{ width: 140, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
				],
			}
		]
	},
	{
		listId: 2,
		videos: [
			{
				id: 65432445,
				title: "The Chamber",
				boxarts: [
					{ idth: 130, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
					{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
				],
			},
			{
				id: 675465,
				title: "Fracture",
				boxarts: [
					{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
					{ width: 120, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
					{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
				],
			}
		]
	},
	{
		listId: 3,
		videos: [
			{
				id: 123,
				title: "Foo",
			},
			{
				id: 456,
				title: "Bar",
			}
		]
	}
]

// Expected Result:

// [
//   {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"},
//   {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"},
//   {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"},
//   {width: 140, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"}
//   ...
// ]

function collectBoxarts(movieLists) { return movieLists.flatMap(x => x.videos).flatMap(x => x.boxarts || []) }

console.log(collectBoxarts(movieLists));