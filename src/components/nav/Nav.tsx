import * as React from 'react';
import navAvatar from '../../assets/avatar.png'
import navChats from '../../assets/nav_chats.png'
import navHome from '../../assets/nav_home.png'
import navLogout from '../../assets/nav_logout.png'
import navNotifications from '../../assets/nav_notifications.png'
import navSettings from '../../assets/nav_settings.png'

import './styles.scss';
import './adaptive.styles.scss';

export interface INavProps {

}

type LinkType = {
  select: boolean;
  src: string;
  alt: string;
}

export default function Nav(props: INavProps) {

  const [links, setLinks] = React.useState<LinkType[]>([
    {
      select: true,
      src: navHome,
      alt: 'home'
    },
    {
      select: false,
      src: navChats,
      alt: 'chats'
    },
    {
      select: false,
      src: navNotifications,
      alt: 'notifications'
    },
    {
      select: false,
      src: navSettings,
      alt: 'settings'
    },
  ])

  const handleSelect = (link: LinkType) => {
    const select = links.map(el => el.alt === link.alt ? { ...el, select: true } : { ...el, select: false })

    setLinks(select)
  }

  return (
    <nav>
      <div className="avatar">
        <img src={navAvatar} alt="avatar" />
      </div>

      <div className='assets'>
        {links.map((link) => {
          return <div onClick={() => handleSelect(link)} key={link.alt} className={link.select ? 'nav-links select select-after' : 'nav-links noSelect'}><img className='block' src={link.src} alt={link.alt} /></div>
        })}
      </div>

      <div className='nav-links logout'><img src={navLogout} alt="navLogout" /></div>
    </nav>
  );
}
