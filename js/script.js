window.onload = function() {

  const form = document.querySelector("form");
  
  form.onsubmit = function(e) {
    e.preventDefault();

    let healthcare = parseInt(document.getElementById("healthcare"));
    let money = parseInt(document.getElementById("money"));
    let medicare  = parseInt(document.getElementById("medicare"));
    let trump = parseInt(document.getElementById("trump"));
    let abort = parseInt(document.getElementById("abort"));
    let loans = parseInt(document.getElementById("loans"));
  
    let over50 = document.getElementById("over_50");
    over50.setAttribute("class", "hidden");
    let under50 = document.getElementById("under_50");
    under50.setAttribute("class", "hidden");
    let independent = document.getElementById("thirty");
    thirty.setAttribute("class", "hidden");

    const age = parseInt(document.querySelector("input#age").value);
    const score = healthcare + money + medicare + trump + abort + loans;
    console.log (score)


    if (age >= 50 && score <= 30) {
      over50.removeAttribute("class");
    }
      else if (score === 30) { 
        thirty.removeAttribute("class");
      }
    
      else {
      under50.removeAttribute("class");
      }

    };
  };