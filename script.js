
function clearScreen() {
    document.getElementById("result").value = "";
}
 

function display(value) {
    document.getElementById("result").value += value;
}
 

function calculate() {
    var p = document.getElementById("result").value;
   try{
       var q = eval(p);
       if (isNaN(q)) {
        throw new Error("Invalid input");
    }
    document.getElementById("result").value = q;
   } catch (error) {
    alert("Error: " + error.message);
   }
   }

