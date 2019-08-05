import Home from './Views/Home/Home';
import About from './Views/About/About';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about',
        component: About
        
    }
];

export default routes;