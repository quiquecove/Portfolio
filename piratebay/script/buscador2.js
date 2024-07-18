function filterHeadings(searchTerm) {
    var iframe = document.createElement('iframe');
    iframe.src = '../index.html';
    iframe.style.display = 'none';
  
    iframe.addEventListener('load', function() {
      var doc = iframe.contentDocument || iframe.contentWindow.document;
      var headings = Array.from(doc.getElementsByTagName('h3'));
  
      var foundMatch = false;
  
      headings.forEach(function (heading) {
        if (heading.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
          heading.style.display = 'block';
          foundMatch = true;
        } else {
          heading.style.display = 'none';
        }
      });
  
      if (!foundMatch) {
        alert('No se encontraron coincidencias.');
      } else {
        openFile(searchTerm);
      }
    });
  
    document.body.appendChild(iframe);
  }
  
  function openFile(searchTerm) {
    var fileName = searchTerm.toLowerCase() + '.html';
    window.open(fileName, '_self');
  }
  
  function performSearch(event) {
    if (event.keyCode === 13) {
      var searchTerm = event.target.value;
      filterHeadings(searchTerm);
    }
  }
  
  var searchInput = document.getElementById('search-input');
  searchInput.addEventListener('keydown', performSearch);
  