
function appendFooter() {

    const startSync = performance.now();
    window.addEventListener('DOMContentLoaded', function() {
        fetch("https://sitedev.psr-inc.com/en/page-header/")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na rede');
                }
                return response.text();
            })
            .then(data => {
                let tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;
                var footer = tempDiv.getElementsByTagName('footer')[0];
                document.body.append(footer);
                const endSync = performance.now();
                console.log("Elapse time footer in seconds: " + ((endSync - startSync)/1000).toFixed(2));           
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    });    
}

appendFooter();