
'use strict';

// immediately self-evoking function (function () {..} ) ();
// can have argument as its parameter (function (myParameter) {..} ) (myArgument);

// add event listener: Global (this = window)
this.addEventListener("click", clickEvents, false);
this.addEventListener("change", addChangeEvents, false);
this.addEventListener("mousemove", hoverStartedEvents, false);
this.addEventListener("keypress", function(event) { keyPressed(event) }, false);

function regionalGlobalInitialization() {
    if (currentEWorldPage == "eWorld Regional" || currentEWorldPage == "eWorld Global")
    {
        if (dashBoardFlag && (iPhone || iPad)) {} // World Map will be shown without the Flags
        else fillCountriesMaps();
    }
    getTheH2Header();
}

function fillCountriesMaps()
{
    for (var countryTwoDigitsCode in worldMap.mapdata.state_specific)
    {
        var startUpCountryName = reverseCountryTwoDigitsCodeWithName[countryTwoDigitsCode];
        // do if only it is in Region's Country List and not done already
        if (dashBoardFlag || flagOfCountries.includes(startUpCountryName))
        {
            if (startUpCountryName)
            {
                // GL: just to show a color on the top HK and PN don't exist ?
                if (countryTwoDigitsCode === "GL" || countryTwoDigitsCode === "HK" || countryTwoDigitsCode === "PN") { continue; }
                (function(twoDigit, countryName)
                {
                    setTimeout(function()
                    {
                        fillOneCountryMapWithItsFlag(twoDigit, countryName);
                    }, .1);
                })(countryTwoDigitsCode, startUpCountryName);
            }
        }
    }
}

function getTheH2Header()
{
    var h2HeaderTag = document.getElementById("id_CountryFacts"); // world time it can be null
    if (h2HeaderTag != null)
    {
        if (dashBoardFlag) {
            h2HeaderTag.innerHTML = selectedApplicationLanguageTexts[["id_World"]];
        }
        else {
            h2HeaderTag.innerHTML = selectedApplicationLanguageTexts["id_" + document.querySelectorAll('input[type="radio"]:checked')[0].id];
        }
    }
}

function fillOneCountryMapWithItsFlag(twoDigit, startUpCountryName)
{
    if (smallEntities[startUpCountryName] || twoDigit == "HK" || twoDigit == "PN") { } // no map for these small entities/HK/PN/iPhone
    else
    {
        worldMap.mapdata.state_specific[twoDigit].image_url
            = "data:image/svg+xml," + flagsSVGFiles[startUpCountryName].svg;
        worldMap.mapdata.state_specific[twoDigit].description = countryGreetingTexts[twoDigit];
        worldMap.mapdata.state_specific[twoDigit].url = "javascript:mapFlagSelected('" + startUpCountryName + "')";
        if (imageSize[twoDigit])
        {
            worldMap.mapdata.state_specific[twoDigit].image_size = imageSize[twoDigit];
        }
        worldMap.refresh_state(twoDigit);
    }
    // Make the flag Visible if Hidden
    if (document.getElementById(countryBayrakIdByName[startUpCountryName]) &&
        document.getElementById(countryBayrakIdByName[startUpCountryName]).classList.contains("displayNone"))
        document.getElementById(countryBayrakIdByName[startUpCountryName]).classList.remove("displayNone");
}

function emptyOneCountryMapWithItsFlag(twoDigit, startUpCountryName)
{
    if (smallEntities[startUpCountryName] || twoDigit == "HK" || twoDigit == "PN") { } // no map for these small entities/HK/PN/iPhone
    else
    {
        worldMap.mapdata.state_specific[twoDigit].image_url = "";
        worldMap.mapdata.state_specific[twoDigit].url = "";
        worldMap.mapdata.state_specific[twoDigit].color = "#FFE5EE";
        worldMap.refresh_state(twoDigit);
    }
    // Make the flag Hidden if Visible
    if (document.getElementById(countryBayrakIdByName[startUpCountryName]) &&
        !document.getElementById(countryBayrakIdByName[startUpCountryName]).classList.contains("displayNone"))
        document.getElementById(countryBayrakIdByName[startUpCountryName]).classList.add("displayNone");
}

