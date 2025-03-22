export const RESUME = 'https://drive.google.com/file/d/1lZHb_3-c5KySvdokk4LSqrsl6eBkwlep/view?usp=sharing'

export const EDUCATION = [
    {
        institution: "Vignan's Institute of Information Technology",
        degree: 'Bachelor of Technology',
        specification : 'Computer Science',
        grade : '8.6',
        completionYear : '2024'
    }, {
        institution: "Sri Gayathri Jr College",
        degree: 'Intermediate',
        specification : 'MPC',
        grade : '9.3',
        completionYear : '2020'

    }, {
        institution: "Chalapathi Public School",
        degree: 'Matriculation',
        specification : '',
        grade : '9.7',
        completionYear : '2018'
    }
]

export const EXPERIENCE = [
    { 
        company : 'InnCircles Pvt Ltd',
        position : 'Product Developer',
        startDate : new Date('05/02/2024'),
        description : 'Worked on various projects related to web development, mobile applications, and backend services.',
        projects : [{
            name : 'InnCircles CRM',
            key : 'inn-crm'
        },{
            name : 'InnCircles Connect',
            key : 'inn-connect'
        }, {
            name : 'InnCircles Homes',
            key : 'inn-homes'
        }]
    }, {
        company : 'InnCircles Pvt Ltd',
        position : 'Product Developer Intern',
        startDate : new Date('08/21/2023'),
        endDate : new Date('05/01/2024'),
        description : 'Worked on various projects related to web development, backend services.',
        projects : [{
            name : 'InnCircles CRM',
            key : 'inn-crm'
        }]
    }, {
        company : 'MetaComic Pvt Ltd',
        position : 'Full Stack Developer Intern',
        startDate : new Date('05/01/2023'),
        endDate : new Date('07/21/2023'),
        description : 'Worked on projects related to web development.',
        projects : [{
            name : 'RestoBar-B',
            key : 'meta-resto'
        }]
    }
]