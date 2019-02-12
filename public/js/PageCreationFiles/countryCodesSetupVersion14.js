'use strict';

currentEWorldPage = "eWorld Countries"; // this should be up here all the time to work again from the menu (after the first time)

// retrieve the external js files if not open yet
importAnExternalJSFileIfNotYetWithNoProcessing("CountriesTableData", "js/OneCountryLanguageTextJSFiles/countriesTableData.js");

// add this into master.blade.php <script src="js/countryCodes.js"></script> for Table Data
// add this into master.blade.php <script src="js/oneLanguageSpecificTextAndCodeGeneration.js"> to Create World View or Each Region Flags object.

initializationUtilityForFlags();

// (0) getCountryCodesTableData(); // call if data is not saved but this is for to save it.
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
    h2HeaderCodes(eWorldCountriesHeader);
    muteTheSoundCodes(" ");
    addApplicationLanguageSelectionDropDownBox(h2First); // (): adds into h2First (redundant) but the variable will force it to skip class: dashBoardCombine
    h2First.classList.remove("h2Header"); // no grid required for eWorld Countries Pause and Application Text Language Selection
    playGreetingCodes(eWorldCountriesHeader);

    var eWorldCountriesMain = document.createElement("main");
    eWorldCountriesMain.setAttribute("class","myInfoPageCountryList");

    var eWorldCountriesMainDivOne = document.createElement("div");
    eWorldCountriesMainDivOne.setAttribute("id", "worldFlagsForm");
    if (appleProduct) {
      createCountryInformationLabels(eWorldCountriesMainDivOne, // Left Labels
          ["Language", "Population", "Overweight", "LifeExpectancy", "CapitalCities"],"marginPointPoint2Rem displayNone sharedLinkState");
    }
    else {
          createCountryInformationLabels(eWorldCountriesMainDivOne, // Left Labels
              ["Language", "Population", "Religion", "LandArea", "Income", "Overweight", "LifeExpectancy", "CapitalCities", "CountryCodes", "Currency", "Water",
              "SexRatio", "SeatRatio","HDI", "Gini"],"marginPointPoint2Rem displayNone sharedLinkState");
    }
    var eWorldCountriesMainDivTwo = document.createElement("div");
    eWorldCountriesMainDivTwo.setAttribute("id", "myInfoPageCountryList");
    var eWorldCountries26Letters = document.createElement("div");
    eWorldCountries26Letters.setAttribute("id", "id_Letters26");
    eWorldCountries26Letters.setAttribute("class", "worldCountryCodes");
    eWorldCountries26Letters.innerHTML = decodeURIComponent(aToZObject); // if the A to Z Object is Saved

    eWorldCountriesMainDivTwo.appendChild(eWorldCountries26Letters);
    var eWorldCountriesTableDiv = document.createElement("div");
    eWorldCountriesTableDiv.setAttribute("id", "id_CountryListMenuDiv");
    eWorldCountriesTableDiv.setAttribute("class", "displayNone");
    var eWorldCountriesTable = document.createElement("TABLE");
    eWorldCountriesTable.setAttribute("id", "id_CountryListMenu");
    eWorldCountriesTable.setAttribute("class", "displayNone");
    // (1) if the Table Data is Saved, to rebuild comment this decodeURI out
    eWorldCountriesTableDiv.appendChild(eWorldCountriesTable);
    eWorldCountriesMainDivTwo.appendChild(eWorldCountriesTableDiv);

    var eWorldCountriesMainDivThree = document.createElement("div");
    eWorldCountriesMainDivThree.setAttribute("id", "selectedFlagForm");
    if (appleProduct) {
        createCountryInformationLabels(eWorldCountriesMainDivThree, // Right Labels
            ["TravelWarning", "TimeAndDate", "GoogleMap", "Tourism", "UNCountry"],"marginPointPoint2Rem displayNone sharedLinkState");
    }
    else {
        createCountryInformationLabels(eWorldCountriesMainDivThree, // Right Labels
            ["DrivingSide", "CleanWater", "CleanToilet", "Cell", "RandD", "Internet", "TravelWarning", "TimeAndDate", "GoogleMap", "Government", "Tourism", "Weather",
            "WikiCountry", "CIACountry", "UNCountry"],"marginPointPoint2Rem displayNone sharedLinkState");
    }

    eWorldCountriesMain.appendChild(eWorldCountriesMainDivOne);
    eWorldCountriesMain.appendChild(eWorldCountriesMainDivTwo);
    eWorldCountriesMain.appendChild(eWorldCountriesMainDivThree);

    eWorldCountriesBody.appendChild(eWorldCountriesHeader);

    var eWorldCountriesNav = document.createElement("nav");
    eWorldCountriesNav.setAttribute("id", "id_Navigation");
    eWorldCountriesNav.setAttribute("class", "center");
    eWorldCountriesNav.setAttribute("data-nav", "CountryCodes");

    var eWorldCountriesFooter = document.createElement("footer");
    eWorldCountriesFooter.setAttribute("class","center");
    var eWorldCountriesFooterP = document.createElement("p");
    eWorldCountriesFooterP.setAttribute("id","id_CopyRight");
    var eWorldCountriesFooterP2 = document.createElement("p");
    eWorldCountriesFooterP2.setAttribute("id","id_LanguageImplementedBy");
    eWorldCountriesFooter.appendChild(eWorldCountriesFooterP);
    eWorldCountriesFooter.appendChild(eWorldCountriesFooterP2);

    eWorldCountriesBody.appendChild(eWorldCountriesMain);
    eWorldCountriesBody.appendChild(eWorldCountriesNav);
    eWorldCountriesBody.appendChild(eWorldCountriesFooter);

    // (2) to rebuld the Table use this one
    /*
        createATable("id_CountryListMenu", ["Country","Region","Capital","Largest","Population","Surface","Income","Country Codes"],
            countryCodesOfAllCountries, -999, "Array", myUndefined, true, 16);
     */
}, 50);

