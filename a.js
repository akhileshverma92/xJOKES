// // console.log("hii");?
const BASE_URL = "https://official-joke-api.appspot.com/random_ten";
const para1 = document.querySelector(".area");
const para2 = document.querySelector(".area1");



const xdata = async () =>{
let res = await fetch(BASE_URL);
console.log(res);
let data = await res.json();
console.log(data[1].setup);
console.log(data[1].punchline);
para1.innerHTML = data[1].setup;
para2.innerHTML = data[1].punchline;
};

// window.fetch("https://api.cricapi.com/v1/cricScore?apikey=%APIKEY%")
// 	.then(result => result.json())
// 	.then(result => {
// 		console.log("We have the result",result);
// 	})
// 	.catch(err => {
// 		console.log("An error occured. Please check your code",err);
// 	});