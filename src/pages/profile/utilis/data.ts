export const addSectionMenuItems = ({
    educationModal,
    experienceModal,
    softSkillModal,
    technicalSkillModal,
    projectModal,
    publicationModal,
    basicInfoModal
}) => ([
    {
        title: 'Info',
        data: [
            { title: 'Basic Info', component: basicInfoModal },
        ],
    },
    {
        title: 'About',
        data: [
            { title: 'Overview', handleOnClick: '' },
        ],
    },
    {
        title: 'Background',
        data: [
            { title: 'Education', component: educationModal },
            { title: 'Experience', component: experienceModal },
            { title: 'Certificates', handleOnClick: '' },
        ],
    },
    {
        title: 'Skills',
        data: [
            { title: 'Technical Skills', component: technicalSkillModal },
            { title: 'Soft Skills', component: softSkillModal },
        ],
    },
    {
        title: 'Accomplishments',
        data: [
            { title: 'Projects', component: projectModal },
            { title: 'Publications', component: publicationModal },
            { title: 'Awards', handleOnClick: '' },
        ],
    },
]);


export const sectionLinks = [
    { to: '#about', label: 'About' },
    { to: '#education', label: 'Education' },
    { to: '#experience', label: 'Experience' },
    { to: '#skills', label: 'Skills' },
    { to: '#portfolio', label: 'Portfolio' },
];
