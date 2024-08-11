<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpeechController;

Route::get('/', function () {
    return view('welcome');
});


Route::post('/send-autotext', [SpeechController::class, 'receiveAutotext']);