function keyPressed(event)
{
    // if enter key is pressed
    if (event.which == 13)
    {
        // select the region
        if (event.target.name == "region")
        {
            processRegionPlus(event.target.value, true);
        }
        // select a flag
        else if (event.target.id.indexOf("bayrak") != -1)
        {
            selectACountryMap(event);
        }
    }
}

function addChangeEvents(event)
{
    var selectionId = event.target.id;
    var selectionValue = event.target.value;
    var selectionName = event.target.name;
    if (currentEWorldPage == "Startup") changeStartupEvents(event); // any change event belongs to Startup will be handled by it.
    else {
        if (selectionName == "region") {
            processRegionPlus(selectionValue, true);
        } else if (selectionId == "id_CheckBoxPlaySounds") { // Sound Off
            playSoundsChanged();
        } else if (selectionId == "Country") { // a Country/Entity
            processOneSelection(true, selectionValue);
        } else if (searchSelects[selectionId] || selectionId == "Reports")
        {
            if (selectionId == "Reports" && selectionValue != "Reports") { // Select/Option Drop Down: Print/Display the filtered Data
                runReports();
            } else if (selectionValue.indexOf("ListAscending") > -1 || selectionValue.indexOf("ListDescending") > -1) {
                retrieveOneSelection(selectionId, selectionValue); // in utilityForFlags
                document.getElementById(selectionId).selectedIndex = 0;
            } else { // Regular Selection/Option Drop Down activity
                runDropDownSelection(selectionId, selectionValue); // world dashboard
            }
        }
        else if (selectionName == "combine") {
            if (previousCombineOption == -1) {
                document.getElementById(combineMatrix[selectionId]).classList.add("selectedInputTag");
            } else {
                document.getElementById(combineMatrix[previousCombineOption]).classList.remove("selectedInputTag");
                document.getElementById(combineMatrix[selectionId]).classList.add("selectedInputTag"); // find the text (span)
            }
            previousCombineOption = selectionId;
            if (lastUsedFilter != "") chooseAndProcessSelections(); // no selection done yet; just adjusting the combination type
        }
    }
}

function chooseAndProcessSelections()
{
    // if None (X) selected except the lastUsedFilter, clear all others if any
    if (previousCombineOption == "id_RadioCombineNoneSearch")
        for (var x in countrySelectableFeatureLocation)
        {
            if (x != lastUsedFilter && document.getElementById(x).options[0].value != document.getElementById(x).value)
                initializeSelectedCriteria(x, true);
        }
    // reset the selection: Combine Type changed
    filteredCountriesNames = [];
    if (previousCombineOption == "id_RadioCombineNoneSearch") { if (lastUsedFilter != "") processOneSelection(false, lastUsedFilter); } // "None"
    else if (previousCombineOption == "id_RadioCombineAndSearch") processAndSelections(); // "And"
    else processOrSelections(); // "Or"
}

function runDropDownSelection(selectionId, selectionValue)
{
    // initialize the filtered country Array
    filteredCountriesNames = [];
    if (selectionId != lastUsedFilter && document.getElementById("id_RadioCombineNoneSearch").checked && lastUsedFilter != "") // if Combine None: Only Last Criteria Value Stays
    {
        initializeSelectedCriteria(lastUsedFilter, true);
    }
    lastUsedFilter = selectionId;
    combinedFlag = document.getElementById("combineSearch").querySelector('input[name="combine"]:checked').value;

    if (selectionValue == document.getElementById(selectionId).options[0].value) // Deselected back to the title: keep event.target.id here not selectionId
    {
        if (selectionId == "Income") selectionId = "GDP"; // to eliminate this, Income+Display Logic must be modified
        initializeSelectedCriteria(selectionId, false);
        // run combine to refresh the findings if And or Or Combination
        if (combinedFlag == "id_RadioCombineAndSearch") processAndSelections(); // "And"
        else processOrSelections(); // "Or"
    }
    else
    {
        if (selectionId == "Income") selectionId = "GDP"; // to eliminate this, Income+Display Logic must be modified
        searchedSelectFields[selectionId] = true; // Flagged as Selected
        // Get the data
        retrieveOneSelection(selectionId, selectionValue); // in utilityForFlags
        setTimeout(function () {
            if (combinedFlag == "id_RadioCombineNoneSearch") processOneSelection(false, selectionId); // "None"
            else if (combinedFlag == "id_RadioCombineAndSearch") processAndSelections(); // "And"
            else processOrSelections(); // "Or"
        }, 500);
    }
}