var aToZObject = "%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_A%22%20class%3D%22selectedInputTag%20aToZ%22%3EA%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_B%22%20class%3D%22aToZ%22%3EB%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_C%22%20class%3D%22aToZ%22%3EC%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_D%22%20class%3D%22aToZ%22%3ED%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_E%22%20class%3D%22aToZ%22%3EE%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_F%22%20class%3D%22aToZ%22%3EF%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_G%22%20class%3D%22aToZ%22%3EG%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_H%22%20class%3D%22aToZ%22%3EH%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_I%22%20class%3D%22aToZ%22%3EI%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_J%22%20class%3D%22aToZ%22%3EJ%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_K%22%20class%3D%22aToZ%22%3EK%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_L%22%20class%3D%22aToZ%22%3EL%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_M%22%20class%3D%22aToZ%22%3EM%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_N%22%20class%3D%22aToZ%22%3EN%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_O%22%20class%3D%22aToZ%22%3EO%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_P%22%20class%3D%22aToZ%22%3EP%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_Q%22%20class%3D%22aToZ%22%3EQ%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_R%22%20class%3D%22aToZ%22%3ER%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_S%22%20class%3D%22aToZ%22%3ES%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_T%22%20class%3D%22aToZ%22%3ET%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_U%22%20class%3D%22aToZ%22%3EU%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_V%22%20class%3D%22aToZ%22%3EV%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_W%22%20class%3D%22aToZ%22%3EW%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_X%22%20class%3D%22aToZ%22%3E%3Cdel%3EX%3C%2Fdel%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_Y%22%20class%3D%22aToZ%22%3EY%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_Z%22%20class%3D%22aToZ%22%3EZ%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22id_All%22%20class%3D%22aToZ%22%3EAll%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20";

/*
    if needed: the A to Z HTML tags

<span id="id_A" class="selectedInputTag aToZ">A</span>
<span id="id_B" class="aToZ">B</span>
<span id="id_C" class="aToZ">C</span>
<span id="id_D" class="aToZ">D</span>
<span id="id_E" class="aToZ">E</span>
<span id="id_F" class="aToZ">F</span>
<span id="id_G" class="aToZ">G</span>
<span id="id_H" class="aToZ">H</span>
<span id="id_I" class="aToZ">I</span>
<span id="id_J" class="aToZ">J</span>
<span id="id_K" class="aToZ">K</span>
<span id="id_L" class="aToZ">L</span>
<span id="id_M" class="aToZ">M</span>
<span id="id_N" class="aToZ">N</span>
<span id="id_O" class="aToZ">O</span>
<span id="id_P" class="aToZ">P</span>
<span id="id_Q" class="aToZ">Q</span>
<span id="id_R" class="aToZ">R</span>
<span id="id_S" class="aToZ">S</span>
<span id="id_T" class="aToZ">T</span>
<span id="id_U" class="aToZ">U</span>
<span id="id_V" class="aToZ">V</span>
<span id="id_W" class="aToZ">W</span>
<span id="id_X" class="aToZ"><del>X</del></span>
<span id="id_Y" class="aToZ">Y</span>
<span id="id_Z" class="aToZ">Z</span>
<span id="id_All" class="aToZ">All</span>
 */

// Controls (events)

var rowsByLetter = { "id_A":{"start":1,"end":16}, "id_B":{"start":17,"end":38}, "id_C":{"start":39,"end":61}, "id_D":{"start":62,"end":65}, "id_E":{"start":66,"end":74},
    "id_F":{"start":75,"end":82}, "id_G":{"start":83,"end":98}, "id_H":{"start":99,"end":104}, "id_I":{"start":105,"end":113}, "id_J":{"start":114,"end":117},
    "id_K":{"start":118,"end":125}, "id_L":{"start":126,"end":134}, "id_M":{"start":135,"end":157}, "id_N":{"start":158,"end":170}, "id_O":{"start":171,"end":171},
    "id_P":{"start":172,"end":183}, "id_Q":{"start":184,"end":184}, "id_R":{"start":185,"end":188}, "id_S":{"start":189,"end":223}, "id_T":{"start":224,"end":237},
    "id_U":{"start":238,"end":245}, "id_V":{"start":246,"end":250}, "id_W":{"start":251,"end":252}, "id_Y":{"start":253,"end":253}, "id_Z":{"start":254,"end":255},
    "id_All":{"start":1,"end":255} };

