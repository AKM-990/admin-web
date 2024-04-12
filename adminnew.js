// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("checkStockBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var highlightBtn = document.getElementById("checkStockBtn");
  
    // Add click event listener to the button
    highlightBtn.addEventListener("click", function() {
      // Get the table element by ID
      var table = document.getElementById("medicineTable");
  
      // Get the first row (excluding the table header row)
      var rowToHighlight = table.rows[9]; // Index 1 for the first row after the header
  
      // Add red color to the row's content
      rowToHighlight.style.color = "red";
    });
  });
  