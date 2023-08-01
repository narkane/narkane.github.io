import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  googlec,
  vuejs,
  tensorflow,
  opencv,
  python,
  sql,
  unt,
  weston,
  agr,
  w4a,
  dms,
  datanow,
  weaselware,
  devmountain,
  carrent,
  awkwardstyles,
  bbp,
  ben,
  jana,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack",
    icon: web,
  },
  {
    title: "Polyglot",
    icon: mobile,
  },
  {
    title: "AI",
    icon: backend,
  },
  {
    title: "Consulting",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  // {
  //   name: "Vite",
  //   icon: vite,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: (
      <div>
        GCP
        {/* <br /> */}
        <span className="text-[10px]">(APIs & CI/CD)</span>
      </div>
    ),
    icon: googlec,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
];

const experiences = [
  {
    title: "Undergraduate",
    company_name: "University of North Texas",
    icon: unt,
    iconBg: "#02853E",
    date: "2009 - 2013",
    points: ["Computer Science", "Math Minor"],
  },
  {
    title: "Business Owner",
    company_name: "Weaselsoft",
    icon: weaselware,
    iconBg: "#f5f5f5",
    date: "2013 - 2018",
    points: [
      "Acquisition of clients, advertising, asset management, technician leadership and dispatch.",
      "Development of an analytic and informational Java mobile app for door-to-door salespersons working for reliant energy.",
      "Development, design, administration, and maintenance of the entire Javascript web presence and computer network for Courtesy A/C and Heating.",
    ],
  },
  {
    title: "Jr. Network Engineer",
    company_name: "Weston Group Inc.",
    icon: weston,
    iconBg: "#fff",
    date: "March 2015 - Fall 2016",
    points: [
      "Identified and rectified potential failure point in thermal sensor controls for SoC on a company distributed human embryo incubator model. (Python)",
      "Developed in Visual Script a custom Network Diagnostic tool for Memorial Hermann.",
      "Developed and designed image recognition tool to pull data from images so that it may be entered into a database (C++).",
    ],
  },
  {
    title: "Chairman of Software Development Comm.",
    company_name: "Dallas Makerspace",
    icon: dms,
    iconBg: "#000",
    date: "April 2018 - April 2019 [1 Year Term]",
    points: [
      "Organization of the committee and its meetings, events, projects, etc.",
      "Management of our ranking members, funding, expansion plans, desired expenditures, and any other tasks/issues that could not be delegated out",
      "Scheduling, design of, and instruction for classes in Software Dev. and others",
      "○ E.g. Java, Javascript, React, C++, Various Raspberry Pi projects, etc.",
    ],
  },
  {
    title: "Fullstack(SERN) Student",
    company_name: "Dev Mountain",
    icon: devmountain,
    iconBg: "#fff",
    date: "April 2019 - July 2019 [13 Week intensive]",
    points: [
      "Recognized residential web development bootcamp, largest coding/technology school in the Intermountain West, and one of the highest rated coding schools in the country.",
    ],
  },
  {
    title: "Full stack Dev",
    company_name: "AGR, LLC",
    icon: agr,
    iconBg: "#fff",
    date: "July 2019 - Feb. 2020 [Contract]",
    points: [
      "Corrected failing development infrastructure (project months overdue when I was hired on to rectify issues)",
      "Joined team lacking any scrum methodology, designers, or development structure. Took upon myself to write a two page proposal for the CEO of our small organization suggesting necessary changes in order to reach the desired delivery date.",
      "Standardized languages and frameworks and rewrote large sections of an overly diverse “do-as-you-please” patchwork development environment. (Javascript/Scrum)",
      "Designed and built 2D and 3D rendering tools for product mockups using fabric.js and 3D rendering built in three.js",
    ],
  },
  {
    title: "Frontend Dev",
    company_name: "Datanow, LLC",
    icon: datanow,
    iconBg: "#fff",
    date: "Feb. 2020 - May 2022",
    points: [
      "Collaborated with the design team to create responsive web applications for Business and Customer end users with React",
      "Integrated third-party libraries and APIs (such as Google Maps API) to build out a simple to use and understand frontend",
      "Optimized application performance by improving code efficiency and reducing load times",
    ],
  },
  {
    title: "Co-owner/Operator",
    company_name: "Water4all",
    icon: w4a,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Built out a non-profit company designed to fund a series of hand-picked charities with a focus in creating sustainable clean water sources around the world.",
      "Designed and developed an entire MEVN full stack application that \"gamifies\" a world atlas (built on Google Maps API) into a virtual real-estate ecosystem that utilizes one's phone's GPS data to create an interactive “geo-fencing” on owned cells. Additionally allowing users to colorize owned cells to create pixel art on the map.",
      "Deployed, administrated, and maintained Docker containers onto google cloud compute VMs in Ubuntu 20.04 - the backend hosted with Forever + Node, the frontend with Apache2, and the NoSQL with mongod.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "A skilled and efficient web developer who truly cares about his clients' success. He's just so smart.",
    name: "Jana Leys",
    designation: "Owner",
    company: "Courtesy A/C and Heating",
    image: jana,
  },
  {
    testimonial:
      "John said his aim was to minimize the gap between my imagination and the deliverable. He delivered that and more.",
    name: "Richard Martin",
    designation: "CEO",
    company: "Datanow, LLC",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've never seen a developer work quite like John. He simply hammers at whatever is asked. Innovative and passionate, he pushes beyond what is asked making it clear he loves what he does.",
    name: "Ben Hoggatt",
    designation: "CEO",
    company: "OurEarth",
    image: ben,
  },
];

