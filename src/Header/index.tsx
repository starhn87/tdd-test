import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  let title = "에러";

  if (pathname === "/") {
    title = "할 일 목록";
  } else if (pathname === "/add") {
    title = "할 일 추가";
  } else if (pathname.startsWith("/detail")) {
    title = "할 일 상세";
  }

  return (
    <div>
      <div>{title}</div>
    </div>
  );
};

export default Header;
