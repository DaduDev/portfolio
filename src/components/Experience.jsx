import React from 'react';
import Footer from './Footer';

const Experience = () => {
  return(
    <div className='text-white bg-black'>
      <section class="w-full py-12 md:py-24 lg:py-32">
        <div class="container px-4 md:px-6">
          <div class="space-y-4 text-center">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
            <p class="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I have a diverse set of skills that I've developed over the years. Here's a glimpse of what I can do.
            </p>
          </div>
          <div class="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <div class="space-y-6">
              <h3 class="text-xl font-semibold">Programming Languages</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="flex flex-col items-center gap-2">
                  <div class="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-6 h-6"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <h4 class="text-lg font-medium">JavaScript</h4>
                  <p class="text-sm text-muted-foreground">Proficient in modern JavaScript, including ES6+ features.</p>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <div class="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-6 h-6"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <h4 class="text-lg font-medium">Python</h4>
                  <p class="text-sm text-muted-foreground">Experienced in writing efficient and scalable Python code.</p>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <div class="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-6 h-6"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <h4 class="text-lg font-medium">TypeScript</h4>
                  <p class="text-sm text-muted-foreground">
                    Adept at leveraging the benefits of static typing with TypeScript.
                  </p>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <div class="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-6 h-6"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <h4 class="text-lg font-medium">Java</h4>
                  <p class="text-sm text-muted-foreground">
                    Experienced in building robust and scalable Java applications.
                  </p>
                </div>
              </div>
            </div>
            <div class="space-y-6">
              <h3 class="text-xl font-semibold">Frameworks &amp; Libraries</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="flex flex-col items-center gap-2">
                  <div class="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-6 h-6"
                    >
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                      <line x1="12" x2="12" y1="22" y2="15.5"></line>
                      <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                      <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                      <line x1="12" x2="12" y1="2" y2="8.5"></line>
                    </svg>
                  </div>
                  <h4 class="text-lg font-medium">React</h4>
                  <p class="text-sm text-muted-foreground">
                    Proficient in building modern, responsive, and scalable web applications with React.
                  </p>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <div class="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-6 h-6"
                    >
                      <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                    </svg>
                  </div>
                  <h4 class="text-lg font-medium">React-Native</h4>
                  <p class="text-sm text-muted-foreground">
                    Experienced in developing complex, enterprise-level mobile applications with React-Native.
                  </p>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <div class="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-6 h-6"
                    >
                      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
                      <path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
                      <path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
                    </svg>
                  </div>
                  <h4 class="text-lg font-medium">Tailwind CSS</h4>
                  <p class="text-sm text-muted-foreground">
                    Experienced in using Tailwind CSS to create beautiful and responsive designs.
                  </p>
                </div>
              </div>
            </div>
            <div class="space-y-6">
              <h3 class="text-xl font-semibold">Tools &amp; Technologies</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="flex flex-col items-center gap-2">
                  <div class="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-6 h-6"
                    >
                      <circle cx="5" cy="6" r="3"></circle>
                      <path d="M5 9v6"></path>
                      <circle cx="5" cy="18" r="3"></circle>
                      <path d="M12 3v18"></path>
                      <circle cx="19" cy="6" r="3"></circle>
                      <path d="M16 15.7A9 9 0 0 0 19 9"></path>
                    </svg>
                  </div>
                  <h4 class="text-lg font-medium">Git</h4>
                  <p class="text-sm text-muted-foreground">
                    Proficient in using Git for version control and collaborative development.
                  </p>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <div class="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-6 h-6"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                      <path d="M3 12A9 3 0 0 0 21 12"></path>
                    </svg>
                  </div>
                  <h4 class="text-lg font-medium">Databases</h4>
                  <p class="text-sm text-muted-foreground">
                    Experience in working with various databases, including SQL and NoSQL.
                  </p>
                </div>
                
                <div class="flex flex-col items-center gap-2">
                  <div class="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-6 h-6"
                    >
                      <polyline points="4 17 10 11 4 5"></polyline>
                      <line x1="12" x2="20" y1="19" y2="19"></line>
                    </svg>
                  </div>
                  <h4 class="text-lg font-medium">CLI Tools</h4>
                  <p class="text-sm text-muted-foreground">
                    Comfortable using command-line interfaces and terminal-based tools for development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Experience;
