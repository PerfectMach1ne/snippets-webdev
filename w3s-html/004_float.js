let i = 0

function changeCSS() {
  if (i == 0) {
    document.getElementById("example-element").style.float = "none";
    i = 1;
  } else if (i == 1) {
    document.getElementById("example-element").style.float = "left";
    i = 2;
  } else if (i == 2) {
    document.getElementById("example-element").style.float = "right";
    i = 0;
  } 
  
}