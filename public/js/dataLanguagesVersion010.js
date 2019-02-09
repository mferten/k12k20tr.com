'use strict';

// World Languages Drop Down Values
if (typeof worldLanguagesDropDownValues == 'undefined')
    var worldLanguagesDropDownValues = getWorldLanguagesDropDownValues();
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
if (typeof allCountryNames == 'undefined')
    var allCountryNames = allCountryNames = getAllCountriesNames();
if (typeof allCountryFullNames == 'undefined')
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
textLanguageI.setAttribute("id","id_SaveStartupValues");
textLanguageI.setAttribute("class","material-icons");
textLanguageI.setAttribute("title",selectedApplicationLanguageTexts["title_SaveStartupValues"]);
textLanguageI.innerHTML = "save"; // this must be lowercase to work

textLanguagePTop.appendChild(textLanguageSpanInnerTwo);
textLanguageLabelTwo.appendChild(textLanguageSelectTwo);
textLanguagePTop.appendChild(textLanguageLabelTwo);
addApplicationLanguageSelectionDropDownBox(textLanguagePTop, "appLanguageToUseB");
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
createNavFooterAddIntoBodyAndReplaceBody(textLanguageBody, textLanguageHeader, textLanguageMain, "DataLanguages");

// variables
var tagsTextsArray;
var numberOfObjects;
var appLanguageInstructionTable;
var appLanguageDataTable;
var applicationLanguageId = -1;
var enteredWordValues;
var texts;
var usaTexts;

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
    getAllApplicationLanguageData();
}, 250);

// Application Language Drop Down (Select/Options) for Based Application Language Selection: Accent Entry...
setTimeout(function () {
    setApplicationLanguageDropDownBox("appLanguageToUseB", JSON.parse(applicationLanguageDropDownValues));
    document.getElementById("appLanguageToUseB").selectedIndex = 0;
}, 350);

// Application Language Drop Down (Select/Options) for Based Application Language Selection: Accent Entry...
setTimeout(function () {
    setApplicationLanguageDropDownBox("appLanguageToUse", JSON.parse(applicationLanguageDropDownValues));
    document.getElementById("appLanguageToUse").selectedIndex = applicationTextLanguageSelectedIndex;
}, 350);

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
    var applicationLanguageBasedId;
    if (document.getElementById("appLanguageToUseB").value.lastIndexOf("appLanguageToUseOption") != -1) {
        applicationLanguageBasedId = document.getElementById("appLanguageToUseB").value.substring(22);
    }
    else applicationLanguageBasedId = 999;
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
            // if applicationLanguageId == applicationTextLanguageSelectedIndex (same in testLanguagesVersion...)
            // ===> trigger "appLanguageToUse" change event (as if the Application Text Language is changed!)
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
        +document.getElementById("appCountry").selectedIndex
        +"&languageId="
        +document.getElementById("appLanguage").selectedIndex, true);
    // Start the Ajax Communication (call PHP program through Route => Controller)
    xhttploadTagsTexts.send();
}

// Retrieve the Application Data Language (if any) and Set Up the Selected Application Language Data for the Page
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
                if (basedOnId != 999) {
                    document.getElementById("appLanguageToUseB").selectedIndex = basedOnId;
                }
            }
        }
    };
    xhttploadTagsData.open("GET", "/ajax/data?applicationLanguageId="+applicationLanguageId, true);
    // Start the Ajax Communication (call PHP program through Route => Controller)
    xhttploadTagsData.send();
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

