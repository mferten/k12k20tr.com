function setCountryWikiValues(countryName)
{
    if (stateIsShowing)
    {
        document.getElementById("info_WikiCountry").href = "https://tr.wikipedia.org/wiki/" +
            (wikiUSState[countryName]?wikiUSState[countryName]:usStates[countryName]);
    }
    else if (countryName == "UnitedStatesofAmerica")
        document.getElementById("info_WikiCountry").href = "https://tr.wikipedia.org/wiki/United_States";
    else if (countryName == "BonaireSintEustatiusandSaba")
        document.getElementById("info_WikiCountry").href = "https://tr.wikipedia.org/wiki/Bonaire";
    else if (countryName == "BritishIndianOceanTerritory")
        document.getElementById("info_WikiCountry").href = "https://tr.wikipedia.org/wiki/British_Indian_Ocean_Territory";
    else if (countryName == "BosniaandHerzegovina")
        document.getElementById("info_WikiCountry").href = "https://tr.wikipedia.org/wiki/Bosnia_and_Herzegovina";
    else if (countryName == "AntiguaandBarbuda")
        document.getElementById("info_WikiCountry").href = "https://tr.wikipedia.org/wiki/Antigua_and_Barbuda";
    else if (countryName == "SouthGeorgiaAndSouthSandwichIslands")
        document.getElementById("info_WikiCountry").href = "https://tr.wikipedia.org/wiki/South_Georgia_and_the_South_Sandwich_Islands";
    else if (countryName == "VaticanCityAndHolySee")
        document.getElementById("info_WikiCountry").href = "https://tr.wikipedia.org/wiki/Vatican_City";
    else {
        if (previousFlag != -1 && fullNameForCountry[countryNameFromKeyValue[previousFlag.substring(6)]])
            document.getElementById("info_WikiCountry").href = "https://tr.wikipedia.org/wiki/" +
                fullNameForCountry[countryNameFromKeyValue[previousFlag.substring(6)]];
        else document.getElementById("info_WikiCountry").href = "https://tr.wikipedia.org/wiki/" + countryName;
    }
}

var capitalCitiesCode = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S",
    "Ş", "T", "U", "Ü", "V", "Y", "Z"];

var capitalCitiesOptionTexts = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S",
    "Ş", "T", "U", "Ü", "V", "Y", "Z"];
