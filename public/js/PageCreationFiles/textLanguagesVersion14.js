'use strict';

// World Languages Drop Down Values
if (typeof worldLanguagesDropDownValues == 'undefined') // global.js may define this variable
var worldLanguagesDropDownValues = getWorldLanguagesDropDownValues();
// Application (Page) Name
currentEWorldPage = "Text Languages";

// HTML tags and content creation
var textLanguageBody =  document.createElement("body");
textLanguageBody.setAttribute("name","Text Language");

var textLanguageHeader = document.createElement("header");
textLanguageHeader.setAttribute("id", "id_Header");
textLanguageHeader.setAttribute("class","center");

var textLanguageH1 = document.createElement("h1");
textLanguageH1.setAttribute("id","id_FirstMessage");
textLanguageH1.appendChild(getASpanElement(myUndefined,myUndefined,selectedApplicationLanguageTexts["id_TextLanguages"]));

var textLanguageH2 = document.createElement("h2");
addApplicationLanguageSelectionDropDownBox(textLanguageH2);

textLanguageHeader.appendChild(textLanguageH1);
textLanguageHeader.appendChild(textLanguageH2);

var textLanguageMain = document.createElement("main");
textLanguageMain.setAttribute("id","worldFlagsLanguageForm");

var textLanguagePTop = document.createElement("p");
textLanguagePTop.setAttribute("class","center registerH2");

var textLanguageSpanInner = document.createElement("span");
textLanguageSpanInner.setAttribute("id","id_Country");
textLanguageSpanInner.setAttribute("class","appLanguageSelPapaya");
textLanguageSpanInner.innerHTML = selectedApplicationLanguageTexts["id_Country"];

var textLanguageLabel = document.createElement("label");
textLanguageLabel.setAttribute("for","appCountry");

var textLanguageSelect = document.createElement("select");
textLanguageSelect.setAttribute("id","appCountry");
textLanguageSelect.setAttribute("class","selectBoxStyles applicationLanguage resetAnchor appLanguageSel");
textLanguageSelect.appendChild(setFirstOption(selectedApplicationLanguageTexts["id_ChooseOne"], "ChooseOne", textLanguageSelect), true);
if (typeof allCountryNames == 'undefined') // global.js may define this variable
    var allCountryNames = allCountryNames = getAllCountriesNames();
if (typeof allCountryFullNames == 'undefined') // global.js may define this variable
    var allCountryFullNames = getAllCountriesFullNames();
for (var key in allCountryNames) {
    createOneOption(textLanguageSelect, allCountryFullNames[key], allCountryNames[key]);
}

textLanguageLabel.appendChild(textLanguageSelect);
textLanguagePTop.appendChild(textLanguageSpanInner);
textLanguagePTop.appendChild(textLanguageLabel);

var textLanguageSpanInnerTwo = document.createElement("span");
textLanguageSpanInnerTwo.setAttribute("id","id_Language");
textLanguageSpanInnerTwo.setAttribute("class","appLanguageSelPapaya");
textLanguageSpanInnerTwo.innerHTML = selectedApplicationLanguageTexts["id_Language"];

var textLanguageLabelTwo = document.createElement("label");
textLanguageLabelTwo.setAttribute("for","appLanguage");

var textLanguageSelectTwo = document.createElement("select");
textLanguageSelectTwo.setAttribute("id","appLanguage");
textLanguageSelectTwo.setAttribute("class","selectBoxStyles applicationLanguage resetAnchor appLanguageSel");
textLanguageSelectTwo.appendChild(setFirstOption(selectedApplicationLanguageTexts["id_ChooseOne"], "ChooseOne", textLanguageSelectTwo), true);
setOptionsFromSavedData(textLanguageSelectTwo,worldLanguagesDropDownValues);

var textLanguageI = document.createElement("i");
textLanguageI.setAttribute("id", "id_SaveStartupValues");
textLanguageI.setAttribute("class","material-icons");
textLanguageI.setAttribute("title",selectedApplicationLanguageTexts["title_SaveStartupValues"]);
textLanguageI.innerHTML = "save"; // this must be lowercase to work

textLanguagePTop.appendChild(textLanguageSpanInnerTwo);
textLanguageLabelTwo.appendChild(textLanguageSelectTwo);
textLanguagePTop.appendChild(textLanguageLabelTwo);
textLanguagePTop.appendChild(textLanguageI);
textLanguageMain.appendChild(textLanguagePTop);

