import { UserOutlined } from '@ant-design/icons';
import './LoginIcon.scss'
import { useAuth0 } from '@auth0/auth0-react';
import { memo, useContext } from 'react';
import UserContext from 'context/user/UserContext';
import { Avatar, Popover } from 'antd';

function LoginIcon() {
  const { loginWithRedirect, logout } = useAuth0()
  const { user } = useContext(UserContext)

  const content = (
    <div>
      <p>Mi cuenta</p>
      <p onClick={() => logout()} style={{ cursor: 'pointer' }}>Cerrar sesión</p>
    </div>
  );

  return (
    <div className='login-icon'>
      {user._id ? (
        <Popover content={content} title={user.email}>
          <Avatar size={64} src={user.avatar} />
        </Popover>
      ) : (
        <Avatar size={64} icon={<UserOutlined onClick={() => loginWithRedirect()} />} />
      )}
    </div>
  );
}

export default memo(LoginIcon)