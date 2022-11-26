import React, { useEffect } from 'react';
import { SetLogOut } from '../../helpers/SetLogOut';

const LogOut: React.FC<{}> = () => {
    useEffect(() => {
        SetLogOut();
    }, []);

    return(
        <></>
    )
}

export default LogOut;