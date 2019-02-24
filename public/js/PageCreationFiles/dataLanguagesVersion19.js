'use strict';


importAnExternalUtilityJSFile("FlagsShortName", "js/OneCountryLanguageTextJSFiles/languageConversionHelperVersion19.js");

// Application (Page) Name
currentEWorldPage = "Data Languages";

// HTML tags and content creation
var textLanguageBody =  document.createElement("body");
textLanguageBody.setAttribute("name","Text Language");

var textLanguageHeader = document.createElement("header");
textLanguageHeader.setAttribute("id", "id_Header");
textLanguageHeader.setAttribute("class","center");

var textLanguageH1 = document.createElement("h1");
textLanguageH1.setAttribute("id","id_FirstMessage");
textLanguageH1.innerHTML = selectedApplicationLanguageTexts["id_DataLanguages"];

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
for (var key in fullNameForCountry) {
    createOneOption(textLanguageSelect, fullNameForCountry[key], 1+parseInt(countryArrayKeyValue[key]));
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
for (var key in fullNameForLanguage) {
    createOneOption(textLanguageSelectTwo, fullNameForLanguage[key], 1+parseInt(languageArrayKeyValue[key]));
}

var textLanguageI = document.createElement("i");
textLanguageI.setAttribute("id","id_SaveStartupValues");
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
textLanguageLegend.innerHTML = "Application Data Language Maintenance";
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
setTimeout(function() {
    createNavFooterAddIntoBodyAndReplaceBody(textLanguageBody, textLanguageHeader, textLanguageMain, "DataLanguages");
}, 100);
// variables
var tagsTextsArray;
var numberOfObjects;
var appLanguageInstructionTable;
var appLanguageDataTable;
var applicationLanguageId = -1;
var enteredWordValues;
var texts;
var usaTexts;

var processTheseDisplays = {"CapitalCitiesDisplay":"CapitalCitiesDisplay", "WaterDisplay":"WaterDisplay",
    "ReligionsDisplay":"ReligionsDisplay", "LanguageDisplay":"LanguageDisplay", "Gini":"Gini", "HDI":"HDI"};

// including the initial immediate run the Functions.
setTimeout(function () {
    tagsTextsArray = "";
    numberOfObjects = usaAppLanTexts.length;
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
}, 250);

function clickedSaveButton(event)
{
    // Validate the data: At least One Tag must have a Text
    if (isThereAnEntry())
    {
        setTimeout(function()
        {
            saveApplicationLanguageData();
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
            if (applicationLanguageId != -1) {
                getThisApplicationLanguageData(); // Good: Tex Language found, get/set the Data
                setTimeout(function() {
                    createTheTable();
                }, 400)
            }
        }, 400);
    }
}

function createTheTable() // this should be a method to be shared by Text Language Page...
{
    if (applicationLanguageId != -1) {
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
}

function insertEachRow(htmlTableWithTexts,trElement,thElement,tdElement,labelElement,textElement,inputElement)
{
    var rowCount = 0;
    enteredWordValues = {};
    for (var loop = 0; loop < numberOfObjects; loop++)
    {
        trElement = document.createElement("tr");
        tdElement = document.createElement("td");
        labelElement = document.createElement("label")
        labelElement.setAttribute("for", "text" + loop);
        labelElement.setAttribute("id", "for_text" + loop);
        textElement = document.createTextNode(usaAppLanTexts[loop]);
        labelElement.appendChild(textElement);
        tdElement.appendChild(labelElement);
        trElement.appendChild(tdElement)
        tdElement = document.createElement("td");
        inputElement = document.createElement("textarea");
        inputElement.setAttribute("class","languageInput");
        inputElement.setAttribute("id", "text" + loop);
        inputElement.setAttribute("type", "text");
        inputElement.setAttribute("autofocus", true);
        if (tagsTextsArray == null || tagsTextsArray == "[]" || tagsTextsArray == "no row") {} // no data yet
        else { if (tagsTextsArray[loop]) inputElement.innerHTML = tagsTextsArray[loop].this_language_feature_value; }
        tdElement.appendChild(inputElement);
        trElement.appendChild(tdElement);
        if (enteredWordValues[usaAppLanTexts[loop]]) { // found: not the first one
            trElement.classList.add("displayNone");
        }
        else {
            if (rowCount%2 != 0) trElement.classList.add("oddRow"); // coloring each row different alternatively
            else trElement.classList.add("evenRow");
            rowCount++;
            enteredWordValues[usaAppLanTexts[loop]] = "text"+loop; // first one's Id to retrieve the entered value.
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
function saveApplicationLanguageData()
{
    var applicationLanguageBasedId = 999;
    var xhttpsaveTagsData = new XMLHttpRequest();
    var dataWorlds = new FormData();
    getTagIdTextsArray();
    dataWorlds.append("applicationLanguageId", applicationLanguageId);
    dataWorlds.append("applicationLanguageBasedId", applicationLanguageBasedId);
    dataWorlds.append("texts", texts);
    xhttpsaveTagsData.onreadystatechange = function() // On Ready State Change
    {
        if (xhttpsaveTagsData.readyState == 4 && xhttpsaveTagsData.status == 200)
        {
            return (xhttpsaveTagsData.responseText == "success") ? true : false;
        }
    };
    // Pass: the application_language_id country and language ids
    xhttpsaveTagsData.open("POST", "/ajax/data/saveCreate", true);
    xhttpsaveTagsData.setRequestHeader('X-CSRF-TOKEN', document.getElementsByName('csrf-token')[0].getAttribute('content'));
    xhttpsaveTagsData.send(dataWorlds); // Start the Ajax Communication (call PHP program through Route => Controller)
}

// Retrieve the Application Text Language It must exist: The Application Text Language in order to enter the Application Data Language
function getThisApplicationLanguageTexts()
{
    // Get the selected Language Texts from the database: Must be
    var xhttploadTagsTexts = new XMLHttpRequest();
    // into an Array of "tag" => "text"
    tagsTextsArray = [];
    // On Ready State Change
    xhttploadTagsTexts.onreadystatechange = function()
    {
        if (xhttploadTagsTexts.readyState == 4 && xhttploadTagsTexts.status == 200)
        {
            tagsTextsArray = xhttploadTagsTexts.responseText;
            if (tagsTextsArray == "no row") {
                alert("The Application Text Language must be Defined prior to any Data Language entry!");
                applicationLanguageId = -1;
            }
            else {
                tagsTextsArray = JSON.parse(tagsTextsArray);
                if (tagsTextsArray.length > 0) {
                    applicationLanguageId = tagsTextsArray[0].application_language_id;
                }
            }
        }
    };
    xhttploadTagsTexts.open("GET", "/ajax/texts?countryId="
        +document.getElementById("appCountry").value
        +"&languageId="
        +document.getElementById("appLanguage").value, true);
    // Start the Ajax Communication (call PHP program through Route => Controller)
    xhttploadTagsTexts.send();
}

/* This Is Used As The NEW Application LANGUAGE CONFIGURATION MAINTENANCE */
function getThisApplicationLanguageData()
{
    // Get the Selected Language Data from the database if any
    var xhttploadTagsData = new XMLHttpRequest();
    // into an Array of "tag" => "text"
    tagsTextsArray = [];
    // On Ready State Change
    xhttploadTagsData.onreadystatechange = function()
    {
        if (xhttploadTagsData.readyState == 4 && xhttploadTagsData.status == 200)
        {
            tagsTextsArray = xhttploadTagsData.responseText;
            if (tagsTextsArray == "[]" || tagsTextsArray == "no row") {
                // no data yet (never saved!)
            }
            else {
                tagsTextsArray = JSON.parse(tagsTextsArray);
                var basedOnId = tagsTextsArray[0].based_on_application_language_id;
                newLanguageCodeTextGeneration(tagsTextsArray);
            }
        }
    };
    xhttploadTagsData.open("GET", "/ajax/data?applicationLanguageId="+applicationLanguageId, true);
    // Start the Ajax Communication (call PHP program through Route => Controller)
    xhttploadTagsData.send();
}

function newLanguageCodeTextGeneration(tagsTextsArray) {
    // create World View Flags
    // recreateTheFlagsWithNewCountry(false);

    // setApplicationLanguage(2); // get a language Application Text: 1=USA(English) 2=Turkey(Turkish) 3=Slovakia(Slovak) ...
    // console.log(encodeURIComponent(DEFAULTREGIONAPPLICATIONLANGUAGETEXT));

    var englishToSelectedLanguageJSONObject = {};
    for (var x in tagsTextsArray) {
        if (englishToSelectedLanguageJSONObject[usaAppLanTexts[usaAppLanTexts[x].substring(usaAppLanTexts[x].indexOf(":")+2)]]) { } // skip in already
        else englishToSelectedLanguageJSONObject[usaAppLanTexts[x].substring(usaAppLanTexts[x].indexOf(":")+2)] =
            tagsTextsArray[x]["this_language_feature_value"];
    }
    // console.log(JSON.stringify(englishToSelectedLanguageJSONObject)); // if needed to add Data Seeder...
    // "feature" "value" conversion
    for (var oneCountry in featuresOfAllCountries) {
        for (var oneFeature in featuresOfAllCountries[oneCountry]) {
            if (englishToSelectedLanguageJSONObject[featuresOfAllCountries[oneCountry][oneFeature]["value"]]) {
                featuresOfAllCountries[oneCountry][oneFeature]["value"] = // changing Features (no Display)
                    englishToSelectedLanguageJSONObject[featuresOfAllCountries[oneCountry][oneFeature]["value"]];
            }
        }
    }
    convertTheRestFeaturesOfAllCountries(englishToSelectedLanguageJSONObject);
}

function convertTheRestFeaturesOfAllCountries(englishToSelectedLanguageJSONObject) {
    var oneFeatureValue; // more than value (language, religion, water, capital city): Display values conversion (if " and ", " , ")
    for (var oneCountry in featuresOfAllCountries) {
        for (var oneFeature in featuresOfAllCountries[oneCountry]) {
            if (processTheseDisplays[featuresOfAllCountries[oneCountry][oneFeature]["feature"]]) {
                oneFeatureValue = featuresOfAllCountries[oneCountry][oneFeature]["value"];
                if (oneFeatureValue && oneFeatureValue.indexOf("and") != -1) { // replace "and" with "," later "and" will be added before the last word
                    oneFeatureValue = oneFeatureValue.substring(0, oneFeatureValue.indexOf("and")) +
                        "," + oneFeatureValue.substring(oneFeatureValue.indexOf("and")+3);
                }
                var newLine = ""; // "normalize" the Bay and Gulf and Sea Names
                oneFeatureValue = oneFeatureValue.split(","); // can not be only one word: Fix it if it is: Erase "Display" excluding US States
                var bayGulfNameReplaced = "";
                for (var oneBayOrGulf in oneFeatureValue) {
                    if (bayAndGulfNamesFromJSON[oneFeatureValue[oneBayOrGulf]])
                        bayGulfNameReplaced += " " + bayAndGulfNamesFromJSON[oneFeatureValue[oneBayOrGulf]] + " ,";
                    else bayGulfNameReplaced += oneFeatureValue[oneBayOrGulf] + ",";
                }
                bayGulfNameReplaced = bayGulfNameReplaced.substring(0, bayGulfNameReplaced.lastIndexOf(","));
                oneFeatureValue = bayGulfNameReplaced.trim();
                oneFeatureValue = oneFeatureValue.split(" ");
                var oneWordText = "";
                for (var oneWord in oneFeatureValue) {
                    oneWordText = oneFeatureValue[oneWord];
                    var thereIsComma = false;
                    if (oneWordText.lastIndexOf(",") != -1) { // remove the Comma
                        oneWordText = oneWordText.substring(0, oneWordText.lastIndexOf(","));
                        thereIsComma = true;
                    }
                    if (englishToSelectedLanguageJSONObject[oneWordText]) {
                        newLine += englishToSelectedLanguageJSONObject[oneWordText] + (thereIsComma?", ":" ");
                    }
                    else {
                        newLine += oneFeatureValue[oneWord] + " "; // no other language word, use the original
                    }
                }
                oneFeatureValue = newLine.replace(" , ", " " + englishToSelectedLanguageJSONObject["and"] + " ");
                featuresOfAllCountries[oneCountry][oneFeature]["value"] = oneFeatureValue;
            }
        }
    }
    convertTheComments(englishToSelectedLanguageJSONObject);
    console.log(JSON.stringify(featuresOfAllCountries));
}

function convertTheComments(englishToSelectedLanguageJSONObject) {
    // convert the Comment words; if applicationLanguageId = 2 (Turkey) Exception 1: if Mediterranean blank Sea out...
    for (var oneCountry in featuresOfAllCountries) {
        for (var oneFeature in featuresOfAllCountries[oneCountry]) {
            if (englishToSelectedLanguageJSONObject[featuresOfAllCountries[oneCountry][oneFeature]["comment"]]) {
                if (applicationLanguageId == 2 && featuresOfAllCountries[oneCountry][oneFeature]["value"] == "Mediterranean") {
                    featuresOfAllCountries[oneCountry][oneFeature]["comment"] = "";
                }
                else featuresOfAllCountries[oneCountry][oneFeature]["comment"] =
                    englishToSelectedLanguageJSONObject[featuresOfAllCountries[oneCountry][oneFeature]["comment"]];
            }
        }
    }
}

function isThereAnEntry()
{
    if (!document.getElementById("text0")) return false; // no table created yet
    // Read all the Table Text
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
    texts = ""; // a string with | to explode
    for (var loop = 0; loop < numberOfObjects; loop++)
    {
        // while I created the table, I saved each USA English word's td id in a JSON object: word: tagId.
        // any word (one or many) will read this first td's id entered value since duplicate one won't be seen (display None)
        texts += document.getElementById(enteredWordValues[usaAppLanTexts[loop]]).value.trim() + "|";
    }
    // remove the last one otherwise there will be one empty one...
    texts = texts.substring(0, texts.lastIndexOf("|"));
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

/*
    (1) from Feature table all unique words
    (2) low, medium, how for Gini
    (3) Country Full Names, Short Names (can be one name for all 3 fields)

    select distinct concat('"',feature,": ",value,'",')
    from features where value > " " and (
        feature = 'DrivingSide' or
        feature = 'Currency' or
        feature = 'CapitalCities' or
        feature = 'LanguageDisplay' or
        feature = 'Language' or
        feature = 'Water' or
        feature = 'WaterDisplay' or
        feature = 'Religion' or
        feature = 'ReligionDisplay' or
        feature = 'Region' or
        feature = 'Color' or
        feature = 'Shape')
    order by feature, value;

 */

var usaAppLanTexts = [ // for Gini: low/medium/high
    'Miscellaneous: Low',
    'Miscellaneous: Medium',
    'Miscellaneous: High',
    'Miscellaneous: and',
    'Miscellaneous: Lake',
    'Miscellaneous: Ocean',
    'Miscellaneous: Sea',
    'Miscellaneous: Seas',
    /*
    select distinct concat("'",short_name,"':'",long_name,"',") from countries;
    */
    'Country: Afghanistan','Country: Afghanistan', // from Country table: full name or short name (all can be the same: Spain, Turkey, Slovakia...)
    'Country: Åland','Country: Åland Islands',
    'Country: Albania','Country: Albania',
    'Country: Algeria','Country: Algeria',
    'Country: US Samoa','Country: American Samoa',
    'Country: Andorra','Country: Andorra',
    'Country: Angola','Country: Angola',
    'Country: Anguilla','Country: Anguilla',
    'Country: Antarctic','Country: Antarctic Treaty System',
    'Country: Antigua','Country: Antigua and Barbuda',
    'Country: Argentina','Country: Argentina',
    'Country: Armenia','Country: Armenia',
    'Country: Aruba','Country: Aruba',
    'Country: Australia','Country: Australia',
    'Country: Austria','Country: Austria',
    'Country: Azerbaijan','Country: Azerbaijan',
    'Country: Bahamas','Country: Bahamas',
    'Country: Bahrain','Country: Bahrain',
    'Country: Bangladesh','Country: Bangladesh',
    'Country: Barbados','Country: Barbados',
    'Country: Belarus','Country: Belarus',
    'Country: Belgium','Country: Belgium',
    'Country: Belize','Country: Belize',
    'Country: Benin','Country: Benin',
    'Country: Bermuda','Country: Bermuda',
    'Country: Bhutan','Country: Bhutan',
    'Country: Bolivia','Country: Bolivia',
    'Country: Bonaire','Country: Bonaire Sint Eustatius and Saba',
    'Country: Bosnia','Country: Bosnia and Herzegovina',
    'Country: Botswana','Country: Botswana',
    'Country: Bouvet','Country: Bouvet Island',
    'Country: Brazil','Country: Brazil',
    'Country: UK Indian','Country: British Indian Ocean Territory',
    'Country: BVI','Country: British Virgin Islands',
    'Country: Brunei','Country: Brunei',
    'Country: Bulgaria','Country: Bulgaria',
    'Country: Burkina Faso','Country: Burkina Faso',
    'Country: Burundi','Country: Burundi',
    'Country: Cambodia','Country: Cambodia',
    'Country: Cameroon','Country: Cameroon',
    'Country: Canada','Country: Canada',
    'Country: Canary','Country: Canary Islands',
    'Country: Cabo Verde','Country: Cabo Verde',
    'Country: Cayman','Country: Cayman Islands',
    'Country: CAR','Country: Central African Republic',
    'Country: Chad','Country: Chad',
    'Country: Chile','Country: Chile',
    'Country: China','Country: China',
    'Country: Christmas','Country: Christmas Island',
    'Country: Cocos','Country: Cocos Islands',
    'Country: Colombia','Country: Colombia',
    'Country: Comoros','Country: Comoros',
    'Country: Cook','Country: Cook Islands',
    'Country: Costa Rica','Country: Costa Rica',
    "Country: Côte d'Ivoire","Country: Côte d'Ivoire",
    'Country: Croatia','Country: Croatia',
    'Country: Cuba','Country: Cuba',
    'Country: Curaçao','Country: Curaçao',
    'Country: Cyprus','Country: Cyprus',
    'Country: Czechia','Country: Czechia',
    'Country: DR Congo','Country: Democratic Republic of the Congo',
    'Country: Denmark','Country: Denmark',
    'Country: Djibouti','Country: Djibouti',
    'Country: Dominica','Country: Dominica',
    'Country: Dominican','Country: Dominican Republic',
    'Country: Ecuador','Country: Ecuador',
    'Country: Egypt','Country: Egypt',
    'Country: El Salvador','Country: El Salvador',
    'Country: E Guinea','Country: Equatorial Guinea',
    'Country: Eritrea','Country: Eritrea',
    'Country: Estonia','Country: Estonia',
    'Country: Eswatini','Country: Eswatini',
    'Country: Ethiopia','Country: Ethiopia',
    'Country: Falkland','Country: Falkland Islands',
    'Country: Faroe','Country: Faroe Islands',
    'Country: Fiji','Country: Fiji',
    'Country: Finland','Country: Finland',
    'Country: France','Country: France',
    'Country: Guiana','Country: French Guiana',
    'Country: Polynesia','Country: French Polynesia',
    'Country: Fr Antarctic','Country: French Southern and Antarctic Lands',
    'Country: Gabon','Country: Gabon',
    'Country: Gambia','Country: Gambia',
    'Country: Georgia','Country: Georgia',
    'Country: Germany','Country: Germany',
    'Country: Ghana','Country: Ghana',
    'Country: Gibraltar','Country: Gibraltar',
    'Country: Greece','Country: Greece',
    'Country: Greenland','Country: Greenland',
    'Country: Grenada','Country: Grenada',
    'Country: Guadeloupe','Country: Guadeloupe',
    'Country: Guam','Country: Guam',
    'Country: Guatemala','Country: Guatemala',
    'Country: Guernsey','Country: Guernsey',
    'Country: Guinea','Country: Guinea',
    'Country: Guinea Bissau','Country: Guinea-Bissau',
    'Country: Guyana','Country: Guyana',
    'Country: Haiti','Country: Haiti',
    'Country: H McDonald','Country: Heard Island and McDonald Islands',
    'Country: Honduras','Country: Honduras',
    'Country: Hong Kong','Country: Hong Kong',
    'Country: Hungary','Country: Hungary',
    'Country: Iceland','Country: Iceland',
    'Country: India','Country: India',
    'Country: Indonesia','Country: Indonesia',
    'Country: Iran','Country: Iran',
    'Country: Iraq','Country: Iraq',
    'Country: Ireland','Country: Ireland',
    'Country: Isle of Man','Country: Isle of Man',
    'Country: Israel','Country: Israel',
    'Country: Italy','Country: Italy',
    'Country: Jamaica','Country: Jamaica',
    'Country: Japan','Country: Japan',
    'Country: Jersey','Country: Jersey',
    'Country: Jordan','Country: Jordan',
    'Country: Kazakhstan','Country: Kazakhstan',
    'Country: Kenya','Country: Kenya',
    'Country: Kiribati','Country: Kiribati',
    'Country: Kosovo','Country: Kosovo',
    'Country: Kuwait','Country: Kuwait',
    'Country: Kyrgyzstan','Country: Kyrgyzstan',
    'Country: Laos','Country: Laos',
    'Country: Latvia','Country: Latvia',
    'Country: Lebanon','Country: Lebanon',
    'Country: Lesotho','Country: Lesotho',
    'Country: Liberia','Country: Liberia',
    'Country: Libya','Country: Libya',
    'Country: Liechtenstein','Country: Liechtenstein',
    'Country: Lithuania','Country: Lithuania',
    'Country: Luxembourg','Country: Luxembourg',
    'Country: Macau','Country: Macau',
    'Country: Macedonia','Country: Macedonia',
    'Country: Madagascar','Country: Madagascar',
    'Country: Malawi','Country: Malawi',
    'Country: Malaysia','Country: Malaysia',
    'Country: Maldives','Country: Maldives',
    'Country: Mali','Country: Mali',
    'Country: Malta','Country: Malta',
    'Country: Marshall','Country: Marshall Islands',
    'Country: Martinique','Country: Martinique',
    'Country: Mauritania','Country: Mauritania',
    'Country: Mauritius','Country: Mauritius',
    'Country: Mayotte','Country: Mayotte',
    'Country: Mexico','Country: Mexico',
    'Country: Micronesia','Country: Micronesia',
    'Country: Moldova','Country: Moldova',
    'Country: Monaco','Country: Monaco',
    'Country: Mongolia','Country: Mongolia',
    'Country: Montenegro','Country: Montenegro',
    'Country: Montserrat','Country: Montserrat',
    'Country: Morocco','Country: Morocco',
    'Country: Mozambique','Country: Mozambique',
    'Country: Myanmar','Country: Myanmar',
    'Country: Namibia','Country: Namibia',
    'Country: Nauru','Country: Nauru',
    'Country: Nepal','Country: Nepal',
    'Country: Netherlands','Country: Netherlands',
    'Country: N Caledonia','Country: New Caledonia',
    'Country: N Zealand','Country: New Zealand',
    'Country: Nicaragua','Country: Nicaragua',
    'Country: Niger','Country: Niger',
    'Country: Nigeria','Country: Nigeria',
    'Country: Niue','Country: Niue',
    'Country: Norfolk','Country: Norfolk Island',
    'Country: Mariana','Country: Northern Mariana Islands',
    'Country: North Korea','Country: North Korea',
    'Country: Norway','Country: Norway',
    'Country: Oman','Country: Oman',
    'Country: Pakistan','Country: Pakistan',
    'Country: Palau','Country: Palau',
    'Country: Panama','Country: Panama',
    'Country: P N Guinea','Country: Papua New Guinea',
    'Country: Paraguay','Country: Paraguay',
    'Country: Peru','Country: Peru',
    'Country: Philippines','Country: Philippines',
    'Country: Pitcairn','Country: Pitcairn Islands',
    'Country: Poland','Country: Poland',
    'Country: Portugal','Country: Portugal',
    'Country: Puerto Rico','Country: Puerto Rico',
    'Country: Qatar','Country: Qatar',
    'Country: Rep Congo','Country: Republic of Congo',
    'Country: Réunion','Country: Réunion',
    'Country: Romania','Country: Romania',
    'Country: Russia','Country: Russian Federation',
    'Country: Rwanda','Country: Rwanda',
    'Country: Barthélemy','Country: Saint Barthélemy',
    'Country: St Helena','Country: Saint Helena',
    'Country: St Kitts','Country: St. Kitts & Nevis',
    'Country: St Lucia','Country: Saint Lucia',
    'Country: St Martin','Country: Saint Martin',
    'Country: St Pierre','Saint Pierre and Miquelon',
    'Country: St Vincents','Country: Saint Vincent and the Grenadines',
    'Country: Samoa','Country: Samoa',
    'Country: San Marino','Country: San Marino',
    'Country: São Tomé','Country: São Tomé and Príncipe',
    'Country: Saudi Arabia','Country: Saudi Arabia',
    'Country: Senegal','Country: Senegal',
    'Country: Serbia','Country: Serbia',
    'Country: Seychelles','Country: Seychelles',
    'Country: Sierra Leone','Country: Sierra Leone',
    'Country: Singapore','Country: Singapore',
    'Country: St Maarten','Country: Sint Maarten',
    'Country: Slovakia','Country: Slovakia',
    'Country: Slovenia','Country: Slovenia',
    'Country: Solomon','Country: Solomon Islands',
    'Country: Somalia','Country: Somalia',
    'Country: South Africa','Country: South Africa',
    'Country: S Georgia','Country: South Georgia And South Sandwich Islands',
    'Country: South Korea','Country: South Korea',
    'Country: S Sudan','Country: South Sudan',
    'Country: Spain','Country: Spain',
    'Country: Sri Lanka','Country: Sri Lanka',
    'Country: Palestine','Country: State of Palestine',
    'Country: Sudan','Country: Sudan',
    'Country: Suriname','Country: Suriname',
    'Country: Svalbard','Country: Svalbard and Jan Mayen',
    'Country: Sweden','Country: Sweden',
    'Country: Switzerland','Country: Switzerland',
    'Country: Syria','Country: Syria',
    'Country: Taiwan','Country: Taiwan: Republic of China',
    'Country: Tajikistan','Country: Tajikistan',
    'Country: Tanzania','Country: Tanzania',
    'Country: Thailand','Country: Thailand',
    'Country: Timor Leste','Country: Timor-Leste',
    'Country: Togo','Country: Togo',
    'Country: Tokelau','Country: Tokelau',
    'Country: Tonga','Country: Tonga',
    'Country: Trinidad','Country: Trinidad and Tobago',
    'Country: Tunisia','Country: Tunisia',
    'Country: Turkey','Country: Turkey',
    'Country: TRNC','Country: Turkish Republic of Northern Cyprus',
    'Country: Turkmenistan','Country: Turkmenistan',
    'Country: Turks Caicos','Country: Turks and Caicos Islands',
    'Country: Tuvalu','Country: Tuvalu',
    'Country: Uganda','Country: Uganda',
    'Country: Ukraine','Country: Ukraine',
    'Country: UAE','Country: United Arab Emirates',
    'Country: UK','Country: United Kingdom',
    'Country: US Minor','Country: United States Minor Outlying Islands',
    'Country: USA','Country: United States',
    'Country: USVI','Country: United States Virgin Islands',
    'Country: Uruguay','Country: Uruguay',
    'Country: Uzbekistan','Country: Uzbekistan',
    'Country: Vanuatu','Country: Vanuatu',
    'Country: Vatican','Country: Vatican City and Holy See',
    'Country: Venezuela','Country: Venezuela',
    'Country: Vietnam','Country: Vietnam',
    'Country: Wallis','Country: Wallis and Futuna',
    'Country: West Sahara','Country: Western Sahara',
    'Country: Yemen','Country: Yemen',
    'Country: Zambia','Country: Zambia',
    'Country: Zimbabwe','Country: Zimbabwe',
    // from Feature table
    "CapitalCities: Abu Dhabi",
    "CapitalCities: Abuja",
    "CapitalCities: Accra",
    "CapitalCities: Adamstown",
    "CapitalCities: Addis Ababa",
    "CapitalCities: Algiers",
    "CapitalCities: Alofi",
    "CapitalCities: Amman",
    "CapitalCities: Amsterdam",
    "CapitalCities: Andorra la Vella",
    "CapitalCities: Ankara",
    "CapitalCities: Antananarivo",
    "CapitalCities: Apia",
    "CapitalCities: Ashgabat",
    "CapitalCities: Asmara",
    "CapitalCities: Astana",
    "CapitalCities: Asunción",
    "CapitalCities: Athens",
    "CapitalCities: Avarua",
    "CapitalCities: Baghdad",
    "CapitalCities: Baku",
    "CapitalCities: Bamako",
    "CapitalCities: Bandar Seri Begawan",
    "CapitalCities: Bangkok",
    "CapitalCities: Bangui",
    "CapitalCities: Banjul",
    "CapitalCities: Basse-Terre",
    "CapitalCities: Basseterre",
    "CapitalCities: Beijing",
    "CapitalCities: Beirut",
    "CapitalCities: Belgrade",
    "CapitalCities: Belmopan",
    "CapitalCities: Berlin",
    "CapitalCities: Bern",
    "CapitalCities: Bishkek",
    "CapitalCities: Bissau",
    "CapitalCities: Bloemfontein",
    "CapitalCities: Bogota",
    "CapitalCities: Brades",
    "CapitalCities: Brasilia",
    "CapitalCities: Bratislava",
    "CapitalCities: Brazzaville",
    "CapitalCities: Bridgetown",
    "CapitalCities: Brussels",
    "CapitalCities: Bucharest",
    "CapitalCities: Budapest",
    "CapitalCities: Buenos Aires",
    "CapitalCities: Bujumbura",
    "CapitalCities: Cairo",
    "CapitalCities: Camp Justice",
    "CapitalCities: Canberra",
    "CapitalCities: Cape Town",
    "CapitalCities: Caracas",
    "CapitalCities: Castries",
    "CapitalCities: Cayenne",
    "CapitalCities: Charlotte Amalie",
    "CapitalCities: Chișinău",
    "CapitalCities: Cockburn Town",
    "CapitalCities: Colombo",
    "CapitalCities: Conakry",
    "CapitalCities: Copenhagen",
    "CapitalCities: Dakar",
    "CapitalCities: Damascus",
    "CapitalCities: Dhaka",
    "CapitalCities: Dili",
    "CapitalCities: Djibouti",
    "CapitalCities: Dodoma",
    "CapitalCities: Doha",
    "CapitalCities: Douglas",
    "CapitalCities: Dublin",
    "CapitalCities: Dushanbe",
    "CapitalCities: East Jerusalem",
    "CapitalCities: El Aaiún",
    "CapitalCities: Flying Fish Cove",
    "CapitalCities: Fort-de-France",
    "CapitalCities: Freetown",
    "CapitalCities: Funafuti",
    "CapitalCities: Gaborone",
    "CapitalCities: Garapan",
    "CapitalCities: George Town",
    "CapitalCities: Georgetown",
    "CapitalCities: Gibraltar",
    "CapitalCities: Guatemala City",
    "CapitalCities: Gustavia",
    "CapitalCities: Hagåtña",
    "CapitalCities: Hamilton",
    "CapitalCities: Hanoi",
    "CapitalCities: Harare",
    "CapitalCities: Havana",
    "CapitalCities: Helsinki",
    "CapitalCities: Hong Kong",
    "CapitalCities: Honiara",
    "CapitalCities: Islamabad",
    "CapitalCities: Jakarta",
    "CapitalCities: Jamestown",
    "CapitalCities: Jerusalem",
    "CapitalCities: Juba",
    "CapitalCities: Kabul",
    "CapitalCities: Kampala",
    "CapitalCities: Kathmandu",
    "CapitalCities: Khartoum",
    "CapitalCities: Kigali",
    "CapitalCities: King Edward Point",
    "CapitalCities: Kingston-JM",
    "CapitalCities: Kingston-NF",
    "CapitalCities: Kingstown",
    "CapitalCities: Kinshasa",
    "CapitalCities: Kralendijk",
    "CapitalCities: Kuala Lumpur",
    "CapitalCities: Kuwait City",
    "CapitalCities: Kyiv",
    "CapitalCities: La Paz",
    "CapitalCities: Las Palmas",
    "CapitalCities: Libreville",
    "CapitalCities: Lilongwe",
    "CapitalCities: Lima",
    "CapitalCities: Lisbon",
    "CapitalCities: Ljubljana",
    "CapitalCities: Lobamba",
    "CapitalCities: Lomé",
    "CapitalCities: London",
    "CapitalCities: Longyearbyen",
    "CapitalCities: Luanda",
    "CapitalCities: Lusaka",
    "CapitalCities: Luxembourg",
    "CapitalCities: Macau",
    "CapitalCities: Madrid",
    "CapitalCities: Majuro",
    "CapitalCities: Malabo",
    "CapitalCities: Malé",
    "CapitalCities: Mamoudzou",
    "CapitalCities: Managua",
    "CapitalCities: Manama",
    "CapitalCities: Manila",
    "CapitalCities: Maputo",
    "CapitalCities: Mariehamn",
    "CapitalCities: Marigot",
    "CapitalCities: Maseru",
    "CapitalCities: Matu-Utu",
    "CapitalCities: Mbabane",
    "CapitalCities: Melekeok",
    "CapitalCities: Mexico City",
    "CapitalCities: Minsk",
    "CapitalCities: Mogadishu",
    "CapitalCities: Monaco",
    "CapitalCities: Monrovia",
    "CapitalCities: Montevideo",
    "CapitalCities: Moroni",
    "CapitalCities: Moscow",
    "CapitalCities: Muscat",
    "CapitalCities: N'Djamena",
    "CapitalCities: N/A-AQ",
    "CapitalCities: N/A-BV",
    "CapitalCities: N/A-HM",
    "CapitalCities: Nairobi",
    "CapitalCities: Nassau",
    "CapitalCities: Nay Pyi Taw",
    "CapitalCities: New Delhi",
    "CapitalCities: Niamey",
    "CapitalCities: Nicosia",
    "CapitalCities: NONE",
    "CapitalCities: North Nicosia",
    "CapitalCities: Nouakchott",
    "CapitalCities: Nouméa",
    "CapitalCities: Nuku'alofa",
    "CapitalCities: Nuuk",
    "CapitalCities: Oranjestad",
    "CapitalCities: Oslo",
    "CapitalCities: Ottawa",
    "CapitalCities: Ouagadougou",
    "CapitalCities: Pago Pago",
    "CapitalCities: Palikir",
    "CapitalCities: Panama City",
    "CapitalCities: Papeete",
    "CapitalCities: Paramaribo",
    "CapitalCities: Paris",
    "CapitalCities: Philipsburg",
    "CapitalCities: Phnom Penh",
    "CapitalCities: Podgorica",
    "CapitalCities: Port Louis",
    "CapitalCities: Port Moresby",
    "CapitalCities: Port of Spain",
    "CapitalCities: Port Vila",
    "CapitalCities: Port-au-Prince",
    "CapitalCities: Porto-Novo",
    "CapitalCities: Prague",
    "CapitalCities: Praia",
    "CapitalCities: Pretoria",
    "CapitalCities: Pristina",
    "CapitalCities: Pyongyang",
    "CapitalCities: Quito",
    "CapitalCities: Rabat",
    "CapitalCities: Reykjavik",
    "CapitalCities: Riga",
    "CapitalCities: Riyadh",
    "CapitalCities: Road Town",
    "CapitalCities: Rome",
    "CapitalCities: Roseau",
    "CapitalCities: Saint George's",
    "CapitalCities: Saint Helier",
    "CapitalCities: Saint John's",
    "CapitalCities: Saint-Denis",
    "CapitalCities: Saint-Pierre-PM",
    "CapitalCities: Saint-Pierre-TF",
    "CapitalCities: San Jose",
    "CapitalCities: San Juan",
    "CapitalCities: San Marino",
    "CapitalCities: San Salvador",
    "CapitalCities: Sana'a",
    "CapitalCities: Santa Cruz de Tenerife",
    "CapitalCities: Santiago",
    "CapitalCities: Santo Domingo",
    "CapitalCities: São Tomé",
    "CapitalCities: Sarajevo",
    "CapitalCities: Seoul",
    "CapitalCities: Singapore",
    "CapitalCities: Skopje",
    "CapitalCities: Sofia",
    "CapitalCities: Sri Jayewardenepura Kotte",
    "CapitalCities: St Peter Port",
    "CapitalCities: Stanley",
    "CapitalCities: Stockholm",
    "CapitalCities: Sucre",
    "CapitalCities: Suva",
    "CapitalCities: Taipei",
    "CapitalCities: Tallinn",
    "CapitalCities: Tarawa",
    "CapitalCities: Tashkent",
    "CapitalCities: Tbilisi",
    "CapitalCities: Tegucigalpa",
    "CapitalCities: Tehran",
    "CapitalCities: The Valley",
    "CapitalCities: Thimphu",
    "CapitalCities: Tirana",
    "CapitalCities: Tokelau",
    "CapitalCities: Tokyo",
    "CapitalCities: Tórshavn",
    "CapitalCities: Tripoli",
    "CapitalCities: Tunis",
    "CapitalCities: Ulaanbaatar",
    "CapitalCities: Vaduz",
    "CapitalCities: Valletta",
    "CapitalCities: Vatican City",
    "CapitalCities: Victoria",
    "CapitalCities: Vienna",
    "CapitalCities: Vientiane",
    "CapitalCities: Vilnius",
    "CapitalCities: Warsaw",
    "CapitalCities: Washington, D.C.",
    "CapitalCities: Wellington",
    "CapitalCities: West Island",
    "CapitalCities: Willemstad",
    "CapitalCities: Windhoek",
    "CapitalCities: Yamoussoukro",
    "CapitalCities: Yaounde",
    "CapitalCities: Yaren",
    "CapitalCities: Yerevan",
    "CapitalCities: Zagreb",
    "Color: Black",
    "Color: Blue",
    "Color: Brown",
    "Color: Gray",
    "Color: Green",
    "Color: Maroon",
    "Color: Orange",
    "Color: Pink",
    "Color: Purple",
    "Color: Red",
    "Color: Saffron",
    "Color: White",
    "Color: Yellow",
    "Currency: $ Dollar",
    "Currency: $ USD",
    "Currency: € EURO",
    "Currency: Afgani AFN",
    "Currency: Albanian LEK",
    "Currency: ANG",
    "Currency: Ariary MGA",
    "Currency: AU$ AUD",
    "Currency: AUD",
    "Currency: Australian Dollar AUD",
    "Currency: Baht THB",
    "Currency: Balboa PAB",
    "Currency: Birr ETB",
    "Currency: Bolívar VEF",
    "Currency: Boliviano BOB",
    "Currency: Cedi GHS",
    "Currency: Colon CRC",
    "Currency: Colon SVC",
    "Currency: Dalasi GMD",
    "Currency: Denar MKD",
    "Currency: Dinar BHD",
    "Currency: Dinar DZD",
    "Currency: Dinar IQD",
    "Currency: Dinar JOD",
    "Currency: Dinar KWD",
    "Currency: Dinar LYD",
    "Currency: Dinar RSD",
    "Currency: Dinar TND",
    "Currency: Dirham AED",
    "Currency: Dirham MAD",
    "Currency: DKK",
    "Currency: Dollar AUD",
    "Currency: Dollar BBD",
    "Currency: Dollar BMD",
    "Currency: Dollar BND",
    "Currency: Dollar BSD",
    "Currency: Dollar BZD",
    "Currency: Dollar CAD",
    "Currency: Dollar FJD",
    "Currency: Dollar GYD",
    "Currency: Dollar JMD",
    "Currency: Dollar LRD",
    "Currency: Dollar NAD",
    "Currency: Dollar SGD",
    "Currency: Dollar SRD",
    "Currency: Dollar TTD",
    "Currency: Dollar ZWL",
    "Currency: Dong VND",
    "Currency: Dram AMD",
    "Currency: EGP ILS JOD",
    "Currency: Escudo CVE",
    "Currency: Euro €",
    "Currency: FKP",
    "Currency: Florin AWG",
    "Currency: Forint HUF",
    "Currency: Franc BIF",
    "Currency: Franc CDF",
    "Currency: Franc CHF",
    "Currency: Franc DJF",
    "Currency: Franc GNF",
    "Currency: Franc KMF",
    "Currency: Franc RWF",
    "Currency: Franc XAF",
    "Currency: Franc XOF",
    "Currency: Franc XPF",
    "Currency: Frank XAF",
    "Currency: GBP",
    "Currency: GGP",
    "Currency: GIP",
    "Currency: Gourde HTG",
    "Currency: Guarani PYG",
    "Currency: HKD",
    "Currency: Hryvnia UAH",
    "Currency: Kina PGK",
    "Currency: Kip LAK",
    "Currency: Koruna CZK",
    "Currency: Krona ISK",
    "Currency: Krona SEK",
    "Currency: Krone DKK",
    "Currency: Krone NOK",
    "Currency: Kuna HRK",
    "Currency: Kwacha MWK",
    "Currency: Kwacha ZMW",
    "Currency: Kwanza AOA",
    "Currency: Kyat MMK",
    "Currency: KYD",
    "Currency: Lari GEL",
    "Currency: Lempira HNL",
    "Currency: Leone SLL",
    "Currency: Leu MDL",
    "Currency: Leu RON",
    "Currency: Lilangeni SZL",
    "Currency: Loti LSL",
    "Currency: Manat AZN",
    "Currency: Manat TMT",
    "Currency: Mark BAM",
    "Currency: MOP",
    "Currency: Naira NGN",
    "Currency: Nakfa ERN",
    "Currency: Ngultrum BTN",
    "Currency: NOK",
    "Currency: NT$ TWD",
    "Currency: NZD",
    "Currency: Omani OMR",
    "Currency: Oro NIO",
    "Currency: Ouguiya MRO",
    "Currency: Pa'anga TOP",
    "Currency: Peso ARS",
    "Currency: Peso CLP",
    "Currency: Peso COP",
    "Currency: Peso CUP",
    "Currency: Peso MXN",
    "Currency: Peso PHP",
    "Currency: Peso Uruguayo UYU",
    "Currency: Pound EGP",
    "Currency: Pound LBP",
    "Currency: Pound SDG",
    "Currency: Pound SSP",
    "Currency: Pound Sterling GBP",
    "Currency: Pound SYP",
    "Currency: Pula BWP",
    "Currency: Quetzal GTQ",
    "Currency: Rand ZAR",
    "Currency: Real BRL",
    "Currency: Rial IRR",
    "Currency: Rial QAR",
    "Currency: Rial YER",
    "Currency: Ringgit MYR",
    "Currency: Riyal SAR",
    "Currency: Ruble BYR",
    "Currency: Ruble RUB",
    "Currency: Rufiyaa MVR",
    "Currency: Rupee INR",
    "Currency: Rupee LKR",
    "Currency: Rupee MUR",
    "Currency: Rupee NPR",
    "Currency: Rupee PKR",
    "Currency: Rupee SCR",
    "Currency: Rupiah IDR",
    "Currency: SBD",
    "Currency: Sheqel ILS",
    "Currency: Shilling KES",
    "Currency: Shilling SOS",
    "Currency: Shilling TZS",
    "Currency: Shilling UGX",
    "Currency: SHP",
    "Currency: Sol PEN",
    "Currency: Som KGS",
    "Currency: Somoni TJS",
    "Currency: STD",
    "Currency: Sum UZS",
    "Currency: Swiss Franc CHF",
    "Currency: Taka BDT",
    "Currency: Tala WST",
    "Currency: Tenge KZT",
    "Currency: Tugrik MNT",
    "Currency: Vatu VUV",
    "Currency: Won KPW",
    "Currency: Won KRW",
    "Currency: XCD",
    "Currency: XPF",
    "Currency: Yen JPY",
    "Currency: Yuan Renminbi CNY",
    "Currency: Zloty PLN",
    "Currency: ₺ Lira TRY",
    "DrivingSide: Left",
    "DrivingSide: Right",
    "Language: Afrikaans",
    "Language: Albanian",
    "Language: Amharic",
    "Language: Antillean Creole",
    "Language: Arabic",
    "Language: Armenian",
    "Language: Asante",
    "Language: Assamese",
    "Language: Aymara",
    "Language: Azerbaijani",
    "Language: Bahasa",
    "Language: Bahasa Indonesia",
    "Language: Bajan",
    "Language: Bambara",
    "Language: Bangla",
    "Language: Base Nations",
    "Language: Belarusian",
    "Language: Bemba",
    "Language: Bengali",
    "Language: Bhojpuri",
    "Language: Bislama",
    "Language: Bosnian",
    "Language: Bulgarian",
    "Language: Burmese",
    "Language: Catalan",
    "Language: Chamorro",
    "Language: Chichewa",
    "Language: Creole",
    "Language: Crioulo",
    "Language: Croatian",
    "Language: Czech",
    "Language: Danish",
    "Language: Dari",
    "Language: Dhivehi",
    "Language: Dioula",
    "Language: Dutch",
    "Language: Dzongkha",
    "Language: Emakhuwa",
    "Language: English",
    "Language: Estonian",
    "Language: Ewe",
    "Language: Fante",
    "Language: Fijian",
    "Language: Filipino",
    "Language: Finnish",
    "Language: French",
    "Language: Fula",
    "Language: Gaelic",
    "Language: Ganda",
    "Language: Georgian",
    "Language: German",
    "Language: Greek",
    "Language: Greenlandic",
    "Language: Guarani",
    "Language: Gujarati",
    "Language: Hebrew",
    "Language: Hindi",
    "Language: Hiri Motu",
    "Language: Hungarian",
    "Language: I-Kiribati",
    "Language: Icelandic",
    "Language: Indonesian",
    "Language: Irish",
    "Language: isiZulu",
    "Language: Italian",
    "Language: Japanese",
    "Language: Javanese",
    "Language: Kannada",
    "Language: Kashmiri",
    "Language: Kazakh",
    "Language: Khmer",
    "Language: Kinyarwanda",
    "Language: Kirundi",
    "Language: Korean",
    "Language: Krio",
    "Language: Kurdish",
    "Language: Kyrgyz",
    "Language: Lao",
    "Language: Latvian",
    "Language: Lhotshamkha",
    "Language: Lingala",
    "Language: Lithuanian",
    "Language: Luganda",
    "Language: Luxembourgish",
    "Language: Macedonian",
    "Language: Maithali",
    "Language: Makasai",
    "Language: Malagasy",
    "Language: Malay",
    "Language: Malayalam",
    "Language: Maltese",
    "Language: Mambai",
    "Language: Mandarin",
    "Language: Mandinka",
    "Language: Marathi",
    "Language: Marshallese",
    "Language: Maya",
    "Language: Melanesian pidgin",
    "Language: Mende",
    "Language: Moldovan",
    "Language: Mongolian",
    "Language: Monokutuba",
    "Language: Montenegrin",
    "Language: Nauruan",
    "Language: Nawat",
    "Language: Ndebele",
    "Language: Nepali",
    "Language: Niuean",
    "Language: Norwegian",
    "Language: Nyanja",
    "Language: Oriya",
    "Language: Oromo",
    "Language: Palauan",
    "Language: Papiamento",
    "Language: Pashto",
    "Language: Persian",
    "Language: Polish",
    "Language: Portuguese",
    "Language: Punjabi",
    "Language: Quechua",
    "Language: Rarotongan",
    "Language: Romanian",
    "Language: Romansch",
    "Language: Russian",
    "Language: Samoan",
    "Language: Sango",
    "Language: Sanskrit",
    "Language: Saraiki",
    "Language: Scots",
    "Language: Sekalanga",
    "Language: Sepedi",
    "Language: Serbian",
    "Language: Sesotho",
    "Language: Setswana",
    "Language: Seychellois Creole",
    "Language: Sharchhopka",
    "Language: Shona",
    "Language: Sign language",
    "Language: Sindhi",
    "Language: Sinhala",
    "Language: siSwati",
    "Language: Slovak",
    "Language: Slovenian",
    "Language: Somali",
    "Language: Spanish",
    "Language: Swahili",
    "Language: Swedish",
    "Language: Tajik",
    "Language: Tamil",
    "Language: Tatar",
    "Language: Telugu",
    "Language: Temne",
    "Language: Tetum",
    "Language: Thai",
    "Language: Tigrinya",
    "Language: Tok Pisin",
    "Language: Tokelauan",
    "Language: Tonga",
    "Language: Tongan",
    "Language: Turkish",
    "Language: Turkmen",
    "Language: Tuvaluan",
    "Language: Ukrainian",
    "Language: Umbundu",
    "Language: Urdu",
    "Language: Uzbek",
    "Language: Vietnamese",
    "Language: Welsh",
    "Language: Wolof",
    "Language: Xichangana",
    "Region: Africa",
    "Region: Asia",
    "Region: Europe",
    "Region: North America",
    "Region: NorthAmerica",
    "Region: Oceania",
    "Region: South America",
    "Religion: Agnostic",
    "Religion: Animism",
    "Religion: Buddhism",
    "Religion: Christianity",
    "Religion: Confucianism",
    "Religion: Druze",
    "Religion: Folk",
    "Religion: Hinduism",
    "Religion: Indigenous",
    "Religion: Islam",
    "Religion: Judism",
    "Religion: Shamanism ",
    "Religion: Shintoism",
    "Religion: Taoism",
    "Religion: Unaffiliated",
    "Shape: Alpaca",
    "Shape: Anchor",
    "Shape: Angkor Wat",
    "Shape: Animal",
    "Shape: Arabic",
    "Shape: Armillary sphere",
    "Shape: Armour",
    "Shape: Armoured",
    "Shape: Arrow",
    "Shape: Arrowhead",
    "Shape: Axe",
    "Shape: Banana",
    "Shape: Band",
    "Shape: Bar",
    "Shape: Barrel",
    "Shape: Bay",
    "Shape: Bay laurel",
    "Shape: Bayonet",
    "Shape: Bible",
    "Shape: Bird",
    "Shape: Book",
    "Shape: Border",
    "Shape: Bow",
    "Shape: Branch",
    "Shape: Bridge",
    "Shape: British-Flag",
    "Shape: Bugle",
    "Shape: Building",
    "Shape: Cacao",
    "Shape: Cactus",
    "Shape: Candor",
    "Shape: Cannon",
    "Shape: Canoe",
    "Shape: Canton",
    "Shape: Cap",
    "Shape: Carpet",
    "Shape: Castle",
    "Shape: Cedar",
    "Shape: Chain",
    "Shape: Circle",
    "Shape: Clove",
    "Shape: Coat of Arms",
    "Shape: Cocoa",
    "Shape: Coconut",
    "Shape: Coin",
    "Shape: Compass",
    "Shape: Condor",
    "Shape: Cord",
    "Shape: Cornucopia",
    "Shape: Courthouse",
    "Shape: Cow",
    "Shape: Crane",
    "Shape: Crescent",
    "Shape: Crest",
    "Shape: Cross",
    "Shape: Crown",
    "Shape: Crux",
    "Shape: Dagger",
    "Shape: Diagonal",
    "Shape: Diamond",
    "Shape: Dog",
    "Shape: Dolphin",
    "Shape: Double Cross",
    "Shape: Dove",
    "Shape: Dragon",
    "Shape: Drum",
    "Shape: Eagle",
    "Shape: Eight-Pointed Star",
    "Shape: Emblem",
    "Shape: English",
    "Shape: Equilateral",
    "Shape: Estoile",
    "Shape: Face",
    "Shape: Feather",
    "Shape: Female",
    "Shape: Fern",
    "Shape: Fimbriation",
    "Shape: Fire",
    "Shape: Five-Petal",
    "Shape: Five-Pointed Star",
    "Shape: Flag",
    "Shape: Fleurs-de-lys",
    "Shape: Flower",
    "Shape: Fly whisk",
    "Shape: Forteen-Points Star",
    "Shape: Four-Pointed Star",
    "Shape: French",
    "Shape: Fruit",
    "Shape: Gear",
    "Shape: George",
    "Shape: Globe",
    "Shape: Goat",
    "Shape: Grass",
    "Shape: Hand",
    "Shape: Harp",
    "Shape: Hat",
    "Shape: Head",
    "Shape: Helmet",
    "Shape: Hexagram",
    "Shape: Hill",
    "Shape: Hood",
    "Shape: Horizontal",
    "Shape: Horn",
    "Shape: Human Face",
    "Shape: Ice",
    "Shape: Isosceles",
    "Shape: Jewel",
    "Shape: Key",
    "Shape: Kufic",
    "Shape: Lady",
    "Shape: Lama",
    "Shape: Lamp",
    "Shape: Latin",
    "Shape: Laurel",
    "Shape: Leaf",
    "Shape: Leg",
    "Shape: Leopard",
    "Shape: Line",
    "Shape: Lion",
    "Shape: Lobster",
    "Shape: Lotus",
    "Shape: Machete",
    "Shape: Mahogany",
    "Shape: Mango",
    "Shape: Mantle",
    "Shape: Map",
    "Shape: Maple",
    "Shape: Miro",
    "Shape: Monument",
    "Shape: Moon",
    "Shape: Mountain",
    "Shape: Mullet",
    "Shape: Namele",
    "Shape: Nutmeg",
    "Shape: Oak",
    "Shape: Oar",
    "Shape: Oblique",
    "Shape: Ocean",
    "Shape: Olive",
    "Shape: Ornament",
    "Shape: Ostrich-plume",
    "Shape: Palm",
    "Shape: Papal tiara",
    "Shape: Parallelogram",
    "Shape: Parasol",
    "Shape: Parrot",
    "Shape: Pattern",
    "Shape: Pearl",
    "Shape: Penguin",
    "Shape: Pennon",
    "Shape: Pentagram",
    "Shape: Person",
    "Shape: Pillar",
    "Shape: Pine",
    "Shape: Pineapple",
    "Shape: Pomegranate",
    "Shape: Portuguese",
    "Shape: Potato",
    "Shape: Rainbow",
    "Shape: Ram",
    "Shape: Ray",
    "Shape: Rectangle",
    "Shape: Reindeer",
    "Shape: Rhombus",
    "Shape: Ribbon",
    "Shape: Rifle",
    "Shape: Ring",
    "Shape: River",
    "Shape: Rope",
    "Shape: Rose",
    "Shape: Sage",
    "Shape: Sail",
    "Shape: Sailboat",
    "Shape: Saltire",
    "Shape: Script",
    "Shape: Sea",
    "Shape: Seahorse",
    "Shape: Seal",
    "Shape: Seven-Pointed Star",
    "Shape: Shahada",
    "Shape: Sheath",
    "Shape: Sheep",
    "Shape: Shell",
    "Shape: Shield",
    "Shape: Ship",
    "Shape: Six-Pointed Star",
    "Shape: Sling",
    "Shape: Smoke",
    "Shape: Snake",
    "Shape: Snow",
    "Shape: Spanish",
    "Shape: Spear",
    "Shape: Spur",
    "Shape: Square",
    "Shape: Stairs",
    "Shape: Stalk",
    "Shape: Star",
    "Shape: Stone",
    "Shape: Stripe",
    "Shape: Sugarcane",
    "Shape: Sun",
    "Shape: Sun of May",
    "Shape: Sword",
    "Shape: Symbol",
    "Shape: Taegeukgi",
    "Shape: Taiji",
    "Shape: Takbir",
    "Shape: Tent",
    "Shape: Thuluth",
    "Shape: Torch",
    "Shape: Totem",
    "Shape: Tower",
    "Shape: Trapezium",
    "Shape: Trapezoid",
    "Shape: Tree",
    "Shape: Triangle",
    "Shape: Trident",
    "Shape: Trigram",
    "Shape: Tulip",
    "Shape: Turtle",
    "Shape: Tusk",
    "Shape: Twelve-Pointed Star",
    "Shape: Twenty-Four-Pointed Star",
    "Shape: Vertical",
    "Shape: Volcano",
    "Shape: Water",
    "Shape: Wave",
    "Shape: Waves",
    "Shape: Weapon",
    "Shape: Wheat",
    "Shape: Wheel",
    "Shape: Wheelbarrow",
    "Shape: White Saltire",
    "Shape: Wing",
    "Shape: Wreath",
    "Shape: Yin Yang",
    "Shape: Zodiac",
    "Water: Adriatic",
    "Water: Aegean",
    "Water: Andaman",
    "Water: Antarctic",
    "Water: Arabian",
    "Water: Arafura",
    "Water: Arctic",
    "Water: Atlantic",
    "Water: Bali",
    "Water: Baltic",
    "Water: Banda",
    "Water: Barent",
    "Water: Bay_of_Bengal",
    "Water: Bay_of_Biscay",
    "Water: Bering",
    "Water: Bering_Seas",
    "Water: Bismarck",
    "Water: Black",
    "Water: Caribbean",
    "Water: Caspian",
    "Water: Celebes",
    "Water: Celtic",
    "Water: Ceram",
    "Water: Chukchi",
    "Water: East_China",
    "Water: East_Siberian",
    "Water: English_Channel",
    "Water: Flores",
    "Water: Gulf_of_Aden",
    "Water: Gulf_of_Aqaba",
    "Water: Gulf_of_California",
    "Water: Gulf_of_Guinea",
    "Water: Gulf_of_Mexico",
    "Water: Gulf_of_Oman",
    "Water: Gulf_of_Thailand",
    "Water: Gulf_of_Thailand and Pacific Ocean",
    "Water: Halmahera",
    "Water: Indian",
    "Water: Indian Oceans",
    "Water: Ionian",
    "Water: Irish",
    "Water: Java",
    "Water: Kara",
    "Water: Laccadive",
    "Water: Lake Malawi",
    "Water: Lake Victoria",
    "Water: Landlocked",
    "Water: Laptev",
    "Water: Ligurian",
    "Water: Marmara",
    "Water: Mediterranean",
    "Water: Molucca",
    "Water: Natuna",
    "Water: North",
    "Water: Norwegian",
    "Water: Pacific",
    "Water: Persian_Gulf",
    "Water: Philippine",
    "Water: Red",
    "Water: Savu",
    "Water: Sea_of_Azov",
    "Water: Sea_of_Japan",
    "Water: Sea_of_Okhotsk",
    "Water: Solomon",
    "Water: South_China",
    "Water: Southern",
    "Water: Sulu",
    "Water: Tasman",
    "Water: Timor",
    "Water: Yellow",
    "Water: Yellow_Sea"];

function recreateTheFlagsWithNewCountry(worldViewFlag) { // True: World, False: Region:
    // flagOfCountries, allCountryNames and flagOfCountriesShortNames must be in the New  Language...
    var oneFlagImageElement;
    var oneFlagSpanElement;
    var oneFlagFigCaptionElement;
    var newflags = document.createElement("div");
    newflags.setAttribute("id","newFlags");

    if (worldViewFlag) // be sure these are filled with the world countries..
    {
        flagOfCountries = allCountryNames; // allCountryNames comes from utilityForFlags.js run a SQL statement to get the new list
    }
    else flagOfCountries = sixRegionsValues[5]; // 0: North America 1: South America 2: Europe 3: Africa 4: Oceania 5: Asia
    for (var key in flagOfCountries) // delete local storage to read the new Region Country List from the static file
    {
        if (worldViewFlag == false) { // !worldViewFlag
            oneFlagSpanElement = document.createElement("span");
            oneFlagSpanElement.setAttribute("class", "inlineBlock");
            oneFlagFigCaptionElement = document.createElement("figcaption");
            oneFlagFigCaptionElement.innerHTML = flagOfCountriesShortNames[flagOfCountries[key]]; // must be with the NEW Language: see below
        }
        var oneCountryNameFromArray = flagOfCountries[key];
        oneFlagImageElement = document.createElement("img");
        if (worldViewFlag)
            oneFlagImageElement.setAttribute("class", "plainFlagsWorld vertialAlignMiddle");
        else oneFlagImageElement.setAttribute("class", "plainFlags vertialAlignMiddle");
        oneFlagImageElement.setAttribute("id", "bayrak" + countryArrayKeyValue[oneCountryNameFromArray]); // Flag's id text should be unique for CSS/selection
        oneFlagImageElement.setAttribute("tabindex", "0"); // for the Keyboard accessiblity
        if (oneCountryNameFromArray == "UnitedStatesMinorOutlyingIslands")
        {
            oneFlagImageElement.src = "data:image/svg+xml," + flagsSVGFiles["UnitedStatesofAmerica"].svg;
        }
        else if (oneCountryNameFromArray == "HeardIslandandMcDonaldIslands")
        {
            oneFlagImageElement.src = "data:image/svg+xml," + flagsSVGFiles["Australia"].svg;
        }
        else if (oneCountryNameFromArray == "BouvetIsland")
        {
            oneFlagImageElement.src = "data:image/svg+xml," + flagsSVGFiles["Norway"].svg;
        }
        else if (flagsSVGFiles[oneCountryNameFromArray])
        {
            oneFlagImageElement.src = "data:image/svg+xml," + flagsSVGFiles[oneCountryNameFromArray].svg;
        }
        else
        {
            console.log("missing one: " + oneCountryNameFromArray);
            oneFlagImageElement.src = "images/SVGCountryFlags/Flag_of_" + oneCountryNameFromArray + ".svg";
        }
        oneFlagImageElement.alt = "Entity: " + oneCountryNameFromArray;
        oneFlagImageElement.setAttribute("title", allCountryFullNames[countryArrayKeyValue[oneCountryNameFromArray]]); // from country name find the key of 252 full names...
        if (worldViewFlag == false) { // !worldViewFlag
            oneFlagSpanElement.appendChild(oneFlagImageElement);
            oneFlagSpanElement.appendChild(oneFlagFigCaptionElement);
            newflags.appendChild(oneFlagSpanElement);
        }
        else newflags.appendChild(oneFlagImageElement);
    }
    console.log(encodeURIComponent(newflags.innerHTML));
}
