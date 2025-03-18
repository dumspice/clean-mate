import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Step1.module.scss";
import images from "../../../../../assets/Images/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronLeft,
  faCircleInfo,
  faClose,
  faFilter,
  faLocationDot,
  faShoppingCart,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const Step1 = ({
  formData,
  calculateTotal,
  handleChange,
  handleAddOnProduct,
  handleNext,
}) => {
  const navigate = useNavigate();

  const addOnProducts = [
    {
      name: "SET 5 BÌNH 19L - Nước khoáng ion",
      originalPrice: 429000,
      discountedPrice: 390000,
      discount: "-9%",
      image: images.izumiWater,
    },
    {
      name: "SET 5 THÙNG 24 CHAI 486ML - Nước khoáng iZUMI",
      originalPrice: 897600,
      discountedPrice: 816000,
      discount: "-9%",
      image: images.izumiWater,
    },
    {
      name: "Nước khoáng IZUMI",
      originalPrice: 30000,
      discountedPrice: 15000,
      discount: "-9%",
      image: images.izumiWater,
    },
  ];

  const handleBack = () => {
    navigate("/");
  };

  const handleDeleteProduct = (product) => {
    const newAddOnProducts = formData.addOnProducts.filter(
      (item) => item !== product
    );
    handleChange("addOnProducts", newAddOnProducts);
  };

  return (
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
      <div className={cx("content-wrapper")}>
        <h4>
          <span className={cx("location-icon")}>
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          Địa điểm làm việc
        </h4>
        <p>số nhà 30 Bồ Đề, Bồ Đề, Long Biên, Hà Nội</p>
        <button className={cx("change-btn")}>Thay đổi</button>

        <h4>
          <span className={cx("user-icon")}>
            <FontAwesomeIcon icon={faUserGroup} />
          </span>
          Số lượng nhân viên
        </h4>
        <div className={cx("options")}>
          <button
            className={cx({ active: formData.workers === 1 })}
            onClick={() => handleChange("workers", 1)}
          >
            1 x Nhân viên
          </button>
          <button
            className={cx({ active: formData.workers === 2 })}
            onClick={() => handleChange("workers", 2)}
          >
            2 x Nhân viên
          </button>
        </div>

        <h4>Thời gian dọn dẹp</h4>
        <div className={cx("options")}>
          <button
            className={cx({ active: formData.hours === 2 })}
            onClick={() => handleChange("hours", 2)}
          >
            2 Giờ
            <br />
            Tối đa 60m² tổng sàn
          </button>
          <button
            className={cx({ active: formData.hours === 3 })}
            onClick={() => handleChange("hours", 3)}
          >
            3 Giờ
            <br />
            Tối đa 90m² tổng sàn
          </button>
          <button
            className={cx({ active: formData.hours === 3.5 })}
            onClick={() => handleChange("hours", 3.5)}
          >
            3.5 Giờ
            <br />
            Tối đa 105m² tổng sàn
          </button>
          <button>Tùy chọn khác</button>
        </div>

        <h4>
          <span className={cx("option-icon")}>
            <FontAwesomeIcon icon={faFilter} />
          </span>
          Tùy chọn khác
        </h4>
        <div className={cx("toggle-option")}>
          <div className={cx("option-item")}>
            <p>Dụng cụ & chất tẩy rửa cơ bản</p>
            <label className={cx("switch")}>
              <input
                type="checkbox"
                checked={formData.useOwnTools}
                onChange={() =>
                  handleChange("useOwnTools", !formData.useOwnTools)
                }
              />
              <span className={cx("slider")}></span>
            </label>
          </div>
          <div className={cx("option-item")}>
            <p>Sử dụng máy hút bụi</p>
            <label className={cx("switch")}>
              <input
                type="checkbox"
                checked={formData.useVacuum}
                onChange={() => handleChange("useVacuum", !formData.useVacuum)}
              />
              <span className={cx("slider")}></span>
            </label>
          </div>
        </div>

        <h4>
          <span className={cx("cart-icon")}>
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
          Sản phẩm mua kèm
        </h4>
        <div className={cx("add-on-product-container")}>
          {formData.addOnProducts.length > 0 ? (
            <div className={cx("add-on-products")}>
              {formData.addOnProducts.map((product, index) => (
                <div key={index} className={cx("product-card")}>
                  <span
                    className={cx("delete-product-icon")}
                    onClick={() => handleDeleteProduct(product)}
                  >
                    <FontAwesomeIcon icon={faClose} />
                  </span>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={cx("added-product-img")}
                  />
                  <h3 className={cx("added-product-name")}>{product.name}</h3>
                  <p className={cx("added-product-price")}>
                    {product.discountedPrice.toLocaleString()} đ
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className={cx("empty-class")}>
              <span className={cx("cart-item")}>
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              <p>Bạn chưa thêm sản phẩm nào trong giỏ hàng.</p>
            </div>
          )}
        </div>

        <p className={cx("suggest-product-title")}>Gợi ý cho bạn</p>
        <div className={cx("suggest-product")}>
          {addOnProducts.map((product, index) => (
            <div key={index} className={cx("product-card")}>
              <div className={cx("discount")}>{product.discount}</div>
              <img src={product.image} alt={product.name} />
              <p className={cx("price")}>
                {product.discountedPrice.toLocaleString()} đ
                <br />
                <span className={cx("original-price")}>
                  {product.originalPrice.toLocaleString()} đ
                </span>
              </p>
              <p className={cx("product-name")}>{product.name}</p>
              <button
                className={cx("add-btn", {
                  added: formData.addOnProducts.includes(product.name),
                })}
                onClick={() => handleAddOnProduct(product)}
              >
                <span className={cx("cart-icon")}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                Thêm
              </button>
            </div>
          ))}
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
};

export default Step1;
