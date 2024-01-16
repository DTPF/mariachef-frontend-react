import { Outlet } from 'react-router-dom';
import HeaderMain from 'views/components/basic/layout/header';
import FooterBasic from 'views/components/basic/layout/footer/FooterBasic';
import './LayoutBasic.scss'
import { memo } from 'react';
import useWindowSizeReport from 'hooks/useWindowSizeReport';
import MenuBottom from 'views/components/basic/layout/menuBottom/MenuBottom';

function LayoutMain() {
  const [isMobile] = useWindowSizeReport()
  return (
    <div className='layout-basic'>
      <HeaderMain />
      <div className='layout-basic__main'>
        <Outlet />
      </div>
      {!isMobile ? <FooterBasic /> : <MenuBottom />}
    </div>
  )
}

export default memo(LayoutMain)