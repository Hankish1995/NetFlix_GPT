import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../appLayout/AppLayout";
import Login from "../Auth/Login";
import Browse from "../Browse/Browse";

const AppRouter = () => {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Login />
                },
                {
                    path: "browse",
                    element: <Browse />
                }
            ]
        },
    ])
    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}



export default AppRouter