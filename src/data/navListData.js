import Login from '../pages/Login';

const navListData = [
    {
    _id: 1,
    link: '#',
    name: `home`,
    active: true,
    },
    {
    _id: 2,
    link: '/Movies',
    name: `Movies`,
    active: false,
    },
    {
    _id: 3,
    link: '/tvshows',
    name: `tv Shows`,
    active: false,
    },
    {
    _id: 4,
    link: '/login',
    name: `Login`,
    component: 'Login',
    active: false,
    }
 ];

export default navListData;