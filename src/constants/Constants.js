// Import assets.
// Do not modify this.
import Picture from '../static/images/profile-picture/circle.jpg';
import Resume from '../static/resume/Resume_Maharjan_Bijay.pdf'

// Custom inputs.
// Modify this.

//=============================================================================
// Personal Details.
//=============================================================================
export const MY_NAME = "Bijay Maharjan";
export const MY_TITLE = "Software Developer";
export const MY_IMAGE = Picture;
export const MY_RESUME = Resume;
export const MY_WEBSITE = "https://www.bmaharjan.com/";
export const MY_BLOGS = "http://blogs.bmaharjan.com/";

//=============================================================================
// Intro Text.
//=============================================================================
export const FIRST_INTO = `Possessing the required knowledge for full-stack 
application development with extensive use of modern frameworks and 
libraries. 📌 Comfortable using both relational as well as non-relational 
database systems, both centralized and distributed 
version control systems, and familiar with the CI/CD pipeline.`;

export const SECOND_INTRO = `Proficient in multiple scripting/programming 
languages with advanced knowledge of developer applications, tools, methodologies, 
and best practices including OOD, cloud computing, client/server architecture, 
and self-test automation.`;

//=============================================================================
// Links.
//=============================================================================
export const BLOGS_LINK = "http://blogs.bmaharjan.com/";
export const EMAIL = "bijay.maharjan5@gmail.com";

//=============================================================================
// Experience.
//=============================================================================
export const EXPERIENCE = [
    {
        title: 'Graduate Assistant',
        work: true,
        employer: 'Louisiana State University - Shreveport',
        lists:
            [
                'Developed cross-platform mobile application, deployed them to Google Play Store and Apple Store.',
                'Designed SQL schemas for several databases, wrote scripts to automate the insertion of a large chunk of data from CSV files to the database.',
                'Analyzed and visualized several biomedical data using Tableau, Weka, R, and Orange.',
                'Designed and implemented backend server architecture using Node.js, .NET Core and developed RESTful APIs.',
                'Extensive used HTML/CSS and Photoshop skills to create UI/UX design.',
                'Implemented CI/CD pipeline with automated testing and version controls like Git and SVN for smooth and efficient application productions.'
            ],
        date: 'June 2019 - December 2020'
    },
    {
        title: 'Full Stack Developer Intern',
        work: true,
        employer: 'STEM-Away Remote',
        lists:
            [
                'Developed a custom discourse theme using JavaScript, CSS, and Handlebars that can be integrated into any discourse forums.',
                'Collaborated with international team members remotely and presented the final product to the Vice President of Software Development Business Strategy at Intel.'
            ],
        date: 'June 2020 - August 2020'
    },
    {
        title: 'Full Time Graduate Student',
        work: false,
        employer: 'Louisiana State University - Shreveport',
        lists:
            [
                'MS Computer Systems Technology - Computer Science (4+1 Program, Combined M.S and B.S), 4.0 GPA',
                'Relevant Courses: Software Engineering Concept, Database Modeling and Design, Data Mining, Machine Learning, Mobile Development(iOS), Information Visualization'
            ],
        date: '2019 - Present'
    },
    {
        title: 'Full Time Undergraduate Student',
        work: false,
        employer: 'Louisiana State University - Shreveport',
        lists:
            [
                'BS Computer Science - Software Development, 3.95 GPA',
                'Relevant Courses: Data Structures, Analysis of Algorithms, Object-Oriented Programming, Compiler Design, Systems Programming, Database Systems, Rapid App Development',
                'Awards: Summa Cum Laude, LSUS Outstanding Student Award 2019'
            ],
        date: '2015 - 2020'
    },
    {
        title: 'Motion Graphics Designer',
        work: true,
        employer: 'TV Filmy - Kathmandu, Nepal',
        lists:
            [
                'Movie Editing',
                'Creating 3D Animation Videos',
                'Creating Motion Graphics',
                'Creating Visual/Poster Advertisments'
            ],
        date: '2014 - 2015'
    },
    {
        title: 'Visual Editor/Graphics Designer',
        work: true,
        employer: 'Mountain Television - Kathmandu, Nepal',
        lists:
            [
                'Video Editing',
                'Creating Motion Graphics',
                'Creating Visual/Poster Advertisments'
            ],
        date: '2012 - 2014'
    }
];

