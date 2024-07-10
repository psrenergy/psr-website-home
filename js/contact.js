document.addEventListener('DOMContentLoaded', function () {
    const subjectElement = document.getElementById('subject');
    const topicContainer = document.getElementById('topic').parentElement;
    const titleContainer = document.getElementById('title-container');
    const findUsElement = document.getElementById('find-us');
    const findUsOtherContainer = document.getElementById('find-us-other-container');

    const topics = {
        'General Information': ['New business', 'PSR Solutions', 'Schedule a meeting', 'Other'],
        'Technical Support': ['SDDP', 'OptGen', 'NCP', 'TSL', 'PSR Cloud', 'PSRIO', 'Other'],
        'Licensing': ['Commercial License', 'Trial License', 'Academic License', 'Other'],
    };

    function updateTopics(subject) {
        const topicSelect = document.getElementById('topic');
        topicSelect.innerHTML = '';
        if (topics[subject]) {
            topics[subject].forEach(function (topic) {
                const option = document.createElement('option');
                option.value = topic;
                option.text = topic;
                topicSelect.appendChild(option);
            });
        }
    }

    subjectElement.addEventListener('change', function () {
        const selectedSubject = subjectElement.value;

        if (selectedSubject === 'Other') {
            titleContainer.style.display = 'block';
            topicContainer.style.display = 'none';
        } else {
            titleContainer.style.display = 'none';
            topicContainer.style.display = 'block';
            updateTopics(selectedSubject);
        }
    });

    findUsElement.addEventListener('change', function () {
        const selectedFindUs = findUsElement.value;

        if (selectedFindUs === 'Other') {
            findUsOtherContainer.style.display = 'block';
        } else {
            findUsOtherContainer.style.display = 'none';
        }
    });

    function setPredefinedValues() {
        const urlParams = new URLSearchParams(window.location.search);
        const predefinedSubject = urlParams.get('subject');
        const predefinedTopic = urlParams.get('topic');

        if (predefinedSubject) {
            subjectElement.value = predefinedSubject;
            subjectElement.dispatchEvent(new Event('change'));

            if (predefinedTopic) {
                const topicSelect = document.getElementById('topic');
                topicSelect.value = predefinedTopic;
            }
        } else {
            updateTopics(subjectElement.value);
        }
    }

    setPredefinedValues();

    // Adicionar evento para alterar a seta do dropdown
    const formSelects = document.querySelectorAll('.form-select');
    formSelects.forEach(select => {
        select.addEventListener('focus', function () {
            select.classList.add('expanded');
        });
        select.addEventListener('blur', function () {
            select.classList.remove('expanded');
        });
    });
});