// Retrieve the Application Data Language (if any) and Set Up the Selected Application Language Data for the Page
function getAllApplicationLanguageData()
{
    var lowerToUpperCaseTurkish = {"a":"A", "b": "B", "c": "C", "ç": "Ç", "d": "D", "e": "E", "f": "F", "g": "G", "ğ": "Ğ", "h": "H", "ı": "I", "i": "İ", "j": "J",
        "k": "K", "l": "L", "m": "M", "n": "N", "o": "O", "ö": "Ö", "p": "P", "r": "R", "s": "S", "ş": "Ş", "t": "T", "u": "U", "ü": "Ü", "v": "V", "y": "Y", "z": "Z"};
    var upperToLowerCaseTurkish = {"A":"a", "B": "b", "C": "c", "Ç": "ç", "D": "d", "E": "e", "F": "f", "G": "g", "Ğ": "ğ", "H": "h", "I": "ı", "İ": "i", "J": "j",
        "K": "k", "L": "l", "M": "n", "N": "n", "O": "o", "Ö": "ö", "P": "p", "R": "r", "S": "s", "Ş": "ş", "T": "t", "U": "u", "Ü": "ü", "V": "v", "Y": "y", "Z": "z"};

    // Get All the Language Data from the database (if any)
    var xhttploadTagsAllData = new XMLHttpRequest();
    // On Ready State Change
    xhttploadTagsAllData.onreadystatechange = function()
    {
        if (xhttploadTagsAllData.readyState == 4 && xhttploadTagsAllData.status == 200)
        {
            var allValues = JSON.parse(xhttploadTagsAllData.responseText);
            var allValuesInAString = ""; // a string
            for (var oneValue in allValues) {
                // here Each world will be lowercase except the first letter will be uppercase...

                allValuesInAString += '"' + allValues[oneValue]["this_language_feature_value"] + '",';
            }
            console.log(allValuesInAString);
        }
    };
    xhttploadTagsAllData.open("GET", "/ajax/dataSeeder", true);
    // Start the Ajax Communication (call PHP program through Route => Controller)
    xhttploadTagsAllData.send();
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
    'Low: low',
    'Medium: medium',
    'High: high',
    /*
    select distinct concat("'",short_name,"':'",long_name,"',") from countries;
    */
    'Afghanistan','Afghanistan', // from Country table: full name or short name (all can be the same: Spain, Turkey, Slovakia...)
    'Aland: Åland','Aland: Åland Islands',
    'Albania','Albania',
    'Algeria','Algeria',
    'US Samoa','American Samoa',
    'Andorra','Andorra',
    'Angola','Angola',
    'Anguilla','Anguilla',
    'Antarctic','Antarctic Treaty System',
    'Antigua','Antigua and Barbuda',
    'Argentina','Argentina',
    'Armenia','Armenia',
    'Aruba','Aruba',
    'Australia','Australia',
    'Austria','Austria',
    'Azerbaijan','Azerbaijan',
    'Bahamas','Bahamas',
    'Bahrain','Bahrain',
    'Bangladesh','Bangladesh',
    'Barbados','Barbados',
    'Belarus','Belarus',
    'Belgium','Belgium',
    'Belize','Belize',
    'Benin','Benin',
    'Bermuda','Bermuda',
    'Bhutan','Bhutan',
    'Bolivia','Bolivia',
    'Bonaire','Bonaire Sint Eustatius and Saba',
    'Bosnia','Bosnia and Herzegovina',
    'Botswana','Botswana',
    'Bouvet','Bouvet Island',
    'Brazil','Brazil',
    'UK Indian','British Indian Ocean Territory',
    'BVI','British Virgin Islands',
    'Brunei','Brunei',
    'Bulgaria','Bulgaria',
    'Burkina Faso','Burkina Faso',
    'Burundi','Burundi',
    'Cambodia','Cambodia',
    'Cameroon','Cameroon',
    'Canada','Canada',
    'Canary','Canary Islands',
    'Cabo Verde','Cabo Verde',
    'Cayman','Cayman Islands',
    'CAR','Central African Republic',
    'Chad','Chad',
    'Chile','Chile',
    'China','China',
    'Christmas','Christmas Island',
    'Cocos','Cocos Islands',
    'Colombia','Colombia',
    'Comoros','Comoros',
    'Cook','Cook Islands',
    'Costa Rica','Costa Rica',
    "Côte d'Ivoire","Côte d'Ivoire",
    'Croatia','Croatia',
    'Cuba','Cuba',
    'Curaçao','Curaçao',
    'Cyprus','Cyprus',
    'Czechia','Czechia',
    'DR Congo','Democratic Republic of the Congo',
    'Denmark','Denmark',
    'Djibouti','Djibouti',
    'Dominica','Dominica',
    'Dominican','Dominican Republic',
    'Ecuador','Ecuador',
    'Egypt','Egypt',
    'El Salvador','El Salvador',
    'E Guinea','Equatorial Guinea',
    'Eritrea','Eritrea',
    'Estonia','Estonia',
    'Eswatini','Eswatini',
    'Ethiopia','Ethiopia',
    'Falkland','Falkland Islands',
    'Faroe','Faroe Islands',
    'Fiji','Fiji',
    'Finland','Finland',
    'France','France',
    'Guiana','French Guiana',
    'Polynesia','French Polynesia',
    'Fr Antarctic','French Southern and Antarctic Lands',
    'Gabon','Gabon',
    'Gambia','Gambia',
    'Georgia','Georgia',
    'Germany','Germany',
    'Ghana','Ghana',
    'Gibraltar','Gibraltar',
    'Greece','Greece',
    'Greenland','Greenland',
    'Grenada','Grenada',
    'Guadeloupe','Guadeloupe',
    'Guam','Guam',
    'Guatemala','Guatemala',
    'Guernsey','Guernsey',
    'Guinea','Guinea',
    'Guinea Bissau','Guinea-Bissau',
    'Guyana','Guyana',
    'Haiti','Haiti',
    'H McDonald','Heard Island and McDonald Islands',
    'Honduras','Honduras',
    'Hong Kong','Hong Kong',
    'Hungary','Hungary',
    'Iceland','Iceland',
    'India','India',
    'Indonesia','Indonesia',
    'Iran','Iran',
    'Iraq','Iraq',
    'Ireland','Ireland',
    'Isle of Man','Isle of Man',
    'Israel','Israel',
    'Italy','Italy',
    'Jamaica','Jamaica',
    'Japan','Japan',
    'Jersey','Jersey',
    'Jordan','Jordan',
    'Kazakhstan','Kazakhstan',
    'Kenya','Kenya',
    'Kiribati','Kiribati',
    'Kosovo','Kosovo',
    'Kuwait','Kuwait',
    'Kyrgyzstan','Kyrgyzstan',
    'Laos','Laos',
    'Latvia','Latvia',
    'Lebanon','Lebanon',
    'Lesotho','Lesotho',
    'Liberia','Liberia',
    'Libya','Libya',
    'Liechtenstein','Liechtenstein',
    'Lithuania','Lithuania',
    'Luxembourg','Luxembourg',
    'Macau','Macau',
    'Macedonia','Macedonia',
    'Madagascar','Madagascar',
    'Malawi','Malawi',
    'Malaysia','Malaysia',
    'Maldives','Maldives',
    'Mali','Mali',
    'Malta','Malta',
    'Marshall','Marshall Islands',
    'Martinique','Martinique',
    'Mauritania','Mauritania',
    'Mauritius','Mauritius',
    'Mayotte','Mayotte',
    'Mexico','Mexico',
    'Micronesia','Micronesia',
    'Moldova','Moldova',
    'Monaco','Monaco',
    'Mongolia','Mongolia',
    'Montenegro','Montenegro',
    'Montserrat','Montserrat',
    'Morocco','Morocco',
    'Mozambique','Mozambique',
    'Myanmar','Myanmar',
    'Namibia','Namibia',
    'Nauru','Nauru',
    'Nepal','Nepal',
    'Netherlands','Netherlands',
    'N Caledonia','New Caledonia',
    'N Zealand','New Zealand',
    'Nicaragua','Nicaragua',
    'Niger','Niger',
    'Nigeria','Nigeria',
    'Niue','Niue',
    'Norfolk','Norfolk Island',
    'Mariana','Northern Mariana Islands',
    'North Korea','North Korea',
    'Norway','Norway',
    'Oman','Oman',
    'Pakistan','Pakistan',
    'Palau','Palau',
    'Panama','Panama',
    'P N Guinea','Papua New Guinea',
    'Paraguay','Paraguay',
    'Peru','Peru',
    'Philippines','Philippines',
    'Pitcairn','Pitcairn Islands',
    'Poland','Poland',
    'Portugal','Portugal',
    'Puerto Rico','Puerto Rico',
    'Qatar','Qatar',
    'Rep Congo','Republic of Congo',
    'Réunion','Réunion',
    'Romania','Romania',
    'Russia','Russian Federation',
    'Rwanda','Rwanda',
    'Barthélemy','Saint Barthélemy',
    'St Helena','Saint Helena',
    'St Kitts','St. Kitts & Nevis',
    'St Lucia','Saint Lucia',
    'St Martin','Saint Martin',
    'St Pierre','Saint Pierre and Miquelon',
    'St Vincents','Saint Vincent and the Grenadines',
    'Samoa','Samoa',
    'San Marino','San Marino',
    'São Tomé','São Tomé and Príncipe',
    'Saudi Arabia','Saudi Arabia',
    'Senegal','Senegal',
    'Serbia','Serbia',
    'Seychelles','Seychelles',
    'Sierra Leone','Sierra Leone',
    'Singapore','Singapore',
    'St Maarten','Sint Maarten',
    'Slovakia','Slovakia',
    'Slovenia','Slovenia',
    'Solomon','Solomon Islands',
    'Somalia','Somalia',
    'South Africa','South Africa',
    'S Georgia','South Georgia And South Sandwich Islands',
    'South Korea','South Korea',
    'S Sudan','South Sudan',
    'Spain','Spain',
    'Sri Lanka','Sri Lanka',
    'Palestine','State of Palestine',
    'Sudan','Sudan',
    'Suriname','Suriname',
    'Svalbard','Svalbard and Jan Mayen',
    'Sweden','Sweden',
    'Switzerland','Switzerland',
    'Syria','Syria',
    'Taiwan','Taiwan: Republic of China',
    'Tajikistan','Tajikistan',
    'Tanzania','Tanzania',
    'Thailand','Thailand',
    'Timor Leste','Timor-Leste',
    'Togo','Togo',
    'Tokelau','Tokelau',
    'Tonga','Tonga',
    'Trinidad','Trinidad and Tobago',
    'Tunisia','Tunisia',
    'Turkey','Turkey',
    'TRNC','Turkish Republic of Northern Cyprus',
    'Turkmenistan','Turkmenistan',
    'Turks Caicos','Turks and Caicos Islands',
    'Tuvalu','Tuvalu',
    'Uganda','Uganda',
    'Ukraine','Ukraine',
    'UAE','United Arab Emirates',
    'UK','United Kingdom',
    'US Minor','United States Minor Outlying Islands',
    'USA','United States',
    'USVI','United States Virgin Islands',
    'Uruguay','Uruguay',
    'Uzbekistan','Uzbekistan',
    'Vanuatu','Vanuatu',
    'Vatican','Vatican City and Holy See',
    'Venezuela','Venezuela',
    'Vietnam','Vietnam',
    'Wallis','Wallis and Futuna',
    'West Sahara','Western Sahara',
    'Yemen','Yemen',
    'Zambia','Zambia',
    'Zimbabwe','Zimbabwe',
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
    "Shape: Sun",
    "Shape: Sun of May",
    "Shape: Surgarcane",
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
    "Water: Bay of Bengal",
    "Water: Bay of Biscay",
    "Water: Bering",
    "Water: Bering Seas",
    "Water: Bismarck",
    "Water: Black",
    "Water: Caribbean",
    "Water: Caspian",
    "Water: Celebes",
    "Water: Celtic",
    "Water: Ceram",
    "Water: Chukchi",
    "Water: East China",
    "Water: East Siberian",
    "Water: English Channel",
    "Water: Flores",
    "Water: Gulf of Aden",
    "Water: Gulf of Aqaba",
    "Water: Gulf of California",
    "Water: Gulf of Guinea",
    "Water: Gulf of Mexico",
    "Water: Gulf of Oman",
    "Water: Gulf of Thailand",
    "Water: Gulf of Thailand and Pacific Ocean",
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
    "Water: Persian Gulf",
    "Water: Philippine",
    "Water: Read",
    "Water: Red",
    "Water: Savu",
    "Water: Sea of Azov",
    "Water: Sea of Japan",
    "Water: Sea of Okhotsk",
    "Water: See of Japan",
    "Water: Solomon",
    "Water: South China",
    "Water: Southern",
    "Water: Sulu",
    "Water: Tasman",
    "Water: Timor",
    "Water: Yellow",
    "Water: Yellow Sea"];
