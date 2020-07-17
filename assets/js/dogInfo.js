// set all info to the page on load
window.addEventListener('DOMContentLoaded', function () {
    //pull object from session storage
    var breedobject = JSON.parse(window.sessionStorage.getItem('breedinfo'));
    console.log(breedobject);
    // fill dog info area
    document.getElementById('dogname').innerText = breedobject.name;
    document.getElementById('height').innerText = "Height: " + breedobject.height.imperial + " inches";
    document.getElementById('weight').innerText = "Weight: " + breedobject.weight.imperial + " pounds";
    document.getElementById('lifespan').innerText = "Lifespan: " + breedobject.life_span ;
    // we not always have temperament in object
    if(breedobject.temperament){
    document.getElementById('temperament').innerText = "Temperament: " + breedobject.temperament;
    }
// For Mike to use
console.log(breedobject.name);
var breednospases = breedobject.name.substring(breedobject.name.lastIndexOf(" ")+1).toLowerCase();
console.log(breednospases);
fetch(
    'https://dog.ceo/api/breed/' + breednospases + '/images/random'
)
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        console.log(response);
        document.getElementById('dogimage').setAttribute('src', response.message)

    })


});

