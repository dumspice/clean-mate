import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import styles from "./NotAvailableModal.module.scss";
import images from "../../../assets/Images/images";

const cx = classNames.bind(styles);

function NotAvailableModal({onClose}) {
  return (
    <div className={cx("not-available-modal")}>
      <div className={cx("modal-container")}>
        <span className={cx("close-icon")} onClick={onClose}>
          <FontAwesomeIcon icon={faClose} />
        </span>
        <img src={images.logoTransparent} alt="logo" className={cx("logo")} />
        <h3 className={cx("not-available-title")}>Chức năng chưa sẵn sàng</h3>
        <p className={cx("not-available-text")}>
          Hãy cài app để có thể sử dụng chức năng này.
        </p>
        <button className={cx("not-available-button")}>Cài ngay</button>
      </div>
    </div>
  );
}

export default NotAvailableModal;
