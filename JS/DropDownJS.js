
window.onload=function() {

let dropdown = document.getElementById('locality-dropdown');

dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose the Name of Star you want to visualize';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://raw.githubusercontent.com/gagankaushal/NASA_Space_Apps/master/Exoplanets.json';

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].pl_hostname;
      option.value = data[i].abbreviation;
      dropdown.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
} 


request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();


}
