export const addSectionMenuItems =({
    educationModal,
    experienceModal,
    softSkillModal,
    technicalSkillModal

}) =>([
    {
        title: 'Info',
        data: [
            { title: 'Basic Info', handleOnClick: '' },
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
            { title: 'Projects', handleOnClick: '' },
            { title: 'Publications', handleOnClick: '' },
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
  