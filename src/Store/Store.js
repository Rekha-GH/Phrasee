import { configureStore } from '@reduxjs/toolkit'
import sessionSlice from '../Login/Store/LoginBundle'
import patientsSlice from '../Patient/Store/PatientBundle'

const store = configureStore({
    reducer: {
        session: sessionSlice.reducer,
        patient: patientsSlice.reducer,
    },
})

export default store