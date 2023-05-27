function fetchCatFacts() {
    fetch('https://catfact.ninja/facts')
      .then(response => response.json())
      .then(data => {
        const catList = document.getElementById('catList');
  
        data.data.forEach(cat => {
          const li = document.createElement('li');
          const title = document.createElement('h3');
          const description = document.createElement('p');
  
          title.textContent = cat.fact;
          description.textContent = `Length: ${cat.length}`;
  
          li.appendChild(title);
          li.appendChild(description);
          catList.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Gabim gjatë kërkesës:', error);
      });
  }
  fetchCatFacts();

  function redirectToDetail(event) {
    const fact = event.target.querySelector('h3').textContent;
    const length = event.target.querySelector('p').textContent.split(': ')[1];
    
    // Krijoni URL-në e faqes së detajit duke përdorur faktin dhe gjatësinë
    const detailUrl = `detail.html?fact=${encodeURIComponent(fact)}&length=${encodeURIComponent(length)}`;
    
    // Ridrejto në faqen e detajit
    window.location.href = detailUrl;
  }
  function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }
  
  function showFactDetails() {
    const title = document.getElementById('factTitle');
    const length = document.getElementById('factLength');
    
    const fact = getParameterByName('fact');
    const factLength = getParameterByName('length');
    
    title.textContent = fact;
    length.textContent = `Gjatësia: ${factLength}`;
  }
  
  showFactDetails();

  function deleteFact() {
    if (confirm('A jeni të sigurt që dëshironi ta fshini faktin?')) {
      // Implementoni logjikën për të fshirë faktin nga lista
      alert('Fakti është fshirë!');
    }
  }
  
  