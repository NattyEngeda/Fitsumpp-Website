<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Route::get('/home/user',[MainController::class, 'user']);
Route::get('/home/image',[MainController::class, 'image']); 
Route::get('/home/order',[MainController::class, 'order']);

Route::post('/home/order/accept/{id}', [MainController::class, 'orderAccept'])->name('acceptOrder');
Route::delete('/home/order/delete/{id}', [MainController::class, 'orderDelete'])->name('deleteOrder');

Route::post('/home/feed/read/{id}', [MainController::class, 'feedRead'])->name('readFeed');
Route::delete('/home/feed/delete/{id}', [MainController::class, 'feedDelete'])->name('deleteFeed');

Route::post('/home/uploadImage', [MainController::class, 'uploadImage']);

Auth::routes();
// Auth::routes(['register' => false]);


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
