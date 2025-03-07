import classNames from "classnames/bind";

import styles from "./Account.module.scss";

const cx = classNames.bind(styles);
function Account() {
  return (
    <>
      <div className={cx("header")}>
        <h1 className={cx("header-title")}>Tài khoản</h1>
      </div>
    </>
  );
}

export default Account;
