<script setup>
import { ref , onMounted } from 'vue';


let dark = ref(false)

onMounted(()=>{

let o =  new IntersectionObserver(entries=>{

    entries.forEach(e=>{
        if(e.isIntersecting){
            e.target.classList.add('show')
        }
    })

})

let o2 = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            e.target.classList.add('s2')
        }
    })
})

document.querySelectorAll('.sec').forEach(e=>{
    o.observe(e)
})

document.querySelectorAll('.first').forEach(e=>{
    o2.observe(e)
})
})



const move = (target) =>  {

  const el = document.getElementById(target);

  if (el) {
    el.scrollIntoView({behavior:'smooth'});
  }
}


let projects = ref([
    {
    name:'cinema website',
    disc:'cinema',
    img:'https://images2.imgbox.com/9b/9d/20EgBqnK_o.png',
    link:'https://cinemaweb.netlify.app/',
    },
    {
    name:'epic games clone',
    disc:'website for buying all kind of stuff',
    img:'https://images2.imgbox.com/4c/3f/CJKGIM7j_o.png',
    link:'https://epicgamesclonevue.netlify.app/',
    },   
    {
    name:'shoping cart',
    disc:'website for buying all kind of stuff',
    img:'https://images2.imgbox.com/6c/db/VJ9Lyi9Q_o.png',
    link:'https://simplestore123.netlify.app/',
    },   
    {
        name:'weather app',
        disc:'weather',
        img:'https://images2.imgbox.com/0f/19/DSHRuvx8_o.png',
        link:'https://od317.github.io/weather_web_page/'
    }
])

let icons = ref([
    {
      src:'../public/svgs/icons8-html-5-48.png'
    },
    {
      src:'../public/svgs/icons8-javascript-48.png'
    },
    {
      src:'../public/svgs/icons8-css3-48.png'
    },
    {
      src:'../public/svgs/icons8-vue-js-48.png'
    },
    {
      src:'../public/svgs/icons8-tailwindcss-48.png'
    },
    {
      src:'../public/svgs/icons8-bootstrap-48.png'
    },
    {
      src:'../public/svgs/icons8-git-48.png'
    },
    {
      src:'../public/svgs/icons8-node-js-48.png'
    },
    {
      src:'../public/svgs/icons8-express-js-48.png'
    },
    {
      src:'../public/svgs/icons8-my-sql-48.png'
    },
])

</script>

<template>

