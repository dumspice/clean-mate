import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Header from "../../components/Header";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("content-container")}>{children}</div>
      <Navigation />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
