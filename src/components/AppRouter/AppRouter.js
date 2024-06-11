import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../appLayout/AppLayout";
import Login from "../Auth/Login";
import Browse from "../Browse/Browse";
import MoviePlayer from "../moviePlayer/MoviePlayer";


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
                    path: "/browse",
                    element: <Browse />
                },
                {
                    path: "/watch-movie",
                    element: <MoviePlayer />
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