const spanish_texts = {
    nav: {
        home: "Inicio",
        projects: "Proyectos",
        about: "Sobre mi",
        contact: "Contactame",
    },
    home: {
        title: "Desarrollador Web",
        description: "Soy desarrollador web fullstack, especializado en la creación de aplicaciones web dinámicas y adaptables. Tengo experiencia en HTML, CSS, JavaScript y frameworks modernos, y me enfoco en la resolución de problemas en equipo y el aprendizaje constante."
    },
    projects: {
        title: "Proyectos",
        projects_array: [
            {
                title: "Sheerio",
                description: 'Sheerio fue mi primer proyecto, donde utlicé React para hacer una app al estilo "Slack". Me sirvió para poner en práctica conceptos como el manejo de estados y props, uso de hooks, manejo del DOM, componentes reutilizables y el uso de local storage.',
                url: "https://proyecto-final-phi-self.vercel.app/",
                img: "proyecto1.jpg"
            },
            {
                title: "E-Commerce",
                description: "Fue el proyecto final del curso de desarrollo web fullstack. En este proyecto utilicé React para el frontend, donde pude aplicar varios conceptos, incluyendo realizar peticiones a una API RESTful. En el backend utilicé Node.js y Express para crear la API, y MongoDB para la gestión de datos. El proyecto fue un gran desafío, pero me permitió aprender mucho sobre el desarrollo web, especialmente sobre backend.",
                url: "https://frontend-fp-two.vercel.app/",
                img: "proyecto2.jpg"
            },
            {
                title: "Proyecto 3",
                description: "Descripción del proyecto 3.",
                url: "",
                img: ""
            }
        ]
    },
    about: {
        title: "Sobre mi",
        description: "Graduado del programa de desarrollo web fullstack de <a target=_blank href=https://utn.edu.ar/>UTN</a>, busco iniciar mi carrera contribuyendo a proyectos impactantes. Mis proyectos me permitieron aplicar habilidades en APIs RESTful con Node.js, gestión de datos con MongoDB, y manejo de componentes y DOM con React. Estoy ansioso por aprender TypeScript, Next.js y SQL. Soy un colaborador entusiasta, con un fuerte deseo de crecimiento en un entorno dinámico. Me encantaría discutir cómo puedo beneficiar a su equipo. ¡Contáctenme a través de la información proporcionada! Espero su contacto."
    },
    flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="spain">
    <path fill="#ffda44" d="M0 85.331h512v341.337H0z"></path>
    <path fill="#d80027" d="M0 85.331h512v113.775H0zM0 312.882h512v113.775H0z"></path>
    </svg>`
}

const english_texts = {
    nav: {
        home: "Home",
        projects: "Projects",
        about: "About me",
        contact: "Contact me",
    },
    home: {
        title: "Web Developer",
        description: "Fullstack web developer specializing in dynamic and responsive web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks, with a strong commitment to collaborative problem solving and continuous professional development."
    },
    projects: {
        title: "Projects",
        projects_array: [
            {
                title: "Sheerio",
                description: 'Sheerio was my first project, where I used React to build a "Slack"-style app. It helped me put into practice concepts like state and props management, the use of hooks, DOM manipulation, reusable components, and the use of local storage.',
                url: "https://proyecto-final-phi-self.vercel.app/",
                img: "proyecto1.jpg"
            },
            {
                title: "E-Commerce",
                description: "This was the final project of the full-stack web development course. In this project, I used React for the frontend, where I was able to apply various concepts, including making requests to a RESTful API. On the backend, I used Node.js and Express to create the API, and MongoDB for data management. The project was a great challenge, but it allowed me to learn a lot about web development, especially about the backend.",
                url: "https://frontend-fp-two.vercel.app/",
                img: "proyecto2.jpg"
            },
            {
                title: "Project 3",
                description: "Description of project 3.",
                url: "",
                img: ""
            }
        ]
    },
    about: {
        title: "About me",
        description: "As a recent graduate of <a target=_blank href=https://utn.edu.ar/>UTN</a>'s fullstack web development program, I'm eager to launch my career by contributing to impactful projects. During my studies, I gained practical experience through projects, that allowed me to apply my skills in building RESTful APIs with Node.js and managing data with MongoDB, as well as dealing with components and manipulating the DOM with React. I'm also keen to explore new technologies such as TypeScript, Next.js ans SQL. I'm a collaborative team player, driven by a strong desire to learn and grow in a dynamic development environment so I'm excited to discuss how my skills and enthusiasm can benefit your team. Please feel free to reach out to me through my contact information below. I look forward to connecting with you!"
    },
    flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="united-kingdom">
    <path fill="#f0f0f0" d="M0 85.333h512V426.67H0z"></path>
    <path fill="#d80027" d="M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z"></path>
    <path fill="#0052b4" d="M393.785 315.358 512 381.034v-65.676zM311.652 315.358 512 426.662v-31.474l-143.693-79.83zM458.634 426.662l-146.982-81.664v81.664z"></path>
    <path fill="#f0f0f0" d="M311.652 315.358 512 426.662v-31.474l-143.693-79.83z"></path>
    <path fill="#d80027" d="M311.652 315.358 512 426.662v-31.474l-143.693-79.83z"></path>
    <path fill="#0052b4" d="M90.341 315.356 0 365.546v-50.19zM200.348 329.51v97.151H25.491z"></path>
    <path fill="#d80027" d="M143.693 315.358 0 395.188v31.474l200.348-111.304z"></path>
    <path fill="#0052b4" d="M118.215 196.634 0 130.958v65.676zM200.348 196.634 0 85.33v31.474l143.693 79.83zM53.366 85.33l146.982 81.664V85.33z"></path>
    <path fill="#f0f0f0" d="M200.348 196.634 0 85.33v31.474l143.693 79.83z"></path>
    <path fill="#d80027" d="M200.348 196.634 0 85.33v31.474l143.693 79.83z"></path>
    <path fill="#0052b4" d="M421.659 196.636 512 146.446v50.19zM311.652 182.482V85.331h174.857z"></path>
    <path fill="#d80027" d="M368.307 196.634 512 116.804V85.33L311.652 196.634z"></path>
</svg>`
}

