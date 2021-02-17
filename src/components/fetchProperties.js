fetch("https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7b02074c19mshedbbe70e8fd2ae2p163b20jsne2411a44c687",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});