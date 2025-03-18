import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faCircleInfo,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Step3.module.scss";

const cx = classNames.bind(styles);

const Step3 = ({ formData, calculateTotal, handleBack, handleNext }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("header-content")}>
          <button className={cx("back-btn")} onClick={handleBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <h2 className={cx("header-title")}>Xác nhận dịch vụ</h2>
          <button className={cx("information-btn")}>
            <FontAwesomeIcon icon={faCircleInfo} />
          </button>
        </div>
      </div>
      <div className={cx("content-container")}>
        <div className={cx("shift-information")}>
          <h4 className={cx("section-title")}>
            <span className={cx("title-icon")}>
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
            Thông tin ca làm
          </h4>
          <div className={cx("location")}>
            số nhà 30 Bồ Đề, Bồ Đề, Long Biên, Hà Nội
          </div>
          <div className={cx("shift")}>
            <span className={cx("date")}>
              {formData.date === "H.Nay"
                ? "Hôm nay"
                : formData.date === "N.Mai"
                ? "Ngày mai"
                : formData.day === "T2"
                ? "Thứ Hai"
                : formData.day === "T3"
                ? "Thứ Ba"
                : formData.day === "T4"
                ? "Thứ Tư"
                : formData.day === "T5"
                ? "Thứ Năm"
                : formData.day === "T6"
                ? "Thứ Sáu"
                : formData.day === "T7"
                ? "Thứ Bảy"
                : "Chủ nhật"}
              , {formData.date}
            </span>
            <span
              className={cx("time")}
            >{`${formData.time} / ${formData.hours}h`}</span>
          </div>
          <div className={cx("note")}>
            {!!formData.notes ? formData.notes : "Không có ghi chú"}
          </div>
        </div>

        <div className={cx("service-information")}>
          <h4 className={cx("section-title")}>
            <span className={cx("title-icon")}>
              <FontAwesomeIcon icon={faWallet} />
            </span>
            Thông tin dịch vụ
          </h4>
          <div className={cx("service-fee")}>
            <span
              className={cx("service")}
            >{`Phí dịch vụ (${formData.workers} nhân viên x ${formData.hours}h x ${formData.area}m²)`}</span>
            <span className={cx("price")}>
              {calculateTotal().toLocaleString()}đ
            </span>
          </div>

          <div className={cx("optional-services")}>
            <p>Tuỳ chọn khác</p>
            <p className={cx("sub-text")}>
              Dụng cụ & chất tẩy rửa cơ bản{" "}
              <span className={cx("price")}>0 đ</span>
            </p>
          </div>

          <div className={cx("payment-summary")}>
            <p>Thanh toán</p>
            <p className={cx("total-service-fee")}>
              Tiền dịch vụ{" "}
              <span className={cx("price")}>
                {calculateTotal().toLocaleString()} đ
              </span>
            </p>
            <p className={cx("total")}>
              Tổng tiền{" "}
              <span className={cx("price")}>
                {calculateTotal().toLocaleString()} đ
              </span>
            </p>
          </div>
        </div>

        <div className={cx("next-step-section")}>
          <button className={cx("next-btn")} onClick={handleNext}>
            Xác nhận dịch vụ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
