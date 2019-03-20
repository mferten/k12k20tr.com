'use strict';

currentEWorldPage = "eWorld Countries"; // this should be up here all the time to work again from the menu (after the first time)

// retrieve the external js files if not open yet
importAnExternalJSFile("CountriesTableData", "js/OneCountryLanguageTextJSFiles/countriesTableDataVersion21.js");
// importAnExternalJSFile("ConversionHelper", "js/OneCountryLanguageTextJSFiles/languageConversionHelperVersion21.js");

initializationUtilityForFlags();

var eWorldCountriesBody =  document.createElement("body");
eWorldCountriesBody.setAttribute("name","register");
var eWorldCountriesHeader = document.createElement("header");
eWorldCountriesHeader.setAttribute("id", "id_Header");
var eWorldCountriesH1 = document.createElement("h1");
eWorldCountriesH1.setAttribute("id", "id_FirstMessage");
eWorldCountriesH1.innerHTML = selectedApplicationLanguageTexts["id_Countries"];
eWorldCountriesHeader.appendChild(eWorldCountriesH1);

var eWorldCountriesH2 = document.createElement("h2");
eWorldCountriesH2.setAttribute("id", "id_FirstH2");
eWorldCountriesH2.setAttribute("class", "registerH2");

eWorldCountriesHeader.appendChild(eWorldCountriesH2); // must be here before h2HeaderCodes(

setTimeout(function () {
    // getCountryCodesTableData(); // (0) // call if data is not saved but this is for to save it.
    h2HeaderCodes(eWorldCountriesHeader);
    muteTheSoundCodes(" ");
    addApplicationLanguageSelectionDropDownBox(h2First); // (): adds into h2First (redundant) but the variable will force it to skip class: dashBoardCombine
    h2First.classList.remove("h2Header"); // no grid required for eWorld Countries Pause and Application Text Language Selection
    playGreetingCodes(eWorldCountriesHeader);

    var eWorldCountriesMain = document.createElement("main");
    eWorldCountriesMain.setAttribute("class","myInfoPageCountryList");

    var eWorldCountriesMainDivOne = document.createElement("div");
    eWorldCountriesMainDivOne.setAttribute("id", "worldFlagsForm");
    if (iPhone) {
      createCountryInformationLabels(eWorldCountriesMainDivOne, // Left Labels
          ["Language", "Population", "Overweight", "LifeExpectancy", "CapitalCities"],"marginPointPoint2Rem displayNone sharedLinkState", true);
    }
    else {
          createCountryInformationLabels(eWorldCountriesMainDivOne, // Left Labels
              ["Language", "Population", "Religion", "LandArea", "Income", "Overweight", "LifeExpectancy", "CapitalCities", "CountryCodes", "Currency", "Water",
              "SexRatio", "SeatRatio","HDI", "Gini"],"marginPointPoint2Rem displayNone sharedLinkState", true);
    }
    var eWorldCountriesMainDivTwo = document.createElement("div");
    eWorldCountriesMainDivTwo.setAttribute("id", "myInfoPageCountryList");
    var eWorldCountriesAlphabetLetters = document.createElement("div");
    eWorldCountriesAlphabetLetters.setAttribute("id", "id_Letters26");
    eWorldCountriesAlphabetLetters.setAttribute("class", "worldCountryCodes");
    eWorldCountriesAlphabetLetters.innerHTML = decodeURIComponent(aToZObject); // if the A to Z Object is Saved
    // createAtoZTags(eWorldCountriesAlphabetLetters);

    eWorldCountriesMainDivTwo.appendChild(eWorldCountriesAlphabetLetters);
    var eWorldCountriesTableDiv = document.createElement("div");
    eWorldCountriesTableDiv.setAttribute("id", "id_CountryListMenuDiv");
    eWorldCountriesTableDiv.setAttribute("class", "displayNone");
    var eWorldCountriesTable = document.createElement("table");
    eWorldCountriesTable.setAttribute("id", "id_CountryListMenu");
    eWorldCountriesTable.setAttribute("class", "displayNone");
    eWorldCountriesTableDiv.appendChild(eWorldCountriesTable);
    eWorldCountriesMainDivTwo.appendChild(eWorldCountriesTableDiv);

    var eWorldCountriesMainDivThree = document.createElement("div");
    eWorldCountriesMainDivThree.setAttribute("id", "selectedFlagForm");
    if (appleProduct) {
        createCountryInformationLabels(eWorldCountriesMainDivThree, // Right Labels
            ["TravelWarning", "TimeAndDate", "GoogleMap", "Tourism", "UNCountry"],"marginPointPoint2Rem displayNone sharedLinkState", false);
    }
    else {
        createCountryInformationLabels(eWorldCountriesMainDivThree, // Right Labels
            ["DrivingSide", "CleanWater", "CleanToilet", "Cell", "RandD", "Internet", "TravelWarning", "TimeAndDate", "GoogleMap", "Government", "Tourism", "Weather",
            "WikiCountry", "CIACountry", "UNCountry"],"marginPointPoint2Rem displayNone sharedLinkState", false);
    }

    eWorldCountriesMain.appendChild(eWorldCountriesMainDivOne);
    eWorldCountriesMain.appendChild(eWorldCountriesMainDivTwo);
    eWorldCountriesMain.appendChild(eWorldCountriesMainDivThree);

    eWorldCountriesBody.appendChild(eWorldCountriesHeader);

    var eWorldCountriesNav = setNavigation("CountryCodes");

    var eWorldCountriesFooter = setFooter();

    setTimeout(function() {
        eWorldCountriesBody.appendChild(eWorldCountriesMain);
        eWorldCountriesBody.appendChild(eWorldCountriesNav);
        eWorldCountriesBody.appendChild(eWorldCountriesFooter);
    }, 50);
}, 75);

