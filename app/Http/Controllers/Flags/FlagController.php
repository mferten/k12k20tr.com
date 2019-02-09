<?php

namespace App\Http\Controllers\Flags;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Utility;
use App\ApplicationLanguage;
use App\Feature;
use App\Question;
use App\Answer;

class FlagController extends Controller
{

    /**
     * Get /
     */
    public function index(Request $request)
    {
        // Validation is done in JS
        // return view('flags.menu')->withTitle($request['value']);
        return view('layouts.master');
    }

    /**
     * Get /register
     */
    public function register(Request $request)
    {
        return view('register.register');
    }

    /**
     * Get /countryCodes
     */
    public function countryCodes(Request $request)
    {
        return view('country.countryCodes');
    }

    /**
     * Get /citations
     */
    public function citations(Request $request)
    {
        // Validation is done in JS
        return view('citations.citations');
    }

    /**
     * Get /aboutMe
     */
    public function aboutMe(Request $request)
    {
        // Validation is done in JS
        return view('aboutMe.aboutMe');
    }

    /**
     * Get /myJourney
     */
    public function myJourney(Request $request)
    {
        // Validation is done in JS
        return view('videos.myJourney');
    }

    /**
     * Get /appUsage
     */
    public function appUsage(Request $request)
    {
        // Validation is done in JS
        return view('videos.appUsage');
    }

    /**
     * Get /i18nUsage
     */
    public function i18nUsage(Request $request)
    {
        // Validation is done in JS
        return view('videos.i18nUsage');
    }

    /**
     * Get /webTechnologiesUsage
     */
    public function webTechnologiesUsage(Request $request)
    {
        // Validation is done in JS
        return view('videos.webTechnologiesUsage');
    }

    /**
     * Get /fix a Map (drag and drop a flag into the map: correct location)
     */
    public function fix(Request $request)
    {
        return view('fix.fixFlags');
    }

    /**
     * Get /fill the Map with the Flags
     */
    public function fill(Request $request)
    {
        return view('fill.fillMap');
    }

    /**
     * Get /flags features Searching
     */
    public function searching(Request $request)
    {
        return view('dashBoard.dashBoard');
    }

    /**
     * Get /flags features Surfing
     */
    public function surfing(Request $request)
    {
        return view('flags.showFlags');
    }

    /**
     * Get all Region's Contries information
     */
    public function regionInfo(Request $request)
    {
        return Utility::getRegionInfo($request['regionName']);
    }

    /**
     * Get all Regions: Whole World Contries (all countries) information
     */
    public function allRegionsInfo(Request $request) // no input but I kept the syntax
    {
        return Utility::getAllRegionsInfo();
    }

    /**
     * Get all Regions: Whole World Contries (all countries) Full Names
     */
    public function allRegionsFullNameInfo(Request $request) // no input but I kept the syntax
    {
        return Utility::getAllRegionsFullNameInfo();
    }

    /**
     * Get all Country Languages: Whole World Contries Languages information
     */
    public function allLanguagesInfo(Request $request) // no input but I kept the syntax
    {
        return Utility::getAllLanguagesInfo();
    }

    /**
     * Get all Application Languages information
     */
    public function applicationLanguageInfo()
    {
        return ApplicationLanguage::getApplicationLanguages();
    }

    /**
     * Get all World Languages information
     */
    public function worldLanguagesInfo()
    {
        return Feature::getWorldLanguages();
    }

    /**
     * Get all World Religions information
     */
    public function worldReligionsInfo()
    {
        return Feature::getWorldReligions();
    }

    /**
     * Get all World Waters information
     */
    public function worldWatersInfo()
    {
        return Feature::getWorldWaters();
    }

    /**
     * Get all Flags Colors information
     */
    public function flagsColorsInfo()
    {
        return Feature::getFlagsColors();
    }

    /**
     * Get all Flags Shapes information
     */
    public function flagsShapesInfo()
    {
        return Feature::getFlagsShapes();
    }

    /**
     * Get all Countries with this Criteria
     */
    public function retrieveOneSelectionInfo(Request $request)
    {
        return Feature::getOneSelectionInfo($request['selectionId'], $request['optionValue']);
    }

    /**
     * Get One Category Questions if meets the Grade
     */
    public function retrieveOneCategoryQuestionsInfo(Request $request)
    {
        return Question::getOneCategoryQuestions($request['feature'], $request['grade']);
    }

    /**
     * Get all Categories all Questions if meets the Grade (default all from 0 to 7)
     */
    public function retrieveAllCategoriesQuestionsInfo(Request $request)
    {
        return Question::getAllCategoriesQuestions($request['feature'], $request['grade']);
    }

    /**
     * Get all Categories all Questions if meets the Grade (default all from 0 to 7)
     */
    public function retrieveAnswersForAQuestionInfo(Request $request)
    {
        return Answer::getAnswersForAQuestion($request['id']);
    }
}
