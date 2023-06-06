 // JavaScript code to center the circle element
 var circle = document.getElementById("circle");
    
 
circle.addEventListener("mouseenter", function(){
    document.getElementById("result").innerHTML = "You are in the circle";
})

circle.addEventListener("mouseout", function(){
    document.getElementById("result").innerHTML = "You are outsite the circle";
})


  