var processTheseTH = {0:true,1:true,2:true,4:true,5:true,6:true};
var currentLetter = myUndefined;
var tableRowsByCapitalCity = {};
var currentSortIcon;
var headerRow;

dashBoardFlag = true; // emulate Dashboard since we see all the countries

function setTheTableData()
{
    var tableRows = document.getElementById("id_CountryListMenu").rows;
    headerRow = tableRows[0];
    for (var oneRow in tableRows)
    {
        if (oneRow >= 1 && oneRow <= 255)
            tableRowsByCapitalCity[tableRows[oneRow].cells[9].innerHTML] =  tableRows[oneRow];
    }

    var headings = tableRows[0].cells;
    setHeaderRowIds(headerRow);

    for (var oneTH in headings)
    {
        if (processTheseTH[oneTH]) addTheAscendingDescendingSortIcon(headings[oneTH], oneTH);
    }
    setTheTableRows(tableRows);
}

function setTheTableRows(tableRows)
{
    var oneFlagImageElement;
    for (var oneRow in tableRows)
    {
        if (oneRow >= 1 && oneRow <= 255)
        {
            addCodesClassToEachTd(tableRows[oneRow].cells);
            var countryNameFromTD = tableRows[oneRow].cells[1].innerHTML;
            tableRows[oneRow].setAttribute("id", "id_" + oneRow);
            tableRows[oneRow].setAttribute("name", countryNameFromLongName[countryNameFromTD]);
            tableRows[oneRow].cells[0].classList.add("displayNone");
            tableRows[oneRow].cells[9].classList.add("displayNone");
            oneFlagImageElement = document.createElement("img");
            oneFlagImageElement.setAttribute("class", "plainFlagsWorld");

            if (countryNameFromTD.indexOf("|") != -1) {
                countryNameFromTD = countryNameFromTD.substring(0, countryNameFromTD.indexOf("|"));
                tableRows[oneRow].cells[1].innerHTML = tableRows[oneRow].cells[1].innerHTML.substring(0, tableRows[oneRow].cells[1].innerHTML.indexOf("|"));
            }
            if (flagsSVGFiles[countryNameFromTD]) { // Set the flags
                oneFlagImageElement.src = "data:image/svg+xml," + flagsSVGFiles[countryNameFromTD].svg;
                setAnIdForAFlag(oneFlagImageElement, countryNameFromTD)
            }
            else if (flagsSVGFiles[countryNameFromLongName[countryNameFromTD]]) {
                oneFlagImageElement.src = "data:image/svg+xml," + flagsSVGFiles[countryNameFromLongName[countryNameFromTD]].svg;
                setAnIdForAFlag(oneFlagImageElement, countryNameFromLongName[countryNameFromTD]);
            }
            else if (threeBelongsToOthers[countryNameFromLongName[countryNameFromTD]]) {
                oneFlagImageElement.src = "data:image/svg+xml," + flagsSVGFiles[threeBelongsToOthers[countryNameFromLongName[countryNameFromTD]]].svg;
                setAnIdForAFlag(oneFlagImageElement, countryNameFromLongName[countryNameFromTD]);
            }
            else console.log(countryNameFromTD);
            oneFlagImageElement.alt = "Entity: " + countryNameFromTD;
            tableRows[oneRow].cells[1].prepend(oneFlagImageElement);
        }
    }
}

