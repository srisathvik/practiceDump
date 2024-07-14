// document.addEventListener("click", (e) =>{
//     const {target} = e;
//     if(!target.matches("nav a")){
//         console.log(e.target);
//         return;
//     }
//     e.preventDefault();
//     console.log(e);
//     urlRoute();
// })


// const urlRoutes = {

//     404:{
//         template: "/templates/404.html",
//         title: "", 
//         description: ""
//     },
//     "/":{
//         template: "/index.html",
//         title: "", 
//         description: ""
//     },
//     "/users":{
//         template: "/templates/users.html",
//         title: "", 
//         description: ""
//     },
//     "/albums":{
//         template: "/templates/albums.html",
//         title: "", 
//         description: ""
//     },
//     "/posts":{
//         template: "/templates/posts.html",
//         title: "", 
//         description: ""
//     }
// }

// const urlRoute = (event) =>{
//     event = event || window.Event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     urlLocationHandler();
// }
// const urlLocationHandler = async () => {
//     const location = window.location.pathname;
//     console.log(location);
//     if(location.length == 0){
//         location = "/";
//     }

//     const route = urlRoutes[location] || urlRoutes[404];
//     const html = await fetch(route.template)
//                 .then(res => res.text());
//     document.getElementsByClassName("data").innerHTML = html;
// };








// const urlPageTitle = "JS Single Page Application Router";

// // create document click that watches the nav links only
// document.addEventListener("click", (e) => {
// 	const { target } = e;
// 	console.log(target);
// 	// if (!target.matches("nav a")) {
// 	// 	return;
// 	// }
// 	// e.preventDefault();
// 	// urlRoute();
// });

// // create an object that maps the url to the template, title, and description
// const urlRoutes = {
// 	404: {
// 		template: "/templates/404.html",
// 		title: "404 | " + urlPageTitle,
// 		description: "Page not found",
// 	},
// 	"/": {
// 		template: "/templates/index.html",
// 		title: "Home | " + urlPageTitle,
// 		description: "This is the home page",
// 	},
// 	"/albums": {
// 		template: "/templates/albums.html",
// 		title: "About Us | " + urlPageTitle,
// 		description: "This is the about page",
// 	},
// 	"/users": {
// 		template: "/templates/users.html",
// 		title: "Contact Us | " + urlPageTitle,
// 		description: "This is the contact page",
// 	},
// 	"/posts": {
// 		template: "/templates/posts.html",
// 		title: "Contact Us | " + urlPageTitle,
// 		description: "This is the contact page",
// 	},
// };

// // create a function that watches the url and calls the urlLocationHandler
// const urlRoute = (event) => {
// 	event = event || window.event; // get window.event if event argument not provided
// 	event.preventDefault();
// 	// window.history.pushState(state, unused, target link);
// 	window.history.pushState({}, "", event.target.href);
// 	urlLocationHandler();
// };

// // create a function that handles the url location
// const urlLocationHandler = async () => {
// 	const location = window.location.pathname; // get the url path
// 	// if the path length is 0, set it to primary page route
// 	if (location.length == 0) {
// 		location = "/";
// 	}
// 	// get the route object from the urlRoutes object
// 	const route = urlRoutes[location] || urlRoutes["404"];
// 	// get the html from the template
// 	const html = await fetch(route.template).then((response) => response.text());
// 	// set the content of the content div to the html
// 	document.getElementById("content").innerHTML = html;
// 	// set the title of the document to the title of the route
// 	document.title = route.title;
// 	// set the description of the document to the description of the route
// 	document
// 		.querySelector('meta[name="description"]')
// 		.setAttribute("content", route.description);
// };

// // add an event listener to the window that watches for url changes
// window.onpopstate = urlLocationHandler;
// // call the urlLocationHandler function to handle the initial url
// window.route = urlRoute;
// // call the urlLocationHandler function to handle the initial url
// urlLocationHandler();