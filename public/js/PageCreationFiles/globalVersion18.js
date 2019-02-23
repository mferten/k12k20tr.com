'use strict';

currentEWorldPage = "eWorld Global"; // this should be up here all the time to work again from the menu (after the first time)
dashBoardFlag = true;

removeAnExternalJSFileIfExist("Mapdata"); // only conflicting JS file with other Mapdata
// retrieve the external js files if not open yet
setTimeout(function () {
    importAnExternalUtilityJSFile("DashBoardmapdata", "js/dashBoardmapdata.js");
    importAnExternalUtilityJSFile("Worldmap", "js/worldmap.js");

    initializationUtilityForFlags();
}, 50);

var globalBody =  document.createElement("body");
var globalMain;

setTimeout(function () {
    // World Languages Drop Down Values
    globalBody.setAttribute("name","global");
    globalBody.setAttribute("id","globalBody");

    var globalHeader = document.createElement("header");
    globalHeader.setAttribute("id", "id_Header");
    globalHeader.setAttribute("class","center");

    h1TitleCodes(globalHeader);

    /* Create All Category Select Input Fields */
    var selectTextSpan = getASpanElement("", myUndefined, " ");
    // These will be multiple selection drop down Category Select fields:
    createSelectFields(selectTextSpan, ["Country", "Population", "LandArea", "Language", "Religion", "Reports"],
        "selectBoxStyles marginPointPoint2Rem worldSelectSize");
    addApplicationLanguageSelectionDropDownBox(selectTextSpan);
    firstDivElement.appendChild(selectTextSpan);

    var flags = document.createElement("div");
    flags.setAttribute("id", "flagsWorld");
    firstDivElement.appendChild(flags);
    globalHeader.appendChild(firstDivElement);

    globalMain = document.createElement("main");
    globalMain.setAttribute("id", "rowID");
    globalMain.setAttribute("class","myInfoPage");

    globalBody.appendChild(globalHeader); // must be here for setTheRegionFlags to work...
    globalBody.appendChild(globalMain); // must be here for simplemaps

    var globalNav = document.createElement("nav");
    globalNav.setAttribute("id", "id_Navigation");
    globalNav.setAttribute("class", "center");
    globalNav.setAttribute("data-nav", "Searching");

    var globalFooter = document.createElement("footer");
    globalFooter.setAttribute("class","center");
    var globalFooterP = document.createElement("p");
    globalFooterP.setAttribute("id","id_CopyRight");
    var globalFooterP2 = document.createElement("p");
    globalFooterP2.setAttribute("id","id_LanguageImplementedBy");
    globalFooter.appendChild(globalFooterP);
    globalFooter.appendChild(globalFooterP2);

    globalBody.appendChild(globalNav);
    globalBody.appendChild(globalFooter);
}, 75);

function finalizeGlobalPage() {
    document.getElementById("topHTML").replaceChild(globalBody, document.body);
    document.getElementById("flagsWorld").innerHTML = decodeURIComponent(WorldFlags["flags"]);
    // flags already set but needs to set the required Arrays/Objects: Set the Flag Object Used flag ON (true)
    setTheFlags();
    h2HeaderCodes();
    muteTheSoundCodes(selectedApplicationLanguageTexts["id_World"]);
    combineSearchCodes(h2First);
    playGreetingCodes();

    var mainElement = globalMain;

    // the Form: 1 of 3 <div> of mainWrapper <div>
    var formDivElement = document.createElement("div");
    formDivElement.setAttribute("id", "worldFlagsForm");

    // Create Left Side Categories: Select Input Fields II (top, left and right below)
    if (appleProduct) {
        createSelectFields(formDivElement, ["Cell","Internet","CapitalCities"],
            "selectBoxStyles marginPointPoint2Rem worldSelectSize");
    }
    else {
        createSelectFields(formDivElement, ["Cell","Internet","RandD","Color", "Color2nd", "Color3rd", "Shape", "Shape2nd", "Shape3rd"],
            "selectBoxStyles marginPointPoint2Rem worldSelectSize");
    }

    simpleMapOneCountryMap(formDivElement);

    setReportingMedia();

    // the Selected Flag, Reset and the drop-downs: 3 of 3 <div> of mainWrapper <div>
    var flagControllDivElement = document.createElement("div");
    flagControllDivElement.setAttribute("id", "selectedFlagForm");

    // Create Rest of Categories: Select Input Fields
    if (appleProduct) {
    createSelectFields(flagControllDivElement,
        ["Income", "Overweight", "LifeExpectancy"],
        "selectBoxStyles marginPointPoint2Rem worldSelectSize");
    }
    else {
        createSelectFields(flagControllDivElement,
            ["Income", "Overweight", "Water", "LifeExpectancy", "CapitalCities", "DrivingSide", "SexRatio", "SeatRatio", "CleanWater","CleanToilet"],
            "selectBoxStyles marginPointPoint2Rem worldSelectSize");
    }

    rightLabelAndMainElementCodes(flagControllDivElement, mainElement, formDivElement);
    // Some of the Select Option Values will be retrieved from Server (AJAX calls)
    setSelectOptionsFromServerData();
    setCombineValueCodes();
    // create SimpleMaps World Map
    worldMap = simplemaps_worldmap.create();
    regionalGlobalInitialization();
    // only one region in World view map: 0, all countries in it
    worldMap.load();
    setNavFooterTags("Searching");
    if (appleProduct)
        countrySelectableFeatureLocation = countrySelectableFeatureLocationApple; // Apple IOS less criteria
}
