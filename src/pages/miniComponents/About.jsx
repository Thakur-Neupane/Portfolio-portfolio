import React, { useEffect, useState } from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src="/me.jpg"
              alt="avatar"
              className="bg-white p-2 sm:p-4 rotate-[25deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              magnam rerum voluptas amet impedit tempora repudiandae est
              laudantium sapiente aut temporibus illo, ullam officia adipisci
              placeat corporis veritatis deserunt minima quas non alias enim
              debitis? Quos doloribus, ea temporibus qui dolor, iure esse culpa
              accusantium, ad odio doloremque? Illum, laudantium?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae ex nobis, quas hic necessitatibus deleniti natus
              dolorum inventore possimus illo doloribus eveniet velit temporibus
              odio aut dolore. Itaque, aliquid provident.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          mollitia neque quis dolores quibusdam quo quam dolore veritatis eius
          harum.
        </p>
      </div>
    </div>
  );
};

export default About;
