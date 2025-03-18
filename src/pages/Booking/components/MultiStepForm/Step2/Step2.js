import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowRight,
  faArrowUp,
  faCalendarDays,
  faChevronLeft,
  faCircleInfo,
  faClock,
  faNoteSticky,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Step2.module.scss";

const cx = classNames.bind(styles);

const discountDays = [
  {
    day: "T3",
    date: "H.Nay",
    discount: 10,
    indicator: "down",
    available: true,
  },
  {
    day: "T4",
    date: "N.Mai",
    discount: 10,
    indicator: "down",
    available: true,
  },
  {
    day: "T5",
    date: "20/3",
    discount: 10,
    indicator: "down",
    available: true,
  },
  {
    day: "T6",
    date: "21/3",
    discount: 10,
    indicator: "down",
    available: true,
  },
  {
    day: "T7",
    date: "22/3",
    discount: 6,
    indicator: "up",
    available: true,
  },
  {
    day: "CN",
    date: "23/3",
    discount: 6,
    indicator: "up",
    available: false,
  },
  {
    day: "T2",
    date: "24/3",
    discount: 6,
    indicator: "up",
    available: false,
  },
];

const Step2 = ({
  formData,
  handleDateChange,
  calculateTotal,
  handleChange,
  handleNext,
  handleBack,
}) => (
  <div className={cx("wrapper")}>
    <div className={cx("header")}>
      <div className={cx("header-content")}>
        <button className={cx("back-btn")} onClick={handleBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h2 className={cx("header-title")}>Giúp việc ca lẻ</h2>
        <button className={cx("information-btn")}>
          <FontAwesomeIcon icon={faCircleInfo} />
        </button>
      </div>
    </div>

    <div className={cx("content-container")}>
      <div className={cx("work-schedule-section")}>
        <h4 className={cx("section-title")}>
          <span className={cx("title-icon")}>
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>
          Ngày làm việc
        </h4>
        <div className={cx("work-schedule-list")}>
          {discountDays.map((item) => {
            return (
              <div
                className={cx("work-schedule-item", {
                  "disabled-item": !item.available,
                  "selected-item": formData.date === item.date,
                })}
                onClick={() =>
                  handleDateChange(
                    item.date,
                    item.day,
                    item.discount,
                    item.indicator
                  )
                }
              >
                <div
                  className={cx(
                    "discount-percentage",
                    item.indicator === "down" ? "down" : "up"
                  )}
                >
                  <span className={cx("discount-icon")}>
                    {item.indicator === "down" ? (
                      <FontAwesomeIcon icon={faArrowDown} />
                    ) : (
                      <FontAwesomeIcon icon={faArrowUp} />
                    )}
                  </span>
                  {item.discount}%
                </div>
                <div
                  className={cx(
                    "discount-time",
                    item.available ? "available" : ""
                  )}
                >
                  <span className={cx("day")}>{item.day}</span>
                  <span className={cx("date")}>{item.date}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={cx("available-state")}>
          <div className={cx("available")}>
            <div className={cx("icon")}>A</div>
            <span className={cx("state")}>Sẵn sàng</span>
          </div>
          <div className={cx("unavailable")}>
            <div className={cx("icon")}>A</div>
            <span className={cx("state")}>Chờ xác nhận</span>
          </div>
        </div>
      </div>

      <div className={cx("work-time-section")}>
        <h4 className={cx("section-title")}>
          <span className={cx("title-icon")}>
            <FontAwesomeIcon icon={faClock} />
          </span>
          Giờ làm việc
        </h4>
        <button className={cx("work-time")}>8:00 - 10:00</button>
      </div>

      <div className={cx("note-section")}>
        <h4 className={cx("section-title")}>
          <span className={cx("title-icon")}>
            <FontAwesomeIcon icon={faNoteSticky} />
          </span>
          Ghi chú
        </h4>
        <div className={cx("note")}>
          <textarea
            className={cx("note-textarea")}
            placeholder="Nhập ghi chú để nhân viên có thể dễ dàng phục vụ bạn hơn"
            value={formData.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
          />
        </div>
      </div>

      <div className={cx("voucher-section")}>
        <h4 className={cx("section-title")}>
          <span className={cx("title-icon")}>
            <FontAwesomeIcon icon={faTicket} />
          </span>
          Mã khuyến mãi
        </h4>
        <div className={cx("voucher-list")}>
          <p className={cx("voucher-selection")}>
            Chọn mã khuyến mãi để được giảm giá
          </p>
          <button className={cx("voucher-selection-btn")}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className={cx("next-step-section")}>
        <p className={cx("overall-information")}>
          {formData.workers} nhân viên x {formData.hours}h
        </p>
        <button className={cx("next-btn")} onClick={handleNext}>
          <span className={cx("overall-price")}>
            {calculateTotal().toLocaleString()} đ / {formData.hours}h
          </span>
          <span className={cx("next")}>Tiếp tục</span>
        </button>
      </div>
    </div>
  </div>
);

export default Step2;
