import { Outlet } from 'react-router-dom';

import Footer from './Footer'
import ResponsiveAppBar from './ResponsiveAppBar'

import styled from "@emotion/styled";

const Wrapp = styled.div`
    margin-top: 60px;
`

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
