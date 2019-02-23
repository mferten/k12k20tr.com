'use strict';

currentEWorldPage = "Startup";
dashBoardFlag = false;

initializationUtilityForAll();

var registerBody =  document.createElement("body");
registerBody.setAttribute("name","register");
var registerHeader = document.createElement("header");
var registerH1 = document.createElement("h1");
registerH1.setAttribute("id", "id_FirstMessage");
registerH1.innerHTML = selectedApplicationLanguageTexts["id_Register"];
registerHeader.appendChild(registerH1);

var registerH2 = document.createElement("h2");
registerH2.setAttribute("class", "registerH2")
addApplicationLanguageSelectionDropDownBox(registerH2);
registerHeader.appendChild(registerH2);

registerBody.appendChild(registerHeader);

var registerMain =  document.createElement("main");
var registerForm =  document.createElement("form");
registerForm.setAttribute("id", "registerForm");
registerForm.setAttribute("class", "signInMargin");

// add a Legend and Fieldset to the Regions
var regionFieldset = document.createElement("fieldset");
regionFieldset.setAttribute("class", "registerSize");
var regionLegend = document.createElement("legend");
regionLegend.setAttribute("class", "registerLegend");
regionLegend.appendChild(getASpanElement(myUndefined, myUndefined,"Region: "));
regionFieldset.appendChild(regionLegend);
// Create All Regions Radio Buttons and add into the Header first Div
createRadioButtons(regionFieldset, ['Africa', "Asia", "Europe", "NorthAmerica", "Oceania", "SouthAmerica"],
    "regionRadioButtonStyle registerFieldMargin", "div", "region");
registerForm.appendChild(regionFieldset);

// Turn Sound On/Off (Mute) Check Box
var configureFieldset = document.createElement("fieldset");
configureFieldset.setAttribute("class", "registerSize");
var configureLegend = document.createElement("legend");
configureLegend.setAttribute("class", "registerLegend");
configureFieldset.appendChild(configureLegend);
muteTheSoundCodes(regionNames[startupValuesJSONObject.region], configureFieldset, true);
registerForm.appendChild(configureFieldset);

// Solo or Combine Search Box
configureFieldset = document.createElement("fieldset");
configureFieldset.setAttribute("class", "registerSize");
combineSearchCodes(configureFieldset, "combineRegister");
registerForm.appendChild(configureFieldset);

// add a Legend and Fieldset to the Personal information
var personFieldset = document.createElement("fieldset");
personFieldset.setAttribute("class", "registerSize");
var personLegend = document.createElement("legend");
personLegend.setAttribute("class", "registerLegend");
personLegend.appendChild(getASpanElement(myUndefined, myUndefined,"Personal: "));
personFieldset.appendChild(personLegend);
// Start With
var startWithDiv = document.createElement("div");
startWithDiv.setAttribute("class", "registerFieldMargin center");
var startWithLabel = document.createElement("label");
var startWithLabelTextSpan = getASpanElement("id_StartWith", myUndefined,
    selectedApplicationLanguageTexts["id_StartWith"]);
startWithLabel.appendChild(startWithLabelTextSpan);
var startWithSelectElement = document.createElement("select");
startWithSelectElement.setAttribute("id", "id_StartWithSelect");
startWithSelectElement.setAttribute("class", "selectBoxStyles applicationLanguageRegister");
startWithLabel.appendChild(startWithSelectElement);
startWithDiv.appendChild(startWithLabel);
personFieldset.appendChild(startWithDiv);
registerForm.appendChild(personFieldset);
flagOfCountries = startupValuesJSONObject.flagOfCountries; // incase Global was activated priorily
setTimeout(function() {
    registerMain.appendChild(registerForm);
    // Registration Button
    var saveTextSpan = getASpanElement("id_Save","appleIOSTop",selectedApplicationLanguageTexts["id_Save"]);
    var saveDiv = document.createElement("div");
    saveDiv.setAttribute("class", "center registerSize");
    var saveIcon = document.createElement("i");
    saveIcon.setAttribute("id", "id_SaveStartupValues");
    saveIcon.setAttribute("class", "material-icons");
    saveIcon.setAttribute("title", selectedApplicationLanguageTexts["title_SaveStartupValues"]);
    saveIcon.setAttribute("color", "#eab358");
    saveIcon.textContent = "save";

    saveDiv.appendChild(saveTextSpan);
    saveDiv.appendChild(saveIcon);
    registerForm.appendChild(saveDiv);

    var registerNav = document.createElement("nav");
    registerNav.setAttribute("id", "id_Navigation");
    registerNav.setAttribute("class", "center");
    registerNav.setAttribute("data-nav", "Register");

    var registerFooter = document.createElement("footer");
    registerFooter.setAttribute("class","center");
    var registerFooterP = document.createElement("p");
    registerFooterP.setAttribute("id","id_CopyRight");
    var registerFooterP2 = document.createElement("p");
    registerFooterP2.setAttribute("id","id_LanguageImplementedBy");
    registerFooter.appendChild(registerFooterP);
    registerFooter.appendChild(registerFooterP2);

    registerBody.appendChild(registerMain);
    registerBody.appendChild(registerNav);
    registerBody.appendChild(registerFooter);
    document.getElementById("topHTML").replaceChild(registerBody, document.body);
    setNavFooterTags("Register");

    setStartupValues(startupValuesJSONObject);
    // set the Application Texts
    document.getElementById("id_SaveStartupValues").addEventListener("click", function(event) { // Save the Startup Values into Local Storage
        saveStartupValues(startupValuesJSONObject);
        event.preventDefault(); // do not attempt to submit the form
    }, false);
    document.getElementById("id_RadioCombineReverseSearch").addEventListener("click", function(event) { processReverseRadioInput(event); }, false);
    setTheSelectedRegion(startupValuesJSONObject.region);
}, 250);

