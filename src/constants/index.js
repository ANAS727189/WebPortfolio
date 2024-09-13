export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'SummarizerX - A text summarizer webapp',
      desc: 'SummarizerX is a platform that transforms the large boring text into interesting short summary . It also provides a realtime whiteboard where users can draw and write as much as they want',
      subdesc:
        'Built as a unique webapp with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Websockets, SummarizerX is designed for optimal performance and scalability.',
      href: 'https://summarizer-x.vercel.app/',
      texture: '/assets/summ.mp4',
      logo: '/assets/note.webp',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/next.webp',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/js.webp',
        },
        {
          id: 4,
          name: 'API Development',
          path: '/assets/api.webp',
        },
      ],
    },
    {
      title: 'BuddyBoard - A Friend Tracker WebApp',
      desc: 'BuddyBoard is a powerful Friend tracker app that lets you write about your friends .',
      subdesc:
        'Built using Python, Flask, SQLite as Backend &  React.js and Typescript for Frontend, This webapp is specifically built such as one can write about their friends- what position they work at, some characteristics of them and more. ',
      href: 'https://buddyboard.onrender.com/',
      texture: '/assets/buddy.mp4',
      logo: '/assets/hug.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'python',
          path: '/assets/python.webp',
        },
        {
          id: 2,
          name: 'Flask',
          path: 'assets/flask.webp',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'React.js',
          path: '/assets/react.svg',
        },
      ],
    },
    {
      title: 'BuzzChat - A realtime chat application',
      desc: 'BuzzChat is a real-time chat application that allows users to communicate with each other in a secure and efficient manner. It offers features like realtime chat over users, file sharing and more.',
      subdesc:
        'Built with React.js 14, Socket.io, and Tailwind CSS, BuzzChat is designed to provide a seamless and intuitive chat experience for users. It can be easily integrated into any website or application.',
      href: 'https://buzz-chat-rho.vercel.app/',
      texture: '/assets/buzz.mp4',
      logo: '/assets/bee.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'WebSocket',
          path: '/assets/websocket.webp',
        },
        {
          id: 4,
          name: 'NodeJS',
          path: '/assets/node.webp',
        },
      ],
    },
    {
      title: 'WordSmith WonderLand - A Blog WebApp',
      desc: 'WordSmith WonderLand is a blog platform that allows users to create, publish, and share their thoughts with the world. It offers features like uploading your own created blogs, reading others blogs, a quotes section and many more .',
      subdesc:
        'Built using NodeJS, ExpressJS, EJS, this website is built such that users can not only read blogs but also write their own blogs and share it with the world. It also has a quotes section where users can read fun quotes about different topics .',
      href: 'https://blog-application-ruby-kappa.vercel.app/',
      texture: '/assets/wonder.mp4',
      logo: '/assets/pen.svg',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'NodeJS',
          path: '/assets/node.webp',
        },
        {
          id: 2,
          name: 'ExpressJS',
          path: 'assets/express.webp',
        },
        {
          id: 3,
          name: 'Javascript',
          path: '/assets/js.webp',
        },
        // {
        //   id: 4,
        //   name: 'Framer Motion',
        //   path: '/assets/framer.png',
        // },
      ],
    },
    {
      title: 'TaskTracker - A Task Management WebApp',
      desc: 'TaskTracker is a task management application that allows users to create, delete, and track tasks. It offers features like creating tasks, marking completed tasks, and more.',
      subdesc:
        'Built using HTML, CSS AND JS, TaskTracker is designed to provide a simple and intuitive task management experience for users. It can be easily integrated into any website or application.',
      href: 'https://task-tracker-gamma-jade.vercel.app/',
      texture: '/assets/task.mp4',
      logo: '/assets/task.webp',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html.webp',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/css.webp',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/js.webp',
        },
      //   {
      //     id: 4,
      //     name: 'Framer Motion',
      //     path: '/assets/framer.png',
      //   },
      ],
    },
  ];
  
  export const calcSize= (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'XX',
      pos: 'X',
      duration: '2024 - Present',
      title: "Yet to do",
      // icon: '/assets/framer.svg',
    },
    {
      id: 2,
      name: 'XX',
      pos: 'Web Developer',
      duration: '2024 - present',
      title: "Yet to do",
      // icon: '/assets/figma.svg',
    },
    {
      id: 3,
      name: 'IIITDWD Website',
      pos: 'Junior Web Developer',
      duration: '2024 - 2024',
      title: "Worked in team to develop the official website of IIITDWD. Developed the front-end using Next.js and TypeScript.",
      icon: '/assets/iiit.webp',
    },
  ];