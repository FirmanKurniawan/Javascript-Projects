<input type="text">
<script>
  var field = document.querySelector("input");
  // Your code here.
  field.addEventListener('keypress', function(event) {
    var key = String.fromCharCode(event.charCode);
    if(/[qwx]/i.test(key)) {
      event.preventDefault();
    }
  });
</script>
