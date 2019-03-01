"use strict";

var inlineBlockOnes = { "id_Register":true, "id_Citations":true, "id_AboutMe":true, "id_TextLanguages":true, "id_DataLanguages":true, };
var progressBarLi = {"id_Searching":"id_LiSearching","id_Surfing":"id_LiSurfing","id_Countries":"id_LiCountryCodes"}
var previousMenuItem = "none";

function createNavigationTags(navElement)
{
    previousMenuItem = "none";
    // Navigation element
    var whereNav = navElement.getAttribute("data-nav");
    // Citation, Registration, Web Page Text Language, Data Language, About
    var navUlElement = document.createElement("ul");
    navUlElement.setAttribute("class", "margin1ThirdRem");
    navUlElement.setAttribute("role", "menu");
    navUlElement.setAttribute("aria-expanded", false);
    navElement.appendChild(navUlElement);
    // Only Menu Has All Pages the Rest has Only the Menu
    if (whereNav == "menu")
    {
        // World: Search/Filter/Report
        createOneNavItem("workWithFlagsdashBoard","appLanguageSel","id_Searching","Searching",navUlElement,navElement,whereNav);
        // Regions: Surf
        createOneNavItem("workWithWorldFlags","appLanguageSel","id_Surfing","Surfing",navUlElement,navElement,whereNav);
        // Country Codes
        createOneNavItem("workWithCountryCodes","appLanguageSel","id_Countries","CountryCodes",navUlElement,navElement,whereNav);
        // startUp
        createOneNavItem("registerMe","appLanguageSel","id_Register","Register",navUlElement,navElement,whereNav);
        // Citations
        createOneNavItem("citations","appLanguageSel","id_Citations","Citations",navUlElement,navElement,whereNav);
        // About Me Box
        createOneNavItem("workWithAboutMe","appLanguageSel","id_AboutMe","AboutMe",navUlElement,navElement,whereNav);
        // Blank Line
        createOneNavItemBlank(navUlElement);
        // Application Text Languages
        // only k12k20.com will show The Application Text and Data Langauge Maintenance
        if (window.location.hostname.toUpperCase() == "K12K20TR.LOC" || window.location.hostname.toUpperCase() == "K12K20SK.LOC"
            || window.location.hostname.toUpperCase() == "K12K20.LOC")
        {
            createOneNavItem("workWithApplicationTextLanguage","appLanguageSel","id_TextLanguages","TextLanguages",navUlElement,navElement,whereNav);
            // Application Data Languages
            createOneNavItem("workWithApplicationDataLanguage","appLanguageSel","id_DataLanguages","DataLanguages",navUlElement,navElement,whereNav);
        }
    }
    else createOneNavItem("menu","appLanguageSel","id_Menu","Menu",navUlElement,navElement,whereNav);
}

function createOneNavItem(navAId,navAClass,navTextId,navValue,navUlElement,navElement,whereNav)
{
    if (whereNav == navValue) {} // don't show itself: forget being a Desktop Application Programmer
    else
    {
        var worldFlags = document.createElement("a");
        worldFlags.setAttribute("class", navAClass);
        var worldFlagsTextElement = getASpanElement(navTextId, myUndefined,
            selectedApplicationLanguageTexts[navTextId]);
        worldFlags.name = navValue;
        worldFlags.appendChild(worldFlagsTextElement);
        var navLiElementTextLang = document.createElement("li");
        if (inlineBlockOnes[navTextId]) navLiElementTextLang.setAttribute("class", "inlineBlock");
        if (navValue == "countryList") navLiElementTextLang.setAttribute("class", "workWithCountryList");
        navLiElementTextLang.setAttribute("role", "menuitem");
        navLiElementTextLang.setAttribute("id", "id_Li" + navValue);
        navLiElementTextLang.appendChild(worldFlags);
        navUlElement.appendChild(navLiElementTextLang);
        // this fixes the Apple (iPhone/iPad) click missing problem.. Not handle with addEvents' clickEvents
        navLiElementTextLang.addEventListener("click", startNavigationItem, false);
    }
}

