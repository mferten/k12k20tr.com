function recreateTheFlagsWithNewCountry(worldViewFlag)
{
   // add one statement at the end of addEvent.js startUp ...
   // --> recreateTheFlagsWithNewCountry(true); TRUE for World view, FALSE for a Region: Save Startup Region to start with
   // add <script src="js/addNewCountryFlag.js"></script> into showFlags.blade.php or dashBoard.blade.php

    // effected files: add Version Number and no JSON for /js/ folder 

    // countriesPopulations.json
    // countriesRegions.json
    // CountriesTableSeeder.php (if long name)
    // countriesLanguages.json add two digit code too in utilityForFlags.js
    // staticDataForRegion.js
    // staticDataForDashboard.js
    // defaultStartupRegionValues.js (if North America is added)
    // countriesFeatures.js

    // this will run when a region or the world view is showing.
    // the country name will be in the "flagOfCountries" or in the "allCountryNames"
    //                          in the "flagOfCountriesFullName" or in the "allCountryFullNames"
    // will create the flags for a region or for the World View: it will encode innerHTML of flags into console.console.log
    //                                                              will be copied into WorldFlags["flags"]
    //                                                              or will be copied into the related region's ???Flags["flags"]

    var oneFlagImageElement;
    var oneFlagSpanElement;
    var oneFlagFigCaptionElement;

    var newflags = document.createElement("div");
    newflags.setAttribute("id","newFlags");
    if (worldViewFlag) // be sure these are filled with the world countries..
    {
        flagOfCountries = allCountryNames; // allCountryNames comes from utilityForFlags.js run a SQL statement to get the new list
        flagOfCountriesFullName = allCountryFullNames; // allCountryFullNames comes from utilityForFlags.js too....
    }
    var flagOfCountriesShortNames = getFlagOfCountriesShortNames();

    for (var key in flagOfCountries) // delete local storage to read the new Region Country List from the static file
    {
        oneFlagSpanElement = document.createElement("span");
        oneFlagSpanElement.setAttribute("class", "inlineBlock");
        oneFlagFigCaptionElement = document.createElement("figcaption");
        oneFlagFigCaptionElement.innerHTML = flagOfCountriesShortNames[flagOfCountries[key]];
        oneFlagImageElement = document.createElement("img");
        if (worldViewFlag)
            oneFlagImageElement.setAttribute("class", "plainFlagsWorld vertialAlignMiddle");
        else oneFlagImageElement.setAttribute("class", "plainFlags vertialAlignMiddle");
        oneFlagImageElement.setAttribute("id", "bayrak" + key); // Flag's id text should be unique for CSS/selection
        oneFlagImageElement.setAttribute("tabindex", "0"); // for the Keyboard accessiblity
        var oneCountryNameFromArray = flagOfCountries[key];
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
        oneFlagImageElement.setAttribute("title", flagOfCountriesFullName[key]);
        oneFlagSpanElement.appendChild(oneFlagImageElement);
        oneFlagSpanElement.appendChild(oneFlagFigCaptionElement);
        newflags.appendChild(oneFlagSpanElement);
    }
    console.log(encodeURIComponent(newflags.innerHTML));
    /*
    // Get All the Countries Languages
    var xhttploadAllCountriesLanguages = new XMLHttpRequest();
    // On Ready State Change
    xhttploadAllCountriesLanguages.onreadystatechange = function()
    {
        if (xhttploadAllCountriesLanguages.readyState == 4 && xhttploadAllCountriesLanguages.status == 200)
        {
            if (xhttploadAllCountriesLanguages.responseText != "no row")
            {
                // Save the returned PHP arrau (data)
                var inAllCountryLanguages = JSON.parse(xhttploadAllCountriesLanguages.responseText);
                // one element array: one element is a JSON object with Country:Language pairs
                console.log(inAllCountryLanguages[0]);
            }
        }
    }
    xhttploadAllCountriesLanguages.open("GET", "/ajax/allLanguages", true);
    // Start the Ajax Communication (calls PHP program through Route => Controller)
    xhttploadAllCountriesLanguages.send();
    */
}

function getFlagOfCountriesShortNames() {
    var flagOfCountriesShortNames = {};
    for (var oneCountry in shortNameObjectsInArray)
    {
        flagOfCountriesShortNames[shortNameObjectsInArray[oneCountry]["country"]] = shortNameObjectsInArray[oneCountry]["short_name"];
    }
    return flagOfCountriesShortNames;
}

