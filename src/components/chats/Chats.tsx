import * as React from 'react';

import userAvatar from '../../assets/user_avatar.png';
import searchIcon from '../../assets/nav_search_icon.png'
import arrow from '../../assets/slide_arrow.png'

import './styles.scss';
import './adaptive.styles.scss';

export default function Chats() {
  const [isOpenPeople, setIsOpenPeople] = React.useState(false);
  const [isOpenGroups, setIsOpenGroups] = React.useState(false);

  const groupsToggleSlide = () => {
    setIsOpenGroups(prev => !prev);

    if (isOpenPeople && !isOpenGroups) {
      setIsOpenPeople(prev => !prev)
    }
  }

  const peopleToggleSlide = () => {
    setIsOpenPeople(prev => !prev);

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
  ]);

  return (
    <div className='chats'>
      <div className="search-chat">
        <img src={searchIcon} alt="searchIcon" /> <input type="text" placeholder='Search' />
      </div>

      <div className="groups">
        <div className='group-title'>
          <h3>Groups</h3>
          <img className={isOpenGroups ? 'toggle-up' : 'toggle-down'} width={20} height={20} onClick={groupsToggleSlide} src={arrow} alt="" />
        </div>

        <div className={isOpenGroups ? "items groups_off" : `items ${isOpenPeople ? 'groups_oped' : ''}`} >
          {
            groups.map((item, i) => {
              return (
                <div key={i} className="item">
                  <img src={item.src} alt="userAvatar" />
                  <div className='info'>
                    <div className='block'>
                      <div className='title'>{item.title}</div>
                      <div className='last-message'>{item.message}</div>
                    </div>

                    <div className='block'>
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

      <div className="people">
        <div className='group-title'>
          <h3>People</h3>
          <img className={isOpenPeople ? 'toggle-up' : 'toggle-down'} width={20} height={20} onClick={peopleToggleSlide} src={arrow} alt="" />
        </div>

        <div className={isOpenPeople ? "items people_off" : `items ${isOpenGroups ? 'people_oped' : ''}`}>
          {
            groups.map((item, i) => {
              return (
                <div key={i} className="item">
                  <img src={item.src} alt="userAvatar" />
                  <div className='info'>
                    <div className='block'>
                      <div className='title'>{item.title}</div>
                      <div className='last-message'>{item.message}</div>
                    </div>

                    <div className='block'>
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


