<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{

    /**
	   * Language's countries (the only pivot one)
	   */
    public function countries() {
		    # a Language may have many Countries
		    # Define a many-to-many relationship.
        return $this->belongsToMany('App\Country')->withTimestamps();
	  }

    public function applicationLanugages() {
		    # Language can have many Application Languages
		    # Define a one-to-many relationship.
		    return $this->hasMany('App\ApplicationLanguage');
	  }

    public function languageDataLanguages()
    {
		    # Language can have many Language Data Languages
		    # Define a one-to-many relationship.
		    return $this->hasMany('App\LanguageDataLanguage');
	  }

    // Only the Language list
    public static function getLanguages($selectedApplicationLanguageTexts)
    {
        # read language table: sorted by the name ascending
        $languagesDropDown = "<option value='choose'>" . $selectedApplicationLanguageTexts["id_ChooseOne"] . "</option>";
        $languages = Language::orderBy('language', 'ASC')->get();
        foreach ($languages as $language) :
            $languagesDropDown .= "<option value='$language->id'>$language->language</option>";
        endforeach;
        return $languagesDropDown;
    }

    // Only Short-Name Language list
    public static function getShortNameLanguages()
    {
        # read language table: sorted by the name ascending
        $languagesDropDown = '';
        $languages = Language::orderBy('language', 'ASC')->get();
        foreach ($languages as $language) :
            # if short_name is null/blank use language
            $languageName = ($language->short_name == null || $language->short_name == '') ? $language->language : $language->short_name;
            $languagesDropDown .= "<option value='$language->id'>$languageName</option>";
        endforeach;
        return $languagesDropDown;
    }

    public static function getLanguageObject($languageName)
    {
        return Language::where('language','=',$languageName)->first();
    }

    public static function getLanguageId($languageName)
    {
        $languageId = Language::where('language','=',$languageName)->pluck('id');
        return $languageId[0];
    }

    // All the Languages with All the columns
    public static function getLanguagesAllColumns()
    {
        # read languages table with all the columns sorted by (language) name
        $languages = Language::orderBy('language', 'ASC')->get();
        return $languages->toArray();
    }
}
