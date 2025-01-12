import React from "react";
import Container from "@/components/Container";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";

export default function FreeCodeCamp() {
  return (
    <Container
      title="Blogs at FreeCodeCamp – Manu Arora"
      description="I've been writing articles for freeCodeCamp - Check out my latest articles here."
      image="/avatar.jpg"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Free Code Camp
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I’ve been writing articles for{" "}
          <a href="https://freecodecamp.com">freeCodeCamp</a> where I generally
          write about projects and technical learnings. Some of the articles
          that I wrote are down below.
        </h2>
        <div className="flex flex-col items-center sm:flex-row sm:space-x-8 w-full">
          <Project
            link="https://www.freecodecamp.org/news/how-to-build-react-based-code-editor/"
            title="How to Build a Code Editor with React that Compiles and Executes in 40+ Languages"
            image="freecodecamp/codeeditor.png"
            date="May 25, 2022"
          />
          <Project
            link="https://www.freecodecamp.org/news/integrate-a-payment-gateway-in-next-js-and-react-with-razorpay-and-tailwindcss/"
            title="How to Set Up a Payment Gateway in Next.js and React with Razorpay and TailwindCSS"
            image="freecodecamp/payments.png"
            date="Dec 22, 2021"
          />
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:space-x-8 w-full">
          <Project
            link="https://www.freecodecamp.org/news/how-to-build-a-working-contact-form-with-sendgrid-and-next-js/"
            title="Send emails with your contact form with SendGrid and Next.js"
            image="freecodecamp/sendgrid.png"
            date="October 21, 2021"
          />
          <Project
            link="https://www.freecodecamp.org/news/how-to-create-beautiful-box-shadows-in-html-and-css/"
            title="Create Beautiful box shadows with HTML, CSS and TailwindCSS"
            image="freecodecamp/boxshadows.png"
            date="January 3, 2022"
          />
        </div>

        <div className="flex flex-col items-center sm:flex-row sm:space-x-8 w-full">
          <Project
            link="https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-nextjs-tailwindcss/"
            title="Build a developers portfolio website with Next.js and TailwindCSS"
            image="freecodecamp/portfolio.png"
            date="September 21, 2021"
          />
        </div>

        <Contact />
      </div>
    </Container>
  );
}

const Project = ({ link, image, title, date }) => {
  return (
    <a href={link} className=" w-3/4 sm:w-1/2 mb-10" target="__blank">
      <div className="flex-shrink-0 rounded-lg shadow-xl shadow-gray-500/20 dark:shadow-blue-500/20 overflow-hidden ">
        <div className="overflow-hidden">
          <img
            src={image}
            className="transition hover:scale-125 duration-[2000ms]"
          />
        </div>
        <div className="flex flex-col justify-between mx-4 my-4  ">
          <h2 className="font-bold text-lg mb-14">{title}</h2>
          <p className="text-sm font-light">{date}</p>
        </div>
      </div>
    </a>
  );
};
