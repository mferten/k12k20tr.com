<?php

# Get the Application Language (Country + Language) Id
$applicationLanguageId = App\ApplicationLanguage::getApplicationLanguageId($countryId, $languageId);
# Get the Countries Data Texts in USA English Application Language (base)
$aCountryLanguageCountryDataTexts = App\CountryDataLanguage::getCountriesDataTexts($applicationLanguageId);
# Get the Languages Data Texts
$aCountryLanguageLanguageDataTexts = App\LanguageDataLanguage::getLanguagesDataTexts($applicationLanguageId);