var textLanguageForm = document.createElement("form"); // no method='POST' action='/' but AJAX with csrf_field
var textLanguageFieldset = document.createElement("fieldset");
var textLanguageLegend = document.createElement("legend");
textLanguageLegend.innerHTML = "Application Text Language Maintenance";
var textLanguageFormDiv = document.createElement("div");
textLanguageFormDiv.setAttribute("class","languageTable tableExtras margin1ThirdRem");
var textLanguagePlaceHolderTable = document.createElement("table");
textLanguagePlaceHolderTable.setAttribute("id","appLangIntroductionText");
var textLanguageTBody = document.createElement("tbody");
var textLanguageTBodyTr = document.createElement("tr");
var textLanguageTBodyTh = document.createElement("th");
textLanguageTBodyTh.setAttribute("id","id_LanguagePlaceHolder");
textLanguageTBodyTh.innerHTML = selectedApplicationLanguageTexts["id_LanguagePlaceHolder"];
var textLanguageTextTable = document.createElement("table");
textLanguageTextTable.setAttribute("id","appLangTextData");
textLanguageTextTable.setAttribute("class","displayNone");

textLanguageTBodyTr.appendChild(textLanguageTBodyTh);
textLanguageTBody.appendChild(textLanguageTBodyTr);
textLanguagePlaceHolderTable.appendChild(textLanguageTBody);
textLanguageFormDiv.appendChild(textLanguagePlaceHolderTable);
textLanguageFormDiv.appendChild(textLanguageTextTable);
textLanguageFieldset.appendChild(textLanguageLegend);
textLanguageFieldset.appendChild(textLanguageFormDiv);
textLanguageForm.appendChild(textLanguageFieldset);
textLanguageMain.appendChild(textLanguageForm);
// add navigation and footer and load the page (replace the body)
createNavFooterAddIntoBodyAndReplaceBody(textLanguageBody, textLanguageHeader, textLanguageMain, "TextLanguages");

// variables
var tagsTextsArray;
var usaAppLanTexts;
var appLanguageInstructionTable;
var appLanguageDataTable;
var applicationLanguageId = -1;
var enteredWordValues;

// including the initial immediate run the Functions.
setTimeout(function () {
    tagsTextsArray = "";
    usaAppLanTexts = "";
    appLanguageInstructionTable = document.getElementById('appLangIntroductionText');
    appLanguageDataTable = document.getElementById('appLangTextData');
    // if user enters /languages or use the refresh button:
    if (document.getElementById('appCountry').getElementsByTagName('option').length >0)
        document.getElementById('appCountry').getElementsByTagName('option')[0].selected = 'selected';
    if (document.getElementById('appLanguage').getElementsByTagName('option').length >0)
        document.getElementById('appLanguage').getElementsByTagName('option')[0].selected = 'selected';
    // at the beginning the Language can not be selected up until a Country is selected
    document.getElementById('appLanguage').disabled = true;
    // Add Application Language Events
    // On Application Language Country New Selection, Should not be any Language selected
    document.getElementById("appCountry").addEventListener("change", resetEntry, false);
    // If there is a country and a new language is selected (changed): Retrieve the data
    document.getElementById("appLanguage").addEventListener("change", changeEvents, false);
    // Save Button is selected
    document.getElementById("id_SaveStartupValues").addEventListener("click", clickedSaveButton, false);
    getUsaApplicationLanguageTexts();
}, 250);

function clickedSaveButton(event)
{
    // Validate the data: At least One Tag must have a Text
    if (isThereAnEntry())
    {
        setTimeout(function()
        {
            saveApplicationLanguageTexts();
        }, 600);
    }
    else
    {
        alert("Nothing Entered Yet; Can not be Saved!")
    }
}

function changeEvents(event)
{
    // if "Choose one..." selected, disable Menu tabs and display the example table
    if (document.getElementById("appLanguage").value == "ChooseOne")
    {
        // display the default introduction table text (data)
        if (appLanguageInstructionTable.classList.contains("displayNone"))
            appLanguageInstructionTable.classList.remove("displayNone");
        if (!appLanguageDataTable.classList.contains("displayNone"))
            appLanguageDataTable.classList.add("displayNone");
        applicationLanguageId = -1;
    }
    else
    {
        getThisApplicationLanguageTexts();
        setTimeout(function()
        {
            createTheTable();
        }, 500);
    }
}

