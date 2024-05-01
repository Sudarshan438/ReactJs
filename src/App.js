import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Error } from './Pages/Error';
import RestaurantMenu from './Pages/RestaurantMenu';

const AppLayoutComponent = () => {
    return (
        <div className='app'>
            <Header></Header>
            <Outlet />
        </div>
    )
}

const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayoutComponent />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
/**
 * render function takes the React element as an argument and adds it to the DOM
 */
root.render(<RouterProvider router={appRoutes} />);