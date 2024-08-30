import React from "react";
import Footer from './Footer'
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";


  
const Projects = () => {
    return (
        <div className="bg-black text-white">
            <section className="w-full max-w-6xl mx-auto md:py-40">
      <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 md:mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <Link to="https://feedbackapp-swart.vercel.app/" target="_blank" prefetch={false}>
              <Image
                src="/feedbackApp.png"
                alt="Project 1"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold mb-2">Feed-Back App</h3>
                <p className="text-muted-foreground text-sm mb-4">
                Feed-Back App is a project built using NextJS and Tailwind CSS. This project is a modern and engaging social platform that allows users 
                to send anonymous message to a user using that particular user unique link.
                </p>
                <button variant="link" className="text-primary bg-slate-100 text-black p-2 rounded-md">
                  View Project
                </button>
              </div>
            </Link>
          </div>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <Link to="https://quiz-app-phi-lovat.vercel.app/" target="_blank" prefetch={false}>
              <Image
                src="/quizApp.png"
                alt="Project 1"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold mb-2">Quiz App</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Quiz App is a project built using ReactJS and Firebase. This project is a simple application that helps users to play quizzes and at last, the users can see their score after completion of quiz.
                   The quizzes will be loaded from the firebase database.</p>
                <button variant="link" className="text-primary bg-slate-100 text-black p-2 rounded-md">
                  View Project
                </button>
              </div>
            </Link>
          </div>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <Link to="https://todoappbydadudev.netlify.app/" target="_blank" prefetch={false}>
              <Image
                src="/todo.png"
                alt="Project 1"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold mb-2">Todo-List</h3>
                <p className="text-muted-foreground text-sm mb-4">
                Todo-List is a project built using ReactJS. This project is a simple application that helps users to add, delete and update their daily tasks. 
                The tasks will be stored in the local storage of the browser.  
                </p>
                <button variant="link" className="text-primary bg-slate-100 text-black p-2 rounded-md">
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

export default Projects