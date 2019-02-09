<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFeaturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('features', function (Blueprint $table) {
            # Increments method will make a Primary, Auto-Incrementing field.
            $table->increments('id');

            # This generates two columns: `created_at` and `updated_at` to
            # keep track of changes to a row
            $table->timestamps();

            # The rest of the fields...
            $table->string('value');
            $table->string('feature');
            $table->string('comment');
            $table->integer('country_id')->unsigned();

            # Make foreign keys
            $table->foreign('country_id')->references('id')->on('countries');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $table->dropForeign('features_country_id_foreign');
        Schema::drop('features');
    }
}
