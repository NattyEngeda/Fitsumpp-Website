@extends('home')

@section('user')
    <div class="w-full  min-h-screen flex flex-col gap-5 px-10">
        <div class="w-full border border-gray-200 rounded-lg bg-gray-100 h-auto py-10 shadow-xl">
            <div class="flex flex-col gap-4">
                <div class="flex flex-row items-center justify-between px-3">
                    <h1 class="text-lg font-semibold ">Natnael Engeda</h1>
                    <a href="tel:+251936657001" class="hover:underline hover:font-semibold">+251936657001</a>
                    <a href="mailto:nattynengeda@gmail.com" class="hover:underline hover:font-semibold">nattynengeda@gmail.com</a>
                </div>
                <hr class="w-2/3 m-auto">
                <div class="px-2 flex flex-col gap-3">
                    <h1 class="text-lg font-semibold">Message:</h1>
                    <div class="w-full h-auto  border-gray-100">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nihil dolores, possimus deleniti optio officiis vero debitis doloribus quaerat vel at rerum molestiae non culpa voluptate modi eaque molestias nobis?</p>
                    </div>
                    <div class="flex flex-row gap-4">
                        <button class="px-3 py-2 bg-slate-600 text-lg text-white hover:bg-slate-700 hover:shadow-xl">Read</button>
                    </div>
                </div>
            </div>
    </div>
    </div>
@endsection