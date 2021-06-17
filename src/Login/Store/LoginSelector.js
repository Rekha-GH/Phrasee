export function getSession(state) {
    if (state.session) {
        return state.session;
    }

    return undefined;
}