<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use App\Models\Image;
use App\Models\Order;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;


class MainController extends Controller
{
    public function user(){
        $feed = Feedback::query()
                        ->orderBy('seen','asc')
                        ->get();


        return view('layouts_admin.user',['feed' => $feed]);
    }
    public function feedRead($id){
        $order = Feedback::findOrFail($id);
        $update = DB::table('feedback')
                    ->where('id', $id)
                    ->update(['seen'=> true]);

        return redirect('/home/user');
    }
    public function feedDelete($id){

        Feedback::where('id', $id)->firstOrFail()->delete();
        
        return redirect('/home/user');
    }
    public function image(){

        return view('layouts_admin.image');
    }

    public function order(){
        $order = Order::query()
                    ->orderBy('seen', 'asc')
                    ->get();

        return view('layouts_admin.order', ['order' => $order]);
    }
    public function orderAccept(Request $request, $id){
            $order = Order::findOrFail($id);
            $update = DB::table('orders')
                        ->where('id', $id)
                        ->update(['seen'=> true]);

            return redirect('/home/order');

    }
    public function orderDelete($id){

        Order::where('id', $id)->firstOrFail()->delete();

        return redirect('/home/order');
        
    }
    public function uploadImage(Request $request){

        // $valiator = $request->validate([
        //     'name' => 'required',
        //     'image' => 'required',
        //     'desc' => 'required',
        //     'width' => 'required', 
        //     'height' => 'required',
        // ]);

        // $imageName = time().'-'.$request->name.'.'.$request->image->extension();

        // Image::create([
        //     'name' => request('name'),
        //     'desc' => request('desc'),
        //     'file_location' => $imageName,
        //     'width' => request('width'),
        //     'height' => request('height')
        // ]);
        // $request->image->move(public_path('imgs'),$imageName);

        return redirect('/home/image');
    }

}