function createTheTable() // this should be a method to be shared by Data Language Page...
{
    var htmlTableWithTexts = document.createElement("tbody");
    var trElement = document.createElement("tr");
    var thElement = document.createElement("th");
    thElement.setAttribute("id","id_AmericanEnglish");
    thElement.setAttribute("class","languageTH");
    var tdElement = document.createElement("td");
    var labelElement = document.createElement("label");
    var textElement = document.createTextNode(selectedApplicationLanguageTexts["id_AmericanEnglish"]);
    var inputElement = document.createElement("input"); // for About this should be an TextArea...
    thElement.appendChild(textElement) // first one is created above
    trElement.appendChild(thElement) // first one is created above
    thElement = document.createElement("th");
    thElement.setAttribute("id","id_AmericanEnglishInOtherLanguage");
    thElement.setAttribute("class","languageTH");
    textElement = document.createTextNode(selectedApplicationLanguageTexts["id_AmericanEnglishInOtherLanguage"]);
    thElement.appendChild(textElement);
    trElement.appendChild(thElement)
    htmlTableWithTexts.appendChild(trElement);
    insertEachRow(htmlTableWithTexts,trElement,thElement,tdElement,labelElement,textElement,inputElement);
}

function insertEachRow(htmlTableWithTexts,trElement,thElement,tdElement,labelElement,textElement,inputElement)
{
    var numberOfObjects = usaAppLanTexts.length;
    if (tagsTextsArray != "no row" && tagsTextsArray.length > 0) applicationLanguageId = tagsTextsArray[0].application_language_id;
    else applicationLanguageId = -1; // new entry "no row"
    var rowCount = 0;
    enteredWordValues = {};
    for (var loop = 0; loop < numberOfObjects; loop++)
    {
        trElement = document.createElement("tr");
        tdElement = document.createElement("td");
        labelElement = document.createElement("label")
        labelElement.setAttribute("for", "text" + loop);
        textElement = document.createTextNode(usaAppLanTexts[loop].text);
        labelElement.appendChild(textElement);
        tdElement.appendChild(labelElement);
        trElement.appendChild(tdElement)
        tdElement = document.createElement("td");
        inputElement = document.createElement("textarea");
        inputElement.setAttribute("class","languageInput");
        inputElement.setAttribute("id", "text" + loop);
        inputElement.setAttribute("type", "text");
        inputElement.setAttribute("autofocus", true);
        if (tagsTextsArray == null || tagsTextsArray == "" || tagsTextsArray == "no row") {} // no data yet
        else { inputElement.innerHTML = tagsTextsArray[loop].text; }
        tdElement.appendChild(inputElement);
        trElement.appendChild(tdElement);
        if (enteredWordValues[usaAppLanTexts[loop].text]) { // found: not the first one
            trElement.classList.add("displayNone");
        }
        else {
            if (rowCount%2 != 0) trElement.classList.add("oddRow"); // coloring each row different alternatively
            else trElement.classList.add("evenRow");
            rowCount++;
            enteredWordValues[usaAppLanTexts[loop].text] = "text"+loop; // first one's Id to retrieve the entered value.
        }
        htmlTableWithTexts.appendChild(trElement);
    }
    setTheTable(htmlTableWithTexts);
}

function setTheTable(htmlTableWithTexts)
{
    if (appLanguageDataTable.firstChild)
    {
        appLanguageDataTable.removeChild(appLanguageDataTable.firstChild);
    }
    appLanguageDataTable.appendChild(htmlTableWithTexts);
    if (!appLanguageInstructionTable.classList.contains("displayNone"))
    appLanguageInstructionTable.classList.add("displayNone");
    if (appLanguageDataTable.classList.contains("displayNone"))
        appLanguageDataTable.classList.remove("displayNone");
    document.getElementById('id_SaveStartupValues').disabled = false;
}

// saving this Application Language
function saveApplicationLanguageTexts()
{
    var xhttpsaveTagsTexts = new XMLHttpRequest(); // Get the Application Language and its Texts from the database (if exists)
    var texts = getTagIdTextsArray(); // Set up Tag and Text Array
    var dataWorlds = new FormData();
    // in controller: $request['count'], $request['texts'], $request['applicationLanguageId']);
    // in controller: $request['count'], $request['texts'], $request['countryId'], $request['languageId']);
    dataWorlds.append("count", usaAppLanTexts.length); // keep the sequence fixed since PHP receives with the same order (hard coded Request...)
    dataWorlds.append("texts", texts);
    xhttpsaveTagsTexts.onreadystatechange = function() // On Ready State Change
    {
        if (xhttpsaveTagsTexts.readyState == 4 && xhttpsaveTagsTexts.status == 200)
        {
            // ===> trigger "appLanguageToUse" change event (as if the Application Text Language is changed!)
            return (xhttpsaveTagsTexts.responseText == "success") ? true : false;
        }
    };
    // Pass: the application_language_id (1) (it exists); [TagId and Text] Array (2):
    if (applicationLanguageId != -1)
    {
        dataWorlds.append("applicationLanguageId", applicationLanguageId);
        xhttpsaveTagsTexts.open("POST", "/ajax/texts/save", true);
    }
    // Pass: the Country_id(1) and language_id(2) (it does not exist); [TagId and Text] Array (3):
    else
    {
        dataWorlds.append("countryId", document.getElementById("appCountry").selectedIndex);
        dataWorlds.append("languageId", document.getElementById("appLanguage").selectedIndex);
        xhttpsaveTagsTexts.open("POST", "/ajax/texts/create", true);
    }
    xhttpsaveTagsTexts.setRequestHeader('X-CSRF-TOKEN', document.getElementsByName('csrf-token')[0].getAttribute('content'));
    xhttpsaveTagsTexts.send(dataWorlds); // Start the Ajax Communication (call PHP program through Route => Controller)
}

