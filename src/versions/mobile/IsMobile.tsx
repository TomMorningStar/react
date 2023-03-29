import * as React from 'react';
import Chats from '../../components/chats/Chats';
import { Messenger } from '../../components/Messenger';

export interface IIsMobileProps {
    select?: null | boolean;
    selectChat: (id: number) => void;
}

export default function IsMobile ({selectChat, select}: IIsMobileProps) {
  return <>{select ? <Messenger /> : <Chats selectChat={selectChat} />}</>;
}
