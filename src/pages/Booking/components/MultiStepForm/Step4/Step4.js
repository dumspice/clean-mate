import { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronLeft, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import styles from "./Step4.module.scss";
import images from "../../../../../assets/Images/images";

const cx = classNames.bind(styles);

const paymentMethods = [
  {
    id: 1,
    name: "Chuyển khoản",
    guide: "Qua ngân hàng",
    image: images.bankTransfer,
    active: true,
  },
  {
    id: 2,
    name: "Thẻ ATM/Visa/Master/QR",
    image: images.vnPay,
    active: false,
  },
  {
    id: 3,
    name: "Ví MoMo",
    guide: "Qua ứng dụng MoMo",
    image: images.momo,
    active: false,
  },
  {
    id: 4,
    name: "Tiền mặt",
    guide: "Thanh toán khi nhân viên tới làm",
    image: images.cashPayment,
    active: false,
  },
];

function Step4({ formData, calculateTotal, handleBack, handleNext }) {
  const [isActive, setIsActive] = useState(1);

  const handleSetActive = (item) => {
    setIsActive(item.id);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("header-content")}>
          <button className={cx("back-btn")} onClick={handleBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <h2 className={cx("header-title")}>Thanh Toán</h2>
          <button className={cx("information-btn")}>
            <FontAwesomeIcon icon={faCircleInfo} />
          </button>
        </div>
      </div>
      <div className={cx("content-container")}>
        <div className={cx("payment-methods")}>
          {paymentMethods.map((item) => (
            <div
              className={cx("payment-item", {
                active: isActive === item.id,
              })}
              onClick={() => handleSetActive(item)}
            >
              <img
                src={item.image}
                alt="Thanh toán bằng tiền mặt"
                className={cx("payment-image")}
              />
              <div className={cx("payment-content")}>
                <span className={cx("payment-name")}>{item.name}</span>
                {item.guide && (
                  <span className={cx("payment-guide")}>{item.guide}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={cx("next-step-section")}>
          <div className={cx("total-price")}>
            <span className={cx("price-label")}>
              Tổng tiền phải thanh toán:
            </span>
            <span className={cx("price-value")}>
              {calculateTotal().toLocaleString()}đ
            </span>
          </div>
          <button className={cx("next-btn")} onClick={handleNext}>
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step4;
