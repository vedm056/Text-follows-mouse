var container = document.getElementById('container');
var text = document.getElementById('text');
container.addEventListener('mousemove', function(event){
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    
    text.style.left = mouseX + 'px';
    text.style.top = mouseY + 'px';
})