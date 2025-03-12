import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faCreditCard,
  faEnvelope,
  faFile,
  faGavel,
  faHeart,
  faHeartBroken,
  faInbox,
  faLocationDot,
  faMoneyBill,
  faPhone,
  faQrcode,
  faQuestion,
  faRightFromBracket,
  faSitemap,
  faTicketSimple,
  faUserGroup,
  faUsersRectangle,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Account.module.scss";

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
          <div className={cx("action-btn")}>
            <span className={cx("action-icon")}>
              <FontAwesomeIcon icon={faQrcode} />
            </span>
            <p className={cx("action")}>Quét QR đặt nhân viên</p>
          </div>
          <div className={cx("action-btn")}>
            <span className={cx("action-icon")}>
              <FontAwesomeIcon icon={faUserGroup} />
            </span>
            <p className={cx("action")}>Nhóm khách hàng thân thiết</p>
          </div>
          <div className={cx("action-btn")}>
            <span className={cx("action-icon")}>
              <FontAwesomeIcon icon={faMoneyBill} />
            </span>
            <p className={cx("action")}>Nạp tiền</p>
          </div>
          <div className={cx("action-btn")}>
            <span className={cx("action-icon")}>
              <FontAwesomeIcon icon={faTicketSimple} />
            </span>
            <p className={cx("action")}>Kho voucher</p>
          </div>
        </div>

        <div className={cx("personal-section")}>
          <h4 className={cx("section-title")}>Cá nhân</h4>
          <div className={cx("action-list")}>
            <div className={cx("action-item")}>
              <span className={cx("action-icon")}>
                <FontAwesomeIcon icon={faSitemap} />
              </span>
              <span className={cx("action-content")}>
                Mã giới thiệu của tôi
              </span>
            </div>

            <div className={cx("action-item")}>
              <span className={cx("action-icon")}>
                <FontAwesomeIcon icon={faCreditCard} />
              </span>
              <span className={cx("action-content")}>Lịch sử thanh toán</span>
            </div>

            <div className={cx("action-item")}>
              <span className={cx("action-icon")}>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <span className={cx("action-content")}>Địa chỉ đã lưu</span>
            </div>

            <div className={cx("action-item")}>
              <span className={cx("action-icon")}>
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <span className={cx("action-content")}>Nhân viên yêu thích</span>
            </div>

            <div className={cx("action-item")}>
              <span className={cx("action-icon")}>
                <FontAwesomeIcon icon={faHeartBroken} />
              </span>
              <span className={cx("action-content")}>Nhân viên đã chặn</span>
            </div>
          </div>
        </div>

        <div className={cx("policy-section")}>
          <h4 className={cx("section-title")}>
            Quy trình, điều khoản & chính sách
          </h4>
          <div className={cx("action-list")}>
            <div className={cx("action-item")}>
              <span className={cx("action-icon")}>
                <FontAwesomeIcon icon={faFile} />
              </span>
              <span className={cx("action-content")}>
                Quyền lợi của khách hàng
              </span>
            </div>

            <div className={cx("action-item")}>
              <span className={cx("action-icon")}>
                <FontAwesomeIcon icon={faGavel} />
              </span>
              <span className={cx("action-content")}>Pháp lý</span>
            </div>

            <div className={cx("action-item")}>
              <span className={cx("action-icon")}>
                <FontAwesomeIcon icon={faUsersRectangle} />
              </span>
              <span className={cx("action-content")}>
                Quy trình đào tạo nhân viên giúp việc
              </span>
            </div>
          </div>
        </div>

        <div className={cx("support-section")}>
          <h4 className={cx("section-title")}>Trợ giúp & Hỗ trợ</h4>
          <div className={cx("action-list")}>
            <div className={cx("action-item")}>
              <span className={cx("action-icon")}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className={cx("action-content")}>Trung tâm hỗ trợ</span>
            </div>

            <div className={cx("action-item")}>
              <span className={cx("action-icon")}>
                <FontAwesomeIcon icon={faQuestion} />
              </span>
              <span className={cx("action-content")}>Câu hỏi thường gặp</span>
            </div>

            <div className={cx("action-item")}>
              <span className={cx("action-icon")}>
                <FontAwesomeIcon icon={faComment} />
              </span>
              <span className={cx("action-content")}>
                Góp ý, khiếu nại, hỗ trợ qua App
              </span>
            </div>
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
