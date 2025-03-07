import classNames from "classnames/bind";

import styles from "./Favourite.module.scss";

const cx = classNames.bind(styles);

function Favourite() {
  return (
    <>
      <div className={cx("header")}>
        <h1 className={cx("header-title")}>Nhân viên ưu thích</h1>
      </div>
    </>
  );
}

export default Favourite;
