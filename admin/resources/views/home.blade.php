@extends('layouts.app')

@section('content')
<div class="container ">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card ">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body min-h-screen">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <div class="flex flex-row gap-2">
                        <x-sidebar/>
                        <div>
                                @yield('user')
                                @yield('image')
                                @yield('order')
                        </div>
                    </div>
                  
                </div>

            </div>
        </div>
    </div>
</div>
@endsection
