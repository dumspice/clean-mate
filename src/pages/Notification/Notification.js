import classNames from "classnames/bind";

import styles from "./Notification.module.scss";

const cx = classNames.bind(styles);
function Notification() {
  return (
    <>
      <div className={cx("header")}>
        <h1 className={cx("header-title")}>Thông báo</h1>
      </div>
      <div className={cx("content")}>
        <h1>Bạn chưa có thông báo ngày hôm nay</h1>
      </div>
    </>
  );
}

export default Notification;
