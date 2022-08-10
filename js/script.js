window.onload = function() {

  const form = document.querySelector("form");
  
  form.onsubmit = function(e) {
    e.preventDefault();
    hideResults();
    
    let healthcare = document.getElementById("healthcare");
    let money = document.getElementById("money");
    let medicare  = document.getElementById("medicare");
    let trump = document.getElementById("trump");
    let abort = document.getElementById("abort");
    let loans = document.getElementById("loans");
  
    let over50 = document.getElementById("over_50");
    over50.setAttribute("class", "hidden");
    let under50 = document.getElementById("under_50");
    under50.setAttribute("class", "hidden");
    let independent = document.getElementById("thirty");
    thirty.setAttribute("class,hidden");

    const age = parseInt(document.querySelector("input#age").value);
    const score = add("healthcare" + "money" + "medicare" + "trump" + "abort" + "loans");
  
    if (age >= 50 && score <= 30) {
      over50.removeAttribute("class");
    }
      else {
  
      under50.removeAttribute("class");
  
      }
    };
  };