import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import config from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Navigation.module.scss";
import {
  faCalendarDays,
  faHeart,
  faHouse,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Navigation() {
  const navItems = [
    {
      icon: <FontAwesomeIcon icon={faHouse} />,
      label: "Đặt DV",
      path: config.routes.booking,
    },
    {
      icon: <FontAwesomeIcon icon={faCalendarDays} />,
      label: "Lịch sử",
      path: config.routes.history,
    },
    {
      icon: <FontAwesomeIcon icon={faHeart} />,
      label: "NV Ưu thích",
      path: config.routes.favourite,
    },
    {
      icon: <FontAwesomeIcon icon={faBell} />,
      label: "Thông báo",
      path: config.routes.notification,
    },
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      label: "Tài khoản",
      path: config.routes.account,
    },
  ];

  return (
    <nav className={cx("navigation")}>
      {navItems.map((item, index) => (
        <Link key={index} to={item.path} className={cx("nav-item")}>
          <div
            className={cx("nav-content", {
              active: window.location.pathname === item.path,
            })}
          >
            <span className={cx("nav-icon")}>{item.icon}</span>
            <span className={cx("nav-label")}>{item.label}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
