
function createHrefTag(url, text){

    let hrefTag = document.createElement("a");
    hrefTag.setAttribute("href",url);
    hrefTag.innerText = text;
}

function appendHeaderFooter() {   
    const startSync = performance.now();
    window.addEventListener('DOMContentLoaded', function() {
        let headerTag = document.createElement("header");
        headerTag.setAttribute("class","fixed-top");
            
        let navTag = document.createElement("nav");
        navTag.setAttribute("id","menu");
       
        let ulTag = document.createElement("ul");

    });
}

//appendHeaderFooter();


function menu(){
    let menuLink = {
        "header":{
            "tag":"header",
            "attributes":{
                "class":"fixed-top"
            },
            "children":[
                {
                    "tag":"div",
                    "attributes":{
                        "class":"content-header"
                    },
                    "children":[
                        {
                            "tag":"div",
                            "attributes":{
                                "class":"logo"
                            },
                            "children":[
                                {
                                    "tag":"a",
                                    "attributes":{
                                        "href": "https://www.psr-inc.com/en/"
                                    },
                                    "children":[
                                        {
                                            "tag":"img",
                                            "attributes":{
                                                "src": "https://www.psr-inc.com/wp-content/themes/psr-template/assets/img/logo-v2.png",
                                                "alt": "logo PSR"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "tag":"a",
                                    "attributes":{
                                        "href": "#",
                                        "class": "menu-mobile",
                                        "id": "hamburgerPSR"
                                    },
                                    "children":[
                                        {
                                            "tag":"span"
                                        },
                                        {
                                            "tag":"span"
                                        },
                                        {
                                            "tag":"span"
                                        },
                                    ]
                                }
                            ]
                        },
                        {                
                            "tag":"nav",
                            "attributes":{
                                "class": "nav slide-left",
                                "id": "menuLeft"
                            },
                            "children": [
                                {
                                    "tag": "a",
                                    "attributes": {
                                        "href": "#",
                                        "class": "menu-mobile-close",
                                        "id": "menu-mobile-close-id"
                                    }
                                },
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "menu-menu-ingles-container"
                                    },
                                    "children": [
                                        {
                                            "tag": "ul",
                                            "attributes": {
                                                "id": "menu-menu-ingles",
                                                "class": "menu"
                                            },
                                            "children": [
                                                {
                                                    "tag": "li",
                                                    "attributes": {
                                                        "id": "menu-item-13451",
                                                        "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-13451"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "./en/who_we_are/"
                                                            },
                                                            "text": "About Us"
                                                        },
                                                        {
                                                            "tag": "ul",
                                                            "attributes": {
                                                            "class": "sub"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "li",
                                                                    "attributes": {
                                                                    "id": "menu-item-13452",
                                                                    "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13452"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "a",
                                                                            "attributes": {
                                                                                "href": "./en/who_we_are/"
                                                                            },
                                                                            "text": "Who we are"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "tag": "li",
                                                                    "attributes": {
                                                                    "id": "menu-item-13453",
                                                                    "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13453"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "a",
                                                                            "attributes": {
                                                                                "href": "./en/who_we_are/equipe/"
                                                                            },
                                                                            "text": "Team"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "tag": "li",
                                                                    "attributes": {
                                                                    "id": "menu-item-13454",
                                                                    "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13454"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "a",
                                                                            "attributes": {
                                                                                "href": "./en/parceria/"
                                                                            },
                                                                            "text": "Partnerships"
                                                                            }
                                                                    ]
                                                                },
                                                                {
                                                                    "tag": "li",
                                                                    "attributes": {
                                                                    "id": "menu-item-13455",
                                                                    "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13455"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                        "tag": "a",
                                                                        "attributes": {
                                                                            "href": "./en/clientes/"
                                                                        },
                                                                        "text": "Clients"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                "tag": "li",
                                                                "attributes": {
                                                                "id": "menu-item-15531",
                                                                "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-15531"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "tag": "a",
                                                                        "attributes": {
                                                                            "href": "./en/psr-academy-2/"
                                                                        },
                                                                        "text": "PSR Academy"
                                                                    }
                                                                ]
                                                                },
                                                                {
                                                                    "tag": "li",
                                                                    "attributes": {
                                                                        "id": "menu-item-13456",
                                                                        "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13456"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "a",
                                                                            "attributes": {
                                                                                "href": "./en/localizacao/"
                                                                            },
                                                                            "text": "Location"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "tag": "li",
                                                    "attributes": {
                                                        "id": "menu-item-13457",
                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-13457"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "./landpage.html"
                                                            },
                                                            "text": "Software"
                                                        },
                                                        {
                                                            "tag": "ul",
                                                            "attributes": {
                                                                "class": "sub"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "li",
                                                                    "attributes": {
                                                                        "id": "menu-item-13458",
                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-13458"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "a",
                                                                            "attributes": {
                                                                                "href": "./landpage.html"
                                                                            },
                                                                            "text": "Modelling of Energy Systems"
                                                                        },
                                                                        {
                                                                            "tag": "ul",
                                                                            "attributes": {
                                                                                "class": "sub2"
                                                                            },
                                                                            "children": [
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes": {
                                                                                        "id": "menu-item-13459",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13459"
                                                                                    },
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes": {
                                                                                                "href": "./sddp.html"
                                                                                            },
                                                                                            "text": "SDDP"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes": {
                                                                                        "id": "menu-item-13460",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13460"
                                                                                    },
                                                                                    "children": [
                                                                                        {
                                                                                        "tag": "a",
                                                                                        "attributes": {
                                                                                            "href": "./optgen.html"
                                                                                        },
                                                                                        "text": "OptGen"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes": {
                                                                                        "id": "menu-item-13461",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13461"
                                                                                    },
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes": {
                                                                                                "href": "./ncp.html"
                                                                                            },
                                                                                            "text": "NCP"
                                                                                        }
                                                                                    ]
                                                                                }                                                                               
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                "tag": "li",
                                                                "attributes": {
                                                                    "id": "menu-item-13465",
                                                                    "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-13465"
                                                                },
                                                                "children": [
                                                                    {
                                                                    "tag": "a",
                                                                    "attributes": {
                                                                        "href": "https://www.psr-inc.com/en/software/?tabId=renewables&subPanelId=sub-panel-renewables-1"
                                                                    },
                                                                    "text": "Modeling of Renewable Resources"
                                                                    },
                                                                    {
                                                                    "tag": "ul",
                                                                    "attributes": {
                                                                        "class": "sub2"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                        "tag": "li",
                                                                        "attributes": {
                                                                            "id": "menu-item-13463",
                                                                            "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13463"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                            "tag": "a",
                                                                            "attributes": {
                                                                                "href": "./hera.html"
                                                                            },
                                                                            "text": "HERA"
                                                                            }
                                                                        ]
                                                                        },
                                                                        {
                                                                        "tag": "li",
                                                                        "attributes": {
                                                                            "id": "menu-item-13464",
                                                                            "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13464"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                            "tag": "a",
                                                                            "attributes": {
                                                                                "href": "./tsl.html"
                                                                            },
                                                                            "text": "TSL"
                                                                            }
                                                                        ]
                                                                        }
                                                                    ]
                                                                    }
                                                                ]
                                                                },
                                                                {
                                                                    "tag": "li",
                                                                    "attributes": {
                                                                        "id": "menu-item-13465",
                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-13465"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                        "tag": "a",
                                                                        "attributes": {
                                                                            "href": "./optvalue.html"
                                                                        },
                                                                        "text": "Financial Support Tools"
                                                                        },
                                                                        {
                                                                        "tag": "ul",
                                                                        "attributes": {
                                                                            "class": "sub2"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                            "tag": "li",
                                                                            "attributes": {
                                                                                "id": "menu-item-134633",
                                                                                "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-134633"
                                                                            },
                                                                            "children": [
                                                                                {
                                                                                "tag": "a",
                                                                                "attributes": {
                                                                                    "href": "./optvalue.html"
                                                                                },
                                                                                "text": "OptValue"
                                                                                }
                                                                            ]
                                                                            },
                                                                            {
                                                                            "tag": "li",
                                                                            "attributes": {
                                                                                "id": "menu-item-134644",
                                                                                "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-134644"
                                                                            },
                                                                            "children": [
                                                                                {
                                                                                "tag": "a",
                                                                                "attributes": {
                                                                                    "href": "./optfolio.html"
                                                                                },
                                                                                "text": "Optfolio"
                                                                                }
                                                                            ]
                                                                            }
                                                                        ]
                                                                        }
                                                                    ]
                                                                    },
                                                                {
                                                                "tag": "li",
                                                                "attributes": {
                                                                    "id": "menu-item-13466",
                                                                    "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-13466"
                                                                },
                                                                "children": [
                                                                    {
                                                                    "tag": "a",
                                                                    "attributes": {
                                                                        "href": "https://www.psr-inc.com/en/software/?tabId=consulting&subPanelId=sub-panel-consulting-1"
                                                                    },
                                                                    "text": "Computational Environments"
                                                                    },
                                                                    {
                                                                    "tag": "ul",
                                                                    "attributes": {
                                                                        "class": "sub2"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                        "tag": "li",
                                                                        "attributes": {
                                                                            "id": "menu-item-134677",
                                                                            "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-134677"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                            "tag": "a",
                                                                            "attributes": {
                                                                                "href": "./psrcloud.html"
                                                                            },
                                                                            "text": "PSRCloud"
                                                                            }
                                                                        ]
                                                                        }
                                                                    ]
                                                                    }
                                                                ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "tag": "li",
                                                    "attributes": {
                                                        "id": "menu-item-13470",
                                                        "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13470"
                                                    },
                                                    "children": [
                                                        {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "href": "./en/consultoria/"
                                                        },
                                                        "text": "Consulting"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "tag": "li",
                                                    "attributes": {
                                                        "id": "menu-item-13471",
                                                        "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13471"
                                                    },
                                                    "children": [
                                                        {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "href": "./en/projetos/"
                                                        },
                                                        "text": "Projects"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "tag": "li",
                                                    "attributes": {
                                                        "id": "menu-item-13472",
                                                        "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13472"
                                                    },
                                                    "children": [
                                                        {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "href": "./en/noticias/"
                                                        },
                                                        "text": "News"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "tag": "li",
                                                    "attributes": {
                                                        "id": "menu-item-13473",
                                                        "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13473"
                                                    },
                                                    "children": [
                                                        {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "href": "./en/contato/"
                                                        },
                                                        "text": "Contact"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tag":"div",
                            "attributes":{
                                "class":"icones-nav"
                            },
                            "children":[
                                {
                                    "tag":"ul",
                                    "attributes":{
                                        "class":"icons-extras"
                                    },
                                    "children":[
                                        {
                                            "tag":"li",
                                            "attributes":{
                                                "class":"user hide-modile",
                                                "style":"top: 5px;"
                                            },
                                            "children":[
                                                {
                                                    "tag":"iframe",
                                                    "attributes":{
                                                        "id":"cadastro",
                                                        "class":"cadastro",
                                                        "name": "identificacao",
                                                        "src": "https://www.psr-inc.com/app/identificarUsuario.aspx?idiomaSessao=3",
                                                        "frameborder":"no",
                                                        "scrolling":"no",
                                                        "style":"height:25px; margin-left:-171px; margin-top:1.9px;"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "tag":"div",
                                            "attributes":{
                                                "id":"menu-translation-top"
                                            },
                                            "children":[
                                                {
                                                    "tag":"li",
                                                    "attributes":{
                                                        "id":"menu-item-wpml-ls-892-en",
                                                        "class":"menu-item wpml-ls-slot-892 wpml-ls-item wpml-ls-item-en wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-892-en active"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "tag":"li"
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ]
        }
      }
    return createElementFromJSON(menuLink.header);         
}

function createChildren(parent, children) {
    children.forEach(child => {
        const childElement = createElementFromJSON(child);
        if (childElement) {
            parent.appendChild(childElement);
        }
    });
}

function createElementFromJSON(json) {
    
    if (!json || !json.tag) {      
        return null;
    }
    
    const element = document.createElement(json.tag);
    
    if (json.attributes) {
        for (const [key, value] of Object.entries(json.attributes)) {
            element.setAttribute(key, value);
        }
    }
    
    if (json.text) {
        element.textContent = json.text;
    }
    
    if (json.children && Array.isArray(json.children)) {
        createChildren(element, json.children);
    }

    return element;
}

const resultado = menu();
document.body.prepend(resultado);
const hamburgerPSR = document.getElementById("hamburgerPSR");

hamburgerPSR.addEventListener("click", function(){
    var menuLeft = document.getElementById("menuLeft");
    if (!menuLeft.classList.contains("anima")){
        menuLeft.classList.add("anima");
    }else{
        menuLeft.classList.remove("anima");
    }
});

const btnCloseMenuMobile = document.getElementById("menu-mobile-close-id");
btnCloseMenuMobile.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.classList.remove("anima");
});
  


