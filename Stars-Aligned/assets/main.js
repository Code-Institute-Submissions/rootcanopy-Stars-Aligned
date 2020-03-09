
  const apodURL = "https://api.nasa.gov/planetary/apod?api_key=";
  var apod_key = "aTzWAFGW6diC9Gmiv2motIrgf68tuKJyXiXxQ8IL";
  var data;
  
  function api_call() {
      var xhr = new XMLHttpRequest();
  
      xhr.open("GET", apodURL + apod_key, true);
  
      xhr.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
              data = JSON.parse(this.responseText);
  
              console.log(data);
  
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
  var modal = document.getElementById('myModal');                       
  var btn = document.getElementById('myBtn');
  var closebtn = document.getElementsByClassName('btn-close');
  
  btn.onclick = function () {
      modal.style.display = "block";
  };
  
  closebtn.onclick = function () {
      modal.style.display = "none";
  };
  
  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };
  //making the navbar responsive with js
  function myFunction() { /*unused variable */
      var resNav = document.getElementById("myNasaNav");
      if (resNav.className === "nasaNav") {
          resNav.className += " responsive";
      } else {
          resNav.className = "nasaNav";
      }
  } /* https://www.w3schools.com/howto/howto_js_topnav_responsive.asp */
  
  /* -------- EPIC api images slideshow ------ */
  
  const EPICurl = "https://api.nasa.gov/EPIC/api/natural?api_key=";
  
  var api_key = "aTzWAFGW6diC9Gmiv2motIrgf68tuKJyXiXxQ8IL";
  var img_url = "";	/*unused */
  var epicObj;
  var xhr = new XMLHttpRequest();
  
  xhr.open("GET", EPICurl + api_key, true);
  
  xhr.addEventListener("load", function () {
      if (this.readyState === 4 && this.status === 200) {
          epicObj = JSON.parse(this.responseText);
  
          console.log(epicObj);
      }
      xhr.send();
  });