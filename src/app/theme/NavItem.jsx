import { Link, useMatch } from "react-router-dom";
// import { styled } from '@mui/material/styles';
import styled from "@emotion/styled";
import MenuItem from '@mui/material/MenuItem';

const CustomMenuItem = styled(MenuItem)`
    font-size: 14px;
`

const Privider = styled.div`
    margin: 0 auto;
    background: white;
    height: 1.5px;
    width: 21px;
`

const HeaderMenuLink = styled(Link)(
    ({ color }) =>
        `
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${color || 'white'};
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

export const HeaderMenuCustomLink = ({ color, children, id, to, ...props }) => {

    const match = useMatch(to)

    return (
        <CustomMenuItem key={id}>
            <HeaderMenuLink
                color={color && match ? color : 'white'}
                to={to}
                {...props}
            >
                {children}
            </HeaderMenuLink>
            {/* {match ? <Privider /> : ''} */}
        </CustomMenuItem>
    )
}

export const SideMenuCustomLink = ({ color, children, id, to, ...props }) => {

    const match = useMatch(to)

    return (
        <MenuItem key={id}>
            <SideMenuLink
                color={color && match ? color : 'white'}

                to={to}
                {...props}
            >
                {children}
            </SideMenuLink>
            {/* {match ? <Privider /> : ''} */}
        </MenuItem>
    )
}
