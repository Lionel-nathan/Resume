import avatar from './images/avatar.png';

const ResumeData = {
  myName: 'LIONEL-NATHAN MASAMBA',

  avatar: avatar,

  tabLabels: ['Skills', 'Experience', 'Education'],

  profileSummary: `I am Lionel-Nathan Masamba, a 22 years old who has a strong passion and interest for Software development.`,

  buttonList: [
    {
      label: 'Github',
      link: 'https://github.com/Lionel-nathan'
    },
    {
      label: 'linkedin',
      link: 'https://www.linkedin.com/in/lionel-nathan-masamba-9862ab121'
    }
    , {
      label: 'Facebook',
      link: 'https://www.facebook.com/lionel.masamba'
    }
  ],

  skillsList: [
    'Python',
    'Microsoft SQL Server',
    'Java',
    'MongoDB',
    'ASP.NET',
    'MySQL',
    'VB.NET',
    'WordPress',
    'Microsft Word',
    'Microsft PowerPoint',
    'Microsft Excel',
    'Javascript',
    'React Js',
    'Node.JS',
    'Networking',
    'HTML & CSS',
    'jQuery',
    'Express',
  ],

  experienceList: [
    {
      company: 'The Agency- Web Design',
      projects: [
        {
          id: 1,
          value: `Software Tester`
        }
        /**,
         {
          id: 2,
          value: `<Project 2>`
        },
        {
          id: 3,
          value: `<Project 3>`
        }
        */
      ]
    },
   
    {
      company: 'Webfactory South Africa',
      projects: [
        {
          id: 1,
          value: `Software Tester`
        },
        
      ] // end projects array
    } // end project object
    

  ], // end experienceList array
educationList: [
  {
    schoolName: 'Kennesaw State University',
    schoolLocation: 'Kennesaw, GA',
    major: 'Computer Science',
    graduationSemester: 'Fall',
    graduationYear: '2016'
  },
]
 
} // end ResumeData

export default ResumeData;