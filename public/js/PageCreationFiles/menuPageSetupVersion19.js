"use strict";

var currentEWorldPage = "Menu"; // this should be up here all the time to work again from the menu (after the first time)

importAnExternalUtilityJSFile("UtilityForAll", "js/utilityForAllVersion19.js");
importAnExternalUtilityJSFile("UtilityForFlag", "js/utilityForFlagsVersion19.js");
importAnExternalUtilityJSFile("WorldFlags", "js/OneCountryLanguageTextJSFiles/worldFlagsVersion19.js");
importAnExternalUtilityJSFile("SVGFiles", "js/OneCountryLanguageTextJSFiles/flagsSVGFilesVersion19.js");

function finalizeMenuPage() {

    initializationUtilityForAll(); // get the initial application values (default or saved)
    var startupProgram = startupValuesJSONObject.startWith;
    if (startupProgram && startupProgram == "id_MenuStart") {
        setMenuImage(true);
    }
    else {
        if (initialMenuItems[startupProgram]) {
            initialMenuItems[startupProgram](startupProgram);
        }
        else {
          setMenuImage(); // show menu if the selected application failed (shouldn't)
          console.log("a bug to fix: " + startupProgram + " doesn't exist!");
        }
    }
}

function setMenuImage(firstTime) {
    var menuBody = document.createElement("body");
    menuBody.setAttribute("name","menu");
    var menuHeader = document.createElement("header");
    menuHeader.setAttribute("id","id_Header");
    menuHeader.setAttribute("class","center");
    var menuH1 = document.createElement("h1");
    menuH1.setAttribute("id","id_FirstMessage");
    menuH1.setAttribute("class","appLanguageSel");
    menuH1.innerHTML = selectedApplicationLanguageTexts["id_MenuStart"];
    var menuH2 = document.createElement("h2");
    addApplicationLanguageSelectionDropDownBox(menuH2);
    menuHeader.appendChild(menuH1);
    menuHeader.appendChild(menuH2);
    var menuMain = document.createElement("main");
    menuMain.setAttribute("id","mainBody");
    menuMain.setAttribute("class","center");
    var menuNav = document.createElement("nav");
    menuNav.setAttribute("id","id_Navigation");
    menuNav.setAttribute("data-nav","menu");
    menuNav.setAttribute("class","center");
    var menuFooter = document.createElement("footer");
    menuFooter.setAttribute("class","center");
    var menuFooterP = document.createElement("p");
    menuFooterP.setAttribute("id","id_CopyRight");
    var menuFooterP2 = document.createElement("p");
    menuFooterP2.setAttribute("id","id_LanguageImplementedBy");
    menuFooter.appendChild(menuFooterP);
    menuFooter.appendChild(menuFooterP2);

    var menuImage = document.createElement("img");
    menuImage.setAttribute("src","/images/_world.png");
    menuImage.setAttribute("alt","World View");
    menuImage.setAttribute("id","menuWorldView");
    menuMain.appendChild(menuImage);

    menuBody.appendChild(menuHeader);
    menuBody.appendChild(menuMain);
    menuBody.appendChild(menuNav);
    menuBody.appendChild(menuFooter);

    setTimeout(function() {
        if (document.body)
            document.getElementById("topHTML").replaceChild(menuBody, document.body);
        else
            document.getElementById("topHTML").appendChild(menuBody);
        setNavFooterTags("menu", true);
  }, 100);
}

function importAnExternalUtilityJSFile(jsFileName, jsURL)
{
    var ifExternalJSExist = document.getElementById("id_" + jsFileName + "Script");
    if (ifExternalJSExist) {
        if (currentEWorldPage == "eWorld Global" && jsFileName == 'Worldmap') { // onload: loaded but not ready: weird
            setTimeout(function() {
                finalizeGlobalPage();
            }, 100);
        }
        else if (currentEWorldPage == "eWorld Countries" && jsFileName == 'CountriesTableData') {
            setTimeout(function() {
                finalizeCountriesPage();
            }, 150);
        }
        else if (currentEWorldPage == "eWorld Regional" && jsFileName == 'SaFlags') {
            setTimeout(function() {
                finalizeRegionalPage();
            }, 30);
        }
    }
    else {
        var externalJavaScript = document.createElement('script');
        externalJavaScript.setAttribute("id", "id_" + jsFileName + "Script");
        externalJavaScript.type = 'text/javascript';
        externalJavaScript.src = jsURL;
        externalJavaScript.onload = function()
        {
            // Global Time: set flags from saved Object (no loop no SVG country flag retrieval: Just one Object retreival)
            if (currentEWorldPage == "eWorld Global" && jsFileName == 'Worldmap') { // onload: loaded but not ready: weird
                setTimeout(function() {
                    finalizeGlobalPage();
                }, 100);
            }
            else if (currentEWorldPage == "eWorld Countries" && jsFileName == 'CountriesTableData') {
              setTimeout(function() {
                    finalizeCountriesPage();
              }, 150);
            }
            else if (currentEWorldPage == "eWorld Regional" && jsFileName == 'SaFlags') {
                setTimeout(function() {
                    finalizeRegionalPage();
                }, 50);
            }
            else if (currentEWorldPage == "Menu" && jsFileName == 'SVGFiles') {
                setTimeout(function() {
                    finalizeMenuPage();
                }, 100);
            }
        }
        document.head.appendChild(externalJavaScript);
    }
}
