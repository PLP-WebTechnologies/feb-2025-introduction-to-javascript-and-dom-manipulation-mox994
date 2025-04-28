document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('text').textContent = 'Text has been changed!';
});

document.getElementById('toggleColorBtn').addEventListener('click', function() {
    const paragraph = document.getElementById('text');
    if (paragraph.style.color === 'blue') {
        paragraph.style.color = 'black';
    } else {
        paragraph.style.color = 'blue';
    }
});

document.getElementById('addElementBtn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a newly added element.';
    document.getElementById('newElements').appendChild(newElement);
});
