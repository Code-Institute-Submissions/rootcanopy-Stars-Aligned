
  const apodURL = "https://api.nasa.gov/planetary/apod?api_key=";
  const apod_key = "aTzWAFGW6diC9Gmiv2motIrgf68tuKJyXiXxQ8IL";
  let data;
  
  function api_call() {
      var xhr = new XMLHttpRequest();
  
      xhr.open("GET", apodURL + apod_key, true);
  
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
  
  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };
  //making the navbar responsive with js
  function myFunction() { /*unused variable */
      let resNav = document.getElementById("myNasaNav");
      if (resNav.className === "nasaNav") {
          resNav.className += " responsive";
      } else {
          resNav.className = "nasaNav";
      }
  } /* https://www.w3schools.com/howto/howto_js_topnav_responsive.asp */
  
  /* -------- EPIC api images slideshow ------ */
  
  const EPICurl = "https://images-api.nasa.gov/search?q=rover";
  
  //var api_key = "aTzWAFGW6diC9Gmiv2motIrgf68tuKJyXiXxQ8IL";
  //var img_url = "";	/*unused */
  const epicObj;
  let xhr = new XMLHttpRequest();
  
  xhr.open("GET", EPICurl, true);

  xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
          epicObj = JSON.parse(this.responseText);
  
          console.log(epicObj);
      }     
  };
  
  xhr.send();

  //function() {
   
  //retrieve the user input 

  //define the em, the path to the array of data we want - the abibilty to extract the data from the data we recieve
  //define the em, function > foo loops to loop through the array of content and pictures and creat the html code to manip dom with the output
  //