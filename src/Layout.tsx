import React from 'react';
import Chats from './components/chats/Chats';
import { Messenger } from './components/messenger/Messenger';
import Nav from './components/nav/Nav';


export default function Layout() {
    return (
        <main>
            <React.Fragment>
                <Nav />
                <Chats />
                <Messenger />
            </React.Fragment>
        </main>
    );
}
