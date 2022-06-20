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

/* Public history */
Route::get('exams/history/{code}', [App\Http\Controllers\Api\ExamsController::class, 'history']);

/* Public exams */
Route::get('exams/get/{file}', [App\Http\Controllers\Api\ExamsController::class, 'get']);

Route::middleware('auth:api')->group( function () {

    /* User */
    Route::get('user', [App\Http\Controllers\Api\UserController::class, 'get']);
    Route::get('logout', [App\Http\Controllers\Api\AuthController::class, 'logout']);
    Route::put('user/update', [App\Http\Controllers\Api\UserController::class, 'update']);
    Route::put('user/update/password', [App\Http\Controllers\Api\UserController::class, 'changePassword']);


    /* Exams history */
    Route::get('exams/share', [App\Http\Controllers\Api\ExamsController::class, 'share']);
    Route::put('exams/unshare', [App\Http\Controllers\Api\ExamsController::class, 'unshare']);

    /* Clinic */
    Route::get('clinic', [App\Http\Controllers\Api\ClinicController::class, 'get']);
    Route::get('clinic/get/api/token', [App\Http\Controllers\Api\ClinicController::class, 'getApiToken']);
    Route::put('clinic/update', [App\Http\Controllers\Api\ClinicController::class, 'update']);
    Route::post('clinic/add/permission', [App\Http\Controllers\Api\ClinicController::class, 'allowUser']);
    Route::post('clinic/delete/permission', [App\Http\Controllers\Api\ClinicController::class, 'removeUser']);
    Route::post('clinic/send/exam', [App\Http\Controllers\Api\ClinicController::class, 'sendExam']);
    Route::post('register/user', [App\Http\Controllers\Api\AuthController::class, 'register']);

    /* Exams */
    Route::get('exams', [App\Http\Controllers\Api\ExamsController::class, 'list']);



});