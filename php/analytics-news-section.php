<?php
                        /*
                        Template Name: PSR Analytics OptGen
                        */
                        get_header();
                        ?>
                        
<div class="container">
<div class="analytics-news-section mb-4">
<div class="row" id="analytics-news-sectionContainer">
<!-- Os cards de notícias serão inseridos aqui -->
</div>
<button class="analytics-news-card-btn" id="analytics-news-viewMore">View all</button>
</div>
</div>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script>
        document.addEventListener("DOMContentLoaded", () => {
            const sectionContainer = document.getElementById('analytics-news-sectionContainer');
            const viewMore = document.getElementById('analytics-news-viewMore');
            const filterTag = "economia"; // Substitua pelo filtro desejado

            fetch('news.json')
                .then(response => response.json())
                .then(data => {
                    const filteredNews = data
                        .filter(news => news.tags.includes(filterTag))
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .slice(0, 3); // Mostra apenas 3 notícias

                    appendNews(filteredNews);

                    viewMore.addEventListener('click', () => {
                        window.location.href = `news.html?filter=${filterTag}`;
                    });
                });

            function appendNews(newsData) {
                const mostRecentDate = newsData[0].date; // Data da notícia mais recente
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
                    sectionContainer.appendChild(card);
                });
            }
        });
    </script>

                        <?php get_footer(); ?>
                        