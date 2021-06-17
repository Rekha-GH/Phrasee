import moment from 'moment-mini';

export function getDateDMMMMYYYY(date) {
    return moment(date).format('D MMMM YYYY');
}