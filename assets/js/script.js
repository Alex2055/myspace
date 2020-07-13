function myFunction() {
   breed = document.querySelector('#searchTerm').value;
 
  
  fetch(
    'https://api.thedogapi.com/v1/breeds/search?q=' + breed + '&api_key=74a8d6a7-fb77-4451-999a-01a85de265cc'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
      
       
       for (var i = 0; i < response.length; i++){
        var newdiv = document.createElement("DIV");
        newdiv.setAttribute("class", "new-div");
    
        var innertext = document.createTextNode(response[i].name);
        newdiv.appendChild(innertext);
    
        document.getElementById("response-container").appendChild(newdiv);
        
       }
    });
}
