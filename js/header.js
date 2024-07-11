function appendHeaderFooter() {   
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

                let header = tempDiv.getElementsByTagName('header')[0];
                let footer = tempDiv.getElementsByTagName('footer')[0];

                var pesquisa = header.getElementsByClassName("fazer-pesquisa")[0];
                pesquisa.remove();
                
                document.body.prepend(header);
                document.body.append(footer);

                const endSync = performance.now();
                console.log("Elapse time header in seconds: " + ((endSync - startSync)/1000).toFixed(2));           
            })
            .catch(error => {
                console.error('Erro:', error);
            });
        
    });
}

appendHeaderFooter();