import { Link, useMatch } from "react-router-dom";
import styled from "@emotion/styled";
import { Button } from "@mui/material";


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

const DefaultLink = styled(Link)`
    text-decoration: none;
    color: white;
`

export const HeaderMenuCustomLink = ({ children, id, to, ...props }) => {

    const match = useMatch(to)
    return (
        <HeaderMenuLink
            color={match ? 'black' : 'white'}
            to={to}
            {...props}
        >
            {children}
        </HeaderMenuLink>
    )
}

export const SideMenuCustomLink = ({ children, id, to, ...props }) => {

    return (
        <SideMenuLink
            to={to}
            {...props}
        >
            {children}
        </SideMenuLink>
    )
}

export const ButtonLink = ({ children, to, ...props }) => {

    return (
        <Button
            {...props}
        >
            <DefaultLink
                to={to}
            >
                {children}
            </DefaultLink>
        </Button>
    )
}

