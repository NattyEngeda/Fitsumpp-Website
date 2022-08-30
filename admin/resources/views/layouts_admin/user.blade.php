@extends('home')

@section('user')

    <div class="w-full  min-h-screen flex flex-col gap-5 px-10">
        {{-- Full Feedback --}}
        <h1>Messages: {{ count($feed)}}</h1>
        @foreach ($feed as $feeds)
            <div class=" relative w-full border border-gray-200 rounded-lg bg-gray-100 h-auto py-10 shadow-xl">
                <div class="flex flex-col gap-4">
                    <div class="flex flex-row items-center justify-between px-3">
                        <h1 class="text-lg font-semibold ">{{$feeds->name}}</h1>
                        <a href="tel:+251936657001" class="hover:underline hover:font-semibold"></a>
                        <a href="mailto:nattynengeda@gmail.com" class="hover:underline hover:font-semibold">{{$feeds->email}}</a>
                    </div>
                    <hr class="w-2/3 m-auto">
                    <div class="px-2 flex flex-col gap-3">
                        <h1 class="text-lg font-semibold">Message:</h1>
                        <div class="w-full h-auto  border-gray-100">
                            <p>{{$feeds->message}}</p>
                        </div>
                        <div class="flex flex-row gap-4">
                            <form method="POST" action="{{ route('readFeed', ['id' => $feeds->id])}}">
                                @csrf
                                <button class="px-3 py-2 bg-slate-600 text-lg text-white hover:bg-slate-700 hover:shadow-xl">Read</button>
                                
                            </form>
                            <form method="POST" action="{{ route('deleteFeed',['id' => $feeds->id])}}" >
                                @csrf  
                                <button class="px-3 py-2 bg-red-600 text-lg text-white hover:bg-red-700 hover:shadow-xl">Delete</button>
                                @method('DELETE')
                            </form>
                        </div>
                    </div>
                </div>
                <div class="absolute top-0 right-0">
                    @if($feeds->seen == true)
                    <p class="px-2 py-2 bg-green-600 text-md text-white">Seen</p>
                    @else
                    <p class="px-2 py-2 bg-red-600 text-md text-white">New</p>
                    @endif
                </div>
            </div>
        @endforeach
       
    </div>
@endsection