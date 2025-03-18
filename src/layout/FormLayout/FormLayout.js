import classNames from "classnames/bind";

import styles from "./FormLayout.module.scss";

const cx = classNames.bind(styles);
function NonHeaderLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content-container")}>{children}</div>
    </div>
  );
}

export default NonHeaderLayout;
