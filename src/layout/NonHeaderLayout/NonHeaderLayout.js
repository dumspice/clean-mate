import classNames from "classnames/bind";

import styles from "./NonHeaderLayout.module.scss";
import Navigation from "../../components/Navigation/Navigation";

const cx = classNames.bind(styles);
function NonHeaderLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content-container")}>{children}</div>
      <Navigation />
    </div>
  );
}

export default NonHeaderLayout;
