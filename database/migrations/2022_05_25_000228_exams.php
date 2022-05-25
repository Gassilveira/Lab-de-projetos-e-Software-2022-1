<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exams', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('clinic_id');
            $table->string('specialty', 150);
            $table->string('exam_desc', 250);
            $table->string('exam_url', 255);
            $table->dateTime('exam_date');
            $table->timestamps();

            $table->foreign('patient_id')->references('id')->on('reg_patients')->onDelete('cascade');
            $table->foreign('clinic_id')->references('id')->on('reg_clinics')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
