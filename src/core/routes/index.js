import Homepage from "../../pages/homepage";
import Products from "../../pages/products";
import SideMenu from "../../shared/sidemenu";

export const routes = [
    {
        path: '/',
        name: "Side Menu",
        component: <SideMenu />,
        icon: 'home'
    },
    {
        path: '/homepage',
        name: "Home",
        component: <Homepage />,
        icon: 'home'
        
    },
    {
        path: '/products',
        name: "Products",
        component: <Products />,
        icon: 'list'
    }
]