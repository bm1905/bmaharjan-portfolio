// Import assets.
// Do not modify this.
import Picture from 'images/profile-picture/circle.jpg';
import Resume from 'images/resume/Resume_Maharjan_Bijay.pdf'

// Custom inputs.
// Modify this.

//=============================================================================
// Personal Details.
//=============================================================================
export const MY_NAME = "Bijay Maharjan";
export const MY_TITLE = "Full-Stack Developer";
export const MY_IMAGE = Picture;
export const MY_RESUME = Resume;

//=============================================================================
// Intro Text.
//=============================================================================
export const FIRST_INTO = `Possessing the required knowledge for a full-stack 
development with an emphasis on Web and Mobile Application Development.Extensive 
use of JavaScript for frontend(React.js, Angular.js) and backend(Express.js), 
comfortable using both relational(MySQL) as well as non - relational(MongoDB) 
database, version control system like Git or SVN and familiar with CI / CD pipeline.`;

export const SECOND_INTRO = `Experienced graphics designer with a demonstrated 
history of working in the 3D and VFX industry, aiming to blend my designing and 
programming skills to create beautiful and interactive Mobile and Web Applications.`;

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
        title: 'Lab Research Assistant',
        employer: 'Louisiana State University - Shreveport',
        lists:
            [
                'Data Analysis/Research/Visualization (Tableau, R, Weka, Orange)',
                'Mobile App Development and Deployment to Google and Apple Store - Frontend (ReactNative, Xamarin, Swift)',
                'Node Server and RESTful API development (Express)',
                'SQL Database Schemas desgins and formulating scripts to automate insertion of data from large CSV files to the respective tables in the database.'
            ],
        date: 'June 2019 - Present'
    },
    {
        title: 'Full Time Graduate Student',
        employer: 'Louisiana State University - Shreveport',
        lists:
            [
                'MS Computer System Technology - Computer Science'
            ],
        date: '2019 - Present'
    },
    {
        title: 'Full Time Undergraduate Student',
        employer: 'Louisiana State University - Shreveport',
        lists:
            [
                'BS Computer Science - Software Development',
                '3.95 GPA, Summa Cum Laude'
            ],
        date: '2015 - 2020'
    },
    {
        title: 'Motion Graphics Designer',
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
        name: 'ApartmentMe',
        description: `CSC 680/681 Class Project - A web application web application 
        portal that allows user to easily search and post apartments for rent.`,
        status: 'In-Progress',
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
        name: 'Portfolio',
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
    {
        name: 'iOS Clock',
        description: `The iOS clock application with location based weather updates.`,
        status: 'Not Maintained',
        photos: [
            'https://portfolio-bmaharjan.s3.amazonaws.com/ios1.jpg',
            'https://portfolio-bmaharjan.s3.amazonaws.com/ios2.jpg'
        ],
        buttonText: 'GitHub Repo',
        buttonLink: 'https://github.com/bm1905/iOS-Clock',
        popup: {
            name: 'iOS Clock',
            description: `This is the iOS application that I developed when taking 'Introduction to iOS' class. 
            I created graphics art using Adobe Photoshop and integrated with Xcode. The application 
            displays analog clock with time and weather of the selected location. The location can 
            be changed in the app. Some of the layout still needs to be adjusted in the app.`,
            tools: ['Swift', 'XCode'],
            buttonText: 'More Info',
            link: ''
        }
    },
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
            link: ''
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

export const INTERESTED_AREA = ['Ethical Hacking', 'BlockChain & Cryptocurrency'];


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
export const SUB_TITLES = ['Full-Stack-Developer', 'LSU-Shreveport', 'Graduate-Student'];