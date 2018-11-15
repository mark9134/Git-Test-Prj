console.log('is script running successfully?');

var ips = document.querySelector('.p1').textContent;
console.log(ips);

document.querySelector('.p1').addEventListener('click', function() {
    var colors = ['red', 'blue', 'green', 'black']
    var msg = ['I did this', 'Four Score and seven years ago', 'Lorem Ipsum'];
    c = colors[Math.floor(Math.random() * 3)];
    m = msg[Math.floor(Math.random() * 3)];

    document.querySelector('.p1').style.color = c;
    document.querySelector('.p1').textContent = m;

})
