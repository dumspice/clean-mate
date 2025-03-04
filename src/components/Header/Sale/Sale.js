// components/FlashSale.js
import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

import styles from "./Sale.module.scss";
import SaleItem from "./SaleItem";

const cx = classNames.bind(styles);

function FlashSale() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup timer on unmount
    return () => clearInterval(timer);
  });

  function calculateTimeLeft() {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 1); // Đếm ngược 1 giờ (có thể thay đổi)
    const difference = endTime - new Date();

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("flash-sale")}>
        <div className={cx("flash-sale-label")}>
          <FontAwesomeIcon icon={faBolt} className={cx("mr-1")} />
          <span className={cx("font-bold")}>FLASH SALE</span>
        </div>
        <div className={cx("timer", "flex space-x-1")}>
          <span>{String(timeLeft.hours).padStart(2, "0")}</span>
          <span>:</span>
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span>:</span>
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
        </div>
      </div>
      <div className={cx("sale-items")}>
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <SaleItem />
      </div>
    </div>
  );
}

export default FlashSale;