let english = true

const nav = document.querySelector("#nav")
const home_span = document.querySelector("#home-span")
const home_p = document.querySelector("#home-p")
const projects_title = document.querySelector("#projects-title")
const projects_container = document.querySelector("#projects-container")
const about_me_title = document.querySelector("#about-me-title")
const about_me_p = document.querySelector("#about-me-p")
const flag = document.querySelector("#flag")

const setEnglish = () => {
    flag.innerHTML = spanish_texts.flag
    nav.innerHTML = `
        <a href="#home">${english_texts.nav.home}</a>
        <a href="#projects">${english_texts.nav.projects}</a>
        <a href="#about-me">${english_texts.nav.about}</a>
        <a href="#contact-me">${english_texts.nav.contact}</a>`
    home_span.innerHTML = english_texts.home.title
    home_p.textContent = english_texts.home.description
    projects_title.innerHTML = english_texts.projects.title
    projects_container.innerHTML = english_texts.projects.projects_array.map(project => project.url ? `
        <a href="${project.url}" target="_blank">
                    <div class="project-img"><img src="${project.img}" alt="${project.title}"></div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                    </div>
                </a>`
            : ``).join('')
    about_me_title.innerHTML = english_texts.about.title
    about_me_p.innerHTML = english_texts.about.description
}
const setSpanish = () => {
    flag.innerHTML = english_texts.flag
    nav.innerHTML = `
        <a href="#home">${spanish_texts.nav.home}</a>
        <a href="#projects">${spanish_texts.nav.projects}</a>
        <a href="#about-me">${spanish_texts.nav.about}</a>
        <a href="#contact-me">${spanish_texts.nav.contact}</a>`
    home_span.innerHTML = spanish_texts.home.title
    home_p.innerText = spanish_texts.home.description
    projects_title.innerHTML = spanish_texts.projects.title
    projects_container.innerHTML = spanish_texts.projects.projects_array.map(project => project.url ? `
        <a href="${project.url}" target="_blank">
                    <div class="project-img"><img src="${project.img}" alt="${project.title}"></div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                    </div>
                </a>` : ``).join('')
    about_me_title.innerHTML = spanish_texts.about.title
    about_me_p.innerHTML = spanish_texts.about.description
}

const changeLanguage = () => {
    english = !english
    if (english) {
        setEnglish()
    } else {
        setSpanish()
    }
}

setEnglish()
flag.addEventListener("click", changeLanguage)