const multiColorTag = (name, colors) => {
  let ret = []; // return value
  let nameLetter = 0; // which letter is currently being colored

  if (colors.length === name.length) {
    colors.forEach((color, index) => {
      console.log("fart...");
      console.log(color);
      let spanStyle = {
        color: color,
      };

      ret.push(
        <span key={index} style={spanStyle}>
          {name.charAt(nameLetter)}
        </span>
      );

      nameLetter++;
    });
    console.table(
      name + ":",
      name.length,
      colors.toString() + ":",
      colors.length
    );
  } else {
    console.log(
      `ERROR: tag: ${name} was not provided an equivalent amount of colors as the name.length in multiColorTag(name, [colors]) call. Defaulting to gray.`,
      `Number of colors:${colors.length}`,
      `Colors provided: ${JSON.stringify(colors)}`
    );
    ret.push(name);
  }
  console.log(ret);

  return ret;
};

const projects = [
  {
    name: "Care",
    description:
      "Non-profit site inspired by Reddit's r/place. Sells geospace for drawing, advertising, menus, and more to fund clean water projects.",
    tags: [
      {
        name: "#vue",
        color: "text-[#4CBA87]",
      },
      {
        name: "#mongodb",
        color: "text-[#00684A]",
      },
      {
        name: "#express",
        color: "text-[#4A4A4A]",
      },
      {
        name: "#node",
        color: "text-[#7AB844]",
      },
      {
        name: multiColorTag("#gmaps", [
          "#4285F4",
          "#EA4336",
          "#FABD05",
          "#4285F4",
          "#33A853",
          "#EA4336",
        ]),
        color: "",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/narkane/care-frontend",
  },
  {
    name: "Awkward Styles",
    description:
      "Web application that enables users and artists to shop, design and order custom graphic tees to profit a percentage from their resale on this online platform.",
    tags: [
      {
        name: "#vue",
        color: "text-[#4CBA87]",
      },
      {
        name: "#laravel",
        color: "text-[#cc4444]",
      },
      {
        name: "#MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "#restapi",
        color: "green-text-gradient",
      },
      {
        name: "#scss",
        color: "pink-text-gradient",
      },
    ],
    image: awkwardstyles,
    source_code_link: "https://github.com/narkane/awkward-styles",
  },
  {
    name: "Big Bang Printing",
    description:
      "Custom merchandise design and printing, specializing in bulk commercial orders while accommodating small B2C custom orders.",
    tags: [
      {
        name: "#laravel",
        color: "pink-text-gradient",
      },
      {
        name: "#MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "#restapi",
        color: "green-text-gradient",
      },
      {
        name: "#css",
        color: "text-[#77bbff]",
      },
    ],
    image: bbp,
    source_code_link: "https://github.com/narkane/bigbang",
  },
];

export { services, technologies, experiences, testimonials, projects };
``;
