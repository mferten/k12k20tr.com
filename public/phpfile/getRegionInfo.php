<?php

    # Get the Region's Countries from the database
    $flagOfCountries = App\Region::getRegionCountries($region);
    # Get the Region's Countries Languages from the database
    $languageOfCountries = App\Country::getRegionCountriesLanguages($flagOfCountries);
    # Get the Region's Countries Full Name from the database
    $flagOfCountriesFullName = App\Region::getRegionCountriesFullName($region);
    # if added more item, must add into FlagController as well
