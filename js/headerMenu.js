
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
                                                                "href": "https://www.psr-inc.com/en/who_we_are/"
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
                                                                                "href": "https://www.psr-inc.com/en/who_we_are/"
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
                                                                                "href": "https://www.psr-inc.com/en/who_we_are/equipe/"
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
                                                                                "href": "https://www.psr-inc.com/en/parceria/"
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
                                                                            "href": "https://www.psr-inc.com/en/clientes/"
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
                                                                            "href": "https://www.psr-inc.com/en/psr-academy-2/"
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
                                                                                "href": "https://www.psr-inc.com/en/localizacao/"
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
                                                                "href": "https://www.psr-inc.com/software"
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
                                                                                "href": "./software"
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
                                                                        "href": "./tsl.html"
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
                                                                        "href": "./psrcloud.html"
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
                                                            "href": "https://www.psr-inc.com/en/consultoria/"
                                                        },
                                                        "text": "Consulting"
                                                        },
                                                        {
                                                            "tag": "ul",
                                                            "attributes":{
                                                                "class": "sub"
                                                            },
                                                            "children":[
                                                                {
                                                                    "tag": "li",
                                                                    "attributes": {
                                                                        "id": "menu-item-134733",
                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134734"
                                                                    },
                                                                    "children":[
                                                                        {
                                                                        "tag": "a",
                                                                        "attributes": {
                                                                            "href": "https://www.psr-inc.com/en/consulting/?tabId=modeling&amp;subPanelId=sub-panel-modeling-1"
                                                                        },
                                                                        "text": "Analyses of Power Systems"
                                                                        },
                                                                        {
                                                                            "tag": "ul",
                                                                            "attributes":{
                                                                                "class": "sub2"
                                                                            },
                                                                            "children":[
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134744",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134745"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=modeling&subPanelId=sub-panel-modeling-1"
                                                                                            },
                                                                                            "text": "Regulatory Consulting"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134755",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134756"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=modeling&subPanelId=sub-panel-modeling-2"
                                                                                            },
                                                                                            "text": "Market Design"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134766",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134767"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=modeling&amp;subPanelId=sub-panel-modeling-3"
                                                                                            },
                                                                                            "text": "Integrated Energy Planning"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134777",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134778"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=modeling&subPanelId=sub-panel-modeling-4"
                                                                                            },
                                                                                            "text": "Pricing and Tariff Projections"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134788",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134789"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=modeling&amp;subPanelId=sub-panel-modeling-5"
                                                                                            },
                                                                                            "text": "Water Resources"

                                                                                        }
                                                                                    ]
                                                                                },
                                                                                
                                                                            ]
                                                                        }
                                                                       
                                                                    ]
                                                                },
                                                                {
                                                                    "tag": "li",
                                                                    "attributes": {
                                                                        "id": "menu-item-134799",
                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134800"
                                                                    },
                                                                    "children":[
                                                                        {
                                                                        "tag": "a",
                                                                        "attributes": {
                                                                            "href": "https://www.psr-inc.com/en/consulting/?tabId=consulting&amp;subPanelId=sub-panel-consulting-1"
                                                                        },
                                                                        "text": "Economic and Strategic Evaluations"
                                                                        },
                                                                        {
                                                                            "tag": "ul",
                                                                            "attributes":{
                                                                                "class": "sub2"
                                                                            },
                                                                            "children":[
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134800",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134801"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=consulting&subPanelId=sub-panel-consulting-1"
                                                                                            },
                                                                                            "text": "Investment Analysis"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134811",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134812"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=consulting&subPanelId=sub-panel-consulting-2"
                                                                                            },
                                                                                            "text": "Risk and Portfolio Management"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134822",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134823"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=consulting&subPanelId=sub-panel-consulting-3"
                                                                                            },
                                                                                            "text": "Support For Generation and Transmission Auctions"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134833",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134834"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=consulting&subPanelId=sub-panel-consulting-4"
                                                                                            },
                                                                                            "text": "Evaluation of Supply Alternatives"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134844",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134845"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=consulting&subPanelId=sub-panel-consulting-5"
                                                                                            },
                                                                                            "text": "Strategic Planning"

                                                                                        }
                                                                                    ]
                                                                                },
                                                                                
                                                                            ]
                                                                        }                                                                        
                                                                    ]
                                                                },
                                                                {
                                                                    "tag": "li",
                                                                    "attributes": {
                                                                        "id": "menu-item-134855",
                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134856"
                                                                    },
                                                                    "children":[
                                                                        {
                                                                        "tag": "a",
                                                                        "attributes": {
                                                                            "href": "https://www.psr-inc.com/en/consulting/?tabId=meio-ambiente&subPanelId=sub-panel-meio-ambiente-1"
                                                                        },
                                                                        "text": "Technical Analysis of Projects"
                                                                        },
                                                                        {
                                                                            "tag": "ul",
                                                                            "attributes":{
                                                                                "class": "sub2"
                                                                            },
                                                                            "children":[
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134866",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134867"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=meio-ambiente&subPanelId=sub-panel-meio-ambiente-1"
                                                                                            },
                                                                                            "text": "Connection Studies"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134877",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134878"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=meio-ambiente&subPanelId=sub-panel-meio-ambiente-2"
                                                                                            },
                                                                                            "text": "Evaluation of Generation Cuts"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134888",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134889"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=meio-ambiente&subPanelId=sub-panel-meio-ambiente-3"
                                                                                            },
                                                                                            "text": "Assessment of Environmental Impacts"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134899",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134900"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=meio-ambiente&subPanelId=sub-panel-meio-ambiente-4"
                                                                                            },
                                                                                            "text": "Energy Efficiency Studies"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                
                                                                                
                                                                            ]
                                                                        }                                                                        
                                                                    ]
                                                                },
                                                                {
                                                                    "tag": "li",
                                                                    "attributes": {
                                                                        "id": "menu-item-134900",
                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134901"
                                                                    },
                                                                    "children":[
                                                                        {
                                                                        "tag": "a",
                                                                        "attributes": {
                                                                            "href": "https://www.psr-inc.com/en/consulting/?tabId=descarbonizacaoo-e-esg&subPanelId=sub-panel-descarbonizacaoo-e-esg-1"
                                                                        },
                                                                        "text": "Decarbonization and ESG"
                                                                        },
                                                                        {
                                                                            "tag": "ul",
                                                                            "attributes":{
                                                                                "class": "sub2"
                                                                            },
                                                                            "children":[
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134911",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134912"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=descarbonizacaoo-e-esg&subPanelId=sub-panel-descarbonizacaoo-e-esg-1"
                                                                                            },
                                                                                            "text": "Building Decarbonization Strategies"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134922",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134923"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=descarbonizacaoo-e-esg&subPanelId=sub-panel-descarbonizacaoo-e-esg-2"
                                                                                            },
                                                                                            "text": "Insertion of Low Carbon Technologies"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes":{
                                                                                        "id": "menu-item-134933",
                                                                                        "class": "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-134934"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes":{
                                                                                                "href": "https://www.psr-inc.com/en/consulting/?tabId=descarbonizacaoo-e-esg&subPanelId=sub-panel-descarbonizacaoo-e-esg-3"
                                                                                            },
                                                                                            "text": "Clean Energy Certification"
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
                                                        "id": "menu-item-134944",
                                                        "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-134945"
                                                    },
                                                    "children": [
                                                        {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "href": "https://www.psr-inc.com/en/publicacoes/"
                                                        },
                                                        "text": "Publications"
                                                        },
                                                        {
                                                            "tag": "ul",
                                                            "attributes":{
                                                                "class": "sub"
                                                            },
                                                            "children":[
                                                                {
                                                                    "tag": "li",
                                                                    "attributes":{
                                                                        "id": "menu-item-134955",
                                                                        "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-134956"
                                                                    },
                                                                    "children":[
                                                                        {
                                                                            "tag": "a",
                                                                            "attributes": {
                                                                                "href": "https://www.psr-inc.com/en/publicacoes/"                                                                                
                                                                            },
                                                                            "text": "Energy Report"
                                                                        },
                                                                        {
                                                                            "tag": "ul",
                                                                            "attributes": {
                                                                                "class":"sub2"
                                                                            },
                                                                            "children":[
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes": {
                                                                                        "id": "menu-item-134966",
                                                                                        "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-134967"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes": {
                                                                                                "href":"https://www.psr-inc.com/en/publicacoes/"
                                                                                            },
                                                                                            "text": "About" 
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "li",
                                                                                    "attributes": {
                                                                                        "id": "menu-item-134977",
                                                                                        "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-134978"
                                                                                    },
                                                                                    "children":[
                                                                                        {
                                                                                            "tag": "a",
                                                                                            "attributes": {
                                                                                                "href":"https://www.psr-inc.com/en/publicacoes/issues/"
                                                                                            },
                                                                                            "text": "Issues" 
                                                                                        }
                                                                                    ]                                                                                    
                                                                                }                                                                                
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "tag": "li",
                                                                    "attributes":{
                                                                        "id": "menu-item-134988",
                                                                        "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-134989"
                                                                    },
                                                                    "children":[
                                                                        {
                                                                            "tag": "a",
                                                                            "attributes": {
                                                                                "href": "https://www.psr-inc.com/en/publicacoes/articles-and-papers/"                                                                                
                                                                            },
                                                                            "text":"Scientific Production"
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
                                                        "id": "menu-item-13472",
                                                        "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13472"
                                                    },
                                                    "children": [
                                                        {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "href": "https://www.psr-inc.com/en/noticias/"
                                                        },
                                                        "text": "News"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "tag": "li",
                                                    "attributes": {
                                                        "id": "menu-item-13473",
                                                        "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-13474"
                                                    },
                                                    "children": [
                                                        {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "href": "https://www.psr-inc.com/en/contact-us/"
                                                        },
                                                        "text": "Contacts"
                                                        },
                                                        {
                                                            "tag": "ul",
                                                            "attributes":{
                                                                "class": "sub"
                                                            },
                                                            "children":[
                                                                {
                                                                    "tag": "li",
                                                                    "attributes":{
                                                                        "id": "menu-item-134750",
                                                                        "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-134751"
                                                                    },
                                                                    "children":[
                                                                        {
                                                                            "tag":"a",
                                                                            "attributes":{
                                                                                "href": "https://www.psr-inc.com/en/contact-us/"
                                                                            },
                                                                            "text": "Contact us" 
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "tag": "li",
                                                                    "attributes":{
                                                                        "id": "menu-item-134752",
                                                                        "class": "menu-item menu-item-type-post_type menu-item-object-page menu-item-134753"
                                                                    },
                                                                    "children":[
                                                                        {
                                                                            "tag":"a",
                                                                            "attributes":{
                                                                                "href": "https://www.psr-inc.com/en/work-with-us/"
                                                                            },
                                                                            "text": "Work with us" 
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
  


