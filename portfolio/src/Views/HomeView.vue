<template>
    <div class="home">
        <div class="bg-obsidian-700 h-screen w-screen grid grid-cols-10 grid-rows-10 gap-4">
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
                        <div class="col-span-3 row-span-7 bg-obsidian-800">
                            <div class="flex items-start justify-center justify-items-center h-full">
                                <div class="flex items-center justify-center justify-items-center flex-col my-4 w-full">
                                    <ul class="space-y-4 text-start">
                                        <li class=" transition-transform hover:underline hover:font-bold hover:scale-110 decoration-sky-400 decoration-2 duration-200 delay-100 ease-in-out"><router-link to="/">Home</router-link></li>
                                        <li class=" transition-transform hover:underline hover:font-bold hover:scale-110 decoration-sky-400 decoration-2 duration-200 delay-100 ease-in-out"><router-link to="/">Experience</router-link></li>
                                        <li class=" transition-transform hover:underline hover:font-bold hover:scale-110 decoration-sky-400 decoration-2 duration-200 delay-100 ease-in-out"><router-link to="/about">About me</router-link></li>
                                        <li class=" transition-transform hover:underline hover:font-bold hover:scale-110 decoration-sky-400 decoration-2 duration-200 delay-100 ease-in-out"><router-link to="/">Projects</router-link></li>
                                        <li class=" transition-transform hover:underline hover:font-bold hover:scale-110 decoration-sky-400 decoration-2 duration-200 delay-100 ease-in-out"><router-link to="/">Contact</router-link></li>
                                    </ul>
                                    <div class="flex items-center justify-center justify-items-center my-4 space-y-4">
                                        <button type="button" class="text-obsidian-100 bg-sky-800 hover:bg-sky-900 hover:text-lg focus:ring-4 focus:ring-sky-800  rounded-lg px-4 py-2.5 me-2 mb-2 text-md transition-transform decoration-2 duration-200 delay-100 ease-in-out">Language</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </nav>
            </div>
            <div class="col-span-9 row-span-10 bg-obsidian-700 text-obsidian-100">
                <p>hello</p>
            </div>  
        </div>
    </div>
</template>
<style>
@import "tailwindcss";
</style>