function initializeSelectedCriteria(selectedCriteria, resetFlag)
{
    if (resetFlag)
        document.getElementById(selectedCriteria).selectedIndex = 0;
    searchedSelectFields[selectedCriteria] = false; // Flagged as Not Selected Yet
    searchedSelectFieldsFilteredCountries[selectedCriteria] = ""; // No more selected Countries Data
}

function runReports()
{
    // (1) array one for Column Locations, (2) Headings Array select name addition, (3) Header creation
    var selectedFieldsArray = [];
    var headingsArray = ["Count", selectedApplicationLanguageTexts["id_Country"]];
    var selectionValuesAsTitle = ""; // Reverse, Combine: None, And, Or..
    if (document.getElementById("id_RadioCombineReverseSearch").checked)
        selectionValuesAsTitle = "This is a Reverse Image of ";
    var combinedFlag = document.getElementById("combineSearch").querySelector('input[name="combine"]:checked').value;
    for (var x in countrySelectableFeatureLocation)
    {
        if (document.getElementById(x).options[0].value != document.getElementById(x).value) // used criteria
        {
            selectedFieldsArray.push(countrySelectableFeatureLocation[x]);
            headingsArray.push(selectedApplicationLanguageTexts["id_" + x]);
            // categoryDescription[x]);           document.getElementById(x).options[document.getElementById(x).selectedIndex].innerHTML
            // Text Language (ie: Religion)       Data language (ie: Buddism)
            selectionValuesAsTitle += selectedApplicationLanguageTexts[categoryDescription[x]] + " " +
                document.getElementById(x).options[document.getElementById(x).selectedIndex].innerHTML + " "; // this is the Data Language
            if (combinedFlag == "id_RadioCombineAndSearch") selectionValuesAsTitle += selectedApplicationLanguageTexts["id_And"] + " ";
            else if (combinedFlag == "id_RadioCombineOrSearch")  selectionValuesAsTitle += selectedApplicationLanguageTexts["id_Or"] + " ";
        }
    }
    if (selectionValuesAsTitle.lastIndexOf(" " + selectedApplicationLanguageTexts["id_Or"]) != -1 )
        selectionValuesAsTitle = selectionValuesAsTitle.substring(0, selectionValuesAsTitle.lastIndexOf(" " + selectedApplicationLanguageTexts["id_Or"]));
    else if (selectionValuesAsTitle.lastIndexOf(" " + selectedApplicationLanguageTexts["id_And"]) != -1 )
        selectionValuesAsTitle = selectionValuesAsTitle.substring(0, selectionValuesAsTitle.lastIndexOf(" " + selectedApplicationLanguageTexts["id_And"]));
    if (combinedFlag == "id_RadioCombineNoneSearch" && !document.getElementById("id_RadioCombineReverseSearch").checked)
    {
        createATable("id_CountryListTable", headingsArray, searchedSelectFieldsFilteredCountries[(lastUsedFilter=="Income")?"GDP":lastUsedFilter],
            selectedFieldsArray, "", selectionValuesAsTitle, false, 13);
    }
    else {
        createATable("id_CountryListTable", headingsArray, filteredCountriesNames, selectedFieldsArray, "", selectionValuesAsTitle, false, 13);
    }
    showReportPanel();
}

function fillMe(text, size)
{
    if (text)
    {
        var size = size - text.length;
        if (size > 0)
        {
            // add blanks
            while (size > 0)
            {
                text += oneBlank;
                size--;
            }
        }
    }
    return text;
}

