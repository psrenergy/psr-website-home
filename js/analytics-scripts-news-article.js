document.addEventListener("DOMContentLoaded", () => {
    const tagCloud = document.getElementById('analytics-news-tag-cloud');
    const recentNews = document.getElementById('analytics-news-recent-news');

    // Usando fetch para carregar dados de JSON (simulação)
    fetch('news.json')
        .then(response => response.json())
        .then(data => {
            const newsData = data.find(news => news.url === "url-to-full-article-8");
            const recentNewsData = data.filter(news => news.url !== "url-to-full-article-8").slice(0, 3); // Excluindo a atual e pegando 3 recentes

            // Preenchendo as tags
            const tags = new Set();
            data.forEach(news => {
                news.tags.forEach(tag => {
                    tags.add(tag);
                });
            });

            Array.from(tags).slice(0, 20).forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.classList.add('badge', 'badge-secondary', 'mr-2', 'mb-2');
                tagElement.textContent = tag;
                tagElement.addEventListener('click', () => {
                    window.location.href = `news.html?filter=${tag}`;
                });
                tagCloud.appendChild(tagElement);
            });

            // Preenchendo as notícias recentes
            recentNewsData.forEach(news => {
                const newsElement = document.createElement('li');
                newsElement.innerHTML = `<a href="${news.url}">
                                            <h6>${news.title}</h6>
                                            <p>${news.authors.join(", ")} - ${new Date(news.date).toLocaleDateString()}</p>
                                         </a>`;
                recentNews.appendChild(newsElement);
            });
        })
        .catch(error => console.error('Erro ao carregar os dados das notícias:', error));
});