import Homepage from "../../pages/homepage";
import Products from "../../pages/products";
import SideMenu from "../../shared/sidemenu";

export const routes = [
    {
        path: '/',
        name: "Home",
        component: <Homepage />,
        icon: 'home',
        show: false
    },
    {
        path: '/homepage',
        name: "Home",
        component: <Homepage />,
        icon: 'home',
        show: true
    },
    {
        path: '/products',
        name: "Products",
        component: <Products />,
        icon: 'list',
        show: true
    }
]