var shortNameObjectsInArray = [
	{
		"country" : "Afghanistan",
		"short_name" : "Afghanistan"
	},
	{
		"country" : "AlandIslands",
		"short_name" : "Åland"
	},
	{
		"country" : "Albania",
		"short_name" : "Albania"
	},
	{
		"country" : "Algeria",
		"short_name" : "Algeria"
	},
	{
		"country" : "Andorra",
		"short_name" : "Andorra"
	},
	{
		"country" : "Angola",
		"short_name" : "Angola"
	},
	{
		"country" : "Anguilla",
		"short_name" : "Anguilla"
	},
	{
		"country" : "AntarcticTreatySystem",
		"short_name" : "Antarctic"
	},
	{
		"country" : "AntiguaandBarbuda",
		"short_name" : "Antigua"
	},
	{
		"country" : "Argentina",
		"short_name" : "Argentina"
	},
	{
		"country" : "Armenia",
		"short_name" : "Armenia"
	},
	{
		"country" : "Aruba",
		"short_name" : "Aruba"
	},
	{
		"country" : "Australia",
		"short_name" : "Australia"
	},
	{
		"country" : "Austria",
		"short_name" : "Austria"
	},
	{
		"country" : "Azerbaijan",
		"short_name" : "Azerbaijan"
	},
	{
		"country" : "Bahamas",
		"short_name" : "Bahamas"
	},
	{
		"country" : "Bahrain",
		"short_name" : "Bahrain"
	},
	{
		"country" : "Bangladesh",
		"short_name" : "Bangladesh"
	},
	{
		"country" : "Barbados",
		"short_name" : "Barbados"
	},
	{
		"country" : "SaintBarthelemy",
		"short_name" : "Barthélemy"
	},
	{
		"country" : "Belarus",
		"short_name" : "Belarus"
	},
	{
		"country" : "Belgium",
		"short_name" : "Belgium"
	},
	{
		"country" : "Belize",
		"short_name" : "Belize"
	},
	{
		"country" : "Benin",
		"short_name" : "Benin"
	},
	{
		"country" : "Bermuda",
		"short_name" : "Bermuda"
	},
	{
		"country" : "Bhutan",
		"short_name" : "Bhutan"
	},
	{
		"country" : "Bolivia",
		"short_name" : "Bolivia"
	},
	{
		"country" : "BonaireSintEustatiusandSaba",
		"short_name" : "Bonaire"
	},
	{
		"country" : "BosniaandHerzegovina",
		"short_name" : "Bosnia"
	},
	{
		"country" : "Botswana",
		"short_name" : "Botswana"
	},
	{
		"country" : "BouvetIsland",
		"short_name" : "Bouvet"
	},
	{
		"country" : "Brazil",
		"short_name" : "Brazil"
	},
	{
		"country" : "Brunei",
		"short_name" : "Brunei"
	},
	{
		"country" : "Bulgaria",
		"short_name" : "Bulgaria"
	},
	{
		"country" : "BurkinaFaso",
		"short_name" : "Burkina Faso"
	},
	{
		"country" : "Burundi",
		"short_name" : "Burundi"
	},
	{
		"country" : "BritishVirginIslands",
		"short_name" : "BVI"
	},
	{
		"country" : "Cambodia",
		"short_name" : "Cambodia"
	},
	{
		"country" : "Cameroon",
		"short_name" : "Cameroon"
	},
	{
		"country" : "Canada",
		"short_name" : "Canada"
	},
	{
		"country" : "CanaryIslands",
		"short_name" : "Canary"
	},
	{
		"country" : "CaboVerde",
		"short_name" : "Cabo Verde"
	},
	{
		"country" : "CentralAfricanRepublic",
		"short_name" : "CAR"
	},
	{
		"country" : "CaymanIslands",
		"short_name" : "Cayman"
	},
	{
		"country" : "Chad",
		"short_name" : "Chad"
	},
	{
		"country" : "Chile",
		"short_name" : "Chile"
	},
	{
		"country" : "China",
		"short_name" : "China"
	},
	{
		"country" : "ChristmasIsland",
		"short_name" : "Christmas"
	},
	{
		"country" : "CocosIslands",
		"short_name" : "Cocos"
	},
	{
		"country" : "Colombia",
		"short_name" : "Colombia"
	},
	{
		"country" : "Comoros",
		"short_name" : "Comoros"
	},
	{
		"country" : "CookIslands",
		"short_name" : "Cook"
	},
	{
		"country" : "CostaRica",
		"short_name" : "Costa Rica"
	},
	{
		"country" : "CotedIvoire",
		"short_name" : "Côte d'Ivoire"
	},
	{
		"country" : "Croatia",
		"short_name" : "Croatia"
	},
	{
		"country" : "Cuba",
		"short_name" : "Cuba"
	},
	{
		"country" : "Curacao",
		"short_name" : "Curaçao"
	},
	{
		"country" : "Cyprus",
		"short_name" : "Cyprus"
	},
	{
		"country" : "Czechia",
		"short_name" : "Czechia"
	},
	{
		"country" : "Denmark",
		"short_name" : "Denmark"
	},
	{
		"country" : "Djibouti",
		"short_name" : "Djibouti"
	},
	{
		"country" : "Dominica",
		"short_name" : "Dominica"
	},
	{
		"country" : "DominicanRepublic",
		"short_name" : "Dominican"
	},
	{
		"country" : "DemocraticRepublicoftheCongo",
		"short_name" : "DR Congo"
	},
	{
		"country" : "EquatorialGuinea",
		"short_name" : "E Guinea"
	},
	{
		"country" : "Ecuador",
		"short_name" : "Ecuador"
	},
	{
		"country" : "Egypt",
		"short_name" : "Egypt"
	},
	{
		"country" : "ElSalvador",
		"short_name" : "El Salvador"
	},
	{
		"country" : "Eritrea",
		"short_name" : "Eritrea"
	},
	{
		"country" : "Estonia",
		"short_name" : "Estonia"
	},
	{
		"country" : "Eswatini",
		"short_name" : "Eswatini"
	},
	{
		"country" : "Ethiopia",
		"short_name" : "Ethiopia"
	},
	{
		"country" : "FalklandIslands",
		"short_name" : "Falkland"
	},
	{
		"country" : "FaroeIslands",
		"short_name" : "Faroe"
	},
	{
		"country" : "Fiji",
		"short_name" : "Fiji"
	},
	{
		"country" : "Finland",
		"short_name" : "Finland"
	},
	{
		"country" : "FrenchSouthernandAntarcticLands",
		"short_name" : "Fr Antarctic"
	},
	{
		"country" : "France",
		"short_name" : "France"
	},
	{
		"country" : "Gabon",
		"short_name" : "Gabon"
	},
	{
		"country" : "Gambia",
		"short_name" : "Gambia"
	},
	{
		"country" : "Georgia",
		"short_name" : "Georgia"
	},
	{
		"country" : "Germany",
		"short_name" : "Germany"
	},
	{
		"country" : "Ghana",
		"short_name" : "Ghana"
	},
	{
		"country" : "Gibraltar",
		"short_name" : "Gibraltar"
	},
	{
		"country" : "Greece",
		"short_name" : "Greece"
	},
	{
		"country" : "Greenland",
		"short_name" : "Greenland"
	},
	{
		"country" : "Grenada",
		"short_name" : "Grenada"
	},
	{
		"country" : "Guadeloupe",
		"short_name" : "Guadeloupe"
	},
	{
		"country" : "Guam",
		"short_name" : "Guam"
	},
	{
		"country" : "Guatemala",
		"short_name" : "Guatemala"
	},
	{
		"country" : "Guernsey",
		"short_name" : "Guernsey"
	},
	{
		"country" : "FrenchGuiana",
		"short_name" : "Guiana"
	},
	{
		"country" : "Guinea",
		"short_name" : "Guinea"
	},
	{
		"country" : "GuineaBissau",
		"short_name" : "Guinea Bissau"
	},
	{
		"country" : "Guyana",
		"short_name" : "Guyana"
	},
	{
		"country" : "HeardIslandandMcDonaldIslands",
		"short_name" : "H McDonald"
	},
	{
		"country" : "Haiti",
		"short_name" : "Haiti"
	},
	{
		"country" : "Honduras",
		"short_name" : "Honduras"
	},
	{
		"country" : "HongKong",
		"short_name" : "Hong Kong"
	},
	{
		"country" : "Hungary",
		"short_name" : "Hungary"
	},
	{
		"country" : "Iceland",
		"short_name" : "Iceland"
	},
	{
		"country" : "India",
		"short_name" : "India"
	},
	{
		"country" : "Indonesia",
		"short_name" : "Indonesia"
	},
	{
		"country" : "Iran",
		"short_name" : "Iran"
	},
	{
		"country" : "Iraq",
		"short_name" : "Iraq"
	},
	{
		"country" : "Ireland",
		"short_name" : "Ireland"
	},
	{
		"country" : "IsleofMan",
		"short_name" : "Isle of Man"
	},
	{
		"country" : "Israel",
		"short_name" : "Israel"
	},
	{
		"country" : "Italy",
		"short_name" : "Italy"
	},
	{
		"country" : "Jamaica",
		"short_name" : "Jamaica"
	},
	{
		"country" : "Japan",
		"short_name" : "Japan"
	},
	{
		"country" : "Jersey",
		"short_name" : "Jersey"
	},
	{
		"country" : "Jordan",
		"short_name" : "Jordan"
	},
	{
		"country" : "Kazakhstan",
		"short_name" : "Kazakhstan"
	},
	{
		"country" : "Kenya",
		"short_name" : "Kenya"
	},
	{
		"country" : "Kiribati",
		"short_name" : "Kiribati"
	},
	{
		"country" : "Kosovo",
		"short_name" : "Kosovo"
	},
	{
		"country" : "Kuwait",
		"short_name" : "Kuwait"
	},
	{
		"country" : "Kyrgyzstan",
		"short_name" : "Kyrgyzstan"
	},
	{
		"country" : "Laos",
		"short_name" : "Laos"
	},
	{
		"country" : "Latvia",
		"short_name" : "Latvia"
	},
	{
		"country" : "Lebanon",
		"short_name" : "Lebanon"
	},
	{
		"country" : "Lesotho",
		"short_name" : "Lesotho"
	},
	{
		"country" : "Liberia",
		"short_name" : "Liberia"
	},
	{
		"country" : "Libya",
		"short_name" : "Libya"
	},
	{
		"country" : "Liechtenstein",
		"short_name" : "Liechtenstein"
	},
	{
		"country" : "Lithuania",
		"short_name" : "Lithuania"
	},
	{
		"country" : "Luxembourg",
		"short_name" : "Luxembourg"
	},
	{
		"country" : "Macau",
		"short_name" : "Macau"
	},
	{
		"country" : "Macedonia",
		"short_name" : "Macedonia"
	},
	{
		"country" : "Madagascar",
		"short_name" : "Madagascar"
	},
	{
		"country" : "Malawi",
		"short_name" : "Malawi"
	},
	{
		"country" : "Malaysia",
		"short_name" : "Malaysia"
	},
	{
		"country" : "Maldives",
		"short_name" : "Maldives"
	},
	{
		"country" : "Mali",
		"short_name" : "Mali"
	},
	{
		"country" : "Malta",
		"short_name" : "Malta"
	},
	{
		"country" : "NorthernMarianaIslands",
		"short_name" : "Mariana"
	},
	{
		"country" : "MarshallIslands",
		"short_name" : "Marshall"
	},
	{
		"country" : "Martinique",
		"short_name" : "Martinique"
	},
	{
		"country" : "Mauritania",
		"short_name" : "Mauritania"
	},
	{
		"country" : "Mauritius",
		"short_name" : "Mauritius"
	},
	{
		"country" : "Mayotte",
		"short_name" : "Mayotte"
	},
	{
		"country" : "Mexico",
		"short_name" : "Mexico"
	},
	{
		"country" : "Micronesia",
		"short_name" : "Micronesia"
	},
	{
		"country" : "Moldova",
		"short_name" : "Moldova"
	},
	{
		"country" : "Monaco",
		"short_name" : "Monaco"
	},
	{
		"country" : "Mongolia",
		"short_name" : "Mongolia"
	},
	{
		"country" : "Montenegro",
		"short_name" : "Montenegro"
	},
	{
		"country" : "Montserrat",
		"short_name" : "Montserrat"
	},
	{
		"country" : "Morocco",
		"short_name" : "Morocco"
	},
	{
		"country" : "Mozambique",
		"short_name" : "Mozambique"
	},
	{
		"country" : "Myanmar",
		"short_name" : "Myanmar"
	},
	{
		"country" : "NewCaledonia",
		"short_name" : "N Caledonia"
	},
	{
		"country" : "NewZealand",
		"short_name" : "N Zealand"
	},
	{
		"country" : "Namibia",
		"short_name" : "Namibia"
	},
	{
		"country" : "Nauru",
		"short_name" : "Nauru"
	},
	{
		"country" : "Nepal",
		"short_name" : "Nepal"
	},
	{
		"country" : "Netherlands",
		"short_name" : "Netherlands"
	},
	{
		"country" : "Nicaragua",
		"short_name" : "Nicaragua"
	},
	{
		"country" : "Niger",
		"short_name" : "Niger"
	},
	{
		"country" : "Nigeria",
		"short_name" : "Nigeria"
	},
	{
		"country" : "Niue",
		"short_name" : "Niue"
	},
	{
		"country" : "NorfolkIsland",
		"short_name" : "Norfolk"
	},
	{
		"country" : "NorthKorea",
		"short_name" : "North Korea"
	},
	{
		"country" : "Norway",
		"short_name" : "Norway"
	},
	{
		"country" : "Oman",
		"short_name" : "Oman"
	},
	{
		"country" : "PapuaNewGuinea",
		"short_name" : "P N Guinea"
	},
	{
		"country" : "Pakistan",
		"short_name" : "Pakistan"
	},
	{
		"country" : "Palau",
		"short_name" : "Palau"
	},
	{
		"country" : "StateofPalestine",
		"short_name" : "Palestine"
	},
	{
		"country" : "Panama",
		"short_name" : "Panama"
	},
	{
		"country" : "Paraguay",
		"short_name" : "Paraguay"
	},
	{
		"country" : "Peru",
		"short_name" : "Peru"
	},
	{
		"country" : "Philippines",
		"short_name" : "Philippines"
	},
	{
		"country" : "PitcairnIslands",
		"short_name" : "Pitcairn"
	},
	{
		"country" : "Poland",
		"short_name" : "Poland"
	},
	{
		"country" : "FrenchPolynesia",
		"short_name" : "Polynesia"
	},
	{
		"country" : "Portugal",
		"short_name" : "Portugal"
	},
	{
		"country" : "PuertoRico",
		"short_name" : "Puerto Rico"
	},
	{
		"country" : "Qatar",
		"short_name" : "Qatar"
	},
	{
		"country" : "RepublicofCongo",
		"short_name" : "Rep Congo"
	},
	{
		"country" : "Reunion",
		"short_name" : "Réunion"
	},
	{
		"country" : "Romania",
		"short_name" : "Romania"
	},
	{
		"country" : "RussianFederation",
		"short_name" : "Russia"
	},
	{
		"country" : "Rwanda",
		"short_name" : "Rwanda"
	},
	{
		"country" : "SouthGeorgiaAndSouthSandwichIslands",
		"short_name" : "S Georgia"
	},
	{
		"country" : "SouthSudan",
		"short_name" : "S Sudan"
	},
	{
		"country" : "Samoa",
		"short_name" : "Samoa"
	},
	{
		"country" : "SanMarino",
		"short_name" : "San Marino"
	},
	{
		"country" : "SaoTomeandPrincipe",
		"short_name" : "São Tomé"
	},
	{
		"country" : "SaudiArabia",
		"short_name" : "Saudi Arabia"
	},
	{
		"country" : "Senegal",
		"short_name" : "Senegal"
	},
	{
		"country" : "Serbia",
		"short_name" : "Serbia"
	},
	{
		"country" : "Seychelles",
		"short_name" : "Seychelles"
	},
	{
		"country" : "SierraLeone",
		"short_name" : "Sierra Leone"
	},
	{
		"country" : "Singapore",
		"short_name" : "Singapore"
	},
	{
		"country" : "Slovakia",
		"short_name" : "Slovakia"
	},
	{
		"country" : "Slovenia",
		"short_name" : "Slovenia"
	},
	{
		"country" : "SolomonIslands",
		"short_name" : "Solomon"
	},
	{
		"country" : "Somalia",
		"short_name" : "Somalia"
	},
	{
		"country" : "SouthAfrica",
		"short_name" : "South Africa"
	},
	{
		"country" : "SouthKorea",
		"short_name" : "South Korea"
	},
	{
		"country" : "Spain",
		"short_name" : "Spain"
	},
	{
		"country" : "SriLanka",
		"short_name" : "Sri Lanka"
	},
	{
		"country" : "SaintHelena",
		"short_name" : "St Helena"
	},
	{
		"country" : "SaintKittsandNevis",
		"short_name" : "St Kitts"
	},
	{
		"country" : "SaintLucia",
		"short_name" : "St Lucia"
	},
	{
		"country" : "SintMaarten",
		"short_name" : "St Maarten"
	},
	{
		"country" : "SaintMartin",
		"short_name" : "St Martin"
	},
	{
		"country" : "SaintPierreandMiquelon",
		"short_name" : "St Pierre"
	},
	{
		"country" : "SaintVincentandGrenadines",
		"short_name" : "St Vincents"
	},
	{
		"country" : "Sudan",
		"short_name" : "Sudan"
	},
	{
		"country" : "Suriname",
		"short_name" : "Suriname"
	},
	{
		"country" : "SvalbardandJanMayen",
		"short_name" : "Svalbard"
	},
	{
		"country" : "Sweden",
		"short_name" : "Sweden"
	},
	{
		"country" : "Switzerland",
		"short_name" : "Switzerland"
	},
	{
		"country" : "Syria",
		"short_name" : "Syria"
	},
	{
		"country" : "Taiwan",
		"short_name" : "Taiwan"
	},
	{
		"country" : "Tajikistan",
		"short_name" : "Tajikistan"
	},
	{
		"country" : "Tanzania",
		"short_name" : "Tanzania"
	},
	{
		"country" : "Thailand",
		"short_name" : "Thailand"
	},
	{
		"country" : "TimorLeste",
		"short_name" : "Timor Leste"
	},
	{
		"country" : "Togo",
		"short_name" : "Togo"
	},
	{
		"country" : "Tokelau",
		"short_name" : "Tokelau"
	},
	{
		"country" : "Tonga",
		"short_name" : "Tonga"
	},
	{
		"country" : "TrinidadandTobago",
		"short_name" : "Trinidad"
	},
	{
		"country" : "TurkishRepublicofNorthernCyprus",
		"short_name" : "TRNC"
	},
	{
		"country" : "Tunisia",
		"short_name" : "Tunisia"
	},
	{
		"country" : "Turkey",
		"short_name" : "Turkey"
	},
	{
		"country" : "Turkmenistan",
		"short_name" : "Turkmenistan"
	},
	{
		"country" : "TurksandCaicosIslands",
		"short_name" : "Turks Caicos"
	},
	{
		"country" : "Tuvalu",
		"short_name" : "Tuvalu"
	},
	{
		"country" : "UnitedArabEmirates",
		"short_name" : "UAE"
	},
	{
		"country" : "Uganda",
		"short_name" : "Uganda"
	},
	{
		"country" : "UnitedKingdom",
		"short_name" : "UK"
	},
	{
		"country" : "BritishIndianOceanTerritory",
		"short_name" : "UK Indian"
	},
	{
		"country" : "Ukraine",
		"short_name" : "Ukraine"
	},
	{
		"country" : "Uruguay",
		"short_name" : "Uruguay"
	},
	{
		"country" : "UnitedStatesMinorOutlyingIslands",
		"short_name" : "US Minor"
	},
	{
		"country" : "AmericanSamoa",
		"short_name" : "US Samoa"
	},
	{
		"country" : "UnitedStatesofAmerica",
		"short_name" : "USA"
	},
	{
		"country" : "UnitedStatesVirginIslands",
		"short_name" : "USVI"
	},
	{
		"country" : "Uzbekistan",
		"short_name" : "Uzbekistan"
	},
	{
		"country" : "Vanuatu",
		"short_name" : "Vanuatu"
	},
	{
		"country" : "VaticanCityAndHolySee",
		"short_name" : "Vatican"
	},
	{
		"country" : "Venezuela",
		"short_name" : "Venezuela"
	},
	{
		"country" : "Vietnam",
		"short_name" : "Vietnam"
	},
	{
		"country" : "WallisandFutuna",
		"short_name" : "Wallis"
	},
	{
		"country" : "WesternSahara",
		"short_name" : "West Sahara"
	},
	{
		"country" : "Yemen",
		"short_name" : "Yemen"
	},
	{
		"country" : "Zambia",
		"short_name" : "Zambia"
	},
	{
		"country" : "Zimbabwe",
		"short_name" : "Zimbabwe"
	}];