function processOneSelection(oneCountryFlag, selectionIdOrOneCountry)
{
    var oneCountry;
    var jsonFilteredCountryNames;
    var reverseFlag = document.getElementById("id_RadioCombineReverseSearch").checked;
    if (oneCountryFlag) oneCountry = selectionIdOrOneCountry;
    else {
        jsonFilteredCountryNames = searchedSelectFieldsFilteredCountries[selectionIdOrOneCountry];
    }
    var startUpCountryName;
    for (var key in allCountryNames) {
        startUpCountryName = allCountryNames[key];
        var countryTwoDigitsCode = countryTwoDigitsCodeWithName[startUpCountryName];
        if (oneCountryFlag && oneCountry == startUpCountryName ||
            !oneCountryFlag && jsonFilteredCountryNames[startUpCountryName]) { // selected Country: OK to show
            (function(twoDigit, countryName) {
                setTimeout(function() {
                    if (oneCountryFlag) { } // do no saving
                    else if (!filteredCountriesNames.includes(countryName))
                        filteredCountriesNames.push(countryName);
                    if (oneCountryFlag || !reverseFlag)
                        fillOneCountryMapWithItsFlag(twoDigit, countryName);
                }, .1);
            })(countryTwoDigitsCode, startUpCountryName);
        } else {
            (function(twoDigit, countryName) {
                setTimeout(function() {
                    if (oneCountryFlag || !reverseFlag) emptyOneCountryMapWithItsFlag(twoDigit, countryName);
                }, .1);
            })(countryTwoDigitsCode, startUpCountryName);
        }
    }
    if (reverseFlag && !oneCountryFlag) {
        setTimeout(function() {
            reverseAndProcessFilteredCountriesNames();
            setTimeout(function() { worldMap.load(); }, 30);
        }, 50);
    }
    if (oneCountryFlag) {
        setTimeout(function () {
            triggerAMouseEvent(countryBayrakIdByName[oneCountry]);
            document.getElementById("Country").selectedIndex = "0";
            oneCountrySelectedFlag = true;
        },150);
    }
}

function reverseAndProcessFilteredCountriesNames ()
{
    var reversedFilteredCountriesNames = []; // reversed country array
    for (var key in allCountryNames)
    {
        var startUpCountryName = allCountryNames[key];
        var countryTwoDigitsCode = countryTwoDigitsCodeWithName[startUpCountryName];
        if (filteredCountriesNames.includes(startUpCountryName)) // skip if selected: reversed image
        {
            (function(twoDigit, countryName)
            {
                setTimeout(function()
                {
                    emptyOneCountryMapWithItsFlag(twoDigit, countryName);
                }, .1);
            })(countryTwoDigitsCode, startUpCountryName);
        }
        else
        {
            (function(twoDigit, countryName)
            {
                setTimeout(function()
                {
                    fillOneCountryMapWithItsFlag(twoDigit, countryName);
                    reversedFilteredCountriesNames.push(countryName);
                }, .1);
            })(countryTwoDigitsCode, startUpCountryName);
        }
    }
    filteredCountriesNames = reversedFilteredCountriesNames;
}

function processAndSelections()
{
    // work Fields
    var jsonFilteredCountryNames;
    var countryTwoDigitsCode;
    var startUpCountryName;
    var reverseFlag = document.getElementById("id_RadioCombineReverseSearch").checked;
    // loop for each country
    for (var key in allCountryNames) {
        startUpCountryName = allCountryNames[key];
        countryTwoDigitsCode = countryTwoDigitsCodeWithName[startUpCountryName];
        // Selected Country Flags
        var testMeToTheEndFlag = true;
        // If the country is found in any of the saved filtered Countries JSON object: OK to show
        for (var key in searchedSelectFields) {
            if (searchedSelectFields[key]) { // if True: Selected/Retrieved
                jsonFilteredCountryNames = searchedSelectFieldsFilteredCountries[key];
                // if not found: failed: skip (hide) this country: one category fails means all failed
                if (!jsonFilteredCountryNames[startUpCountryName]) {
                    testMeToTheEndFlag = false;
                    break; // no need to check the other filtered country JSON objects: Flag/Map Country is rejected; go to next country
                }
            }
        }
        if (testMeToTheEndFlag) { // Still Good
            if (!filteredCountriesNames.includes(startUpCountryName))
                filteredCountriesNames.push(startUpCountryName);
            if (!reverseFlag) fillOneCountryMapWithItsFlag(countryTwoDigitsCode, startUpCountryName);
        }
        else if (!reverseFlag) emptyOneCountryMapWithItsFlag(countryTwoDigitsCode, startUpCountryName);
    }
    if (reverseFlag) reverseAndProcessFilteredCountriesNames();
    worldMap.load();
}

