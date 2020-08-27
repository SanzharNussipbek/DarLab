import React, { useContext } from 'react';
import { UserInfo } from '../../types/Interfaces';
import { UserContext } from '../../services/context';

type Props = {

}

export const RoomHeader: React.FunctionComponent<Props> = () => {

    const userState = useContext(UserContext);

    return (
        userState && userState.user ? <h1>Welcome, {userState.user.firstname}!</h1> : null
    );
}