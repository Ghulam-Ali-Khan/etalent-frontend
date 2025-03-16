import FormikAutoCompleteSelect from '@/components/form/FormikSelect';
import { fetchSkillsData } from '@/services/public/axios/getSkills';
import React, { useEffect, useMemo, useState } from 'react'

const SkillsField = () => {
    // states
    const [searchSkill, setSearchSkill] = useState('');
    const [skillsData, setSkillsData] = useState([]);

    // options Maker
    const skillsOptions = useMemo(() => skillsData.map(item => (
        {
            label: item?.name,
            value: item?.name,
        }
    )), [skillsData]);


    useEffect(() => {
        const fetchSkills = async () => {
            const skills = await fetchSkillsData(searchSkill);
            setSkillsData(skills?.data || []);
        };

        fetchSkills();
    }, [searchSkill]);

    return (
        <FormikAutoCompleteSelect
            name='name'
            label='Skill'
            options={skillsOptions}
            onChangeInput={(value) => setSearchSkill(value)}
            isRequired
        />
    )
}

export default SkillsField
