document.getElementById("generateFood").addEventListener("click", function(event) {
	event.preventDefault();
	const url = "https://foodish-api.herokuapp.com/api/";
	fetch(url)
		.then(function(response) {
			return response.json();
	}).then(function(json) {
		//console.log(json);
		let results = "";
		if(document.getElementById("plateResult").innerHTML == "") {
			results += "<div class='meal'>";
			results += "<div class='dishElem'><img src=" + json.image + "></div>";
			results += "</div>";
			document.getElementById("plateResult").innerHTML = results;
		}
		else {
			results += "<div class='dishElem'><img src=" + json.image + "></div>";
			document.getElementById('meal').innerHTML = results + document.getElementById('meal').innerHTML;
		}
	});
});
