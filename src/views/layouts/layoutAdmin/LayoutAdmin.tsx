import { memo } from "react";
import { Outlet } from "react-router-dom";

function LayoutAdmin() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default memo(LayoutAdmin);