import React from 'react';
import { useSelector } from 'react-redux';
import { getPatientsWithType } from '../Store/PatientSelector';
import Patient from './Patient';

const PatientBlock = React.memo(({ title, type }) => {
    const list = useSelector(getPatientsWithType(type));

    return (
        <>
            {list.length > 0 && <h4 className="patient-title">{title}</h4>}
            {list.map(patient => <Patient
                name={patient.name}
                joined={patient.joined}
                last_visit_date={patient.last_visit_date}
                is_completed={patient.is_completed}
            />)}
        </>
    );
});

PatientBlock.displayName = 'PatientBlock';
export default PatientBlock;