function processOrSelections()
{
    // work Fields
    var jsonFilteredCountryNames;
    var countryTwoDigitsCode;
    var startUpCountryName;
    var reverseFlag = document.getElementById("id_RadioCombineReverseSearch").checked;
    // loop for each country
    for (var key in allCountryNames) {
        startUpCountryName = allCountryNames[key];
        countryTwoDigitsCode = countryTwoDigitsCodeWithName[startUpCountryName];
        // Selected Country Flags
        var selectedCountryFlag = false;
        // If the country is found in any of the saved filtered Countries JSON object: OK to show
        for (var key in searchedSelectFields) {
            if (searchedSelectFields[key]) { // if True: Selected/Retrieved
                jsonFilteredCountryNames = searchedSelectFieldsFilteredCountries[key];
                // if found: good to go
                if (jsonFilteredCountryNames[startUpCountryName]) {
                    if (!filteredCountriesNames.includes(startUpCountryName))
                        filteredCountriesNames.push(startUpCountryName);
                    if (!reverseFlag)
                        fillOneCountryMapWithItsFlag(countryTwoDigitsCode, startUpCountryName);
                    selectedCountryFlag = true;
                    break; // no need to check the other filtered country JSON objects: Flag/Map Country is selected: check next country
                }
            }
        }
        if (!selectedCountryFlag) { // No good
            if (!reverseFlag)
                emptyOneCountryMapWithItsFlag(countryTwoDigitsCode, startUpCountryName);
        }
    }
    if (reverseFlag) reverseAndProcessFilteredCountriesNames();
    worldMap.load();
}

function processRegionPlus(value, flag)
{
    stateIsShowing = false;
    countryIsShowing = false;
    processRegion(value, flag);
    // stop if the anthem is playing
    if (!playAnthem.paused)
        playAnthem.pause();
    retrieveAndDisplayCountryInformation("hide");
}

/* a Flag is Selected: The Search starts */
function clickEvents(event)
{
    var eventTargetId = event.target.id;
    var eventTargetName = event.target.name;
    if (currentEWorldPage == "eWorld Countries") countryCodesClickEvents(event);
    else if (currentEWorldPage != "Startup") {
        if (eventTargetName == "region" && (stateIsShowing || countryIsShowing))  { // same region but a state was showing: show USA map again
            processRegionPlus(event.target.value, true);
        } else if (eventTargetId.indexOf("bayrak") != -1) { // Except the Flag Images no "bayrak" in any Id
            selectACountryMap(event);
        } else if (eventTargetId.indexOf("id_Panel") != -1 && eventTargetId.indexOf("Text") > 0) { // Once Country Tab Panel Handling
            handleCountryTabPanels(eventTargetId);
        } else if ((searchSelects[eventTargetName] || eventTargetName == "Country") && dashBoardFlag) {
            handleSearchDD();
        } else if (eventTargetName == "combine") {
            if (document.getElementById("map1").classList.contains("displayNone")) showWorldView(); // if not the World View
        } else if (eventTargetName == "reverse") {
            if (document.getElementById("map1").classList.contains("displayNone")) showWorldView(); // if not the World View
            processReverseRadioInput();
            if (lastUsedFilter != "") chooseAndProcessSelections();
        }
    }
}

function handleSearchDD()
{
    if (previousFlag != -1) {
        if (dashBoardFlag) setPlainOrSelectedFlag(document.getElementById(previousFlag),"selectedFlagsWorld","plainFlagsWorld");
    }
    showWorldView();
    // show title: World View
    if (oneCountrySelectedFlag) oneCountrySelectedFlag = false; // turns itself off but keep the selected country name
    else document.getElementById("id_CountryFacts").innerHTML = selectedApplicationLanguageTexts["id_World"];
    // OK to select any flag
    previousFlag = -1;
    playGreeting.pause(); // stop Greeting
    stateIsShowing = false;
    countryIsShowing = false;
    retrieveAndDisplayCountryInformation("hide");
    playAnthem.pause(); // if now (nice if I can retrieve the Audio status!)
    setTimeout(function() // if it picks a bit later
    {
        playAnthem.pause(); // stop Anthem (asynchronized load may still play: to be checked: Mehmet)
    },3000);
}