function setAnIdForAFlag(oneFlagImageElement, idText) {
    oneFlagImageElement.id = "id_" + idText;
    oneFlagImageElement.name = idText;
}

function addCodesClassToEachTd(aRowCells)
{
    for (var aCell in aRowCells) {
        if (aRowCells[aCell] && aRowCells[aCell].classList) aRowCells[aCell].classList.add("codesWithPointer"); }
}

function setHeaderRowIds(headerRow)
{
    if (headerRow)
        headerRow.classList.add("codesWithPointer");
    for (var oneCell in headerRow.cells)
    {
        if (headerRow.cells[oneCell].innerHTML)
        {
            headerRow.cells[oneCell].setAttribute("id", "id_" + headerRow.cells[oneCell].innerHTML + "Th");
            var oneHeadingSpan;
            if (processTheseTH[oneCell])
                oneHeadingSpan = getASpanElement("id_" + headerRow.cells[oneCell].innerHTML  + "ThText", "sortIconTh",
                    selectedApplicationLanguageTexts["id_" + headerRow.cells[oneCell].innerHTML  + "ThText"], myUndefined, myUndefined, true);
            else oneHeadingSpan = getASpanElement("id_" + headerRow.cells[oneCell].innerHTML  + "ThText", myUndefined,
                selectedApplicationLanguageTexts["id_" + headerRow.cells[oneCell].innerHTML  + "ThText"], myUndefined, myUndefined, true);
            headerRow.cells[oneCell].innerHTML = "";
            headerRow.cells[oneCell].appendChild(oneHeadingSpan);
        }
    }
}

function addTheAscendingDescendingSortIcon(oneTH, number)
{
    var oneSortImageIconElement = document.createElement("img");
    var iconName = oneTH.getAttribute("id").substring(3, oneTH.getAttribute("id").indexOf("Th"));
    oneSortImageIconElement.setAttribute("id", "id_Sort" + iconName);
    oneSortImageIconElement.setAttribute("class", "sortIconTh vertialAlignMiddle");
    oneSortImageIconElement.setAttribute("alt", "Sort-" + iconName);
    if (number < 3)
        oneSortImageIconElement.src = "/images/sortAscending.svg";
    else {
        oneSortImageIconElement.src = "/images/sortDescending.svg";
    }
    oneTH.appendChild(oneSortImageIconElement);
}

var showPointer = {"id_CountryTh":true, "id_RegionTh":true, "id_CapitalTh":true, "id_PopulationTh":true, "id_SurfaceTh":true, "id_IncomeTh":true,
    "id_CountryThText":true, "id_RegionThText":true, "id_CapitalThText":true, "id_PopulationThText":true, "id_SurfaceThText":true, "id_IncomeThText":true,
    "id_SortCountry":true, "id_SortRegion":true, "id_SortCapital":true, "id_SortPopulation":true, "id_SortSurface":true, "id_SortIncome":true}
var showSelected = {"id_SortCountry":"id_CountryTh", "id_SortRegion":"id_RegionTh", "id_SortCapital":"id_CapitalTh", "id_SortPopulation":"id_PopulationTh",
    "id_SortSurface":"id_SurfaceTh", "id_SortIncome":"id_IncomeTh", "id_CountryThText":"id_CountryTh", "id_RegionThText":"id_RegionTh", "id_CapitalThText":"id_CapitalTh",
    "id_PopulationThText":"id_PopulationTh","id_SurfaceThText":"id_SurfaceTh", "id_IncomeThText":"id_IncomeTh"}

