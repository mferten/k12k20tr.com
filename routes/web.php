<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

# Main Site Outside Menu Page
Route::get('/', 'Flags\FlagController@index');

# Application Languages Maintenance Page
Route::get('/textLanguages', 'Languages\LanguageController@textLanguages');

# Data Languages Maintenance Page
Route::get('/dataLanguages', 'Languages\LanguageController@dataLanguages');

# Registration Page
Route::get('/register', 'Flags\FlagController@register');

# Country Codes
Route::get('/countryCodes', 'Flags\FlagController@countryCodes');

# Citation Page
Route::get('/citations', 'Flags\FlagController@citations');

# About Page
Route::get('/aboutMe', 'Flags\FlagController@aboutMe');

# My Journey Video: Complete Tutorial
Route::get('/myJourney', 'Flags\FlagController@myJourney');

# My Application Usage
Route::get('/appUsage', 'Flags\FlagController@appUsage');

# web Technologies Usage
Route::get('/webTechnologiesUsage', 'Flags\FlagController@webTechnologiesUsage');

# i18n Internationalization Video
Route::get('/i18nUsage', 'Flags\FlagController@i18nUsage');

# Ajax call to retrieve the Region's all Country Information
Route::get('/ajax/region', 'Flags\FlagController@regionInfo');

# Ajax call to retrieve the Region's all Country Information
Route::get('/ajax/allRegions', 'Flags\FlagController@allRegionsInfo');

# Ajax call to retrieve the Region's all Country Information
Route::get('/ajax/allRegionsFullName', 'Flags\FlagController@allRegionsFullNameInfo');

# Ajax call to retrieve the Region's all Country Information
Route::get('/ajax/allLanguages', 'Flags\FlagController@allLanguagesInfo');

# Ajax call to retrieve the all Application Languages
Route::get('/ajax/applicationLanguage', 'Flags\FlagController@applicationLanguageInfo');

# Ajax call to retrieve the all Application Languages
Route::get('/ajax/worldLanguages', 'Flags\FlagController@worldLanguagesInfo');

# Ajax call to retrieve the all Application Languages
Route::get('/ajax/worldReligions', 'Flags\FlagController@worldReligionsInfo');

# Ajax call to retrieve the all Application Languages
Route::get('/ajax/worldWaters', 'Flags\FlagController@worldWatersInfo');

# Ajax call to retrieve the all Application Languages
Route::get('/ajax/flagsColors', 'Flags\FlagController@flagsColorsInfo');

# Ajax call to retrieve the all Application Languages
Route::get('/ajax/flagsShapes', 'Flags\FlagController@flagsShapesInfo');

# Ajax call to retrieve the all Contries with this Criteria
Route::get('/ajax/retrieveOneSelection', 'Flags\FlagController@retrieveOneSelectionInfo');

# Ajax call to retrieve the all Questions for one Category
Route::get('/ajax/retrieveOneCategoryQuestions', 'Flags\FlagController@retrieveOneCategoryQuestionsInfo');

# Ajax call to retrieve the all Questions for all Categories
Route::get('/ajax/retrieveAllCategoriesQuestions', 'Flags\FlagController@retrieveAllCategoriesQuestionsInfo');

# Ajax call to retrieve the all Answers for a Question
Route::get('/ajax/retrieveAnswersForAQuestion', 'Flags\FlagController@retrieveAnswersForAQuestionInfo');

# Ajax call to retrieve the Application Language Texts (Read)
Route::get('/ajax', 'Languages\LanguageController@texts');

# Ajax call to retrieve the Application Language Data (CRUD)
Route::get('/ajax/data', 'Languages\LanguageController@crudData');

# Ajax call to retrieve the Application Language Data for the Seeder (CRUD)
Route::get('/ajax/dataSeeder', 'Languages\LanguageController@crudDataForSeeder');

# Ajax call to retrieve the Application Language Texts (CRUD)
Route::get('/ajax/texts', 'Languages\LanguageController@crudTexts');

# Ajax call to retrieve the Application Language Texts (R) USA only: Base
Route::get('/ajax/usaTexts', 'Languages\LanguageController@crudUsaTexts');

# Ajax call to retrieve USA English Application Language Data Texts (R): Base
Route::get('/ajax/usaDataTexts', 'Languages\LanguageController@usaEnglishDataTextsInfo');

# Ajax call to retrieve Any Application Language Id
Route::get('/ajax/aCountryLanguageApplicationLanguageId', 'Languages\LanguageController@aCountryLanguageApplicationLanguageId');

# Ajax call to retrieve Any Application Language Data Texts
Route::get('/ajax/aCountryLanguageDataTexts', 'Languages\LanguageController@aCountryLanguageDataTextsInfo');

# Ajax call to save the Application Language Texts (CU)
Route::post('/ajax/texts/save', 'Languages\LanguageController@textsSave');

# Ajax call to create the Application Language Texts (CU)
Route::post('/ajax/texts/create', 'Languages\LanguageController@textsCreate');

# Ajax call to create the Application Language Texts (CU)
Route::post('/ajax/data/saveCreate', 'Languages\LanguageController@dataSaveCreate');

# Ajax call to delete the Application Language Texts (D)
Route::post('/ajax/texts/delete', 'Languages\LanguageController@textsDelete');

# Ajax call to retrieve Countries Data Text
Route::get('/ajax/countriesDataTexts', 'Languages\LanguageController@countriesDataTexts');

# Ajax call to retrieve Languages Data Text
Route::get('/ajax/languagesDataTexts', 'Languages\LanguageController@languagesDataTexts');

# Ajax call to retrieve Waters Data Text
Route::get('/ajax/watersDataTexts', 'Languages\LanguageController@watersDataTexts');

# Ajax call to retrieve Tips Data Text
Route::get('/ajax/tipsDataTexts', 'Languages\LanguageController@tipsDataTexts');

# Ajax call to retrieve Capitals Data Text
Route::get('/ajax/capitalCityDataTexts', 'Languages\LanguageController@capitalCityDataTexts');