<div :class="` ${ dark? 'dark':'' } `">
     <div :class="`bg-light2 dark:bg-dark2 transition-all duration-300 `">

    <div class=" backdrop-blur-sm z-50 h-[10%] text-white  w-full flex items-center gap-[10%] justify-between fixed top-[0]
                    py-[1rem] 
                    ">
        
            <div class="flex w-[100%]  md:pl-[0%] items-center justify-center gap-[10%]
                        text-blue1 dark:text-blue2 transition-all duration-300">          
                <button @click="move('about')">about</button>
                <button @click="move('projects')">projects</button>
                <button @click="move('contact')">contact</button>
                <button @click="dark=!dark">dark</button>
            </div>

    </div>




        <section  class=" pt-[3%]  bg-light1 dark:bg-dark1 transition-all duration-300 text-white md:px-[10%] relative">


            <div class=" first h1 flex flex-col md:flex-row h-[30rem]  
                        items-center justify-center">
            


                    <div class="px-[1rem] text-center">
                            <div class=" text-[2rem] pl-[.5rem] text-center">
                                Hi,im <label class="text-blue1 dark:text-blue2 transition-all duration-300" >osama drbas</label> | Front End developer
                            </div>

                            <label class="flex pl-[.5rem] text-[2rem] text-blue1 dark:text-blue2 transition-all duration-300 justify-center items-center gap-[10%] my-[.5rem] " for="">

                                <button class=""><ion-icon name="logo-linkedin"></ion-icon></button>
                                <button class=""><ion-icon name="logo-github"></ion-icon></button>

                            </label>

                            <label class="mt-[.5rem] px-[.5rem]" for="">
                                I love exploring and creating stuff,  I'm a lifelong learner and self taught developer  
                            </label>

                    </div>
                    
                    <div class="hidden md:flex items-center justify-center">
                        <img class="h-[50%] w-[60%] " src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454628-2918517.png" alt="">
                    </div>


            </div>



        </section>





        <section id="about" class="  flex items-start justify-center px-[10%] pt-[10%]">

        <div class="flex flex-col   md:flex-row sec h">


            <div class="flex flex-col md:w-[50%]">

                <label class="text-[1.8rem] border-b-4 border-light1 dark:border-dark1 dark:text-white transition-all duration-300 w-fit mb-[1rem] " for="">My skills :</label>
                    
                <div class="flex flex-wrap gap-[.5rem] w-full ">
                    <div v-for="m in icons" class=" relative pb-[12%] w-[12%]">
                      <img  class=" absolute w-full h-full" :src="m.src" alt="">
                    </div>
                <!--
                    <label class="bg-light3 dark:bg-dark3 dark:text-black transition-all duration-300 text-white p-[.5rem] rounded-sm" for="">Html</label>
                    <label class="bg-light3 dark:bg-dark3 dark:text-black transition-all duration-300 text-white p-[.5rem] rounded-sm" for="">Css</label>
                    <label class="bg-light3 dark:bg-dark3 dark:text-black transition-all duration-300 text-white p-[.5rem] rounded-sm" for="">Java Script</label>
                    <label class="bg-light3 dark:bg-dark3 dark:text-black transition-all duration-300 text-white p-[.5rem] rounded-sm" for="">TailwindCss</label>
                    <label class="bg-light3 dark:bg-dark3 dark:text-black transition-all duration-300 text-white p-[.5rem] rounded-sm" for="">Bootstrap</label>
                    <label class="bg-light3 dark:bg-dark3 dark:text-black transition-all duration-300 text-white p-[.5rem] rounded-sm" for="">Vue.Js</label>
                    <label class="bg-light3 dark:bg-dark3 dark:text-black transition-all duration-300 text-white p-[.5rem] rounded-sm" for="">NodeJs</label>
                    <label class="bg-light3 dark:bg-dark3 dark:text-black transition-all duration-300 text-white p-[.5rem] rounded-sm" for="">ExpressJs</label>
                    <label class="bg-light3 dark:bg-dark3 dark:text-black transition-all duration-300 text-white p-[.5rem] rounded-sm" for="">Mysql</label>
                -->

                </div>

            </div>


            <div class="flex flex-col mt-[1.5rem] md:mt-[0] md:ml-[2rem] md:w-[65%] dark:text-white transition-all duration-300">
                <label class="text-light1 dark:text-dark1 transition-all duration-300 text-[1.3rem] font-bold " for="">I love dishonoured 2</label>
                <label for="">recently i have finshed derisndracha with my friend laith(john wick ali rachi) wich is the 
                    biggest achivment in my life and now we are working on gorod krovi wich will take at leaset 2 months
                    i hope you pray for me cause im praying some one is hoping for me and this is who iam
                    have a nice day son
                </label>
            </div>


        </div>

        </section>


        <section id="projects" class=" flex items-start justify-center pt-[15%] px-[10%]  ">


            <div class="flex flex-col w-full sec h ">

                <label class="text-[1.8rem] border-b-4 border-light1 dark:border-dark1 dark:text-white transition-all duration-300 w-fit mb-[1rem] " for="">Projects :</label>

                <div class="flex flex-col md:flex-row md:flex-wrap gap-[4%] mt-[1rem]">

                <div v-for="p in projects" class="md:w-[46%] mt-[2rem] dark:text-white transition-all duration-300">  
                
                    <label class="text-[1.2rem] " for="">{{p.name}}</label>

                        <div class="flex flex-col mt-[1.5rem] w-full">

                            <div class="flex flex-col w-full">
        
                                <div class=" relative pb-[50%] w-full">
            
                                    <img class="absolute w-full h-full rounded-sm shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]" :src="p.img" alt="">

                                </div>

                                <div class=" flex flex-col justify-between mt-[1rem] md:mt-[0rem]">
                        
                                    <label class="" for="">{{ p.disc }}</label>



                                    <div class="flex flex-row w-fit mt-[.8rem]">
                                        <a :href="p.link" class="text-light2 bg-light3 dark:bg-dark3 dark:text-black transition-all duration-300 rounded-sm p-[.5rem]" >Visit website</a>
                                    </div>

                                </div>



                        </div>

                    </div>

                </div>

                


            </div>

            </div>



        </section>


        <section id="contact" class="  flex items-start justify-center  pt-[10%] px-[10%] mb-[10%]  ">
            
            <div  class="flex flex-col w-full sec h">
                <label class="text-[1.8rem] border-b-4 border-light1 dark:border-dark1 dark:text-white transition-all duration-300  w-fit mb-[1rem] " for="">Contact Me :</label>
                <div  class="flex flex-col md:flex-row gap-[4rem]">

                        <div class=" flex flex-col rounded-sm md:w-[50%] rounded-b-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-300 dark:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">

                            <div class="flex flex-col items-center rounded-t-md  text-light3 dark:text-dark3  transition-all duration-300 justify-center text-[6rem] py-[4rem]">

                                <ion-icon  name="mail"></ion-icon>
                            </div>

                            <div class="bg-light1 dark:bg-dark1 transition-all duration-300 p-[1.5rem] text-light2 rounded-b-md">
                                contact by gmail: <br>
                                osamadrbas31@gmail.com
                            </div>


                        </div>




                            <div class="  flex flex-col rounded-sm md:w-[50%] rounded-b-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-300 dark:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">

                            <div class="flex flex-col items-center rounded-t-md text-light3 dark:text-dark3  transition-all duration-300 justify-center text-[6rem] py-[4rem]">

                                <ion-icon name="call"></ion-icon>
                            </div>

                            <div class="bg-light1 dark:bg-dark1 transition-all duration-300 p-[1.5rem] text-light2 rounded-b-md">
                                contact by phone:<br>
                                +963994307669
                            </div>


                        </div>



                </div>
            </div>


        </section>  
    
        

        <section class="w-full p-[1.5rem] bg-light3 text-light2 flex flex-col md:flex-row px-[10%]  transition-all duration-300 dark:text-white">

            <div class="flex flex-col">
                    <label class="text-[1.4rem]" for="">osama drbas</label>
                    <label class="mt-[.5rem] w-[50%] text-[.8rem] text-gray-400" for=""> @ 2023, Built   osama drbas</label>
            </div>

            <div class="flex flex-col  mt-[1.5rem]">
                <label class="text-[1.2rem]" for="">Links</label>
                <div class="flex gap-[5%] flex-row text-[2rem] text-light1 transition-all duration-300 dark:text-dark1">
                    <button class=""><ion-icon name="logo-linkedin"></ion-icon></button>
                    <button class=""><ion-icon name="logo-github"></ion-icon></button>
                </div>
            </div>

            <div>


            </div>

        </section>


        

    
    </div>
</div>
</template>

<style>

.h{
    opacity: 0;
    transform: translateX(-100%);
    filter: blur(5px);
    transition: all 1s;
}

.show{
    opacity: 100;
    transform: translateX(0%);
    filter: blur(0);
}


.h1{
    opacity: 0;
    filter: blur(5px);
    transition: all 1s;
}

.s2{
    opacity: 100;
    filter: blur(0);
}


</style>