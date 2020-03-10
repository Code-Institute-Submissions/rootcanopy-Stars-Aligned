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
let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let closebtn = document.getElementsByClassName('btn-close');

btn.onclick = function () {
    modal.style.display = "block";
};

closebtn.onclick = function () {
    modal.style.display = "none";
};

/*window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else {
        this.console.log('window click not working');
    }
};*/
//making the navbar responsive with js
function myFunction() {
    /*unused variable */
    let resNav = document.getElementById("myNasaNav");
    if (resNav.className === "nasaNav") {
        resNav.className += " responsive";
    } else {
        resNav.className = "nasaNav";
    }
} /* https://www.w3schools.com/howto/howto_js_topnav_responsive.asp */


//this is the search library function
const searchUrl = "https://images-api.nasa.gov/";
const queryString = "search?title="; //"&description=" + "&media_type="
var nasaData;

function search() {
    let searchInput = document.getElementById("searchInput").value;

    /* -------- EPIC Nasa search api req------ */
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            displayNasa(xhr.responseText);
            //displayNasa(xhr.responseText);
            //console.log(typeof(nasaData));
        }
    };
    let nasaLib = searchUrl + queryString + searchInput;
    //let nasaData;
    xhr.open("GET", nasaLib, true);
    xhr.send();
};

function displayNasa(response) {
    //let string = "";
    response = JSON.parse(response);
    //for (let i = 0; i < response.collection.length; i++){
        console.log(response.collection);
    }

//retrieve the user input 

//define the path to the array of data we want - the abibilty to extract the data from the data we recieve
//define the function > for loop, to loop through the array of content and pictures and creat the html code to manip dom with the output
//