<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ApplicationLanguages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
         Schema::create('application_languages', function (Blueprint $table) {
             # Increments method will make a Primary, Auto-Incrementing field.
             $table->increments('id');

             # This generates two columns: `created_at` and `updated_at` to
             # keep track of changes to a row
             $table->timestamps();

             # The rest of the fields...
             $table->integer('country_id')->unsigned();
             $table->integer('language_id')->unsigned();

             # Make foreign keys
             $table->foreign('country_id')->references('id')->on('countries');
             $table->foreign('language_id')->references('id')->on('languages');
         });
     }

     /**
      * Reverse the migrations.
      *
      * @return void
      */
     public function down()
     {
         $table->dropForeign('application_languages_country_id_foreign');
         $table->dropForeign('application_languages_language_id_foreign');
         Schema::drop('application_languages');
     }
}