// Save the Startup Configuration into the Local Storage
function saveStartupValues(startupValuesJSONObject)
{
    setTimeout(function() {
        startupValuesJSONObject.region = document.forms[0].querySelector('input[name="region"]:checked').value; // set the Region
        startupValuesJSONObject.isSoundOff = document.getElementById('id_CheckBoxPlaySounds').checked; // set Sound On/Off
        startupValuesJSONObject.combine = document.forms[0].querySelector('input[name="combine"]:checked').value; // set Combine And Or
        startupValuesJSONObject.isReverse = document.getElementById('id_RadioCombineReverseSearch').checked; // set Reverse On/Off
        startupValuesJSONObject.startWith = startWithURL[document.getElementById('id_StartWithSelect').value]; // Set the Start With URL
        // set the Region Values
        startupValuesJSONObject.flagOfCountries = flagOfCountries;
        // Save JSON Object into Local Storage
        window.localStorage.setItem("startupValues", JSON.stringify(startupValuesJSONObject));
        if (initialMenuItems[startupValuesJSONObject.startWith]) {
            initialMenuItems[startupValuesJSONObject.startWith](startupValuesJSONObject.startWith);
        }
    }, 500);
}

/*
 * Get to set the Startup Values from the Local Storage
 * return StartupValues Constructor Object with either Saved Local Storage or the default values
 */
function setStartupValues(savedValuesJSONObject)
{
    // if Local Storage data exits,  retrieve it
    if (window.localStorage.startupValues)
    {
        // set the Region
        document.getElementById(savedValuesJSONObject.region).checked = true;
        // set the Sound On/Off Check Box
        document.getElementById("id_CheckBoxPlaySounds").checked = savedValuesJSONObject.isSoundOff;
        // set the Combine Search Box
        document.getElementById(savedValuesJSONObject.combine).checked = true;
        document.getElementById(combineMatrix[savedValuesJSONObject.combine]).classList.add("selectedInputTag");
        previousCombineOption = combineMatrix[savedValuesJSONObject.combine];
        // set the Reverse On/Off
        document.getElementById("id_RadioCombineReverseSearch").checked = savedValuesJSONObject.isReverse;
        if (savedValuesJSONObject.isReverse) document.getElementById("id_CombineSearchReverse").classList.add("selectedInputTag");
        // set the Startup Application
        var startupSelect = document.getElementById('id_StartWithSelect');
        for (var key in startWithURL)
        {
            createOneOption(startupSelect, selectedApplicationLanguageTexts[startWithURL[key]], key, "startWith", key);
        }
        startupSelect.getElementsByTagName('option')[locationIndex[savedValuesJSONObject.startWith]].selected = 'selected';
    }
}

/*
 * a Region is selected (a Radio Button property is changed) or Application Language
 */
function changeStartupEvents(event)
{
    // retrieve the Region's Country List
    var eventId = event.target.id;
    if (event.target.type == "radio" && event.target.name == "region")
    {
        processRegion(eventId, false); // id not value
        setTheSelectedRegion(eventId); // mark it selected
    }
    // If Pause/Play Icon clicked:
    else if (eventId == 'id_CheckBoxPlaySounds')
    {
        if (document.getElementById("id_CheckBoxPlaySounds").checked)
        {
            document.getElementById("soundOnOffIconRegister").textContent = "play_circle_outline";
            document.getElementById("soundOnOffIconRegister").setAttribute("title", selectedApplicationLanguageTexts["title_soundOnOffIconPlay"]);
            document.getElementById("id_PlaySound").innerHTML = selectedApplicationLanguageTexts["title_soundOnOffIconPlay"];
        }
        else
        {
            document.getElementById("soundOnOffIconRegister").textContent = "pause_circle_outline";
            document.getElementById("soundOnOffIconRegister").setAttribute("title", selectedApplicationLanguageTexts["title_soundOnOffIconPause"]);
            document.getElementById("id_PlaySound").innerHTML = selectedApplicationLanguageTexts["title_soundOnOffIconPause"];
        }
    }
    else if (event.target.name == "combine")
    {   eventId = combineMatrix[eventId];
        if (previousCombineOption != eventId)
        {
            document.getElementById(previousCombineOption).classList.remove("selectedInputTag");
            document.getElementById(eventId).classList.add("selectedInputTag");
            previousCombineOption = eventId;
        }
    }
}
