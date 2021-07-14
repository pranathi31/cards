import axios from 'axios';
export const getDetails = () =>
    axios.get(`https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20`);