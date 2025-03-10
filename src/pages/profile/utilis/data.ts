export const addSectionMenuItems = ({
    educationModal,
    experienceModal,
    softSkillModal,
    technicalSkillModal,
    projectModal,
    publicationModal,
    basicInfoModal,
    overviewModal,
    cretificatesModal
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
            { title: 'Overview', component: overviewModal },
        ],
    },
    {
        title: 'Background',
        data: [
            { title: 'Education', component: educationModal },
            { title: 'Experience', component: experienceModal },
            { title: 'Certificates', component: cretificatesModal },
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
