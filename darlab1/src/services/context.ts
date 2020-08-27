import React from 'react';
import { UserInfo } from '../types/Interfaces';

export interface UserContext {
    user: UserInfo | null;
    setUser: (user: UserInfo) => void;
}

export const UserContext = React.createContext<UserContext | null>(null);