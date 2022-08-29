@extends('home')

@section('order')
    <div class="w-full  min-h-screen flex flex-col gap-5 px-10 py-2">
        {{-- Full Order  --}}
        <h1>Orders: {{ count($order)}}</h1>
        @foreach($order as $orders)
        <div class="w-full border border-gray-200 rounded-lg bg-gray-100 h-auto py-10 shadow-xl">
                <div class="flex flex-col gap-4">
                    <div class="flex flex-row items-center justify-between px-3">
                        <h1 class="text-lg font-semibold ">{{$orders->name}}</h1>
                        <a href="tel:+251936657001" class="hover:underline hover:font-semibold">{{$orders->phone_number}}</a>
                        <a href="mailto:nattynengeda@gmail.com" class="hover:underline hover:font-semibold">{{$orders->email}}</a>
                    </div>
                    <hr class="w-2/3 m-auto">
                    <div class="px-2 flex flex-col gap-3">
                        <h1 class="text-lg "><span class="font-semibold">Product: </span> {{$orders->product}}</h1>
                        <div class="w-full h-auto  border-gray-100">
                            <p>{{$orders->desc}}</p>
                        </div>
                        <div class="flex flex-row gap-4">
                            <button class="px-3 py-2 bg-slate-600 text-lg text-white hover:bg-slate-700 hover:shadow-xl">Accept</button>
                            <form method="POST" action="{{ route('deleteOrder',['id' => $orders->id])}}" >
                                @csrf  

                                <button class="px-3 py-2 bg-red-600 text-lg text-white hover:bg-red-700 hover:shadow-xl">Decline</button>
                                @method('DELETE')
                            </form>
                        </div>
                    </div>
                </div>
        </div>
        @endforeach
        

    </div>

@endsection