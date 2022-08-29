<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function user(){
        return view('layouts_admin.user');
    }

    public function image(){
        return view('layouts_admin.image');
    }

    public function order(){
        $order = Order::all();

        return view('layouts_admin.order', ['order' => $order]);
    }
}
