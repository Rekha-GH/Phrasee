export function getPatientsWithType(type) {
    return (state) => {
        if (state.patient.patients) {
            return state.patient.patients
                .filter(patient => !patient.is_completed && patient.type === type)
                .sort((a, b) => Date.parse(a.last_visit_date) - Date.parse(b.last_visit_date));
        }

        return [];
    }
}

export function getType(state) {
    const setList = new Set();

    state.patient.patients.forEach(x => {
        if (!x.is_completed) {
            setList.add(x.type);
        }
    });

    return Array.from(setList);
}