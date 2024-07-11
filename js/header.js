function appendHeader() {
   
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
                var header = tempDiv.getElementsByTagName('header')[0];
                document.body.prepend(header);
                const endSync = performance.now();
                console.log("Elapse time header in seconds: " + ((endSync - startSync)/1000).toFixed(2));           
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    });
}

appendHeader();