import { Outlet } from 'react-router-dom';

import Footer from './Footer'
import ResponsiveAppBar from './ResponsiveAppBar'


export function Layout() {


    return (
        <>
            <ResponsiveAppBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;
