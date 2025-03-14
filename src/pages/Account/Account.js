import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faPhone,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Account.module.scss";
import {
  PERSONAL_ACTION,
  POLICY_ACTION,
  SUPPORT_ACTION,
  MAIN_ACTION,
} from "./constant";

const cx = classNames.bind(styles);
function Account() {
  return (
    <>
      <div className={cx("header")}>
        <h1 className={cx("header-title")}>Tài khoản</h1>
      </div>
      <div className={cx("content-wrapper")}>
        <div className={cx("main-information-section")}>
          <div className={cx("main-information")}>
            <img
              src="https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head.png"
              alt="User avatar"
              className={cx("avatar")}
            />
            <div className={cx("information")}>
              <h3 className={cx("name")}>Hoàng Tiến Dũng</h3>
              <p className={cx("information-content")}>
                <FontAwesomeIcon className={cx("icon")} icon={faPhone} />
                <span>0903700289</span>
              </p>
              <p className={cx("information-content")}>
                <FontAwesomeIcon className={cx("icon")} icon={faInbox} />
                <span>dzunghoang04@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className={cx("main-action")}>
          {MAIN_ACTION.map((item) => {
            return (
              <div className={cx("action-btn")}>
                <span className={cx("action-icon")}>{item.icon}</span>
                <p className={cx("action")}>{item.action}</p>
              </div>
            );
          })}
        </div>

        <div className={cx("personal-section")}>
          <h4 className={cx("section-title")}>Cá nhân</h4>
          <div className={cx("action-list")}>
            {PERSONAL_ACTION.map((item) => {
              return (
                <div className={cx("action-item")}>
                  <span className={cx("action-icon")}>{item.icon}</span>
                  <span className={cx("action-content")}>{item.action}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={cx("policy-section")}>
          <h4 className={cx("section-title")}>
            Quy trình, điều khoản & chính sách
          </h4>
          <div className={cx("action-list")}>
            {POLICY_ACTION.map((item) => {
              return (
                <div className={cx("action-item")}>
                  <span className={cx("action-icon")}>{item.icon}</span>
                  <span className={cx("action-content")}>{item.action}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={cx("support-section")}>
          <h4 className={cx("section-title")}>Trợ giúp & Hỗ trợ</h4>
          <div className={cx("action-list")}>
            {SUPPORT_ACTION.map((item) => {
              return (
                <div className={cx("action-item")}>
                  <span className={cx("action-icon")}>{item.icon}</span>
                  <span className={cx("action-content")}>{item.action}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={cx("logout-section")}>
          <button className={cx("logout-btn")}>
            <span className={cx("logout-icon")}>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </span>
            Đăng xuất
          </button>
        </div>
      </div>
    </>
  );
}

export default Account;