var tabPanelIframes = { "id_PanelTwoText":["id_WikiIframe","info_WikiCountry"], "id_PanelTwoOneText":["id_CiaIframe","info_CIACountry"],
    "id_PanelThreeText":["id_UNIframe","info_UNCountry"],"id_PanelFourText":["id_TravelWarningIframe","info_TravelWarning"],}

function handleCountryTabPanels(eventTargetId)
{
    if (selectedOneCountryLITab != eventTargetId)
    {
        // normalize the previous tab name and hide it.
        if (document.getElementById(selectedOneCountryLITab).classList.contains("oneCountryPanelSelectedTab"))
        {
            document.getElementById(selectedOneCountryLITab).classList.remove("oneCountryPanelSelectedTab");
        }
        if (selectedOneCountryLITab == "id_PanelOneText")
            hideOneCountryTabPanel("map");
        else hideOneCountryTabPanel(selectedOneCountryLITab.substring(3, selectedOneCountryLITab.indexOf("Text")));
        // Color the selected (new) Tab name and show the panel
        if (!document.getElementById(eventTargetId).classList.contains("oneCountryPanelSelectedTab"))
        {
            document.getElementById(eventTargetId).classList.add("oneCountryPanelSelectedTab");
        }
        if (eventTargetId == "id_PanelOneText")
            showOneCountryTabPanel("map");
        else showOneCountryTabPanel(eventTargetId.substring(3, eventTargetId.indexOf("Text")));
        selectedOneCountryLITab = eventTargetId;
        if (tabPanelIframes[eventTargetId]) // internal iFrames
            document.getElementById(tabPanelIframes[eventTargetId][0]).src = document.getElementById(tabPanelIframes[eventTargetId][1]).href;
    }
}

function setPlainOrSelectedFlag(flagObject, removeClass, addClass)
{
    if (removeClass && flagObject.classList.contains(removeClass)) flagObject.classList.remove(removeClass);
    if (addClass && !flagObject.classList.contains(removeClass)) flagObject.classList.add(addClass);
}

function hideOneCountryTabPanel(selectedOneCountryPanel)
{
    if (!document.getElementById(selectedOneCountryPanel).classList.contains("displayNone"))
    {
        document.getElementById(selectedOneCountryPanel).classList.add("displayNone");
    }
}

function showOneCountryTabPanel(selectedOneCountryPanel)
{
    if (document.getElementById(selectedOneCountryPanel).classList.contains("displayNone"))
    {
        document.getElementById(selectedOneCountryPanel).classList.remove("displayNone");
    }
}

/* a Flag is hovered: Show the SimpleMaps Tool Tip */
function hoverStartedEvents(event)
{
    // Except the Flag Images <img no other element should have "flag" in its Id
    if (event.target.id && event.target.id.indexOf("bayrak") != -1 && previousFlag == -1 && hoveredFlag != event.target.id)
    {
        hoveredFlag = event.target.id;
        if (dashBoardFlag && iPhone) {} // iPhone do nothing
        else showToolTip(event);
    }
}

/* a Flag is left, Stop the SimpleMaps Tool Tip for This: No need, Simplemaps Auto does it*/
function hoverEndedEvents(event)
{
    // Except the Flag Images <img no other element should have "flag" in its Id
    if (event.target.id && event.target.id.indexOf("bayrak") != -1 && hoveredFlag)
    {
        hoveredFlag = -1;
        stopToolTip(event);
    }
}

function showToolTip(event)
{
    var countryName = document.getElementById(event.target.id).alt.substring(8); // skip "Entity: "
    if (countryName && !smallEntities[countryName] && worldMap && countryTwoDigitsCodeWithName[countryName])
        worldMap.popup("state", countryTwoDigitsCodeWithName[countryName]);
}

