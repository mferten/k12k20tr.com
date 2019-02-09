<?php

namespace App\Http\Controllers\Languages;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ApplicationLanguageText;
use App\ApplicationLanguageData;
use App\ApplicationLanguage;
use App\Utility;

class LanguageController extends Controller
{

    public function textLanguages(Request $request)
    {
        return view('languages.textLanguages');
    }

    public function dataLanguages(Request $request)
    {
        return view('languages.dataLanguages');
    }

    public function aCountryLanguageApplicationLanguageId(Request $request)
    {
        return ApplicationLanguage::getApplicationLanguageId($request['countryId'], $request['languageId']);
    }

    public function countriesDataTexts(Request $request)
    {
        return CountryDataLanguage::getCountriesDataTexts($request['applicationLanguage']);
    }

    public function languagesDataTexts(Request $request)
    {
        return LanguageDataLanguage::getLanguagesDataTexts($request['applicationLanguage']);
    }

    public function waterDataTexts(Request $request)
    {
        return WaterDataLanguage::getWatersDataTexts($request['applicationLanguage']);
    }

    public function tipsDataTexts(Request $request)
    {
        return TipDataLanguage::getTipsDataTexts($request['applicationLanguage']);
    }

    public function capitalCityDataTexts(Request $request)
    {
        return CapitalCityDataLanguage::getCapitalCitysDataTexts($request['applicationLanguage']);
    }

    public function texts(Request $request)
    {
        return ApplicationLanguageText::retrieveApplicationLanguageTexts($request['id']);
    }

    public function crudTexts(Request $request)
    {
        return ApplicationLanguageText::retrieveApplicationLanguageCRUDTexts($request['countryId'], $request['languageId']);
    }

    public function crudData(Request $request)
    {
        return ApplicationLanguageData::retrieveApplicationLanguageCRUDData($request['applicationLanguageId']);
    }

    public function crudDataForSeeder(Request $request)
    {
        return ApplicationLanguageData::retrieveAllDataAsSeedEntries();
    }

    public function crudUsaTexts(Request $request)
    {
        return ApplicationLanguageText::retrieveApplicationLanguageUsaCRUDTexts($request['applicationLanguageId']);
    }

    public function textsSave(Request $request)
    {
        return ApplicationLanguageText::saveApplicationLanguageTexts($request['count'], $request['texts'], $request['applicationLanguageId']);
    }

    public function textsCreate(Request $request)
    {
        return ApplicationLanguageText::createApplicationLanguageTexts($request['count'], $request['texts'], $request['countryId'], $request['languageId']);
    }

    public function dataSaveCreate(Request $request)
    {
        return ApplicationLanguageData::saveCreateApplicationLanguageData($request['applicationLanguageId'], $request['applicationLanguageBasedId'],
            $request['texts']);
    }

    public function textsDelete(Request $request)
    {
        return ApplicationLanguageText::deleteApplicationLanguageTexts($request['applicationLanguageId']);
    }

    /**
     * Get all USA English Application language Data Texts
     */
    public function usaEnglishDataTextsInfo(Request $request)
    {
        return Utility::getUsaEnglishDataTextsInfo();
    }

    /**
     * Get all Application language Data Texts for this (passed) Country + Language
     */
    public function aCountryLanguageDataTextsInfo(Request $request)
    {
        return Utility::getACountryLanguageDataTextsInfo($request['countryId'], $request['languageId']);
    }
}
