function appendHeader() {

    var  headerDiv = document.createElement("div");
    headerDiv.setAttribute("id","headerId");
    headerDiv.setAttribute("class","content-header hidden");
    
    headerDiv.style.backgroundColor = "#012745";
    headerDiv.style.width = "100%";
    headerDiv.style.height = "0.5px";
    headerDiv.style.overflow = "hidden";
    headerDiv.style.border = "none";
    headerDiv.style.display = "none";
    
    var iframeTag = document.createElement("iframe");
    iframeTag.setAttribute("src", "https://sitedev.psr-inc.com/en/page-header/");
    iframeTag.setAttribute("scrolling", "no");
    iframeTag.setAttribute("frameborder","0");
    iframeTag.style.width = "100%";
    iframeTag.style.height = "0.5px";
    
    headerDiv.appendChild(iframeTag);    
    document.head.appendChild(headerDiv);
    const startSync = performance.now();

    iframeTag.onload = function(){
        const endSync = performance.now();
        console.log("Finish: " + ((endSync - startSync)/1000).toFixed(2));
        var iframeDoc = this.contentDocument
        var header = iframeDoc.getElementsByTagName('header')[0];
        document.body.prepend(header); 
        
        var pesquisa = document.getElementsByClassName("fazer-pesquisa")[0];
       
        headerDiv.remove();
        pesquisa.remove();
        //changeLinks()
    };

    // function changeLinks(){
    //     var header = document.getElementsByTagName('header')[0];
    //     var links = header.querySelectorAll("a");
    //     var count = 0;
    //     links.forEach(function(link){
    //         let href = link.href

    //         if(href.includes("https://www.psr-inc.com/en/software/?tabId=") && !href.includes("none")){
    //             count +=1
    //             link.href = href.replace(href,"./" + (link.text).toLowerCase() + ".html");
               
    //         }            
    //     })        
    // }
}

appendHeader();