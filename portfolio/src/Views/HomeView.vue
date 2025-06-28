<template>
    <div class="home">
        <div class="bg-obsidian-600 h-screen w-screen grid grid-cols-10 grid-rows-10 gap-4">
            <div class="col-span-1 row-span-10 bg-dark-400">
                <nav class="h-full bg-obsidian-900 grid grid-cols-3 grid-rows-5" aria-label="Main sidebar">
                        <div class="col-span-3 row-span-1 bg-obsidian-900  items-center">
                            <div class="flex items-center justify-center justify-items-center flex-col h-full">
                                <div class="flex items-start justify-center justify-items-center flex-col">
                                    <router-link to="/"><h3 class="text-3xl font-bold text-obsidian-100 hover:text-sky-400 hover:font-black transition-transform duration-200 delay-100 ease-in-out ">Sitar</h3></router-link>
                                    <h4 class="text-xl font-regular text-obsidian-100">Portfolio</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-3 row-span-3 bg-obsidian-800">
                            <div class="flex items-center justify-center justify-items-center h-full">
                                <div class="flex items-start justify-center justify-items-center flex-col">
                                    <ul class="space-y-4">
                                        <li class=" transition-transform hover:underline hover:font-bold hover:scale-110 decoration-sky-400 decoration-2 duration-200 delay-100 ease-in-out"><a href="#">Home</a></li>
                                        <li class=" transition-transform hover:underline hover:font-bold hover:scale-110 decoration-sky-400 decoration-2 duration-200 delay-100 ease-in-out"><a href="#">Experience</a></li>
                                        <li class=" transition-transform hover:underline hover:font-bold hover:scale-110 decoration-sky-400 decoration-2 duration-200 delay-100 ease-in-out"><a href="#">About me</a></li>
                                        <li class=" transition-transform hover:underline hover:font-bold hover:scale-110 decoration-sky-400 decoration-2 duration-200 delay-100 ease-in-out"><a href="#">Projects</a></li>
                                        <li class=" transition-transform hover:underline hover:font-bold hover:scale-110 decoration-sky-400 decoration-2 duration-200 delay-100 ease-in-out"><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-3 row-span-1 bg-obsidian-900">
                            <div class="flex items-center justify-center flex-col h-full">
                                <div class="flex items-start justify-center flex-col">
                                    <ul class="space-y-4 text-obsidian-100">
                                        <li>
                                            <button class="flex items-center space-x-2 px-4 py-2 bg-obsidian-800 hover:bg-sky-800 hover:scale-105 rounded-lg transition duration-200 delay-105 ease-in-out focus:outline-2 focus:outline-offset-2 focus:outline-sky-800 focus-visible:ring" type="button" @click="$emit('toggle-dark-mode')" aria-pressed="true">
                                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
                                                </svg>
                                                <span>Dark mode</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button class="flex items-center space-x-2 px-4 py-2  bg-obsidian-800 hover:bg-sky-800 hover:scale-105 rounded-lg transition duration-200 delay-105 ease-in-out  focus:outline-2 focus:outline-offset-2 focus:outline-sky-800 focus-visible:ring" type="button" @click="$emit('toggle-language')" aria-pressed="true">
                                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z" clip-rule="evenodd" />
                                                </svg>
                                                <span>English</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </nav>
            </div>
            <div class="col-span-9 row-span-10 bg-red-300 text-black">
                <p>hello</p>
            </div>  
        </div>
    </div>
</template>
<style>
@import "tailwindcss";
</style>