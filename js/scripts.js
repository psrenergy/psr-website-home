function toggleSection(clickedCard) {
    const content = clickedCard.getAttribute('data-content');
    const bgColor = clickedCard.getAttribute('data-bg-color');
    
    // Ensure the temporary section exists
    let $tempSection = $('#temporary-section');
    if (!$tempSection.length) {
      $tempSection = $('<div/>', {
        id: 'temporary-section',
        class: 'collapse w-100',
        html: '<div class="container"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><p></p></div>'
      }).css('background-color', bgColor); // Set initial background color
      $('body').append($tempSection); // Append to body to cover the full width
      
      // Close button functionality
      $tempSection.on('click', '.close', function() {
        $tempSection.collapse('hide');
      });
    }
  
    // Update the content and background color
    $tempSection.find('p').text(content);
    $tempSection.css('background-color', bgColor);
  
    // Calculate the position to insert the temporary section
    const cardPosition = $(clickedCard).position().top;
    let insertAfterRow = -1;
    $('#grid-container .grid-item').each(function(index) {
      if ($(this).position().top === cardPosition) {
        insertAfterRow = index;
      }
    });
  
    // Move the temporary section after the last card in the row
    $('#grid-container .grid-item').eq(insertAfterRow).after($tempSection);
  
    // Show the section
    $tempSection.collapse('show');
  }


  document.addEventListener('DOMContentLoaded', function() {
    const celestialBodies = document.querySelectorAll('.planet, .sun');
    const container = document.querySelector('.integration-area');
  
    function adjustOrbitsForMobile() {
        celestialBodies.forEach(body => {
            if (body.classList.contains('planet')) {
                // Verificar se é mobile e ajustar o valor do data-orbit
                const orbitRadius = window.innerWidth < 768 ? body.getAttribute('data-orbit-mobile') * 50 : body.getAttribute('data-orbit') * 50;
                const angle = body.getAttribute('data-angle');
                const x = orbitRadius * Math.cos(angle * Math.PI / 180);
                const y = orbitRadius * Math.sin(angle * Math.PI / 180);
                body.style.width = `${body.getAttribute('data-size')}px`;
                body.style.height = `${body.getAttribute('data-size')}px`;
                body.style.left = `calc(50% + ${x}px)`;
                body.style.top = `calc(50% + ${y}px)`;
                body.style.transform = 'translate(-50%, -50%)';
                body.style.backgroundColor = body.getAttribute('data-color');
            }

          // Adicionando evento de clique que redireciona para uma URL
          celestialBodies.forEach(body => {
            body.addEventListener('click', function() {
            window.location.href = body.getAttribute('data-url');
          });
        });
  
            if (window.innerWidth > 768) {
            // Create tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip-model';
            tooltip.innerHTML = `<strong>${body.id}</strong>`;
            container.appendChild(tooltip);  // Append to container to avoid overflow issues

  
            // Event listeners for mouseover and mouseout
            body.addEventListener('mouseover', function(e) {
                const rect = body.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
  
                tooltip.style.display = 'block';
                tooltip.style.left = `${rect.left - containerRect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`; // Center horizontally relative to container
                tooltip.style.top = `${rect.bottom - containerRect.top + 3}px`; // Position below the planet or sun relative to container
  
                // Diminuir a opacidade de todos os outros corpos celestes
                celestialBodies.forEach(otherBody => {
                    if (otherBody !== body) {
                        otherBody.style.opacity = '0.5';
                    }
                });
            });
  
            body.addEventListener('mouseout', function() {
                tooltip.style.display = 'none';
  
                // Restaurar a opacidade de todos os corpos celestes ao sair
                celestialBodies.forEach(otherBody => {
                    otherBody.style.opacity = '1';
                });
            });
          }
        });
    }
  
    // Detectar mudança de tamanho da tela
    window.addEventListener('resize', adjustOrbitsForMobile);
  
    // Ajustar órbitas no carregamento inicial
    adjustOrbitsForMobile();

// script.js
// Adicione a partir daqui o script que estava no HTML
document.addEventListener("DOMContentLoaded", () => {
  const newsContainer = document.getElementById('analytics-news-newsContainer');
  const tagContainer = document.getElementById('analytics-news-tagContainer');
  const tagSearch = document.getElementById('analytics-news-tagSearch');
  const clearSearch = document.getElementById('analytics-news-clearSearch');
  const loadMore = document.getElementById('analytics-news-loadMore');
  const selectedTagsContainer = document.getElementById('analytics-news-selectedTags');
  const suggestions = document.getElementById('analytics-news-suggestions');
  const urlParams = new URLSearchParams(window.location.search);
  const initialFilter = urlParams.get('filter') ? [urlParams.get('filter')] : [];

  let allNewsData = [];
  let displayedNews = [];
  let currentIndex = 0;
  const itemsPerPage = 9;
  let selectedTags = [...initialFilter];

  fetch('news.json')
      .then(response => response.json())
      .then(data => {
          allNewsData = data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Ordena as notícias por data
          const tags = new Set();
          const authors = new Set();
          allNewsData.forEach(news => {
              news.tags.forEach(tag => tags.add(tag));
              news.authors.forEach(author => authors.add(author));
          });

          updateTagContainer(Array.from(tags), allNewsData);
          if (initialFilter.length > 0) {
              filterNewsByTag(initialFilter, allNewsData);
              initialFilter.forEach(tag => addSelectedTag(tag, allNewsData));
          } else {
              displayNews(allNewsData);
          }

          tagSearch.addEventListener('input', () => {
              const searchTerm = tagSearch.value.toLowerCase().trim();
              updateSuggestions(searchTerm, tags, authors);
          });

          tagSearch.addEventListener('keypress', (e) => {
              if (e.key === 'Enter') {
                  e.preventDefault();
                  const searchTerm = tagSearch.value.toLowerCase().trim();
                  if (searchTerm !== '' && !selectedTags.includes(searchTerm)) {
                      selectedTags.push(searchTerm);
                      addSelectedTag(searchTerm, allNewsData);
                      tagSearch.value = '';
                      updateSuggestions('', tags, authors);
                  }
              }
          });

          clearSearch.addEventListener('click', clearAllFilters);

          loadMore.addEventListener('click', () => {
              loadMoreNews();
          });
      });

  function displayNews(newsData) {
      newsContainer.innerHTML = '';
      currentIndex = 0;
      displayedNews = [];
      loadMore.style.display = 'none';

      if (newsData.length > itemsPerPage) {
          loadMore.style.display = 'block';
      }

      displayedNews = newsData.slice(0, itemsPerPage);
      currentIndex += itemsPerPage;
      appendNews(displayedNews);
  }

  function loadMoreNews() {
      const moreNews = allNewsData.slice(currentIndex, currentIndex + itemsPerPage);
      displayedNews = displayedNews.concat(moreNews);
      currentIndex += itemsPerPage;
      appendNews(moreNews);

      if (currentIndex >= allNewsData.length) {
          loadMore.style.display = 'none';
      }
  }

  function appendNews(newsData) {
      const mostRecentDate = allNewsData[0].date; // Data da notícia mais recente
      newsData.forEach(news => {
          const isNew = new Date(news.date).getTime() === new Date(mostRecentDate).getTime();
          const card = document.createElement('div');
          card.classList.add('col-lg-4', 'col-md-6', 'mb-4');
          card.innerHTML = `
              <div class="card hover-y">
                  <div class="card-head position-relative">
                      <img src="${news.image}" alt="${news.title}" class="card-img-top lazy">
                      <div class="badge-container">
                          <span class="position-absolute top-0 left-0 mt-3 ml-3 badge badge-md badge-light"><i class="la la-calendar"></i> ${new Date(news.date).toLocaleDateString()}</span>
                          ${isNew ? '<div class="analytics-news-new-badge position-absolute top-0 right-0 mt-3 mr-3">NEW</div>' : ''}
                      </div>
                  </div>
                  <div class="card-body">
                      <ul class="list-item">
                          <li class="d-inline-block mr-3"><span class="fal fa-user mr-2 colorBluePSR2 font-14"></span>By ${news.authors.join(', ')}</li>
                      </ul>
                      <h4 class="card-title"><a href="${news.url}"><b>${news.title}</b></a></h4>
                      <div class="analytics-news-tags" style="margin-bottom: 10px !important;">
                          ${news.tags.map(tag => `<span class="analytics-news-tag-card">${tag}</span>`).join('')}
                      </div>
                      <p class="card-text" style="margin-bottom: 10px !important;">${news.content}</p>
                      <a href="${news.url}" class="btn-link btn-news-link-right">Continue Reading <i class="fal fa-angle-right ml-1"></i></a>
                  </div>
              </div>
          `;
          newsContainer.appendChild(card);
      });
  }

  function filterNewsByTag(tags, newsData) {
      if (tags.length === 0) {
          displayNews(newsData);
          return;
      }
      const filteredNews = newsData.filter(news =>
          tags.every(tag => news.tags.includes(tag) || news.authors.some(author => author.toLowerCase().includes(tag.toLowerCase())))
      );
      displayNews(filteredNews);
  }

  function updateTagContainer(tags, newsData) {
      tagContainer.innerHTML = '';
      tags.forEach(tag => {
          if (!selectedTags.includes(tag.toLowerCase())) {
              const tagElement = document.createElement('div');
              tagElement.classList.add('analytics-news-tag');
              tagElement.textContent = tag;
              tagElement.addEventListener('click', () => {
                  if (!selectedTags.includes(tag.toLowerCase())) {
                      selectedTags.push(tag.toLowerCase());
                      addSelectedTag(tag, newsData);
                      updateSuggestions('', tags, authors);
                  }
              });
              tagContainer.appendChild(tagElement);
          }
      });
  }

  function addSelectedTag(tag, newsData) {
      const tagElement = document.createElement('div');
      tagElement.classList.add('analytics-news-tag');
      tagElement.textContent = tag;
      tagElement.addEventListener('click', () => {
          selectedTags = selectedTags.filter(t => t !== tag.toLowerCase());
          tagElement.remove();
          filterNewsByTag(selectedTags, newsData);
          updateTagContainer(Array.from(new Set(newsData.flatMap(news => news.tags))), newsData);
      });
      selectedTagsContainer.appendChild(tagElement);
      filterNewsByTag(selectedTags, newsData);
      updateTagContainer(Array.from(new Set(newsData.flatMap(news => news.tags))), newsData);
  }

  function updateSuggestions(searchTerm, tags, authors) {
      suggestions.innerHTML = '';
      if (searchTerm.trim() !== '') {
          const filteredTags = Array.from(tags).filter(tag => tag.toLowerCase().includes(searchTerm));
          const filteredAuthors = Array.from(authors).filter(author => author.toLowerCase().includes(searchTerm));
          [...filteredTags, ...filteredAuthors].forEach(suggestion => {
              const suggestionItem = document.createElement('li');
              suggestionItem.textContent = suggestion;
              suggestionItem.addEventListener('click', () => {
                  if (!selectedTags.includes(suggestion.toLowerCase())) {
                      selectedTags.push(suggestion.toLowerCase());
                      addSelectedTag(suggestion, allNewsData);
                      tagSearch.value = '';
                      updateSuggestions('', tags, authors);
                  }
              });
              suggestions.appendChild(suggestionItem);
          });
      }
  }

  function clearAllFilters() {
      tagSearch.value = '';
      selectedTags = [];
      selectedTagsContainer.innerHTML = '';
      const tags = new Set(allNewsData.flatMap(news => news.tags));
      const authors = new Set(allNewsData.flatMap(news => news.authors));
      updateTagContainer(Array.from(tags), allNewsData);
      displayNews(allNewsData);
      updateSuggestions('', tags, authors);
  }
});

// Adicione a partir daqui o script existente do scripts.js
function toggleSection(clickedCard) {
  const content = clickedCard.getAttribute('data-content');
  const bgColor = clickedCard.getAttribute('data-bg-color');
  
  // Ensure the temporary section exists
  let $tempSection = $('#temporary-section');
  if (!$tempSection.length) {
      $tempSection = $('<div/>', {
      id: 'temporary-section',
      class: 'collapse w-100',
      html: '<div class="container"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><p></p></div>'
      }).css('background-color', bgColor); // Set initial background color
      $('body').append($tempSection); // Append to body to cover the full width
      
      // Close button functionality
      $tempSection.on('click', '.close', function() {
      $tempSection.collapse('hide');
      });
  }

  // Update the content and background color
  $tempSection.find('p').text(content);
  $tempSection.css('background-color', bgColor);

  // Calculate the position to insert the temporary section
  const cardPosition = $(clickedCard).position().top;
  let insertAfterRow = -1;
  $('#grid-container .grid-item').each(function(index) {
      if ($(this).position().top === cardPosition) {
      insertAfterRow = index;
      }
  });

  // Move the temporary section after the last card in the row
  $('#grid-container .grid-item').eq(insertAfterRow).after($tempSection);

  // Show the section
  $tempSection.collapse('show');
}

document.addEventListener('DOMContentLoaded', function() {
  const celestialBodies = document.querySelectorAll('.planet, .sun');
  const container = document.querySelector('.integration-area');

  function adjustOrbitsForMobile() {
      celestialBodies.forEach(body => {
          if (body.classList.contains('planet')) {
              // Verificar se é mobile e ajustar o valor do data-orbit
              const orbitRadius = window.innerWidth < 768 ? body.getAttribute('data-orbit-mobile') * 50 : body.getAttribute('data-orbit') * 50;
              const angle = body.getAttribute('data-angle');
              const x = orbitRadius * Math.cos(angle * Math.PI / 180);
              const y = orbitRadius * Math.sin(angle * Math.PI / 180);
              body.style.width = `${body.getAttribute('data-size')}px`;
              body.style.height = `${body.getAttribute('data-size')}px`;
              body.style.left = `calc(50% + ${x}px)`;
              body.style.top = `calc(50% + ${y}px)`;
              body.style.transform = 'translate(-50%, -50%)';
              body.style.backgroundColor = body.getAttribute('data-color');
          }

          // Adicionando evento de clique que redireciona para uma URL
          body.addEventListener('click', function() {
              window.location.href = body.getAttribute('data-url');
          });

          if (window.innerWidth > 768) {
              // Create tooltip
              const tooltip = document.createElement('div');
              tooltip.className = 'tooltip-model';
              tooltip.innerHTML = `<strong>${body.id}</strong>`;
              container.appendChild(tooltip);  // Append to container to avoid overflow issues

              // Event listeners for mouseover and mouseout
              body.addEventListener('mouseover', function(e) {
                  const rect = body.getBoundingClientRect();
                  const containerRect = container.getBoundingClientRect();

                  tooltip.style.display = 'block';
                  tooltip.style.left = `${rect.left - containerRect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`; // Center horizontally relative to container
                  tooltip.style.top = `${rect.bottom - containerRect.top + 3}px`; // Position below the planet or sun relative to container

                  // Diminuir a opacidade de todos os outros corpos celestes
                  celestialBodies.forEach(otherBody => {
                      if (otherBody !== body) {
                          otherBody.style.opacity = '0.5';
                      }
                  });
              });

              body.addEventListener('mouseout', function() {
                  tooltip.style.display = 'none';

                  // Restaurar a opacidade de todos os corpos celestes ao sair
                  celestialBodies.forEach(otherBody => {
                      otherBody.style.opacity = '1';
                  });
              });
          }
      });
  }

  // Detectar mudança de tamanho da tela
  window.addEventListener('resize', adjustOrbitsForMobile);

  // Ajustar órbitas no carregamento inicial
  adjustOrbitsForMobile();
}
