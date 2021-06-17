import { createSlice } from '@reduxjs/toolkit';

const initialSession = {
    session: undefined,
}

function setSessionProcess(state, action) {
    state.session = action.payload;
}

const sessionSlice = createSlice({
    name: 'session',
    initialState: initialSession,
    reducers: {
        setSession: setSessionProcess,
    },
});

export default sessionSlice;