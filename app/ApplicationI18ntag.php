<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ApplicationI18ntag extends Model
{
    public function applicationLanguageTexts()
    {
		    # ApplicationI8ntag has many ApplicationLanguageTexts
		    # Define a one-to-many relationship.
		    return $this->hasMany('App\ApplicationLanguageText');
	  }

    #get ApplicationI18ntag id
    public static function getApplicationI18ntagId($tagName)
    {
        $applicationI18ntagId = ApplicationI18ntag::where('application_tag','=',$tagName)->pluck('id');
        return $applicationI18ntagId[0];
    }

    #get ApplicationI18ntag application_tag from the id
    public static function getApplicationI18ntagName($tagId)
    {
        $applicationI18ntagName = ApplicationI18ntag::where('id','=',$tagId)->pluck('application_tag');
        return $applicationI18ntagName[0];
    }
}