function countryCodesClickEvents(event)
{
    var eventTargetId = event.target.id;
    if (rowsByLetter[eventTargetId] && currentLetter != eventTargetId)
    {
        setTheLetterRows(rowsByLetter[eventTargetId]["start"], rowsByLetter[eventTargetId]["end"]);
        if (currentLetter && document.getElementById(currentLetter).classList.contains("selectedInputTag"))
            document.getElementById(currentLetter).classList.remove("selectedInputTag");
        currentLetter = eventTargetId;
        if (!document.getElementById(currentLetter).classList.contains("selectedInputTag"))
            document.getElementById(currentLetter).classList.add("selectedInputTag");

        document.getElementById("id_CountryFacts").innerHTML = selectedApplicationLanguageTexts["id_Countries"]; // start place holder
        retrieveAndDisplayCountryInformation("hide");
        stopAllPlaying();
    }
    else if (event.target.alt && event.target.alt.indexOf("Entity") != -1)
    {
        aFlagIsSelected();
    }
    else if (showPointer[eventTargetId])
    {
        aSortIconIsSelected(eventTargetId);
    }
    else if (eventTargetId == "id_CheckBoxPlaySounds") { // Sound Off
        playSoundsChanged();
    }
    else {
        var clickedParentNode = event.target.parentNode;
        if (clickedParentNode && clickedParentNode.hasAttribute && clickedParentNode.hasAttribute("id") && clickedParentNode.getAttribute("id")
            && clickedParentNode.getAttribute("id").indexOf("id_")!=-1) {
            var isNumberAfterId = clickedParentNode.getAttribute("id").substring(3);
            if (isNumberAfterId >= 1 && isNumberAfterId <= 255) {
                triggerAMouseEvent("id_" + clickedParentNode.getAttribute("name"));
            }
        }
    }
}

function aSortIconIsSelected(idIcon)
{
    if (showSelected[idIcon]) idIcon = showSelected[idIcon];
    if (currentSortIcon != idIcon) {
        if (currentSortIcon && document.getElementById(currentSortIcon+"Text").classList.contains("selectedInputTag"))
            document.getElementById(currentSortIcon+"Text").classList.remove("selectedInputTag");
        currentSortIcon = idIcon;
        if (!document.getElementById(currentSortIcon+"Text").classList.contains("selectedInputTag"))
            document.getElementById(currentSortIcon+"Text").classList.add("selectedInputTag");
        var tableRows = document.getElementById("id_CountryListMenu");
        tableRows.innerHTML = "";
        tableRows.appendChild(headerRow);
        var newOrder = iconJSONData[sortIconSelectionID[idIcon]];
        for (var addThis in newOrder)
        {
            if (idIcon == "id_SortCapital" || idIcon == "id_CapitalTh")
            {
                if (tableRowsByCapitalCity[addThis]) // TRNC and Canary Islands are not ISO defined (not here)
                    tableRows.appendChild(tableRowsByCapitalCity[addThis]);
            }
            else
            {
                var oneCountryFeatures = featuresOfAllCountries[addThis];
                if (oneCountryFeatures[14]['feature'] == "CapitalCitiesDisplay") {
                    for (var oneFeature in oneCountryFeatures)
                    {
                        if (oneCountryFeatures[oneFeature]['feature'] == "CapitalCities")
                            if (tableRowsByCapitalCity[oneCountryFeatures[oneFeature]['value']])
                                tableRows.appendChild(tableRowsByCapitalCity[oneCountryFeatures[oneFeature]['value']]);
                    }
                }
                else if (tableRowsByCapitalCity[oneCountryFeatures[14]['value']]) tableRows.appendChild(tableRowsByCapitalCity[oneCountryFeatures[14]['value']]);
            }
        }
        setOddOrEven();
    }
}

function aFlagIsSelected()
{
    if (previousFlag == -1) {
        previousFlag = event.target.id;
        removeAddClass(previousFlag,"plainFlagsWorld","tdSelectedFlagsWorld");
    }
    else {
      removeAddClass(previousFlag,"tdSelectedFlagsWorld","plainFlagsWorld");
      previousFlag = event.target.id;
      removeAddClass(previousFlag,"plainFlagsWorld","tdSelectedFlagsWorld");
    }
    document.getElementById("id_CountryFacts").innerHTML = event.target.alt.substring(8);
    retrieveAndDisplayCountryInformation(event.target.name);
    startPlaying(event.target.name); // Start playing the Greetings if not Muted
}

function removeAddClass(tagId, removeClass, addClass) { // see if this is dublicate
    if (document.getElementById(tagId).classList.contains(removeClass))
        document.getElementById(tagId).classList.remove(removeClass);
    if (!document.getElementById(tagId).classList.contains(addClass))
        document.getElementById(tagId).classList.add(addClass);
}

function removeAddClassByObject(object, removeClass, addClass) { // see if this is dublicate
    if (object.classList.contains(removeClass))
        object.classList.remove(removeClass);
    if (!object.classList.contains(addClass))
        object.classList.add(addClass);
}

