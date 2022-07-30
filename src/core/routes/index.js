import Homepage from "../../pages/homepage";
import Products from "../../pages/products";

export const routes = [
    {
        path: '/',
        component: <Homepage />
    },
    {
        path: '/homepage',
        component: <Homepage />
    },
    {
        path: '/products',
        component: <Products />
    }
]