function startNavigationItem(event) {
    if (event.target && event.target.id && initialMenuItems[event.target.id]) {
        if (previousMenuItem != event.target.id) {
            // ignores the same menu selection (no extra navigation item creation: double triple...
            initialMenuItems[event.target.id](event.target.id);
            if (progressBarLi[event.target.id]) {
                document.getElementById(progressBarLi[event.target.id]).innerHTML = '<svg class="inlineBlock" width="30px" height="30px" viewBox="0 0 36 36"><title>loader01 2</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Group-3" sketch:type="MSLayerGroup" fill="#eab358"><rect id="Rectangle-1" sketch:type="MSShapeGroup" x="16.5873418" y="0" width="3" height="9.13705584"></rect><rect id="Rectangle-2" fill-opacity="0.58" sketch:type="MSShapeGroup" x="16.678481" y="26.8629442" width="3" height="9.13705584"></rect><rect id="Rectangle-4" fill-opacity="0.79" sketch:type="MSShapeGroup" transform="translate(31.530380, 17.954315) rotate(-270.000000) translate(-31.530380, -17.954315) " x="30.0303797" y="13.3857868" width="3" height="9.13705584"></rect><rect id="Rectangle-3" fill-opacity="0.37" sketch:type="MSShapeGroup" transform="translate(4.735443, 18.045685) rotate(-270.000000) translate(-4.735443, -18.045685) " x="3.23544304" y="13.4771574" width="3" height="9.13705584"></rect><rect id="Rectangle-4" fill-opacity="0.72" sketch:type="MSShapeGroup" transform="translate(29.758244, 24.676171) rotate(-240.000000) translate(-29.758244, -24.676171) " x="28.2582441" y="20.1076435" width="3" height="9.13705584"></rect><rect id="Rectangle-3" fill-opacity="0.3" sketch:type="MSShapeGroup" transform="translate(6.507579, 11.323829) rotate(-240.000000) translate(-6.507579, -11.323829) " x="5.00757864" y="6.75530065" width="3" height="9.13705584"></rect><rect id="Rectangle-4" fill-opacity="0.65" sketch:type="MSShapeGroup" transform="translate(24.871110, 29.609153) rotate(-210.000000) translate(-24.871110, -29.609153) " x="23.37111" y="25.0406255" width="3" height="9.13705584"></rect><rect id="Rectangle-3" fill-opacity="0.23" sketch:type="MSShapeGroup" transform="translate(11.394713, 6.390847) rotate(-210.000000) translate(-11.394713, -6.390847) " x="9.89471277" y="1.82231869" width="3" height="9.13705584"></rect><rect id="Rectangle-4" fill-opacity="0.51" sketch:type="MSShapeGroup" transform="translate(11.473642, 29.654839) rotate(-150.000000) translate(-11.473642, -29.654839) " x="9.97364166" y="25.0863108" width="3" height="9.13705584"></rect><rect id="Rectangle-3" fill-opacity="0.93" sketch:type="MSShapeGroup" transform="translate(24.792181, 6.345161) rotate(-150.000000) translate(-24.792181, -6.345161) " x="23.2921811" y="1.77663341" width="3" height="9.13705584"></rect><rect id="Rectangle-4" fill-opacity="0.44" sketch:type="MSShapeGroup" transform="translate(6.553148, 24.755301) rotate(-120.000000) translate(-6.553148, -24.755301) " x="5.05314826" y="20.1867727" width="3" height="9.13705584"></rect><rect id="Rectangle-3" fill-opacity="0.86" sketch:type="MSShapeGroup" transform="translate(29.712675, 11.244699) rotate(-120.000000) translate(-29.712675, -11.244699) " x="28.2126745" y="6.67617143" width="3" height="9.13705584"></rect></g><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" begin="0s" dur="0.85s" repeatCount="indefinite"/></g></svg>';
            }
            previousMenuItem = event.target.id;
        }
    }
}

function createOneNavItemBlank(navUlElement) {
    var navLiElementTextLang = document.createElement("li");
    navLiElementTextLang.setAttribute("class", "registerH2");
    navUlElement.appendChild(navLiElementTextLang);
}