function stopToolTip(event)
{
    worldMap.popup_hide();
}

function selectACountryMap(event)
{
    if (previousFlag != event.target.id || previousFlag == event.target.id && stateIsShowing) { // if not the same country, display its map and its informations
        if (stateIsShowing) stateIsShowing = false; // keep it here to refresh the links for the USA as a country
        if (dashBoardFlag) {
            if (previousFlag != -1) {
                if (dashBoardFlag) setPlainOrSelectedFlag(document.getElementById(previousFlag),"selectedFlagsWorld","plainFlagsWorld");
            }
            previousFlag = event.target.id;
            if (dashBoardFlag) setPlainOrSelectedFlag(document.getElementById(previousFlag),"plainFlagsWorld","selectedFlagsWorld");
        } else {
            if (previousFlag != -1) setPlainOrSelectedFlag(document.getElementById(previousFlag),"selectedFlag","plainFlags");
            previousFlag = event.target.id;
            setPlainOrSelectedFlag(document.getElementById(previousFlag),"plainFlags","selectedFlag");
        }
        var countryName = document.getElementById(previousFlag).alt.substring(8); // keep this after "previousFlag = event.target.id"
        oneCountryPanelOne.innerHTML = ""; // clear for a Map or a Website (for small entities)
        if (smallEntities[countryName]) { // show Google Map Image for no SVG Map country/entity
            showSmallEntityTourismWebsite(countryName);
        } else {
            var twoDigitCountryCode = countryTwoDigitsCodeWithName[countryName];
            var mapCountry1; // countrymap.js Simplemaps program js
            retrieveAndDisplayCountryInformation(countryName); // Retrieve and Display Country Information
            var importedCountryConfiguration = document.createElement('script'); // mapdata.js: small to be loaded before the map file
            importedCountryConfiguration.src = "js/Countries/" + twoDigitCountryCode + "/mapdata.js";
            document.body.appendChild(importedCountryConfiguration);
            var importedCountryMap = document.createElement('script'); // this is the map file, it takes time for some of the countries
            getTheCountryMapData(mapCountry1, importedCountryMap, twoDigitCountryCode, countryName);
            hideWorldView(); // show Country view
            setTheCountryMapSource(importedCountryMap, twoDigitCountryCode); // set the source (where is what (name) file
            document.body.appendChild(importedCountryMap); // attach it to the element (make it a child)
        }
        startPlaying(countryName); // Start playing the Greetings if not Muted
    }
}

function showSmallEntityTourismWebsite(countryName)
{
    // the Country Name to be displayed:
    document.getElementById("id_CountryFacts").innerHTML = flagOfCountriesFullName[previousFlag.substring(6)];
    // Retrieve and Display Country Information
    retrieveAndDisplayCountryInformation(countryName);
    var smallEntityGoogleMapParagraph = document.createElement('p');

    var smallEntityGoogleMapImage = document.createElement('img');
    smallEntityGoogleMapImage.setAttribute("src", smallEntities[countryName]);
    smallEntityGoogleMapImage.setAttribute("class", "smallEntityMapSize");
    smallEntityGoogleMapImage.setAttribute("alt", countryName);
    smallEntityGoogleMapParagraph.appendChild(smallEntityGoogleMapImage);
    oneCountryPanelOne.appendChild(getASpanElement("id_SmallEntityText", myUndefined, selectedApplicationLanguageTexts["id_SmallEntityText"]));
    oneCountryPanelOne.appendChild(smallEntityGoogleMapParagraph);
    hideWorldView();
}

function setTheCountryMapSource(importedCountryMap, twoDigitCountryCode)
{
    if (twoDigitCountryCode == "US")
        importedCountryMap.src = "js/Countries/" + twoDigitCountryCode + "/usmap.js";
    else if (twoDigitCountryCode == "GB")
        importedCountryMap.src = "js/Countries/" + twoDigitCountryCode + "/ukmap.js";
    else if (twoDigitCountryCode == "CA")
        importedCountryMap.src = "js/Countries/" + twoDigitCountryCode + "/canadamap.js";
    else if (twoDigitCountryCode == "AU")
        importedCountryMap.src = "js/Countries/" + twoDigitCountryCode + "/australiamap.js";
    else
        importedCountryMap.src = "js/Countries/" + twoDigitCountryCode + "/countrymap.js";
}

