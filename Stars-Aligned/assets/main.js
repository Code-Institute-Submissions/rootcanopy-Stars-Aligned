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
/*
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else {
        this.console.log('window click not working');
    }
};
*/
//making the navbar responsive with js
/*function myFunction() {
    /*unused variable 
    let resNav = document.getElementById("myNasaNav");
    if (resNav.className === "nasaNav") {
        resNav.className += " responsive";
    } else {
        resNav.className = "nasaNav";
    }
} /* https://www.w3schools.com/howto/howto_js_topnav_responsive.asp */


//this is the api request
const searchUrl = "https://images-api.nasa.gov/";
const query = "search?title="; //+ "q=&media_type=image"; // "&description=" + ""

function searchNasa() {
    //let search_library = document.getElementById("searchInput").value;

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            result = JSON.parse(this.responseText);
            
        } else {
            console.log(result);
        }  
    };
    xhr.open("GET", searchUrl + query, true);
    xhr.send();
}

/*function searchNasa(result) {
    //for ( i = 0; i < 50; i++) {
    //document.getElementByClassName("circle").append('<div class="responsive"><div class="library"><a target="_blank" href="' + response.collection.items[i].links[0].href + '"><img  width="600" height="400" src="' + response.collection.items[i].links[0].href + '"></a></div></div>');
        console.log(result);
}*/