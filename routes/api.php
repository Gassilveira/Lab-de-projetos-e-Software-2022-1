<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/', function () {
    return "Nada para ver aqui!!";
});

Route::post('login', [App\Http\Controllers\Api\AuthController::class, 'login']);

Route::get('exams/history/{code}', [App\Http\Controllers\Api\ExamsController::class, 'history']);

Route::middleware('auth:api')->group( function () {

    /* User */
    Route::get('user', [App\Http\Controllers\Api\UserController::class, 'get']);
    Route::put('user/update', [App\Http\Controllers\Api\UserController::class, 'update']);

    /* Exams history */
    Route::get('exams/share', [App\Http\Controllers\Api\ExamsController::class, 'share']);
    Route::put('exams/unshare', [App\Http\Controllers\Api\ExamsController::class, 'unshare']);

    /* Clinic */
    Route::get('clinic', [App\Http\Controllers\Api\ClinicController::class, 'get']);
    Route::put('clinic/update', [App\Http\Controllers\Api\ClinicController::class, 'update']);
    Route::post('clinic/allow/user', [App\Http\Controllers\Api\ClinicController::class, 'allowUser']);
    Route::post('clinic/send/exam', [App\Http\Controllers\Api\ClinicController::class, 'sendExam']);
    Route::post('register/user', [App\Http\Controllers\Api\AuthController::class, 'register']);

    /* Exams */
    Route::get('exams', [App\Http\Controllers\Api\ExamsController::class, 'list']);



});