//=============================================================================
// Honors.
//=============================================================================
export const HONORS = [
    {
        title: 'LSUS Chancellor’s List - Fall 2017',
        link: 'https://www.lsus.edu/news-and-events/lsu-shreveport-dean%E2%80%99s-and-chancellor%E2%80%99s-lists-announced-for-fall-2017-semester-',
        priority: false
    },
    {
        title: 'LSUS Chancellor’s List - Spring 2018',
        link: 'https://www.lsus.edu/news-and-events/lsus-announces-chancellors-and-deans-lists-for-spring-2018',
        priority: false
    },
    {
        title: 'LSUS Chancellor’s List - Fall 2018',
        link: 'https://www.lsus.edu/news-and-events/fall-2018-chancellors-list-and-deans-list',
        priority: false
    },
    {
        title: 'LSUS Dean’s List - Spring 2019',
        link: 'https://www.lsus.edu/news-and-events/spring-2019-chancellors-list-and-deans-list',
        priority: false
    },
    {
        title: 'LSUS Chancellor’s List - Fall 2019',
        link: 'https://www.lsus.edu/news-and-events/fall-2019-chancellors-and-deans-lists',
        priority: false
    },
    {
        title: 'LSUS Outstanding Student of the year 2020',
        link: 'https://www.lsus.edu/news-and-events/lsus-announces-university-award-recipients-for-spring-2020',
        priority: true
    }
];

//=============================================================================
// Certifications.
//=============================================================================
export const CERTIFICATIONS = [
    {
        title: 'Still Pursuing',
        link: '',
        priority: false
    }
];


//=============================================================================
// Projects.
//=============================================================================
export const PROJECTS = [
    {
        name: 'Apartment-Me',
        description: `CSC 680/681 Class Project - A web application 
        portal that allows user to easily search and post apartments for rent.`,
        status: 'Not Maintained',
        photos: [
            'https://portfolio-bmaharjan.s3.amazonaws.com/apartmentMe.jpg',
            'https://portfolio-bmaharjan.s3.amazonaws.com/apartmentMe1.jpg'
        ],
        buttonText: 'GitHub Repo',
        buttonLink: 'https://github.com/bm1905/apartmentme-react-redux',
        popup: {
            name: 'ApartmentMe Project',
            description: `This is the group project for class CSC 680/681. It is a web 
            application that allows people to search or post for rooms/apartments within
            particular location. Responsive frontend is built using React and Bootstrap. 
            RESTful API and backend server is built using Node.js, Express.js and MongoDB. 
            Automated CI/CD pipeline is implemented using Heroku and GitHub. MongoLab and
            AWS S3 bucket are utilized for storing user data and images.`,
            tools: ['HTML/CSS/SASS', 'JavaScript', 'React.js', 'Express.js', 'MongoDB', 'Git', 'Heroku'],
            buttonText: 'More Info',
            link: 'https://apartmentme.herokuapp.com/'
        }
    },
    {
        name: 'Personal Portfolio',
        description: `This is my personal Portfolio Website built using React.js library 
        where I post my educational and professional information.`,
        status: 'Complete',
        photos: [
            'https://portfolio-bmaharjan.s3.amazonaws.com/portfolio.jpg',
            'https://portfolio-bmaharjan.s3.amazonaws.com/portfolio1.jpg'
        ],
        buttonText: 'GitHub Repo',
        buttonLink: 'https://github.com/bm1905/bmaharjan-portfolio',
        popup: {
            name: 'Personal Portfolio',
            description: `This is my personal portfolio website which I built using React.js library 
            for the frontend and it is deployed to Heroku.`,
            tools: ['HTML/CSS/SASS', 'JavaScript', 'React.js', 'Git', 'Heroku'],
            buttonText: 'More Info',
            link: ''
        }
    },
    // {
    //     name: 'iOS Clock',
    //     description: `The iOS clock application with location based weather updates.`,
    //     status: 'Not Maintained',
    //     photos: [
    //         'https://portfolio-bmaharjan.s3.amazonaws.com/ios1.jpg',
    //         'https://portfolio-bmaharjan.s3.amazonaws.com/ios2.jpg'
    //     ],
    //     buttonText: 'GitHub Repo',
    //     buttonLink: 'https://github.com/bm1905/iOS-Clock',
    //     popup: {
    //         name: 'iOS Clock',
    //         description: `This is the iOS application that I developed when taking 'Introduction to iOS' class. 
    //         I created graphics art using Adobe Photoshop and integrated with Xcode. The application 
    //         displays analog clock with time and weather of the selected location. The location can 
    //         be changed in the app. Some of the layout still needs to be adjusted in the app.`,
    //         tools: ['Swift', 'XCode'],
    //         buttonText: 'More Info',
    //         link: ''
    //     }
    // },
    {
        name: 'Diabetes Risk Calculator',
        description: `Cross platform mobile application developed at Louisiana State University - Shreveport.`,
        status: 'Complete',
        photos: [
            'https://portfolio-bmaharjan.s3.amazonaws.com/diabetesApp.jpg'
        ],
        buttonText: 'Google Play Store',
        buttonLink: 'https://play.google.com/store/apps/details?id=edu.lsus.DiabetesApplication',
        popup: {
            name: 'Diabetes Risk Calculator',
            description: `This is the cross-platform mobile application developed in LABi of Louisiana State
            University of Shreveport using Xamarin Forms. The application is available in Google Play Store,
            it is yet to be available in Apple Store.`,
            tools: ['C#', 'Xamarin Forms', 'SVN'],
            buttonText: 'More Info',
            link: 'https://apps.apple.com/us/app/diabetes-risk-assessment/id1539983994'
        }
    },
    {
        name: 'My Blogs',
        description: `This is the Blog Website created using headless CMS Sanity and Next.js.`,
        status: 'Complete',
        photos: [
            'https://portfolio-bmaharjan.s3.amazonaws.com/Blog1.PNG',
            'https://portfolio-bmaharjan.s3.amazonaws.com/Blog2.PNG',
            'https://portfolio-bmaharjan.s3.amazonaws.com/Blog3.PNG',
        ],
        buttonText: 'GitHub Repo',
        buttonLink: 'https://github.com/bm1905/myblog',
        popup: {
            name: 'My Blogs',
            description: `This a blog website created using Sanity and Next.js. The frontend part is 
            created using Next.js and React-Bootstrap while all the blog contents are managed using
            headless CMS Sanity.`,
            tools: ['Next.js, React-Bootstrap, Sanity'],
            buttonText: 'More Info',
            link: 'http://blogs.bmaharjan.com/'
        }
    }
];

