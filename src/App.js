import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Error } from './Pages/Error';
import RestaurantMenu from './Pages/RestaurantMenu';
import UserContext from './utils/Contexts/UserContext';
import appStore from './utils/Store/appStore';
import Cart from './Pages/Cart';

const Grocery = lazy(() => import("./Pages/Grocery"))

const AppLayoutComponent = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        // after some auth calls we get user Details
        const data = {
            name: "Sudarshan"
        }
        setUserName(data.name);
    }, [])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className='app'>
                {/* <UserContext.Provider value={{loggedInUser: "Elon Musk"}}> */}
                    <Header></Header>
                {/* </UserContext.Provider> */}
                <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
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
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}> <Grocery /> </Suspense>
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