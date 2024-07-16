
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
                                        "href": "https://sitedev.psr-inc.com/en/"
                                    },
                                    "children":[
                                        {
                                            "tag":"img",
                                            "attributes":{
                                                "src": "https://sitedev.psr-inc.com/wp-content/themes/psr-template/assets/img/logo-v2.png",
                                                "alt": "logo PSR"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "tag":"a",
                                    "attributes":{
                                        "href": "#",
                                        "class": "menu-mobile"
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
                            },
                            "children": [
                                {
                                    "tag": "a",
                                    "attributes": {
                                        "href": "#",
                                        "class": "menu-mobile-close"
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
                                                                "href": "https://sitedev.psr-inc.com/en/who_we_are/"
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
                                                                                "href": "https://sitedev.psr-inc.com/en/who_we_are/"
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
                                                                                "href": "https://sitedev.psr-inc.com/en/who_we_are/equipe/"
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
                                                                                "href": "https://sitedev.psr-inc.com/en/parceria/"
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
                                                                            "href": "https://sitedev.psr-inc.com/en/clientes/"
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
                                                                            "href": "https://sitedev.psr-inc.com/en/psr-academy-2/"
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
                                                                                "href": "https://sitedev.psr-inc.com/en/localizacao/"
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
                                                                "href": "./en/software/"
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
                                                                                "href": "./en/software/?tabId=sddp&subPanelId=sub-panel-sddp-1"
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
                                                                                                "href": "./en/software/?tabId=sddp&subPanelId=sub-panel-sddp-1"
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
                                                                                            "href": "./en/software/?tabId=sddp&subPanelId=sub-panel-sddp-2"
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
                                                                                                "href": "./en/software/?tabId=sddp&subPanelId=sub-panel-sddp-3"
                                                                                            },
                                                                                            "text": "NCP"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes": {
                                                                                        "id": "menu-item-13462",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13462"
                                                                                    },
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes": {
                                                                                                "href": "./en/software/?tabId=sddp&subPanelId=sub-panel-sddp-4"
                                                                                            },
                                                                                            "text": "NetPlan"
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
                                                                                "href": "https://www.psr-inc.com/en/software/?tabId=renewables&subPanelId=sub-panel-renewables-1"
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
                                                                                "href": "https://www.psr-inc.com/en/software/?tabId=renewables&subPanelId=sub-panel-renewables-2"
                                                                            },
                                                                            "text": "SYNERGi"
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
                                                                    "text": "Supporting Activities"
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
                                                                            "id": "menu-item-13467",
                                                                            "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13467"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                            "tag": "a",
                                                                            "attributes": {
                                                                                "href": "https://www.psr-inc.com/en/software/?tabId=consulting&subPanelId=sub-panel-consulting-1"
                                                                            },
                                                                            "text": "TechSupport"
                                                                            }
                                                                        ]
                                                                        },
                                                                        {
                                                                        "tag": "li",
                                                                        "attributes": {
                                                                            "id": "menu-item-13468",
                                                                            "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13468"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                            "tag": "a",
                                                                            "attributes": {
                                                                                "href": "https://www.psr-inc.com/en/software/?tabId=consulting&subPanelId=sub-panel-consulting-2"
                                                                            },
                                                                            "text": "Training"
                                                                            }
                                                                        ]
                                                                        },
                                                                        {
                                                                        "tag": "li",
                                                                        "attributes": {
                                                                            "id": "menu-item-13469",
                                                                            "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13469"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                            "tag": "a",
                                                                            "attributes": {
                                                                                "href": "https://www.psr-inc.com/en/software/?tabId=consulting&subPanelId=sub-panel-consulting-3"
                                                                            },
                                                                            "text": "Publication"
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
                                                            "href": "https://sitedev.psr-inc.com/en/consultoria/"
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
                                                            "href": "https://sitedev.psr-inc.com/en/projetos/"
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
                                                            "href": "https://sitedev.psr-inc.com/en/noticias/"
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
                                                            "href": "https://sitedev.psr-inc.com/en/contato/"
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
                                                        "src": "/app/identificarUsuario.aspx?idiomaSessao=3",
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

    // Adiciona atributos ao elemento
    if (json.attributes) {
        for (const [key, value] of Object.entries(json.attributes)) {
            element.setAttribute(key, value);
        }
    }

    // Adiciona texto ao elemento, se existir
    if (json.text) {
        element.textContent = json.text;
    }

    // Adiciona filhos ao elemento, se existirem
    if (json.children && Array.isArray(json.children)) {
        createChildren(element, json.children);
    }

    return element;
}

const startSync = performance.now();
var resultado = menu();
document.body.prepend(resultado);
const endSync = performance.now();
console.log("Elapse time header in seconds: " + ((endSync - startSync)/1000).toFixed(2));    

/*
function menu(){
    let menuLink = {
        "nav": {
          "tag":"nav",
          "attributes":{
            "id": "menu",
            "class": "nav slide-left",
          },
          "children": [
            {
              "tag": "a",
              "attributes": {
                "href": "#",
                "class": "menu-mobile-close"
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
                     //   "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-13451"
                      },
                      "children": [
                        {
                          "tag": "a",
                          "attributes": {
                            "href": "https://sitedev.psr-inc.com/en/who_we_are/"
                          },
                          "text": "About Us"
                        },
                        {
                          "tag": "ul",
                        //  "attributes": {
                        //    "class": "sub"
                        //  },
                          "children": [
                            {
                              "tag": "li",
                              "attributes": {
                                "id": "menu-item-13452",
                              //  "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13452"
                              },
                              "children": [
                                {
                                  "tag": "a",
                                  "attributes": {
                                    "href": "https://sitedev.psr-inc.com/en/who_we_are/"
                                  },
                                  "text": "Who we are"
                                }
                              ]
                            },
                            {
                              "tag": "li",
                              "attributes": {
                                "id": "menu-item-13453",
                             //   "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13453"
                              },
                              "children": [
                                {
                                  "tag": "a",
                                  "attributes": {
                                    "href": "https://sitedev.psr-inc.com/en/who_we_are/equipe/"
                                  },
                                  "text": "Team"
                                }
                              ]
                            },
                            {
                              "tag": "li",
                              "attributes": {
                                "id": "menu-item-13454",
                             //   "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13454"
                              },
                              "children": [
                                {
                                  "tag": "a",
                                  "attributes": {
                                    "href": "https://sitedev.psr-inc.com/en/parceria/"
                                  },
                                  "text": "Partnerships"
                                }
                              ]
                            },
                            {
                              "tag": "li",
                              "attributes": {
                                "id": "menu-item-13455",
                             //   "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13455"
                              },
                              "children": [
                                {
                                  "tag": "a",
                                  "attributes": {
                                    "href": "https://sitedev.psr-inc.com/en/clientes/"
                                  },
                                  "text": "Clients"
                                }
                              ]
                            },
                            {
                              "tag": "li",
                              "attributes": {
                                "id": "menu-item-15531",
                             //   "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-15531"
                              },
                              "children": [
                                {
                                  "tag": "a",
                                  "attributes": {
                                    "href": "https://sitedev.psr-inc.com/en/psr-academy-2/"
                                  },
                                  "text": "PSR Academy"
                                }
                              ]
                            },
                            {
                              "tag": "li",
                              "attributes": {
                                "id": "menu-item-13456",
                             //   "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13456"
                              },
                              "children": [
                                {
                                  "tag": "a",
                                  "attributes": {
                                    "href": "https://sitedev.psr-inc.com/en/localizacao/"
                                  },
                                  "text": "Location"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    // {
                    //   "tag": "li",
                    //   "attributes": {
                    //     "id": "menu-item-13457",
                    //     "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-13457"
                    //   },
                    //   "children": [
                    //     {
                    //       "tag": "a",
                    //       "attributes": {
                    //         "href": "https://www.psr-inc.com/en/software/"
                    //       },
                    //       "text": "Software"
                    //     },
                    //     {
                    //       "tag": "ul",
                    //       "attributes": {
                    //         "class": "sub"
                    //       },
                    //       "children": [
                    //         {
                    //           "tag": "li",
                    //           "attributes": {
                    //             "id": "menu-item-13458",
                    //             "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-13458"
                    //           },
                    //           "children": [
                    //             {
                    //               "tag": "a",
                    //               "attributes": {
                    //                 "href": "https://www.psr-inc.com/en/software/?tabId=sddp&subPanelId=sub-panel-sddp-1"
                    //               },
                    //               "text": "Modelling of Energy Systems"
                    //             },
                    //             {
                    //               "tag": "ul",
                    //               "attributes": {
                    //                 "class": "sub2"
                    //               },
                    //               "children": [
                    //                 {
                    //                   "tag": "li",
                    //                   "attributes": {
                    //                     "id": "menu-item-13459",
                    //                     "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13459"
                    //                   },
                    //                   "children": [
                    //                     {
                    //                       "tag": "a",
                    //                       "attributes": {
                    //                         "href": "https://www.psr-inc.com/en/software/?tabId=sddp&subPanelId=sub-panel-sddp-1"
                    //                       },
                    //                       "text": "SDDP"
                    //                     }
                    //                   ]
                    //                 },
                    //                 {
                    //                   "tag": "li",
                    //                   "attributes": {
                    //                     "id": "menu-item-13460",
                    //                     "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13460"
                    //                   },
                    //                   "children": [
                    //                     {
                    //                       "tag": "a",
                    //                       "attributes": {
                    //                         "href": "https://www.psr-inc.com/en/software/?tabId=sddp&subPanelId=sub-panel-sddp-2"
                    //                       },
                    //                       "text": "OptGen"
                    //                     }
                    //                   ]
                    //                 },
                    //                 {
                    //                   "tag": "li",
                    //                   "attributes": {
                    //                     "id": "menu-item-13461",
                    //                     "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13461"
                    //                   },
                    //                   "children": [
                    //                     {
                    //                       "tag": "a",
                    //                       "attributes": {
                    //                         "href": "https://www.psr-inc.com/en/software/?tabId=sddp&subPanelId=sub-panel-sddp-3"
                    //                       },
                    //                       "text": "NCP"
                    //                     }
                    //                   ]
                    //                 },
                    //                 {
                    //                   "tag": "li",
                    //                   "attributes": {
                    //                     "id": "menu-item-13462",
                    //                     "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13462"
                    //                   },
                    //                   "children": [
                    //                     {
                    //                       "tag": "a",
                    //                       "attributes": {
                    //                         "href": "https://www.psr-inc.com/en/software/?tabId=sddp&subPanelId=sub-panel-sddp-4"
                    //                       },
                    //                       "text": "NetPlan"
                    //                     }
                    //                   ]
                    //                 }
                    //               ]
                    //             }
                    //           ]
                    //         },
                    //         {
                    //           "tag": "li",
                    //           "attributes": {
                    //             "id": "menu-item-13465",
                    //             "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-13465"
                    //           },
                    //           "children": [
                    //             {
                    //               "tag": "a",
                    //               "attributes": {
                    //                 "href": "https://www.psr-inc.com/en/software/?tabId=renewables&subPanelId=sub-panel-renewables-1"
                    //               },
                    //               "text": "Modeling of Renewable Resources"
                    //             },
                    //             {
                    //               "tag": "ul",
                    //               "attributes": {
                    //                 "class": "sub2"
                    //               },
                    //               "children": [
                    //                 {
                    //                   "tag": "li",
                    //                   "attributes": {
                    //                     "id": "menu-item-13463",
                    //                     "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13463"
                    //                   },
                    //                   "children": [
                    //                     {
                    //                       "tag": "a",
                    //                       "attributes": {
                    //                         "href": "https://www.psr-inc.com/en/software/?tabId=renewables&subPanelId=sub-panel-renewables-1"
                    //                       },
                    //                       "text": "HERA"
                    //                     }
                    //                   ]
                    //                 },
                    //                 {
                    //                   "tag": "li",
                    //                   "attributes": {
                    //                     "id": "menu-item-13464",
                    //                     "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13464"
                    //                   },
                    //                   "children": [
                    //                     {
                    //                       "tag": "a",
                    //                       "attributes": {
                    //                         "href": "https://www.psr-inc.com/en/software/?tabId=renewables&subPanelId=sub-panel-renewables-2"
                    //                       },
                    //                       "text": "SYNERGi"
                    //                     }
                    //                   ]
                    //                 }
                    //               ]
                    //             }
                    //           ]
                    //         },
                    //         {
                    //           "tag": "li",
                    //           "attributes": {
                    //             "id": "menu-item-13466",
                    //             "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-13466"
                    //           },
                    //           "children": [
                    //             {
                    //               "tag": "a",
                    //               "attributes": {
                    //                 "href": "https://www.psr-inc.com/en/software/?tabId=consulting&subPanelId=sub-panel-consulting-1"
                    //               },
                    //               "text": "Supporting Activities"
                    //             },
                    //             {
                    //               "tag": "ul",
                    //               "attributes": {
                    //                 "class": "sub2"
                    //               },
                    //               "children": [
                    //                 {
                    //                   "tag": "li",
                    //                   "attributes": {
                    //                     "id": "menu-item-13467",
                    //                     "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13467"
                    //                   },
                    //                   "children": [
                    //                     {
                    //                       "tag": "a",
                    //                       "attributes": {
                    //                         "href": "https://www.psr-inc.com/en/software/?tabId=consulting&subPanelId=sub-panel-consulting-1"
                    //                       },
                    //                       "text": "TechSupport"
                    //                     }
                    //                   ]
                    //                 },
                    //                 {
                    //                   "tag": "li",
                    //                   "attributes": {
                    //                     "id": "menu-item-13468",
                    //                     "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13468"
                    //                   },
                    //                   "children": [
                    //                     {
                    //                       "tag": "a",
                    //                       "attributes": {
                    //                         "href": "https://www.psr-inc.com/en/software/?tabId=consulting&subPanelId=sub-panel-consulting-2"
                    //                       },
                    //                       "text": "Training"
                    //                     }
                    //                   ]
                    //                 },
                    //                 {
                    //                   "tag": "li",
                    //                   "attributes": {
                    //                     "id": "menu-item-13469",
                    //                     "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-13469"
                    //                   },
                    //                   "children": [
                    //                     {
                    //                       "tag": "a",
                    //                       "attributes": {
                    //                         "href": "https://www.psr-inc.com/en/software/?tabId=consulting&subPanelId=sub-panel-consulting-3"
                    //                       },
                    //                       "text": "Publication"
                    //                     }
                    //                   ]
                    //                 }
                    //               ]
                    //             }
                    //           ]
                    //         }
                    //       ]
                    //     }
                    //   ]
                    // },
                    // {
                    //   "tag": "li",
                    //   "attributes": {
                    //     "id": "menu-item-13470",
                    //     "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13470"
                    //   },
                    //   "children": [
                    //     {
                    //       "tag": "a",
                    //       "attributes": {
                    //         "href": "https://sitedev.psr-inc.com/en/consultoria/"
                    //       },
                    //       "text": "Consulting"
                    //     }
                    //   ]
                    // },
                    // {
                    //   "tag": "li",
                    //   "attributes": {
                    //     "id": "menu-item-13471",
                    //     "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13471"
                    //   },
                    //   "children": [
                    //     {
                    //       "tag": "a",
                    //       "attributes": {
                    //         "href": "https://sitedev.psr-inc.com/en/projetos/"
                    //       },
                    //       "text": "Projects"
                    //     }
                    //   ]
                    // },
                    // {
                    //   "tag": "li",
                    //   "attributes": {
                    //     "id": "menu-item-13472",
                    //     "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13472"
                    //   },
                    //   "children": [
                    //     {
                    //       "tag": "a",
                    //       "attributes": {
                    //         "href": "https://sitedev.psr-inc.com/en/noticias/"
                    //       },
                    //       "text": "News"
                    //     }
                    //   ]
                    // },
                    // {
                    //   "tag": "li",
                    //   "attributes": {
                    //     "id": "menu-item-13473",
                    //     "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13473"
                    //   },
                    //   "children": [
                    //     {
                    //       "tag": "a",
                    //       "attributes": {
                    //         "href": "https://sitedev.psr-inc.com/en/contato/"
                    //       },
                    //       "text": "Contact"
                    //     }
                    //   ]
                    // }
                  ]
                }
              ]
            }
          ]
        }
      }
    var teste =   createElementFromJSON(menuLink.nav);  
    return teste;      
}
*/