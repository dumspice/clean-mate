import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Booking.module.scss";
import {
  faBroom,
  faBroomBall,
  faFan,
  faHandSparkles,
  faPumpSoap,
  faSprayCanSparkles,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Booking() {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      name: "Giúp việc theo giờ",
      icon: <FontAwesomeIcon icon={faBroom} />,
    },
    {
      id: 2,
      name: "Giúp việc định kỳ",
      icon: <FontAwesomeIcon icon={faBroomBall} />,
    },
    {
      id: 3,
      name: "Tổng vệ sinh",
      icon: <FontAwesomeIcon icon={faHandSparkles} />,
    },
    {
      id: 4,
      name: "Vệ sinh sofa, nệm, rèm, thảm",
      icon: <FontAwesomeIcon icon={faPumpSoap} />,
    },
    {
      id: 5,
      name: "Vệ sinh điều hòa, diệt nấm",
      icon: <FontAwesomeIcon icon={faFan} />,
    },
    {
      id: 6,
      name: "Phun khử khuẩn",
      icon: <FontAwesomeIcon icon={faSprayCanSparkles} />,
    },
  ];

  const handleNavigate = () => {
    navigate("/service");
  };
  return (
    <section className={cx("booking")}>
      <h4 className={cx("title")}>Đặt dịch vụ</h4>
      <div className={cx("service-selection")}>
        {services.map((service) => (
          <div
            key={service.id}
            className={cx("service-card")}
            onClick={handleNavigate}
          >
            <span className={cx("icon")}>{service.icon}</span>
            <span className={cx("service")}>{service.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Booking;
