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
    document.getElementById("copyright").innerhtml = data.copyright;
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
*/
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//this is the api request
const searchUrl = "https://images-api.nasa.gov/";
const query = "search?media_type="; //+ "image"; // "&description=" + ""

function searchNasa() {
    let Input = document.getElementById("searchInput").value;
    
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            //displayIMGS = (this.responseText);
            Library(JSON.parse(this.responseText));
            console.log(Library);
        } 
    };
    let URL = searchUrl + query + Input;
    xhr.open("GET", URL, true);
    xhr.send();
}

function Library(result) {
    $(".nasaImg").empty();

    for (let i = 0; i < result.collection.items.length; i++) {
        document.getElementById("test").innerHTML += '<div class="library"><a href="' +result.collection.items[i].links[0].href + '"><img  width="600" height="600" src="' + result.collection.items[i].links[0].href + '"></a></<div></div>';
        //$(".nasaIMAGES").append('<div class="library"><a href="' +result.collection.items[i].links[0].href + '"><img  width="600" height="400" src="' + result.collection.items[i].links[0].href + '"></a></<div></div>');
       //console.log(result.collection.items[i].links[0].href);
    }
};