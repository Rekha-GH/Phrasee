import React from 'react';
import { Row, Col } from 'antd';
import PatientBlock from './PatientBlock';
import { useSelector } from 'react-redux';
import { getType } from '../Store/PatientSelector';
import { getTypeName } from '../Utils/helper';


const PatientPage = React.memo(() => {
    const types = useSelector(getType);
    return (
        <Row>
            <Col span={12} offset={6}>
                <h2>Patients</h2>
                {types.map((type) => <PatientBlock key={type} title={getTypeName(type)} type={type} />)}
            </Col>
        </Row>
    );
});

PatientPage.displayName = 'PatientPage';
export default PatientPage;