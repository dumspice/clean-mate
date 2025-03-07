import classNames from "classnames/bind";

import styles from "./Sale.module.scss";
import images from "../../../assets/Images/images";

const cx = classNames.bind(styles);

function SaleItem({ data }) {
  return (
    <div className={cx("sale-item-wrapper")}>
      <div className={cx("profile-image")}>
        <img src={data.avatar} alt="user-avatar" className={cx("avatar")} />
        <span className={cx("rate")}>
          {data.star}{" "}
          <img src={images.starImage} alt="star" className={cx("star")} />
        </span>
        <p className={cx("shift")}>{data.shift}</p>
      </div>
      <p className={cx("name")}>
        {data.name}, <span className={cx("age")}>{data.age}</span>
      </p>
      <p className={cx("shift-time")}>{data.shiftTime}</p>
      <div className={cx("price-section")}>
        <p className={cx("sale-price")}>{data.salePrice}</p>
        <p className={cx("list-price")}>{data.listPrice}</p>
      </div>
      <button className={cx("order-btn")}>Đặt ngay</button>
    </div>
  );
}

export default SaleItem;
