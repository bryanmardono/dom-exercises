const container = document.querySelector('#container')

const p1 = document.createElement('p');
p1.textContent = "Hey I'm Red!";
p1.setAttribute('id', 'paragraph');

//paragraph.style.color = "red";
container.appendChild(p1);
document.getElementById('paragraph').style.color = "red";

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.setAttribute('id', 'h3');

container.appendChild(h3);
document.getElementById('h3').style.color = 'blue';

const div = document.createElement('div');
div.setAttribute('id', 'div');

container.appendChild(div);
document.getElementById('div').style.borderStyle = 'solid';
document.getElementById('div').style.borderColor = 'black';
document.getElementById('div').style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1);

const p2 = document.createElement('p');
p2.textContent = "me too";
div.appendChild(p2);




