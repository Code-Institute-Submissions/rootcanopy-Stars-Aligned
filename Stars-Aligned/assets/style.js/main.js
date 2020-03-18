const apodURL = "https://api.nasa.gov/planetary/apod?api_key=";
const api_key = "aTzWAFGW6diC9Gmiv2motIrgf68tuKJyXiXxQ8IL";
let data;

function api_call() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", apodURL + api_key, true);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            data = JSON.parse(this.responseText);

            //console.log(data);
        }
    };
    xhr.send();
}

function showData() {
    document.getElementById("title").innerHTML = data.title;
    document.getElementById("date").innerHTML = data.date;
    document.getElementById("pic").src = data.hdurl;
    document.getElementById("explanation").innerHTML = data.explanation;
    document.getElementById("copyright").innerHTML = data.copyright;
}

document.getElementById("myBtn").addEventListener("click", showData);
api_call();

//adding some effects                           /* To Do, All this code needs to be checked/ debugged */
let modal = document.getElementById('ModalA');
let btn = document.getElementById('myBtn');
let closebtn = document.getElementsByClassName('btn-close');

btn.onclick = function () {
    modal.style.display = "block";
};
function closeAPOD() {
    document.getElementById("ModalA").style.display = "none";
}

/*btn.onclick = function () {
    modal.style.display = "none";
};
*/ //Click outside of window for modal APOD to close
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//this is the api request
const searchUrl = "https://images-api.nasa.gov/";
const query = "search?title="; //+ "image"; // "&description=" + ""

// @ts-check
function searchNasa() {
    let Input = document.getElementById("searchInput").value;
    console.log("searchInput");
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            //console.log(result);
            Library(JSON.parse(this.responseText));
            
        } 
    };
    let URL = searchUrl + query + Input;//+ '&q='
    xhr.open("GET", URL, true);
    xhr.send();
}
// @ts-check
function Library(result) {
    $(".nasaImg").empty();

    for (let i = 0; i < result.collection.items.length; i++) {
        document.getElementById("test").innerHTML += '<div class="library"><a href="' +result.collection.items[i].links[0].href + '"><img  width="600" height="600" src="' + result.collection.items[i].links[0].href + '"></a></<div></div>';
        //$(".nasaIMAGES").append('<div class="library"><a href="' +result.collection.items[i].links[0].href + '"><img  width="600" height="400" src="' + result.collection.items[i].links[0].href + '"></a></<div></div>');
       console.log(result.collection.items[i].links[0].href);
    }
};

/*function myFunction(event) {
  var x = event.key;

  // If the pressed keyboard button is "a" or "A" (using caps lock or shift), alert some text.
  if (x == "Enter") { 
    alert ('its works!'); searchNasa();
  }
}*/

// Get the input field
var input = document.getElementById("searchInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    searchNasa();
  }
});