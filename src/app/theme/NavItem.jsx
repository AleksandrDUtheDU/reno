import { Link, useMatch } from "react-router-dom";
// import { styled } from '@mui/material/styles';
import styled from "@emotion/styled";
import MenuItem from '@mui/material/MenuItem';

const CustomMenuItem = styled(MenuItem)`
    font-size: 14px;
`

// const CustomMenuItem = styled(MenuItem)(({ theme, match }) => `
//     background: ${match && theme.palette.primary.main};
//     font-size: 14px;
// `
// )

const HeaderMenuLink = styled(Link)(
    ({ color }) =>
        `
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${color};
`,
)

const SideMenuLink = styled(Link)`
    margin-top: 20px;
    text-decoration: none;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: black;
`

export const HeaderMenuCustomLink = ({ children, id, to, ...props }) => {

    const match = useMatch(to)
    return (
        <CustomMenuItem key={id}>
            <HeaderMenuLink
                color={match ? 'black' : 'white'}
                to={to}
                {...props}
            >
                {children}
            </HeaderMenuLink>
        </CustomMenuItem>
    )
}

export const SideMenuCustomLink = ({ children, id, to, ...props }) => {

    // const match = useMatch(to)
    return (
        <CustomMenuItem
            // match={match} 
            key={id}
        >
            <SideMenuLink
                to={to}
                {...props}
            >
                {children}
            </SideMenuLink>
        </CustomMenuItem>
    )
}