// Retrieve (if any) and Set Up the Selected Application Language Texts for the Page
function getThisApplicationLanguageTexts()
{
    // Get the New Language Texts from the database
    var xhttploadTagsTexts = new XMLHttpRequest();
    // into an Array of "tag" => "text"
    tagsTextsArray = [];
    // On Ready State Change
    xhttploadTagsTexts.onreadystatechange = function()
    {
        if (xhttploadTagsTexts.readyState == 4 && xhttploadTagsTexts.status == 200)
        {
            tagsTextsArray = xhttploadTagsTexts.responseText;
            if (tagsTextsArray != "no row")
            {
                tagsTextsArray = JSON.parse(tagsTextsArray);
            }
            else applicationLanguageId = -1; // not found: A new entry...
        }
    };
    xhttploadTagsTexts.open("GET", "/ajax/texts?countryId="
        +document.getElementById("appCountry").selectedIndex
        +"&languageId="
        +document.getElementById("appLanguage").selectedIndex, true);
    // Start the Ajax Communication (call PHP program through Route => Controller)
    xhttploadTagsTexts.send();
}

// USA English is the Base Application Language: applicationLanguageId = 1
function getUsaApplicationLanguageTexts()
{
    // Get the New Language Texts from the database
    var xhttploadUsaTagsTexts = new XMLHttpRequest();
    // On Ready State Change
    xhttploadUsaTagsTexts.onreadystatechange = function()
    {
        if (xhttploadUsaTagsTexts.readyState == 4 && xhttploadUsaTagsTexts.status == 200)
        {
            usaAppLanTexts = xhttploadUsaTagsTexts.responseText;
            if (usaAppLanTexts != "no row")
            {
                // Retrieve returned PHP data
                usaAppLanTexts = JSON.parse(usaAppLanTexts);
            }
        }
    };
    xhttploadUsaTagsTexts.open("GET", "/ajax/usaTexts?applicationLanguageId=1", true);
    // Start the Ajax Communication (call PHP program through Route => Controller)
    xhttploadUsaTagsTexts.send();
}

function isThereAnEntry()
{
    if (!document.getElementById("text0")) return false; // no table created yet
    // Read all the Table Text
    var numberOfObjects = usaAppLanTexts.length;
    var tdId = "";
    for (var loop = 0; loop < numberOfObjects; loop++)
    {
        tdId = "text" + loop;
        if (document.getElementById(tdId).value.trim().length > 0)
        {
            return true;
        }
    }
    return false;
}

function getTagIdTextsArray()
{
    // Read all the Table Text
    var numberOfObjects = usaAppLanTexts.length;
    var notBlank = 0;
    var texts = ""; // a string with | to explode
    for (var loop = 0; loop < numberOfObjects; loop++)
    {
        // while I created the table, I saved each USA English word's td id in a JSON object: word: tagId.
        // any word (one or many) will read this first td's id entered value since duplicate one won't be seen (display None)
        texts += document.getElementById(enteredWordValues[usaAppLanTexts[loop].text]).value.trim() + "|";
    }
    // remove the last one otherwise there will be one empty one...
    texts = texts.substring(0, texts.lastIndexOf("|"));
    return texts;
}

function resetEntry()
{
    document.getElementById('appLanguage').getElementsByTagName('option')[0].selected = 'selected';
    // up until a Country is selected and it is not "choose": disable the Language selection
    // "Choose one..." can not be used: Text in the Application Language
    document.getElementById('appLanguage').disabled = (document.getElementById('appCountry').value == "choose") ? true : false;
    // Country Change: Put the Table into Demo Mode
    // display the default introduction table text (data)
    if (appLanguageInstructionTable.classList.contains("displayNone"))
        appLanguageInstructionTable.classList.remove("displayNone");
    if (!appLanguageDataTable.classList.contains("displayNone"))
        appLanguageDataTable.classList.add("displayNone");
}
