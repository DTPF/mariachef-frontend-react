import { Outlet } from 'react-router-dom';
import HeaderMain from 'views/components/basic/layout/header';
import FooterBasic from 'views/components/basic/layout/footer/FooterBasic';
import './LayoutBasic.scss'
import { memo } from 'react';

function LayoutMain() {
  return (
    <div className='layout-basic'>
      <HeaderMain />
      <div className='layout-basic__main'>
        <Outlet />
      </div>
      <FooterBasic />
    </div>
  )
}

export default memo(LayoutMain)