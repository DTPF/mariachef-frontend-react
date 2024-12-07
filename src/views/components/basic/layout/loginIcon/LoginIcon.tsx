import { UserOutlined } from '@ant-design/icons';
import './LoginIcon.scss'
import { useAuth0 } from '@auth0/auth0-react';
import { memo, useCallback, useContext, useMemo } from 'react';
import UserContext from 'context/user/UserContext';
import { Avatar, Popover } from 'antd';
import { adminRole } from 'context/user/constants';
import { basePath } from 'api/utils/config';

function LoginIcon() {
  const { loginWithRedirect } = useAuth0()
  const { user, logout } = useContext(UserContext)
  
  const handleLogout = useCallback(() => {
    logout()
  }, [])

  const content = useMemo(() => {
    return (
      <div>
        <p>Mi cuenta</p>
        {user.role === adminRole && (
          <p>Admin</p>
        )}
        <p onClick={handleLogout} style={{ cursor: 'pointer' }}>Cerrar sesión</p>
      </div>
    );
  }, [handleLogout, user.role])

  return (
    <div className='login-icon'>
      {user._id ? (
        <Popover content={content} title={user.email} placement="bottomRight">
          <Avatar size={48} src={`${basePath}/user-avatar/${user.avatar}`} />
        </Popover>
      ) : (
        <Avatar size={48} icon={<UserOutlined />} onClick={() => loginWithRedirect()} />
      )}
    </div>
  );
}

export default memo(LoginIcon)