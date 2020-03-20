// API CALL FOR PIC OF DAY
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


// THIS IS THE SEARCH LIBRARY REQUEST
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
    //console.log(result.collection.items);
    for (let i = 0; i < result.collection.items.length; i++) {
        document.getElementById("nasaImg").innerHTML += '<div class="response"><div class="images"><div class="descrip"><a target="_blank" href="' 
        + result.collection.items[i].links[0].href + '"><img class="item" width="600" height="600" src="' 
        + result.collection.items[i].links[0].href + '"></a></<div></div></div>';
    }
    for (let i = 0; i < result.collection.items.length; i++) {
        document.getElementById("nasaImg").innerHTML += '<div id="descript" display="none" mouseover="showInfo()"></div>'
        + result.collection.items[i].data[0].description;
    }
};

// Get the input field
var input = document.getElementById("searchInput");
// Execute a search when user presses enter on keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        searchNasa();
    }
});
//to display the decription tags on images
document.getElementById("nasaImg").addEventListener("mouseover", showInfo);
document.getElementById("nasaImg").addEventListener("mouseout", noInfo);

function showInfo() {
    document.getElementsById("descript").style.display="block";
}
function noInfo() {
    document.getElementsById("descript").style.display="none";
}

//CLOSE FUNCTION FOR SEARCH LIBRARY
function closeLibrary() {
    document.getElementById("nasaLib").style.display = "none";
}
/////////////////////////////////////////TODO
const modal = document.getElementById("modalA");
const btn = document.getElementById('myBtn');

// library modal events
function closeBtn() {
    document.getElementById("modalA").style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};



/*
btn.onclick = function closeBtn() {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
//adding some effects 

btn.onclick = function () {
    modal.style.display = "block";
};
*/
