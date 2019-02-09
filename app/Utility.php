<?php

namespace App;

class Utility
{
    # In use to retrieve data for the Flag and Language Controllers
    # Makes "dump" possible: dump(App\Utility::getACountryLanguageDataTextsInfo(185, 92));

    /**
     * Properties
     */


    /**
	   * Getter for one Region all related Information
	   */
    public static function getRegionInfo($region)
    {
        require('phpfile/getRegionInfo.php');
        return [json_encode($flagOfCountries),
                json_encode($languageOfCountries),
                json_encode($flagOfCountriesFullName)];
    }

    /**
	   * Getter for all Regions (all countries) Whole World Countries Information
	   */
    public static function getAllLanguagesInfo()
    {
        require('phpfile/getAllLanguagesInfo.php');
        return [json_encode($allCountryLanguages)];

    }

    /**
	   * Getter for Whole World Countries Names
	   */
    public static function getAllRegionsInfo()
    {
        require('phpfile/getALLCountryNames.php');
        return [json_encode($allCountryNames)];

    }

    /**
	   * Getter for Whole World Countries Full Names
	   */
    public static function getAllRegionsFullNameInfo()
    {
        require('phpfile/getALLCountryFullNames.php');
        return [json_encode($allCountryFullNames)];

    }

    /**
	   * Getter for USA English Application Language All Data Texts
	   */
    public static function getUsaEnglishDataTextsInfo()
    {
        require('phpfile/getUsaEnglishDataTextsInfo.php');
        return [json_encode($usaEnglishCountryDataTexts),
                json_encode($usaEnglishLanguageDataTexts)];
    }

    /**
	   * Getter for the given Country and Language's Application Language Data Texts
	   */
    public static function getACountryLanguageDataTextsInfo($countryId, $languageId)
    {
        require('phpfile/getACountryLanguageDataTextsInfo.php');
        return [json_encode($aCountryLanguageCountryDataTexts),
                json_encode($aCountryLanguageLanguageDataTexts)];
    }

    /**
	   * Save All 5 Data Texts Tables
	   */
    public static function saveFiveDataTextsTables($applicationLanguageId, $countriesJSON, $languagesJSON)
    {
        # return CountryDataLanguage::saveCountryDataTexts($applicationLanguageId, explode("|", $countriesJSON));
        CountryDataLanguage::saveCountryDataTexts($applicationLanguageId, json_decode($countriesJSON, true));
        LanguageDataLanguage::saveLanguageDataTexts($applicationLanguageId, json_decode($languagesJSON, true));
        # No Exception: Success
        return "success";
    }

} # end of class
