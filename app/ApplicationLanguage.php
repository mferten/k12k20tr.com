<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ApplicationLanguage extends Model
{

    /**
	* ApplicationLanguage's country (a foreign key)
	*/
    public function country()
    {
		# a ApplicationLanguage can have only one Country
		# Define an inverse one-to-many relationship.
        return $this->belongsTo('App\Country');
	}

    /**
	* ApplicationLanguage's language (a foreign key)
	*/
    public function language()
    {
		# a ApplicationLanguage can have only one Language
		# Define an inverse one-to-many relationship.
        return $this->belongsTo('App\Language');
	}

    public function applicationLanguageTexts()
    {
        # ApplicationLanguage has many ApplicationLanguageTexts
        # Define a one-to-many relationship.
        return $this->hasMany('App\ApplicationLanguageText');
    }

    public function countryDataLanguages()
    {
		    # Application Language can have many Country Data Languages
		    # Define a one-to-many relationship.
		    return $this->hasMany('App\CountryDataLanguage');
	  }

    public function languageDataLanguages()
    {
		    # Application Language can have many Language Data Languages
		    # Define a one-to-many relationship.
		    return $this->hasMany('App\LanguageDataLanguage');
	  }

    public function waterDataLanguages()
    {
		    # Application Language can have many Water Data Languages
		    # Define a one-to-many relationship.
		    return $this->hasMany('App\WaterDataLanguage');
	  }

    public function tipDataLanguages()
    {
		    # Application Language can have many Tip Data Languages
		    # Define a one-to-many relationship.
		    return $this->hasMany('App\TipDataLanguage');
	  }

    public function capitalCityDataLanguages()
    {
		    # Application Language can have many Capital City Data Languages
		    # Define a one-to-many relationship.
		    return $this->hasMany('App\CapitalCityDataLanguage');
	  }
    // Only the Language list
    public static function getApplicationLanguages()
    {
        # Read application_languages table: sorted by the name ascending
        $applicationLanguages = ApplicationLanguage::all()->sortBy("id"); // orderBy no good here "it is Query level OK with select"
        $applicationLanguagesDropDown = '[';
        foreach ($applicationLanguages as $applicationLanguage)
        {
            $applicationLanguagesDropDown .= '{"id":"appLanguageToUseOption' . $applicationLanguage->id . '",' .
                                             '"value":"appLanguageToUseOption' . $applicationLanguage->id . '",' .
                                             '"text":"' . $applicationLanguage->country->short_name . "-" .
                                                          $applicationLanguage->language->short_name . '"},';
        }
        // remove the last comman
        $applicationLanguagesDropDown = substr($applicationLanguagesDropDown, 0, strrpos($applicationLanguagesDropDown, ","));
        $applicationLanguagesDropDown .= ']';
        return $applicationLanguagesDropDown;
    }

    public static function createNewApplicationLanguage($countryId, $languageId)
    {
        // Create new Applicaiton Language and retrieve the Application Language ID to pass it to save.
        $applicationLanguage = ApplicationLanguage::where('country_id', '=', $countryId)->where('language_id', '=', $languageId)->first();
        if ($applicationLanguage && $applicationLanguage->count()>0)
        {
            return $applicationLanguage->id;
        }
        else
        {
            // does not exist
            $newOne = new ApplicationLanguage;
            $newOne->country_id = $countryId;
            $newOne->language_id = $languageId;
            $newOne->save();
            return $newOne->id;
        }
    }

    // Get Application Language Id
    public static function getApplicationLanguageId($countryId, $languageId)
    {
        # Read application_languages table: sorted by the name ascending
        $applicationLanguage = ApplicationLanguage::where('country_id', '=', $countryId)->where('language_id', '=', $languageId)->first();
        if ($applicationLanguage == null)
        {
            return -1;

        }
        else
        {
            return $applicationLanguage->id;
        }
    }
}
