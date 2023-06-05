import * as React from 'react';

import arrowLeft from '../../assets/nav_arrow_left.png';
import userAvatar from '../../assets/user_avatar.png';

import './styles.scss'
import './adaptive.styles.scss'

export function Messenger() {
  return (
    <div className='messenger-container'>
      <div className="info">

        <div className="arrow-left">
          <img width={30} src={arrowLeft} alt="arrowLeft" />
        </div>

        <div className="avatar">
          <img src={userAvatar} alt="userAvatar" />
        </div>

        <div className="title">
          Anil
        </div>
      </div>

      <div className="message-list">
        <div className="message">
          <div className="sent">Sent Sent Sent Sent</div>
        </div>
        <div className="message">
          <div className="received">received received received received</div>
        </div>
        <div className="message">
          <div className="sent">Sent Sent Sent Sent</div>
        </div>
        <div className="message">
          <div className="received">received received received received</div>
        </div>
        <div className="message">
          <div className="sent">Sent Sent Sent Sent</div>
        </div>
        <div className="message">
          <div className="received">received received received received</div>
        </div>
        <div className="message">
          <div className="sent">Sent Sent Sent Sent</div>
        </div>
        <div className="message">
          <div className="received">received received received received</div>
        </div>
        <div className="message">
          <div className="sent">Sent Sent Sent Sent</div>
        </div>
        <div className="message">
          <div className="received">received received received received</div>
        </div>
        <div className="message">
          <div className="sent">Sent Sent Sent Sent</div>
        </div>
        <div className="message">
          <div className="received">received received received received</div>
        </div>
        <div className="message">
          <div className="sent">Sent Sent Sent Sent</div>
        </div>
        <div className="message">
          <div className="received">received received received received</div>
        </div>
        <div className="message">
          <div className="sent">Sent Sent Sent Sent</div>
        </div>
        <div className="message">
          <div className="received">received received received received</div>
        </div>
      </div>

      <form action="">
        <div className='input-wrapper'>
          <input type="text" placeholder='Type your message here...' />
          <button type='submit'>

            <svg version="1.1" id="Layer_1" width="30px" height="30px" viewBox="0 0 40 40" >
              <path fill='#FFFFFF' d="M22.672,29.195l-7.148,3.457c-0.331-0.021-0.63-0.235-0.951-0.766L5,6.985  c0.013-0.354,0.356-0.697,0.778-0.697l28.958,15.838c0.131,0.141,0.304,0.615,0.256,0.94c-0.018,0.122-0.063,0.202-0.135,0.239  l-6.256,3.024v5.654c0,0.926-0.731,1.685-1.646,1.726L22.672,29.195z M23.732,28.689l2.346,2.471  c0.339,0.345,0.504,0.492,0.673,0.492h0.001c0.115,0,0.261-0.062,0.297-0.363c0.016-0.135,0.018-0.341,0.018-0.622v-3.22  l0.012-0.011l0.012-0.133l-0.014-0.102l-0.007-0.004l-0.003-0.651l-0.003,0.002c0.008-0.487,0.029-1.026,0.029-1.026l0.005-0.103  l-8.106-5.941l-0.256,0.283l5.957,6.661l0.036-0.019l0.786,0.937l0.293,0.328L23.732,28.689z M9.12,9.995  c-0.448,0-0.812,0.363-0.812,0.811l7.175,18.895c0.195,0.325,0.464,0.665,0.957,0.665l6.112-2.922l0.146-0.038l1.488-0.735  l-9.567-10.689l13.229,8.908l3.224-1.551c0.103-0.054,0.224-0.163,0.259-0.392c0.043-0.292-0.086-0.704-0.281-0.898L9.169,9.995  H9.12z" />
            </svg>

          </button>
        </div>
      </form>


    </div>
  );
}

