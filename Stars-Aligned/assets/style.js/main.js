// api call for pic of day 
const apodURL = "https://api.nasa.gov/planetary/apod?api_key=";
const api_key = "aTzWAFGW6diC9Gmiv2motIrgf68tuKJyXiXxQ8IL";
let data; 

function api_call() {
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", apodURL + api_key, true);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            data = JSON.parse(this.responseText);
            //data here and above => let declares a global variable 
        }
    };
    xhr.send();
}
// TODO
function showData() { 
    document.getElementById("title").innerHTML = data.title;
    document.getElementById("date").innerHTML = data.date;
    document.getElementById("pic").src = data.hdurl;
    document.getElementById("explanation").innerHTML = data.explanation;
}

document.getElementById("myBtn").addEventListener("click", showData);
api_call();

//this is the api request for nasa library
const searchUrl = "https://images-api.nasa.gov/";
const query = "search?title="; //+ "image"; // "&description=" + ""

// @ts-check
function searchNasa() {
    let Input = document.getElementById("searchInput").value;

    let xhr = new XMLHttpRequest();
    let URL = searchUrl + query + Input;

    xhr.open("GET", URL, true);

    xhr.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {
            Library(JSON.parse(this.responseText));
        }
    };
    document.getElementById("nasaLib").style.display = "block";
    xhr.send();
}
// sending search results to the DOM
// @ts-check
function Library(result) {

    for (let i = 0; i < result.collection.items.length; i++) {
        document.getElementById("nasaImg").innerHTML += '<div class="response"><div class="images"><a target="_blank" href="' 
        + result.collection.items[i].links[0].href + '"><img class="item" width="600" height="600" src="' 
        + result.collection.items[i].links[0].href + '"></a></<div></div>';
    }
};

// Get the input field
var input = document.getElementById("searchInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        searchNasa();
    }
});

function closeLibrary() {
    document.getElementById("nasaLib").style.display = "none";
}
/////////////////////////////////////////
const modal = document.getElementsByClassName("modal");
const btn = document.getElementById('myBtn');

// library modal events
function closeBtn() {
    document.getElementById("close-apod").style.display = "none";
}



window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

/*btn.onclick = function closeBtn() {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
//adding some effects 

btn.onclick = function () {
    modal.style.display = "block";
};


//Click outside of window for modal APOD to close
*/
