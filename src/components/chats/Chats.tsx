import * as React from 'react';
import userAvatar from '../../assets/user_avatar.png';

import searchIcon from '../../assets/nav_search_icon.png'
import arrow from '../../assets/slide_arrow.png'

import './styles.scss';

export interface IChatsProps {
  selectChat: (id: number) => void;
}

export default function Chats(props: IChatsProps) {
  const [isOpenPeople, setIsOpenPeople] = React.useState(false);
  const [isOpenGroups, setIsOpenGroups] = React.useState(false);
  const [groupHeight, setGroupHeight] = React.useState<number | string>(170);
  const [peopleHeight, setPeopleHeight] = React.useState<number | string>(388);

  const styleGroupsToggleSlide = {
    overflow: "auto",
    maxHeight: isOpenGroups ? 0 : groupHeight,
    transition: "0.4s",
  };

  const stylePeopleToggleSlide = {
    overflow: "auto",
    maxHeight: isOpenPeople ? 0 : peopleHeight,
    transition: "0.4s",
  };

  const groupsToggleSlide = () => {
    setIsOpenGroups(prev => !prev);
    setPeopleHeight(535);

    if (!isOpenPeople && isOpenGroups) {
      setPeopleHeight(388);
      setGroupHeight(170);
    }

    if (isOpenPeople && !isOpenGroups) {
      setIsOpenPeople(prev => !prev)
    }
  }

  const peopleToggleSlide = () => {
    setIsOpenPeople(prev => !prev);
    setGroupHeight(535);

    if (isOpenPeople && !isOpenGroups) {
      setPeopleHeight(388);
      setGroupHeight(170);
    }

    if (!isOpenPeople && isOpenGroups) {
      setIsOpenGroups(prev => !prev)
    }
  }

  const [groups] = React.useState([
    {
      src: userAvatar,
      title: 'Friends Forever',
      message: 'Hahahahah!',
      time: 'Today, 9.52pm',
      unreadCount: 4,
    },
    {
      src: userAvatar,
      title: 'Friends Forever',
      message: 'Hahahahah!',
      time: 'Today, 9.52pm',
      unreadCount: 4,
    },
    {
      src: userAvatar,
      title: 'Friends Forever',
      message: 'Hahahahah!',
      time: 'Today, 9.52pm',
      unreadCount: 4,
    },
    {
      src: userAvatar,
      title: 'Friends Forever',
      message: 'Hahahahah!',
      time: 'Today, 9.52pm',
      unreadCount: 4,
    },
    {
      src: userAvatar,
      title: 'Friends Forever',
      message: 'Hahahahah!',
      time: 'Today, 9.52pm',
      unreadCount: 4,
    },
    {
      src: userAvatar,
      title: 'Friends Forever',
      message: 'Hahahahah!',
      time: 'Today, 9.52pm',
      unreadCount: 4,
    },
    {
      src: userAvatar,
      title: 'Friends Forever',
      message: 'Hahahahah!',
      time: 'Today, 9.52pm',
      unreadCount: 4,
    },
    {
      src: userAvatar,
      title: 'Friends Forever',
      message: 'Hahahahah!',
      time: 'Today, 9.52pm',
      unreadCount: 4,
    },
    {
      src: userAvatar,
      title: 'Friends Forever',
      message: 'Hahahahah!',
      time: 'Today, 9.52pm',
      unreadCount: 4,
    },
    {
      src: userAvatar,
      title: 'Friends Forever',
      message: 'Hahahahah!',
      time: 'Today, 9.52pm',
      unreadCount: 4,
    },
  ])

  console.log(`people ${isOpenPeople}`, `people ${isOpenGroups}`);
  return (
    <div className='chats'>
      <div className="search-chat">
        <img src={searchIcon} alt="searchIcon" /> <input type="text" placeholder='Search' />
      </div>

      <div className="groups" style={{ height: isOpenPeople ? '100%' : '', margin: '30px 0' }}>
        <div className='group-title'>
          <h3>Groups</h3>
          <img className={isOpenGroups ? 'toggle-up' : 'toggle-down'} width={20} height={20} onClick={groupsToggleSlide} src={arrow} alt="" />
        </div>

        <div style={styleGroupsToggleSlide} className="items">
          {
            groups.map((item, i) => {
              return (
                <div key={i} className="item">
                  <img src={item.src} alt="userAvatar" />
                  <div className='info'>
                    <div>
                      <div className='title'>{item.title}</div>
                      <div className='last-message'>{item.message}</div>
                    </div>

                    <div>
                      <div className='last-message-time'>{item.time}</div>
                      <div className='unread-count'>{item.unreadCount}</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="people" style={{ height: isOpenGroups ? '100%' : '' }}>
        <div className='group-title'>
          <h3>People</h3>
          <img className={isOpenPeople ? 'toggle-up' : 'toggle-down'} width={20} height={20} onClick={peopleToggleSlide} src={arrow} alt="" />
        </div>

        <div style={stylePeopleToggleSlide} className="items">
          {
            groups.map((item, i) => {
              return (
                <div key={i} className="item">
                  <img src={item.src} alt="userAvatar" />
                  <div className='info'>
                    <div>
                      <div className='title'>{item.title}</div>
                      <div className='last-message'>{item.message}</div>
                    </div>

                    <div>
                      <div className='last-message-time'>{item.time}</div>
                      <div className='unread-count'>{item.unreadCount}</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}


