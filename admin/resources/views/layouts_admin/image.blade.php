@extends('home')

@section('image')
    <div class="w-full  min-h-screen flex flex-col gap-5 px-10">
        <section class="overflow-hidden text-gray-700 ">
            <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div class="py-2 flex flex-col gap-2">
                    <button 
                    class="px-4 py-3 w-44 bg-slate-500 text-lg text-white hover:bg-slate-600 hover:shadow-xl"
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                    >
                        Add Image
                    </button>
                    <hr>
                    <div>
                        
                    <!-- Modal -->
                    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog relative w-auto pointer-events-none">
                    <div
                    class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                    class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Add Image</h5>
                    <button type="button"
                        class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body relative p-4">
                        {{-- Image Name --}}
                        <div class="mb-3 xl:w-96">
                            <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
                              >Name</label
                            >
                            <input
                              type="text"
                              class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                              "
                              id="exampleFormControlInput1"
                              placeholder="Name"
                            />
                          </div>
                          {{-- Image Description --}}
                          <div class="mb-3 xl:w-96">
                            <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
                              >Description</label
                            >
                            <input
                              type="text"
                              class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                              "
                              id="exampleFormControlInput1"
                              placeholder="Description"
                            />
                          </div>

                          {{-- Width --}}
                          <div class="mb-3 xl:w-96">
                            <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
                              >Width</label
                            >
                            <input
                              type="text"
                              class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                              "
                              id="exampleFormControlInput1"
                              placeholder="2"
                            />
                          </div>
                          
                          {{-- Height --}}

                          <div class="mb-3 xl:w-96">
                            <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
                              >Height</label
                            >
                            <input
                              type="text"
                              class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                              "
                              id="exampleFormControlInput1"
                              placeholder="1"
                            />
                          </div>




                    </div>
                    <div
                    class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button type="button" class="px-6
                        py-2.5
                        bg-purple-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-purple-700 hover:shadow-lg
                        focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-purple-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out
                    ml-1">Add</button>
                    </div>
                    </div>
                    </div>
                    </div>          
                    </div>
                </div>
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp">
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp">
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp">
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp">
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp">
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp">
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                    <div class="w-full p-1 md:p-2">
                      <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp">
                    </div>
                  </div>                <div class="flex flex-wrap w-1/3">
                    <div class="w-full p-1 md:p-2">
                      <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp">
                    </div>
                  </div>                <div class="flex flex-wrap w-1/3">
                    <div class="w-full p-1 md:p-2">
                      <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp">
                    </div>
                  </div>
              </div>
            </div>
          </section>    
    </div>

@endsection