function getTheCountryMapData(mapCountry1, importedCountryMap, twoDigitCountryCode, countryName)
{
    // define the function it will run when it is ready (onload)
    importedCountryMap.onload = function()
    {
        if (twoDigitCountryCode == "US")
            mapCountry1=simplemaps_usmap.create();
        else if (twoDigitCountryCode == "GB")
            mapCountry1=simplemaps_ukmap.create();
        else if (twoDigitCountryCode == "CA")
            mapCountry1=simplemaps_canadamap.create();
        else if (twoDigitCountryCode == "AU")
            mapCountry1=simplemaps_australiamap.create();
        else
        {
            mapCountry1=simplemaps_countrymap.create();
        }
        mapCountry1.load();
        // the Country Name to be displayed:
        if (previousFlag != -1)
            document.getElementById("id_CountryFacts").innerHTML = flagOfCountriesFullName[previousFlag.substring(6)];
        else document.getElementById("id_CountryFacts").innerHTML = countryName; // find the full name from country-data-name
        putTheFlagsForACountry(countryName, twoDigitCountryCode, mapCountry1);
    }
}

function putTheFlagsForACountry(countryName, twoDigitCountryCode, mapCountry1)
{
    var flagURL = "data:image/svg+xml," + flagsSVGFiles[countryName].svg;
    if (twoDigitCountryCode == "US") {
        for (var usStateCode in mapCountry1.mapdata.state_specific) {
            if (usStates[usStateCode]) {
                var stateName = usStates[usStateCode].replace("_", " ");
                mapCountry1.mapdata.state_specific[usStateCode].image_url = "images/SVGUSStateFlags/Flag_of_" + usStates[usStateCode] + ".svg";
                mapCountry1.mapdata.state_specific[usStateCode].description = "Greetings From " + stateName + ", How you're doing?";
                mapCountry1.mapdata.state_specific[usStateCode].url = "javascript:mapStateSelected('" + usStateCode + "','" + stateName + "','"+ usStates[usStateCode]+ "')";
                mapCountry1.refresh_state(usStateCode);
            }
        }
    }
    else if (twoDigitCountryCode == "CA") {
        for (var caStateCode in mapCountry1.mapdata.state_specific) {
            var stateName = canadaProvinces[caStateCode].replace(/_/g, " ");
            mapCountry1.mapdata.state_specific[caStateCode].image_url = "images/CanadaProvinces/Flag_of_" + canadaProvinces[caStateCode] + ".svg";
            mapCountry1.mapdata.state_specific[caStateCode].description = "Greetings From " + stateName + ", How you're doing?";
            mapCountry1.refresh_state(caStateCode);
        }
    }
    else if (twoDigitCountryCode == "GB") {
        for (var ukStateCode in mapCountry1.mapdata.state_specific) {
            mapCountry1.mapdata.state_specific[ukStateCode].image_url = flagURL;
            mapCountry1.refresh_state(ukStateCode);
        }
    }
    else if (twoDigitCountryCode == "AU") {
        for (var auStateCode in mapCountry1.mapdata.state_specific) {
            mapCountry1.mapdata.state_specific[auStateCode].image_url = flagURL;
            mapCountry1.refresh_state(auStateCode);
        }
    }
    else if (twoDigitCountryCode != "SK") { // Skip Slovakia for now, it has its sub area flags
        for (var countrySubAreaCode in mapCountry1.mapdata.state_specific) {
            mapCountry1.mapdata.state_specific[countrySubAreaCode].image_url = flagURL;
            mapCountry1.refresh_state(countrySubAreaCode);
        }
    }
}

/* how to do this in Version III with Mandarin, Russian, Arabic, Hindi */
function onlyLetters(keyValue)
{
    // How this will be in Chiness or Arabic or Russion
    return (keyValue >= 'a' && keyValue <= 'z' || keyValue >= 'A' && keyValue <= 'Z');
}