function setTheLetterRows(start, end)
{
    var rowsCount = document.getElementById("id_CountryListMenu").rows.length;
    for (var x=1; x<rowsCount; x++) // show-hide
    {
        if (x >= start && x <= end)
        {
            if (document.getElementById("id_" + x) && document.getElementById("id_" + x).classList.contains("displayNone"))
                    document.getElementById("id_" + x).classList.remove("displayNone");
        }
        else
        {
            if (document.getElementById("id_" + x) && !document.getElementById("id_" + x).classList.contains("displayNone"))
                document.getElementById("id_" + x).classList.add("displayNone");
        }
    }
    setOddOrEven();
}

function setOddOrEven()
{
    var newRows = document.getElementById("id_CountryListMenu").rows; // odd-even rows
    var oddOrEvenRow=0;
    for (var oneRow in newRows)
    {
        if (oneRow >= 1 && oneRow <= 255) {
            if (newRows[oneRow].classList && !newRows[oneRow].classList.contains("displayNone")) {
                if (oddOrEvenRow%2==0) removeAddClassByObject(newRows[oneRow], "oddRow", "evenRow");
                else removeAddClassByObject(newRows[oneRow], "evenRow", "oddRow");
                oddOrEvenRow++;
            }
        }
    }
}

function getCountryCodesTableData()
{
    var oneCountryFeatures;
    var oneCountryCodes;
    var oneCountryName;
    var worldPopulation = 7700000000;
    var worldIncome = 87500000000000;
    var worldSurfaceArea = 149000000;
    var capitalCitiesOfAllCountriesRaw = {};
    for (var aCountry in countryCodesOfAllCountriesSortedByTurkishLongNames)
    {   /* countryListOfAllCountries { "Afghanistan":["Region","CapitalCity","Big City", "Population", "Surface", "Income", "Alpha-2, Alpha-3, Numeric, GEC & Calling"],... } */
        oneCountryFeatures = featuresOfAllCountries[aCountry];
        oneCountryCodes = countryCodesOfAllCountriesSortedByTurkishLongNames[aCountry];
        if (oneCountryFeatures[14]['feature'] == "CapitalCitiesDisplay") {
              var indexCapital = 0;
              for (var oneFeature in oneCountryFeatures) {
                  if (oneCountryFeatures[oneFeature]['feature'] == "CapitalCities") {
                      capitalCitiesOfAllCountriesRaw[aCountry + "|" + indexCapital++] = [oneCountryFeatures[20]['value'], oneCountryFeatures[oneFeature]['value'] + " " +
                      getCapitalPopulationPercent(oneCountryFeatures),
                      getLargestCityIfAny(oneCountryFeatures, oneCountryFeatures[0]['value']),
                      numberFixedToString(oneCountryFeatures[0]['value']) + " " + getTheRatio(oneCountryFeatures[0]['value'], worldPopulation),
                      numberFixedToString(oneCountryFeatures[7]['value']) + " " + getTheRatio(oneCountryFeatures[7]['value'], worldSurfaceArea),
                      numberFixedToString(oneCountryFeatures[27]['value']) + " " + getTheRatio(oneCountryFeatures[27]['value'], worldIncome),
                      oneCountryCodes[0] + ", " + oneCountryCodes[1] + ", " + oneCountryCodes[2] + ", " + oneCountryCodes[3] + ", " + oneCountryCodes[4], oneCountryFeatures[oneFeature]['value']];
                  }
              }
        }
        else {
            capitalCitiesOfAllCountriesRaw[aCountry] = [oneCountryFeatures[20]['value'], oneCountryFeatures[14]['value'] + " " + getCapitalPopulationPercent(oneCountryFeatures),
                getLargestCityIfAny(oneCountryFeatures, oneCountryFeatures[0]['value']),
                numberFixedToString(oneCountryFeatures[0]['value']) + " " + getTheRatio(oneCountryFeatures[0]['value'], worldPopulation),
                numberFixedToString(oneCountryFeatures[7]['value']) + " " + getTheRatio(oneCountryFeatures[7]['value'], worldSurfaceArea),
                numberFixedToString(oneCountryFeatures[27]['value']) + " " + getTheRatio(oneCountryFeatures[27]['value'], worldIncome),
                oneCountryCodes[0] + ", " + oneCountryCodes[1] + ", " + oneCountryCodes[2] + ", " + oneCountryCodes[3] + ", " + oneCountryCodes[4], oneCountryFeatures[14]['value']];
        }
    }
    countryCodesOfAllCountriesSortedByTurkishLongNames = capitalCitiesOfAllCountriesRaw;
}

