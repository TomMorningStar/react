import { Fragment, useCallback, useState } from 'react';
import Media from 'react-media'
import Chats from './components/chats/Chats';
import IsMobile from './versions/mobile/IsMobile';
import { Messenger } from './components/Messenger';
import Nav from './components/nav/Nav';
import Computer from './versions/computer/Сomputer';
export interface ILayoutProps {
}

export default function Layout(props: ILayoutProps) {

    const innerWidths = {
        small: "(max-width: 599px)",
        large: "(min-width: 600px) and (max-width: 4400px)"
    }

    const [select, setSelect] = useState<any>(null);

    const selectChat = useCallback((id: any) => {
        setSelect(id)
        console.log('sa');

    }, [])

    return (
        <main>
            <Media queries={innerWidths}>
                {matches => (
                    <Fragment>
                        {matches.small && <IsMobile selectChat={selectChat} select={select} />}
                        {matches.large && <Computer selectChat={selectChat} /> }
                    </Fragment>
                )}
            </Media>
        </main>
    );
}
