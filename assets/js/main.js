// API CALL FOR PIC OF DAY
const apodURL = "https://api.nasa.gov/planetary/apod?api_key=";
const api_key = "aTzWAFGW6diC9Gmiv2motIrgf68tuKJyXiXxQ8IL";

function apiCall() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", apodURL + api_key, true);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            showData(data);
            //data here and above => let declares a global variable

        }
    };
    xhr.send();
}

function showData(data) {
    document.getElementById("modalA").style.display = "block";

    document.getElementById("title").innerHTML = data.title;
    document.getElementById("date").innerHTML = data.date;
    // document.getElementById("pic").src = data.hdurl;
    document.getElementById("explanation").innerHTML = data.explanation;

    if (data.media_type == "video") {
        document.getElementById("mediaContainer").innerHTML = '<iframe width="620" height="515" src="' + data.url + '" type="video/mp4"></iframe>';
    } else {
        document.getElementById("mediaContainer").innerHTML = '<img src="' + data.hdurl + '" alt="picture of the day>"';
    }
}

// THIS CLOSES THE APOD MODAL
function closeBtn() {
    document.getElementById("modalA").style.display = "none";
}
// THIS ENSURES THE USER CAN CLICK ANYWHERE TO ESCAPE
var modal = document.getElementById("modalA");

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// THIS IS THE SEARCH LIBRARY REQUEST
const searchUrl = "https://images-api.nasa.gov/";
const query = "search?q=";

function searchBox() {
    const Input = document.getElementById("searchInput").value;

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
function Library(result) {

    for (var i = 0; i < result.collection.items.length; i++) { //the line beneath, appending to html, is one line to get rid of linebreak issue in jshint - vscode
        document.getElementById("nasaImg").innerHTML += '<div><a target="_blank" alt="Nava earth images" href="' + result.collection.items[i].links[0].href + '"><span class="description"> ' + result.collection.items[i].data[0].description + '</span><img class="item" width="600" height="600" src="' + result.collection.items[i].links[0].href + '"></a></div>';
    }
}

// Get the input field
var input = document.getElementById("searchInput");
// Execute a search when user presses enter on keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        searchBox();
        // clear search
    }
});

// CLOSE FUNCTION FOR SEARCH LIBRARY
function closeLibrary() {
    document.getElementById("nasaLib").style.display = "none";
}
// RELOADS THE PAGE PRESSING BACK SO NO STORED CACHE IN SEARCH INPUT
function reloadThePage() {
    window.location.reload();
}

// SCROLL BTN TO TOP
var topBtn = document.querySelector('#topBtn');
var root = document.documentElement
var TOGGLE_RATIO = 0.80

function scrollFunction() {
    var scrollTotal = root.scrollHeight - root.clientHeight
    if ((root.scrollTop / scrollTotal ) > TOGGLE_RATIO ) {
        topBtn.classList.add("showBtn")
    } else {
        topBtn.classList.remove("showBtn")
        console.log('scroll')
    }
}

// WHEN USER CLICKS BTN
function scrollToTop() {
    root.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    scrollToTop.addEventListener("click", scrollToTop)
    document.addEventListener("scroll", scrollFunction)
}
