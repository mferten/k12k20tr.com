<?php

namespace App;

use App\ApplicationLanguage;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class ApplicationLanguageData extends Model
{
    protected $table = 'application_language_data';
    /**
	   * ApplicationLanguageData's Application Language (a foreign key)
	    */
    public function applicationLanguges() {
		# a ApplicationLanguageText can have only one ApplicationLanguage
		# Define an inverse one-to-many relationship.
        return $this->belongsTo('App\ApplicationLanguage');
	  }

    // Retrieve to save entered Language Data into Data Language Seeder: Maintenance Only usage...
    public static function retrieveAllDataAsSeedEntries() {
        return ApplicationLanguageData::select("this_language_feature_value")
            ->orderBy("application_language_id")->orderBy("application_language_id_count")->get()->toJson();
    }

    public static function retrieveApplicationLanguageCRUDData($applicationLanguageId)
    {
        # Retrieve all Texts: application_language_id, usa_english_feature_value, this_language_feature_value, based_on_application_language_id
        $applicationData = ApplicationLanguageData::where('application_language_id',"=", $applicationLanguageId)->orderBy("id")->get();
        # no Row return
        if (!$applicationData)
        {
            return "no row";
        }
        else
        {
            return $applicationData->toJson();
        }
    }
    public static function saveCreateApplicationLanguageData($applicationLanguageId, $applicationLanguageBasedId, $texts)
    {
        # Retrieve each usa english value to enter/update the corresponding other language text
        $textArray = explode("|", $texts); // this_language_feature_value
        $count = sizeof($textArray);
        # Initiate a new timestamp
        $timestamp = Carbon::now()->toDateTimeString(); # same is OK
        for ($loop = 0; $loop < $count; $loop++)
        {
            # usa-english (unique) word, this language word, based_on_language_id (if any)
            $applicationData = ApplicationLanguageData::where('application_language_id',"=", $applicationLanguageId)->where('application_language_id_count',"=", $loop)->first();
            # no Row: insert
            if ($applicationData == null)
            {
                $newOne = new ApplicationLanguageData; // this way save() takes care of the create_at and updated_at
                $newOne->created_at = $timestamp;
                $newOne->updated_at = $timestamp;
                $newOne->application_language_id = $applicationLanguageId;
                $newOne->application_language_id_count = $loop;
                $newOne->this_language_feature_value = $textArray[$loop];
                $newOne->based_on_application_language_id = $applicationLanguageBasedId;
                $newOne->save();
            }
            # found Row: update
            else
            {
                $applicationData->updated_at = $timestamp;
                $applicationData->this_language_feature_value = $textArray[$loop];
                $applicationData->based_on_application_language_id = $applicationLanguageBasedId;
                $applicationData->update();
            }
        }
        # No Exception: Success
        return "success";
    }
}
