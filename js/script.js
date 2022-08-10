window.onload = function() {

  const form = document.querySelector("form");
  
  form.onsubmit = function(e) {
    e.preventDefault();
    hideResults();
  
    let over50 = document.getElementById("over_50");
    over50.setAttribute("class", "hidden");
    let under50 = document.getElementById("under_50");
    under50.setAttribute("class", "hidden");
  
    const age = parseInt(document.querySelector("input#age").value);
    let 
  
    if (age >= 50) {
      over50.removeAttribute("class");
    } 
      if (age <=50 &&  )
      else {
  
      under18.removeAttribute("class");
  
      }
    };
  };