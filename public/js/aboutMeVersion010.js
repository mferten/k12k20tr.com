"use strict";

currentEWorldPage = "AboutMe";
var aboutBody = document.createElement("body");
aboutBody.setAttribute("name","about");

var aboutHeader = document.createElement("header");
aboutHeader.setAttribute("id","id_Header");
aboutHeader.setAttribute("class","center");

var aboutH1 = document.createElement("h1");
aboutH1.setAttribute("id","id_FirstMessage");
aboutH1.innerHTML = selectedApplicationLanguageTexts["id_AboutMe"];

var aboutH2 = document.createElement("h2");
addApplicationLanguageSelectionDropDownBox(aboutH2);
aboutHeader.appendChild(aboutH1);
aboutHeader.appendChild(aboutH2);

var aboutMain = document.createElement("main");
aboutMain.setAttribute("id","mainBody");
aboutMain.setAttribute("class","nestedFlexAbout");

var aboutAsideLeft = document.createElement("aside");
aboutAsideLeft.setAttribute("class","aboutList");

var aboutAsideLeftH2 = document.createElement("h2");
aboutAsideLeftH2.setAttribute("id","id_HowItWorks");
aboutAsideLeftH2.setAttribute("class","pBorder aboutCitationTitle");
aboutAsideLeftH2.innerHTML = selectedApplicationLanguageTexts["id_HowItWorks"];

var aboutAsideLeftUl = document.createElement("ul");
setAsideULLi(aboutAsideLeftUl, "/docs/eWorldMenuAndStartup.pdf/", "id_MenuUsage");
setAsideULLi(aboutAsideLeftUl, "/docs/SurfingUSA.pdf/", "id_Surfing");
setAsideULLi(aboutAsideLeftUl, "/docs/Searching.pdf/", "id_Searching");

aboutAsideLeft.appendChild(aboutAsideLeftH2);
aboutAsideLeft.appendChild(aboutAsideLeftUl);
aboutMain.appendChild(aboutAsideLeft);

var aboutArticle = document.createElement("article");
aboutArticle.setAttribute("id","middleFrame");
var aboutArticleH2 = document.createElement("h2");
aboutArticleH2.setAttribute("id","id_TechnologiesTitle");
aboutArticleH2.setAttribute("class","pBorder aboutCitationTitle");
aboutArticleH2.innerHTML = selectedApplicationLanguageTexts["id_TechnologiesTitle"];
aboutArticle.appendChild(aboutArticleH2);
setAboutArticleP("id_AboutTextOne");
setAboutArticleP("id_AboutTextTwo");
setAboutArticleP("id_AboutTextThree");
setAboutArticleP("id_AboutTextFour");
setAboutArticleP("id_AboutTextFive");
var aboutArticleP = document.createElement("p");
aboutArticleP.setAttribute("class","center");
var aboutArticlePA = document.createElement("a");
aboutArticlePA.setAttribute("id","id_HowTechnologiesUsed");
aboutArticlePA.setAttribute("href","/docs/WebTechnologiesUsage.pdf/");
aboutArticlePA.setAttribute("target","_blank");
aboutArticlePA.innerHTML = selectedApplicationLanguageTexts["id_HowTechnologiesUsed"];
aboutArticleP.appendChild(aboutArticlePA);
aboutArticle.appendChild(aboutArticleP);
aboutMain.appendChild(aboutArticle);

var aboutAsideRight = document.createElement("aside");
aboutAsideRight.setAttribute("class","aboutList");

var aboutAsideRightH2 = document.createElement("h2");
aboutAsideRightH2.setAttribute("id","id_InternationalizationI18n");
aboutAsideRightH2.setAttribute("class","pBorder aboutCitationTitle");
aboutAsideRightH2.innerHTML = selectedApplicationLanguageTexts["id_InternationalizationI18n"];

var aboutAsideRihgtUl = document.createElement("ul");
setAsideULLi(aboutAsideRihgtUl, "/docs/ApplicationTextLanguage.pdf/", "id_TextLanguages");
setAsideULLi(aboutAsideRihgtUl, "/docs/ApplicationDataLanguage.pdf/", "id_DataLanguages");
setAsideULLi(aboutAsideRihgtUl, "/docs/i18nInternationalization.pdf/", "id_DataLanguages_Ii18n");

aboutAsideRight.appendChild(aboutAsideRightH2);
aboutAsideRight.appendChild(aboutAsideRihgtUl);
aboutMain.appendChild(aboutAsideRight);

createNavFooterAddIntoBodyAndReplaceBody(aboutBody, aboutHeader, aboutMain, "AboutMe");
// Application Language Drop Down (Select/Options)
setTimeout(function () {
    setApplicationLanguageDropDownBox("appLanguageToUse", JSON.parse(applicationLanguageDropDownValues));
    document.getElementById("appLanguageToUse").selectedIndex = applicationTextLanguageSelectedIndex;
}, 350);

function setAsideULLi(ulTag, hrefText, idName) {
    var aboutAsideLeftLi = document.createElement("li");
    var aboutAsideLeftLiA = document.createElement("a");
    aboutAsideLeftLiA.setAttribute("id", idName);
    aboutAsideLeftLiA.setAttribute("href", hrefText);
    aboutAsideLeftLiA.setAttribute("target","_blank");
    aboutAsideLeftLiA.innerHTML = selectedApplicationLanguageTexts[idName];
    aboutAsideLeftLi.appendChild(aboutAsideLeftLiA);
    ulTag.appendChild(aboutAsideLeftLi);
}

function setAboutArticleP(idName) {
    var aboutArticleP = document.createElement("p");
    aboutArticleP.setAttribute("id", idName);
    aboutArticleP.setAttribute("class","pBorder");
    aboutArticleP.innerHTML = selectedApplicationLanguageTexts[idName];
    aboutArticle.appendChild(aboutArticleP);
}
