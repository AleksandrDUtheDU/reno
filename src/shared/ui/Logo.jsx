import { SvgIcon } from '@mui/material';
import { ReactComponent as LogoSVG } from '../../resources/logo/renault-logo1.svg';

function Logo() {
    return (
        <SvgIcon sx={{ mr: 1, fontSize: 60 }}>
            <LogoSVG />
        </SvgIcon>
    );
}

export default Logo;