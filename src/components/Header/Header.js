import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faWallet } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import config from "../../config";
import Sale from "./Sale/Sale";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <div className={cx("container")}>
        <Link to={config.routes.account}>
          <img
            className={cx("image")}
            src="https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head.png"
            alt="avatar"
          />
        </Link>
        <div className={cx("content")}>
          <span>Chào bạn, Hoàng Tiến Dũng</span>
          <span>
            -- <FontAwesomeIcon icon={faStar} />{" "}
            <FontAwesomeIcon icon={faWallet} />
            {"100000đ"}
          </span>
          <span>số nhà 30, Bồ Đề, Long Biên, Hà Nội</span>
        </div>
      </div>
      <Sale />
    </header>
  );
}

export default Header;
