<script setup>
import { ref } from 'vue';

let dark = ref(false)


const move = (target) =>  {

  const el = document.getElementById(target);

  if (el) {
    el.scrollIntoView();
  }
}


let projects = ref([

    {
    name:'epic games clone',
    disc:'website for buying all kind of stuff',
    img:'https://images2.imgbox.com/4c/3f/CJKGIM7j_o.png',
    link:'https://6415efedbd844e74a1c2df62--symphonious-fudge-8f3911.netlify.app/',
    },   
    {
    name:'shoping cart',
    disc:'website for buying all kind of stuff',
    img:'https://images2.imgbox.com/6c/db/VJ9Lyi9Q_o.png',
    link:'https://github.com/od317/shopingcart/projects?query=is%3Aopen',
    },   
    {
    name:'shoping cart',
    disc:'website for buying all kind of stuff',
    img:'https://images2.imgbox.com/6c/db/VJ9Lyi9Q_o.png',
    link:'https://github.com/od317/shopingcart/projects?query=is%3Aopen',
    }
])


</script>

<template>


<div :class="`bg-dark2 `">

  <div class=" backdrop-blur-sm z-50 text-white h-[3.5rem]  w-full flex items-center gap-[10%] justify-between fixed top-[0]
                  py-[1rem] 
                  ">
    
        <div class="flex w-[100%]  md:pl-[0%] items-center justify-center gap-[10%]
                     text-dark3">          
            <button @click="move('about')">about</button>
            <button @click="move('projects')">projects</button>
            <button @click="move('contact')">contact</button>
        </div>

   </div>




     <section  class="pt-[3.5rem] bg-dark1 text-white md:px-[10%]">


        <div class="flex flex-col md:flex-row h-[30rem]   transition-all duration-150
                    items-center justify-center">
        


                <div class="px-[1rem] text-center">
                        <div class=" text-[2rem] pl-[.5rem] text-center">
                            Hi,im <label class="text-blue1" >osama drbas</label> | Software Engineer 
                        </div>

                        <label class="flex pl-[.5rem] text-[2rem] text-blue1 justify-center items-center gap-[10%] my-[.5rem] " for="">

                            <button class=""><ion-icon name="logo-linkedin"></ion-icon></button>
                            <button class=""><ion-icon name="logo-github"></ion-icon></button>

                        </label>

                        <label class="mt-[.5rem] px-[.5rem]" for="">
                            I love exploring and creating  I'm a lifelong learner and self taught developer  
                        </label>

                </div>
                
                <div class="hidden md:flex items-center justify-center">
                    <img class="h-[50%] w-[60%] " src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454628-2918517.png" alt="">
                </div>


        </div>



     </section>





     <section id="about" class="mt-[10%] px-[10%]">

       <div class="flex flex-col md:flex-row">


        <div class="flex flex-col">

            <label class="text-[1.8rem] border-b-4 border-dark1 w-fit mb-[1rem] " for="">My skills:</label>
                  
            <div class="flex flex-wrap gap-[.5rem]">

                <label class="bg-dark3 text-white p-[.5rem] rounded-sm" for="">Html</label>
                <label class="bg-dark3 text-white p-[.5rem] rounded-sm" for="">Css</label>
                <label class="bg-dark3 text-white p-[.5rem] rounded-sm" for="">Java Script</label>
                <label class="bg-dark3 text-white p-[.5rem] rounded-sm" for="">TailwindCss</label>
                <label class="bg-dark3 text-white p-[.5rem] rounded-sm" for="">Bootstrap</label>
                <label class="bg-dark3 text-white p-[.5rem] rounded-sm" for="">Vue.Js</label>
                <label class="bg-dark3 text-white p-[.5rem] rounded-sm" for="">NodeJs</label>
                <label class="bg-dark3 text-white p-[.5rem] rounded-sm" for="">ExpressJs</label>
                <label class="bg-dark3 text-white p-[.5rem] rounded-sm" for="">Mysql</label>


            </div>

        </div>


        <div class="flex flex-col mt-[1.5rem] md:mt-[0] md:ml-[2rem] md:w-[65%]">
            <label class="text-dark1 text-[1.3rem] font-bold" for="">I love dishonoured 2</label>
            <label for="">recently i have finshed derisndracha with my friend laith(john wick ali rachi) wich is the 
                biggest achivment in my life and now we are working on gorod krovi wich will take at leaset 2 months
                i hope you pray for me cause im praying some one is hoping for me and this is who iam
                have a nice day son
            </label>
        </div>


    </div>

     </section>


     <section id="projects" class="mt-[10%] px-[10%]">


        <div class="flex flex-col">

            <label class="text-[1.8rem] border-b-4 border-dark1 w-fit mb-[1rem] " for="">Projects:</label>

            <div class="flex flex-col md:flex-row md:flex-wrap gap-[4%] mt-[1rem]">

              <div v-for="p in projects" class="md:w-[46%] mt-[2rem]">  
                <label class="text-[1.2rem]" for="">{{p.name}}</label>

                    <div class="flex flex-col mt-[1.5rem] w-fit">

                        <div class="flex flex-col w-fit">
                            <div class="">
        
                                <img class="rounded-sm" :src="p.img" alt="">

                            </div>

                            <div class=" flex flex-col justify-between mt-[1rem] md:mt-[0rem]">
                      
                                <label class="" for="">website for shoping and buying all kind of stuff</label>



                                <div class="flex flex-row w-fit mt-[.8rem]">
                                    <a :href="p.link" class="text-dark2 bg-dark3 rounded-sm p-[.5rem]" >Visit website</a>
                                </div>

                            </div>



                    </div>

                </div>

            </div>

            


        </div>

        </div>



     </section>


      <section id="contact" class="mt-[10%] px-[10%] mb-[10%]">
        
        <div class="flex flex-col">
            <label class="text-[1.8rem] border-b-4 border-dark1 w-fit mb-[1rem] " for="">Contact Me:</label>
            <div class="flex flex-col md:flex-row gap-[4rem]">

                    <div class=" flex flex-col rounded-sm md:w-[50%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">

                         <div class="flex flex-col items-center rounded-t-md text-dark3 justify-center text-[6rem] py-[4rem]">

                            <ion-icon  name="mail"></ion-icon>
                         </div>

                         <div class="bg-dark1 p-[1.5rem] text-dark2 rounded-b-md">
                            contact by gmail: <br>
                            osamadrbas31@gmail.com
                         </div>


                    </div>




                        <div class="  flex flex-col rounded-sm md:w-[50%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">

                         <div class="flex flex-col items-center rounded-t-md text-dark3 justify-center text-[6rem] py-[4rem]">

                            <ion-icon name="call"></ion-icon>
                         </div>

                         <div class="bg-dark1 p-[1.5rem] text-dark2 rounded-b-md">
                            contact by phone:<br>
                            +963994307669
                         </div>


                    </div>



            </div>
        </div>


      </section>  
   
      

      <section class="w-full p-[1.5rem] bg-dark3 text-dark2 flex flex-col md:flex-row px-[10%]">

        <div class="flex flex-col">
                <label class="text-[1.4rem]" for="">osama drbas</label>
                <label class="mt-[.5rem] w-[50%] text-[.8rem] text-gray-400" for=""> @ 2023, Built and designed by osama drbas</label>
        </div>

        <div class="flex flex-col  mt-[1.5rem]">
            <label class="text-[1.2rem]" for="">Links</label>
            <div class="flex gap-[5%] flex-row text-[2rem] text-dark1">
                <button class=""><ion-icon name="logo-linkedin"></ion-icon></button>
                <button class=""><ion-icon name="logo-github"></ion-icon></button>
            </div>
        </div>

        <div>


        </div>

      </section>


     

</div>

</template>

<style>

</style>