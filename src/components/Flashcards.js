import React, { useState } from 'react'

export default function Flashcards() {


  return (

    <div>
        <ul >
            <div class="grid grid-cols-2 gap-12 justify-center content-around">
                <div class="flex justify-center">
                    <li class="">
                        <div class="flex min-h-screen items-center justify-center">
                            <div class="group h-96 w-96 [perspective:1000px]">
                                <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    <div class="absolute text-center text-6xl flex items-center justify-center inset-0 bg-slate-500 h-full w-full rounded-xl">
                                    <h1>element</h1>
                                    </div>
                                    <div class="absolute flex items-center justify-center text-5xl inset-0 h-full w-full rounded-xl bg-black/100 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                                    <h1>down into simpler substances</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
                <div class="flex justify-center">
                    <li>
                        <div class="flex min-h-screen items-center justify-center">
                            <div class="group h-96 w-96 [perspective:1000px]">
                                <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    <div class="absolute text-center text-6xl flex items-center justify-center inset-0 bg-slate-500 h-full w-full rounded-xl">
                                    <h1>atom</h1>
                                    </div>
                                    <div class="absolute flex items-center justify-center text-5xl inset-0 h-full w-full rounded-xl bg-black/100 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                                    <h1>smallest part of an element that can be identified as that element</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
                <div class="flex justify-center">
                    <li>
                        <div class="flex min-h-screen items-center justify-center">
                            <div class="group h-96 w-96 [perspective:1000px]">
                                <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    <div class="absolute text-center text-6xl flex items-center justify-center inset-0 bg-slate-500 h-full w-full rounded-xl">
                                    <h1>nucleus</h1>
                                    </div>
                                    <div class="absolute flex items-center justify-center text-5xl inset-0 h-full w-full rounded-xl bg-black/100 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                                    <h1>center, or core, of an atom (where the protons and neutrons are located)</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
                <div class="flex justify-center">
                    <li>
                        <div class="flex min-h-screen items-center justify-center">
                            <div class="group h-96 w-96 [perspective:1000px]">
                                <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    <div class="absolute text-center text-6xl flex items-center justify-center inset-0 bg-slate-500 h-full w-full rounded-xl">
                                    <h1>proton</h1>
                                    </div>
                                    <div class="absolute flex items-center justify-center text-3xl inset-0 h-full w-full rounded-xl bg-black/100 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                                    <h1>particle that has a positive charge - located in the nucleus of an atom. You can figure out the number of protons by looking at the atomic number of an element</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
        </ul>        
    </div>
  
  )
}
