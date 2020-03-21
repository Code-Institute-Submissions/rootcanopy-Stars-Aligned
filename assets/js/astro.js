var astro;
var aURL = "https://www.astrobin.com/api/v1/image/?'subjects=M31'&api_key=9d8a5fd659f1b00e1180351a407736728fd10b55&api_secret=caa9162960edeb25866241f41b741ee4086ae72f&format=json";

console.log('about to fetch some stars');
//CALL TO ASTRO API
fetch(aURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });