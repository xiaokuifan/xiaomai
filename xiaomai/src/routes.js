import Home from './Views/Home/Home';
import Login from './Views/Login/Login';
import Self from './Views/Self/Self';
import Page from './Views/Page/Page';
import About from './Views/About/About';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/self',
        component: Self

    },
    {
        path: '/page',
        component: Page

    },
    {
        path: '/about/:aid',
        component: About

    }
];

export default routes;