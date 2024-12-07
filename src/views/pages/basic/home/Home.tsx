import RecipesComponent from 'views/components/basic/recipes'
import './Home.scss'
import { memo, useContext } from 'react'
import { basePath } from 'api/utils/config';
import UserContext from 'context/user/UserContext';

function Home() {
  const { user } = useContext(UserContext)
  
  return (
    <div className='web-home'>
      <h1>Recetas MSR</h1>
      <img src={`${basePath}/user-avatar/${user.avatar}`} alt='logo' />
      <RecipesComponent />
    </div>
  )
}

export default memo(Home)