//=============================================================================
// Skills.
//=============================================================================
export const PRIMARY_SKILLS = [
    { toolname: 'JAVA', image: 'JAVA.png', borderColor: 'primary' },
    { toolname: 'C#', image: 'Csharp.png', borderColor: 'primary' },
    { toolname: 'JavaScript', image: 'JavaScript.png', borderColor: 'primary' },
    { toolname: 'MongoDB', image: 'MongoDB.png', borderColor: 'success' },
    { toolname: 'MySQL', image: 'MySQL.png', borderColor: 'success' },
    { toolname: 'React.js', image: 'React.png', borderColor: 'danger' },
    { toolname: '.NET Core', image: 'Core.png', borderColor: 'danger' },
    { toolname: 'Express.js', image: 'Express.png', borderColor: 'danger' },
    { toolname: 'React Native', image: 'React.png', borderColor: 'warning' },
    { toolname: 'Xamarin', image: 'Xamarin.png', borderColor: 'warning' },
    { toolname: 'Git', image: 'Git.png', borderColor: 'info' },
    { toolname: 'Docker', image: 'Docker.png', borderColor: 'info' },
    { toolname: 'TravisCI', image: 'TravisCI.png', borderColor: 'info' },
    { toolname: 'Photoshop', image: 'Photoshop.png', borderColor: 'dark' }
];

export const SECONDARY_SKILLS = [
    { toolname: 'Python', image: 'Python.png', borderColor: 'primary' },
    { toolname: 'C++', image: 'CPlusPlus.png', borderColor: 'primary' },
    { toolname: 'Angular', image: 'Angular.png', borderColor: 'danger' },
    { toolname: 'Swift', image: 'Swift.png', borderColor: 'warning' },
    { toolname: 'Subversion', image: 'SVN.png', borderColor: 'info' },
    { toolname: 'Sanity', image: 'Sanity.png', borderColor: 'info' },
    { toolname: 'Next.js', image: 'Next.png', borderColor: 'info' }
];

//=============================================================================
// Footer.
//=============================================================================
export const FOOTER_INTRO = `I am still working on couple of side projects (for mobile application
and web application) including improving the portfolio and blog website.I am also
preparing for JAVA SE Certification.`;

export const CONTACT = ['Shreveport, LA', 'bijay.maharjan5@gmail.com', '(870)-949-9173'];

export const INTERESTED_AREA = ['Software Development', 'Machine Learning', 'BlockChain'];


//=============================================================================
// Copyright.
//=============================================================================
export const SOCIAL_ICONS = [
    {
        iconName: 'file-text',
        link: 'http://blogs.bmaharjan.com/'
    },
    {
        iconName: 'facebook',
        link: 'https://www.facebook.com/bmaharjan.chelsea'
    },
    {
        iconName: 'instagram',
        link: 'https://www.instagram.com/m_reus111'
    },
    {
        iconName: 'linkedin',
        link: 'https://www.linkedin.com/in/bijay-maharjan-10654b92'
    },
    {
        iconName: 'github',
        link: 'https://github.com/bm1905'
    },
    {
        iconName: 'stack-overflow',
        link: 'https://stackoverflow.com/users/8922935/bijay-maharjan'
    }
];

export const COPYRIGHT = "Copyright Bijay Maharjan 2020";

//=============================================================================
// Image Slider
//=============================================================================
export const SUB_TITLES = ['Software-Developer', 'MS-Computer-Science'];