import * as React from 'react';
import Chats from '../../components/chats/Chats';
import { Messenger } from '../../components/Messenger';
import Nav from '../../components/nav/Nav';

export interface IComputerProps {
    selectChat: (id: number) => void;
}

export default function Computer({ selectChat }: IComputerProps) {
    return (
        <React.Fragment>
            <Nav />
            <Chats selectChat={selectChat} />
            <Messenger />
        </React.Fragment>
    );
}
