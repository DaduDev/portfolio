import React from "react";
import Footer from './Footer'
import { Link } from "react-router-dom";


  
const Projects = () => {
    return (
        <div className="bg-black text-white">
            <section className="w-full max-w-6xl mx-auto py-12 md:py-20">
      <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 md:mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <Link href="#" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 1"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold mb-2">Project 1</h3>
                <p className="text-muted-foreground text-sm mb-4">A brief description of Project 1.</p>
                <button variant="link" className="text-primary">
                  View Project
                </button>
              </div>
            </Link>
          </div>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <Link href="#" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 2"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold mb-2">Project 2</h3>
                <p className="text-muted-foreground text-sm mb-4">A brief description of Project 2.</p>
                <button variant="link" className="text-primary">
                  View Project
                </button>
              </div>
            </Link>
          </div>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <Link href="#" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 3"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold mb-2">Project 3</h3>
                <p className="text-muted-foreground text-sm mb-4">A brief description of Project 3.</p>
                <button variant="link" className="text-primary">
                  View Project
                </button>
              </div>
            </Link>
          </div>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <Link href="#" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 4"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold mb-2">Project 4</h3>
                <p className="text-muted-foreground text-sm mb-4">A brief description of Project 4.</p>
                <button variant="link" className="text-primary">
                  View Project
                </button>
              </div>
            </Link>
          </div>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <Link href="#" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 5"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold mb-2">Project 5</h3>
                <p className="text-muted-foreground text-sm mb-4">A brief description of Project 5.</p>
                <button variant="link" className="text-primary">
                  View Project
                </button>
              </div>
            </Link>
          </div>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <Link href="#" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 6"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold mb-2">Project 6</h3>
                <p className="text-muted-foreground text-sm mb-4">A brief description of Project 6.</p>
                <button variant="link" className="text-primary">
                  View Project
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Feed-Back App',
        description:'Feed-Back App is a project built using NextJS and Tailwind CSS. This project is a modern and engaging social platform that allows users to send anonymous message to a user using that particular user unique link.',
        
        git:'https://github.com/DaduDev/feedbackapp',
        technologies:['NextJS', 'MongoDb' ,'ReactJS' , 'Tailwind CSS', 'Shadcn UI']
    },
    {
        title:'Quiz App',
        description:'Quiz App is a project built using ReactJS and Firebase. This project is a simple application that helps users to play quizzes and at last, the users can see their score after completion of quiz. The quizzes will be loaded from the firebase database.',
        git:"https://github.com/DaduDev/Quiz-App",
        technologies:[ 'React JS', 'Firebase']
    },
    {
        title: 'Todo-List',
        description: 'Todo-List is a project built using ReactJS. This project is a simple application that helps users to add, delete and update their daily tasks. The tasks will be stored in the local storage of the browser.',
        
        git: 'https://github.com/DaduDev/Todo-App',
        technologies: ['ReactJS']
    }
]

export default Projects