import { Outlet } from 'react-router-dom';

import Footer from '../widgets/Footer'
import ResponsiveAppBar from '../widgets/ResponsiveAppBar'
import { Wrapp } from '../shared/ui/Wrapp';

export function Layout() {
    return (
        <>
            <ResponsiveAppBar />
            <Wrapp>
                <Outlet />
            </Wrapp>
            <Footer />
        </>
    )
}

export default Layout;
