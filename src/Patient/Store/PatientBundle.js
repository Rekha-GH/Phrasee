import { createSlice } from '@reduxjs/toolkit';

const initialPatients = {
    patients: [],
}

function setPatientsProcess(state, action) {
    state.patients = action.payload;
}

const patientsSlice = createSlice({
    name: 'patients',
    initialState: initialPatients,
    reducers: {
        setPatients: setPatientsProcess,
    },
});

export default patientsSlice;