// maybe + 'comment'/population... % == use this as a base to find out Capital City Population Population to world population, Surface to world surface is a direct function call..
function getLargestCityIfAny(oneCountryFeatures)
{
    for (var oneFeature in oneCountryFeatures)
    {
        if (oneCountryFeatures[oneFeature]['feature'] == "LargestCityPopulationDisplay") {
            return oneCountryFeatures[oneFeature]['value'] + " " + ((oneCountryFeatures[oneFeature]['comment']/oneCountryFeatures[0]['value'])*100).toFixed(2) + "%";
        }
    }
    return "";
}

function getCapitalPopulationPercent(oneCountryFeatures)
{
    for (var oneFeature in oneCountryFeatures)
    {
        if (oneCountryFeatures[oneFeature]['feature'] == "CapitalCitiesPopulationDisplay") {
            return ((oneCountryFeatures[oneFeature]['comment']/oneCountryFeatures[0]['value'])*100).toFixed(2) + "%";
        }
    }
    return "";
}

function getTheRatio(value, worldValue)
{
    if (value > 0 && worldValue > 0) {
        return " " + ((value * 1.00/worldValue)*100).toFixed(2) + "%";
    }
    else return "";
}

function finalizeCountriesPage() {
    document.getElementById("topHTML").replaceChild(eWorldCountriesBody, document.body);
    // (2) to rebuild the Table use this one
    /*
        createATable("id_CountryListMenu", ["Country","Region","Capital","Largest","Population","Surface","Income","Country Codes"],
            countryCodesOfAllCountriesSortedByTurkishLongNames, -999, "Array", myUndefined, true, 16);
     */
    document.getElementById("id_CountryListMenu").innerHTML = decodeURIComponent(countriesTableData); // (1) if the Table Data is Saved, to rebuild comment this decodeURI out
    document.getElementById("id_CountryFacts").innerHTML = selectedApplicationLanguageTexts["id_Countries"]; // start place holder
    triggerAMouseEvent("id_A");
    document.getElementsByTagName("body")[0].classList.add("countryCodeBodyBackground");
    // setTheTableData(); // (3) if the Table Data is NOT saved
    // /* (4) if table data is SAVED
    var tableRows = document.getElementById("id_CountryListMenu").rows; // if the Table Data is Saved
    headerRow = tableRows[0];
    for (var oneRow in tableRows)
    {
        if (oneRow >= 1 && oneRow <= 255)
            tableRowsByCapitalCity[tableRows[oneRow].cells[9].innerHTML] =  tableRows[oneRow];
    }
    for (var oneHeading in showPointer)
    {
        if (oneHeading.indexOf("ThText") != -1 && document.getElementById(oneHeading))
            document.getElementById(oneHeading).innerHTML = selectedApplicationLanguageTexts[oneHeading];
    }
    document.getElementById("id_Country CodesThText").innerHTML = selectedApplicationLanguageTexts["id_Country CodesThText"];
    document.getElementById("id_LargestThText").innerHTML = selectedApplicationLanguageTexts["id_LargestThText"];
    // */ // end of (4)
    document.getElementById("id_CountryListMenu").classList.remove("displayNone");
    document.getElementById("id_CountryListMenuDiv").classList.remove("displayNone");
    // set the default (initial) sort
    currentSortIcon = "id_CountryTh";
    if (document.getElementById(currentSortIcon+"Text"))
        document.getElementById(currentSortIcon+"Text").classList.add("selectedInputTag");
    // console.log(encodeURIComponent(document.getElementById("id_CountryListMenu").innerHTML)); // (5) // print if not SAVED (to be SAVED)
    // console.log(encodeURIComponent(document.getElementById("id_Letters26").innerHTML)); // (6) // to save A-Z
    // id_A to Z and ALL add Click Event for iPhone/iPad
    if (appleProduct) {
        for (var indexNo in capitalCitiesOptionTexts) {
            if (noCountryLetters[capitalCitiesOptionTexts[indexNo]]) { }
            else document.getElementById("id_"+capitalCitiesOptionTexts[indexNo]).addEventListener("click", countryCodesClickEvents, false);
        }
        for (var ii in showPointer) {
            document.getElementById(ii).addEventListener("click", countryCodesClickEvents, false);
        }
    }
    setNavFooterTags("CountryCodes");
}
