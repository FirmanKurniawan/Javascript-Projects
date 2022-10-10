<div id="wrapper">
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</div>
<script>
  function asTabs(node) {
    var divChildNodes = node.getElementsByTagName('div');
    Array.prototype.forEach.call(divChildNodes, function(element){
      var button = document.createElement('button');
      button.textContent = element.getAttribute('data-tabname');
      node.insertBefore(button, divChildNodes[0]);
      element.style.display = 'none';
    });
    var btnChildNodes = node.getElementsByTagName('button');
    
    divChildNodes[0].style.display = 'block';
    btnChildNodes[0].style.backgroundColor = 'red';
    btnChildNodes[1].style.backgroundColor = 'yellow';
    btnChildNodes[2].style.backgroundColor = 'yellow';
    
    addEventListener('click', function(event) {
      if(event.target.nodeName === 'BUTTON') {
        if(event.target.textContent === 'one') {
          divChildNodes[0].style.display = 'block';
          divChildNodes[1].style.display = 'none';
          divChildNodes[2].style.display = 'none';
          btnChildNodes[0].style.backgroundColor = 'red';
          btnChildNodes[1].style.backgroundColor = 'yellow';
          btnChildNodes[2].style.backgroundColor = 'yellow';
        } else if(event.target.textContent === 'two') {
          divChildNodes[1].style.display = 'block';
          divChildNodes[0].style.display = 'none';
          divChildNodes[2].style.display = 'none';
          btnChildNodes[1].style.backgroundColor = 'red';
          btnChildNodes[0].style.backgroundColor = 'yellow';
          btnChildNodes[2].style.backgroundColor = 'yellow';
        } else if(event.target.textContent === 'three') {
          divChildNodes[2].style.display = 'block';
          divChildNodes[0].style.display = 'none';
          divChildNodes[1].style.display = 'none';
          btnChildNodes[2].style.backgroundColor = 'red';
          btnChildNodes[0].style.backgroundColor = 'yellow';
          btnChildNodes[1].style.backgroundColor = 'yellow';
        }
      }
    });
  }
  asTabs(document.querySelector("#wrapper"));
</script>
