import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Step5.module.scss";
import {
  faCircleCheck,
  faCircleInfo,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Step5() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("header-content")}>
          <button className={cx("back-btn")} onClick={handleReturnHome}>
            <FontAwesomeIcon icon={faHouse} />
          </button>
          <h2 className={cx("header-title")}>Hoàn tất</h2>
          <button className={cx("information-btn")}>
            <FontAwesomeIcon icon={faCircleInfo} />
          </button>
        </div>
      </div>
      <div className={cx("content-container")}>
        <span className={cx("check-icon")}>
          <FontAwesomeIcon icon={faCircleCheck} />
        </span>
        <span className={cx("success-message")}>Đặt dịch vụ thành công</span>
      </div>
      <div className={cx("confirm-section")}>
        <button className={cx("confirm-btn")} onClick={handleReturnHome}>
          Đặt dịch vụ khác
        </button>
      </div>
    </div>
  );
}

export default Step5;
