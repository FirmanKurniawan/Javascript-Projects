(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function checkVal() {
  var chkd =
    document.getElementById("c1").checked ||
    document.getElementById("c2").checked ||
    document.getElementById("c3").checked ||
    document.getElementById("c4").checked ||
    document.getElementById("c5").checked ||
    document.getElementById("c6").checked;

  if (chkd == true) {
    document.getElementById("checkAlert").style.display = "none";
  } else {
    document.getElementById("checkAlert").style.display = "block";
  }
}
