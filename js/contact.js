document.addEventListener('DOMContentLoaded', function () {
    const subjectElement = document.getElementById('subject');
    const topicContainer = document.getElementById('topic').parentElement;
    const titleContainer = document.getElementById('title-container');
    const findUsElement = document.getElementById('find-us');
    const findUsOtherContainer = document.getElementById('find-us-other-container');

    const topics = {
        '1':[{id:10,text:'New business'}, {id:11, text:'PSR Solutions'}, {id:12,text:'Schedule a meeting'},{id:13, text: 'Other'}],
        '2': [{id:20,text:'SDDP'}, {id:21,text:'OptGen'},{id:22, text: 'NCP'}, {id:23, text: 'TSL'}, {id:24, text: 'PSR Cloud'}, {id:10, text: 'PSRIO'}, {id:11, text: 'Other'}],
        '3': [{id:30, text:'Commercial License'}, {id:31, text:'Trial License'}, {id:32, text:'Academic License'}, {id:33, text:'Other'}]
    };

    function updateTopics(subject) {
        const topicSelect = document.getElementById('topic');
        topicSelect.innerHTML = '';
        if (topics[subject]) {
            topics[subject].forEach(function (topic) {
                const option = document.createElement('option');
                option.value = topic.id;
                option.text = topic.text;
                topicSelect.appendChild(option);
            });
        }
    }

    subjectElement.addEventListener('change', function (e) {
        const selectedSubject = e.target.value

        if (selectedSubject === '5') {//Other
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
