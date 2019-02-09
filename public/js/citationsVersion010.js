"use strict";

currentEWorldPage = "Citation";
var citationBody = document.createElement("body");
citationBody.setAttribute("name","citations");

var citationHeader = document.createElement("header");
citationHeader.setAttribute("id","id_Header");
citationHeader.setAttribute("class","center");

var citationH1 = document.createElement("h1");
citationH1.setAttribute("id","id_FirstMessage");
citationH1.setAttribute("class","appLanguageSel");
citationH1.innerHTML = selectedApplicationLanguageTexts["id_Citations"];

var citationH2 = document.createElement("h2");
addApplicationLanguageSelectionDropDownBox(citationH2);
citationHeader.appendChild(citationH1);
citationHeader.appendChild(citationH2);

var citationMain = document.createElement("main");
citationMain.setAttribute("id","mainBody");
citationMain.setAttribute("class","nestedFlexCitation");

var citationAside = document.createElement("aside");
citationAside.setAttribute("class","citationList");
var citationArticle = document.createElement("article");

var citationAsideH2 = document.createElement("h2");
citationAsideH2.setAttribute("class","pBorder aboutCitationTitle");
citationAsideH2.setAttribute("id","id_EWorldMagic");
citationAsideH2.innerHTML = selectedApplicationLanguageTexts["id_EWorldMagic"]

citationArticle.appendChild(citationAsideH2);

addCitationPBlock("/images/square_logo.png", "SimpleMaps", selectedApplicationLanguageTexts["id_InteractiveMaps"], "https://simplemaps.com/","id_InteractiveMaps");
addCitationPBlock("/images/Flag_of_the_United_Nations.svg", "United Nations", selectedApplicationLanguageTexts["id_CountryInformation"], "http://data.un.org/en/index.html",
    "id_CountryInformation");
addCitationPBlock("/images/Wikimedia-logo.svg","Wikimedia", selectedApplicationLanguageTexts["id_SVGNationalFlags"],
    "https://commons.wikimedia.org/wiki/Category:SVG_flags_by_country","id_SVGNationalFlags");
addCitationPBlock("/images/Seal_of_the_United_States_Navy_Band.png", "USA Navy Band", selectedApplicationLanguageTexts["id_NationalAnthem"],
    "http://www.navyband.navy.mil/anthems.html","id_NationalAnthem");
addCitationPBlock("/images/CentOS_Graphical_Symbol.svg", "CentOS", selectedApplicationLanguageTexts["id_LinuxServer"], "https://www.centos.org","id_LinuxServer");
addCitationPBlock("/images/Apache_PoweredBy.svg", "Apache", selectedApplicationLanguageTexts["id_WebServer"], "https://httpd.apache.org","id_WebServer");
addCitationPBlock("/images/iredmail.png", "iRedMail", selectedApplicationLanguageTexts["id_MailServer"], "https://www.iredmail.org","id_MailServer");
addCitationPBlock("/images/CIA.jpeg", "CIA Factbook", selectedApplicationLanguageTexts["id_WorldFactsCia"],
    "https://www.cia.gov/library/publications/the-world-factbook/","id_WorldFactsCia");
addCitationPBlock("/images/Wikipedia.svg", "Wikipedia", selectedApplicationLanguageTexts["id_WorldFactsWiki"], "https://www.wikipedia.org/","id_WorldFactsWiki");

citationAside.appendChild(citationArticle);
citationMain.appendChild(citationAside);

setTimeout(function () {
    createNavFooterAddIntoBodyAndReplaceBody(citationBody, citationHeader, citationMain, "Citations");
}, 50);

// Application Language Drop Down (Select/Options)
setTimeout(function () {
    setApplicationLanguageDropDownBox("appLanguageToUse", JSON.parse(applicationLanguageDropDownValues));
    document.getElementById("appLanguageToUse").selectedIndex = applicationTextLanguageSelectedIndex;
}, 450);

function addCitationPBlock(imageSource, aText, pText, URL, idName)
{
    var citationAsideP = document.createElement("p");
    citationAsideP.setAttribute("class","pBorder");
    var citationAsideImg = document.createElement("img");
    citationAsideImg.setAttribute("src",imageSource);
    citationAsideImg.setAttribute("alt",aText);
    citationAsideImg.setAttribute("class","citationIcon vertialAlignMiddle");
    var citationAsideA = document.createElement("a");
    citationAsideA.setAttribute("href", URL);
    citationAsideA.setAttribute("target","_blank");
    citationAsideA.setAttribute("class","vertialAlignMiddle");
    citationAsideA.innerHTML = aText;
    var citationAsideSpan = document.createElement("span");
    citationAsideSpan.setAttribute("class","marginOnSidesABit vertialAlignMiddle");
    citationAsideSpan.setAttribute("id",idName);
    citationAsideSpan.innerHTML = pText;

    citationAsideP.appendChild(citationAsideImg);
    citationAsideP.appendChild(citationAsideA);
    citationAsideP.appendChild(citationAsideSpan);

    citationArticle.appendChild(citationAsideP);
}