var processTheseTH = {0:true,1:true,2:true,4:true,5:true,6:true};
var fourBelongsToOthers = {"United States Minor Outlying Islands (the)":"UnitedStatesofAmerica",
    "Heard Island and McDonald Islands":"Australia", "Bouvet Island":"Norway" };
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
            tableRows[oneRow].setAttribute("name", countryFromLongName[countryNameFromTD]?countryFromLongName[countryNameFromTD]:countryNameFromTD);
            tableRows[oneRow].cells[0].classList.add("displayNone");
            tableRows[oneRow].cells[9].classList.add("displayNone");
            oneFlagImageElement = document.createElement("img");
            oneFlagImageElement.setAttribute("class", "plainFlagsWorld");

            if (countryNameFromTD.indexOf("|") != -1) {
                countryNameFromTD = countryNameFromTD.substring(0, countryNameFromTD.indexOf("|"));
                tableRows[oneRow].cells[1].innerHTML = tableRows[oneRow].cells[1].innerHTML.substring(0, tableRows[oneRow].cells[1].innerHTML.indexOf("|"));
            }
            if (countryNameFromTD && (countryNameFromTD.indexOf("-1") != -1 || countryNameFromTD.indexOf("-2") != -1 || countryNameFromTD.indexOf("-3") != -1)) {
                countryNameFromTD = countryNameFromTD.substring(0, countryNameFromTD.indexOf("-"));
                tableRows[oneRow].cells[1].innerHTML = countryNameFromTD;
            }
            if (countryFromLongName[countryNameFromTD]) {
                fourBelongsToOthers[countryNameFromTD]?oneFlagImageElement.src = "data:image/svg+xml," + flagsSVGFiles[fourBelongsToOthers[countryNameFromTD]].svg
                    :oneFlagImageElement.src = "data:image/svg+xml," + flagsSVGFiles[countryFromLongName[countryNameFromTD]].svg;
            }
            else if (flagsSVGFiles[countryNameFromTD])
                oneFlagImageElement.src = "data:image/svg+xml," + flagsSVGFiles[countryNameFromTD].svg;
            else console.log(countryNameFromTD);
            oneFlagImageElement.alt = "Entity: " + countryNameFromTD;
            oneFlagImageElement.name =
                countryFromLongName[countryNameFromTD]?countryFromLongName[countryNameFromTD]:countryNameFromTD;
            oneFlagImageElement.id = "id_" + (countryFromLongName[countryNameFromTD]?countryFromLongName[countryNameFromTD]:countryNameFromTD);
            tableRows[oneRow].cells[1].prepend(oneFlagImageElement);
        }
    }
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
    var iconName = oneTH.innerHTML.substring(oneTH.innerHTML.indexOf("<",1),oneTH.innerHTML.indexOf(">")+1);
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

function countryCodesChangeEvents(event)
{
    if (event.target.id == "appLanguageToUse") {
        openWithSelectedlanguage(applicationHrefs[document.getElementById("appLanguageToUse").value.substring(22)]);
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
        var newOrder = sortIconSelectionID[idIcon];
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
    for (var aCountry in countryCodesOfAllCountries)
    {   /* countryListOfAllCountries { "Afghanistan":["Region","CapitalCity","Big City", "Population", "Surface", "Income", "Alpha-2, Alpha-3, Numeric, GEC & Calling"],... } */
        if (countryFromLongName[aCountry]) oneCountryName = countryFromLongName[aCountry];
        else oneCountryName = aCountry;
        oneCountryFeatures = featuresOfAllCountries[oneCountryName];
        oneCountryCodes = countryCodesOfAllCountries[aCountry];
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
    countryCodesOfAllCountries = capitalCitiesOfAllCountriesRaw;
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
    // end of (4) */
    document.getElementById("id_CountryListMenu").classList.remove("displayNone");
    document.getElementById("id_CountryListMenuDiv").classList.remove("displayNone");
    // set the default (initial) sort
    currentSortIcon = "id_CountryTh";
    if (document.getElementById(currentSortIcon+"Text"))
        document.getElementById(currentSortIcon+"Text").classList.add("selectedInputTag");
    // (5) console.log(encodeURIComponent(document.getElementById("id_CountryListMenu").innerHTML)); // print if not SAVED (to be SAVED)
    // (6) console.log(encodeURIComponent(document.getElementById("id_Letters26").innerHTML)); // to save A-Z
    // id_A to Z and ALL add Click Event for iPhone/iPad
    if (appleProduct) {
        var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z','All'];
        for (var i in letters) {
            document.getElementById("id_"+letters[i]).addEventListener("click", countryCodesClickEvents, false);
        }
        for (var ii in showPointer) {
            document.getElementById(ii).addEventListener("click", countryCodesClickEvents, false);
        }
    }
    setNavFooterTags("CountryCodes");
}
