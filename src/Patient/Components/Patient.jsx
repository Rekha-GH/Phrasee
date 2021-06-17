import React from 'react';
import { getDateDMMMMYYYY } from '../../Common/Utils/DateUtils';

const Patient = React.memo(({ name, joined, last_visit_date, is_completed }) => {
    return (
        <div className={'patient-item'}>
            name: {name}<br />
            joined: {getDateDMMMMYYYY(joined)}<br />
            Last visit: {getDateDMMMMYYYY(last_visit_date)}<br />
            Completed: {is_completed ? 'yes' : 'no'}
        </div>
    );
});

Patient.displayName = 'Patient';
export default Patient;