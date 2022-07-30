import Homepage from "../../pages/homepage";
import Products from "../../pages/products";
import SideMenu from "../../shared/sidemenu";

export const routes = [
    {
        path: '/',
        name: "Side Menu",
        component: <SideMenu />
    },
    {
        path: '/homepage',
        name: "Home",
        component: <Homepage />
    },
    {
        path: '/products',
        name: "Products",
        component: <Products />
    }
]