var headings = Array.from(document.getElementsByTagName('h3'));

function filterHeadings(searchTerm) {
    var foundMatch = false;

    headings.forEach(function (heading) {
        if (heading.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
            heading.style.display = 'block';
            foundMatch = true;
        } else {
            heading.style.display = 'none';
        }
    });

    return foundMatch;
}

function openFile(searchTerm) {
    var fileName = 'web/'+searchTerm.toLowerCase() + '.html';
    window.location.href = fileName;
}

function performSearch(event) {
    if (event.keyCode === 13) {
        var searchTerm = event.target.value;
        var matchFound = filterHeadings(searchTerm);

        if (!matchFound) {
            alert('No se encontraron coincidencias.');
        } else {
            openFile(searchTerm);
        }
    }
}

var searchInput = document.getElementById('search-input');
searchInput.addEventListener('keydown', performSearch);




/////////////////////////////
var searchInput = document.getElementById('search-input');

// Agrega un event listener para el evento de clic
searchInput.addEventListener('click', function () {
    // Establece el color del texto en blanco
    this.style.color = 'white';
});