import classNames from "classnames/bind";

import styles from "./Favourite.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faStar } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Favourite() {
  const userFavouriteEmployees = [
    {
      id: 1,
      name: "Trần Thị Thanh Nga",
      vaccinated: true,
      experience: "532 giờ",
      skills: "Ủi đồ, Làm TVS",
      rating: 5,
    },
    {
      id: 2,
      name: "Phạm Thị Huệ",
      vaccinated: true,
      experience: "3423 giờ",
      skills: "Ủi đồ, Làm TVS",
      rating: 4.5,
    },
  ];
  const commonFavouriteEmployees = [
    {
      id: 1,
      name: "Trần Thị Thanh Nga",
      vaccinated: true,
      experience: "532 giờ",
      skills: "Ủi đồ, Làm TVS",
      rating: 5,
    },
    {
      id: 2,
      name: "Phạm Thị Huệ",
      vaccinated: true,
      experience: "3423 giờ",
      skills: "Ủi đồ, Làm TVS",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Hoàng Thanh Huyền",
      vaccinated: true,
      experience: "329 giờ",
      skills: "Ủi đồ, Làm TVS",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Nguyễn Thị Địch",
      vaccinated: true,
      experience: "993 giờ",
      skills: "Ủi đồ, Làm TVS",
      rating: 4.9,
    },
    {
      id: 5,
      name: "Đinh Thị Liên",
      vaccinated: true,
      experience: "2761 giờ",
      skills: "Ủi đồ, Làm TVS",
      rating: 4.8,
    },
    {
      id: 6,
      name: "Trần Thị Linh",
      vaccinated: true,
      experience: "994 giờ",
      skills: "Ủi đồ, Làm TVS",
      rating: 4.9,
    },
    {
      id: 7,
      name: "Nguyễn Thị Hoa Mai",
      vaccinated: true,
      experience: "2179 giờ",
      skills: "Ủi đồ, Làm TVS",
      rating: 5,
    },
  ];

  const UserFavouriteEmployees = () => {
    return (
      <div className={cx("user-favourite-employees")}>
        <h2>Nhân viên yêu thích</h2>
        <div className={cx("employee-list")}>
          {userFavouriteEmployees.map((employee) => (
            <div key={employee.id} className={cx("employee-card")}>
              <div className={cx("employee-avatar")}>
                <img
                  src={`https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head.png`} // Thay bằng URL ảnh thực tế
                  alt={employee.name}
                  className={cx("avatar")}
                />
                <div className={cx("rating")}>
                  <span className={cx("rating-value")}>{employee.rating}</span>
                  <span className={cx("star-icon")}>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                </div>
              </div>
              <div className={cx("employee-info")}>
                <h3>{employee.name}</h3>
                <p className={cx("vaccinated")}>
                  <span className={cx("check-icon")}>
                    <FontAwesomeIcon icon={faSquareCheck} />
                  </span>
                  <span className={cx("vaccinated-text")}>
                    {employee.vaccinated
                      ? "Đã tiêm vaccine Covid-19"
                      : "Chưa tiêm vaccine Covid-19"}
                  </span>
                </p>
                <p className={cx("experience")}>
                  Kinh nghiệm: {employee.experience}
                </p>
                <p className={cx("skill")}>Kỹ năng: {employee.skills}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const CommonFavouriteEmployees = () => {
    return (
      <div className={cx("common-favorite-employees")}>
        <h2>Nhân viên được nhiều người yêu thích</h2>
        <div className={cx("employee-list")}>
          {commonFavouriteEmployees.map((employee) => (
            <div key={employee.id} className={cx("employee-card")}>
              <div className={cx("employee-avatar")}>
                <img
                  src={`https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head.png`} // Thay bằng URL ảnh thực tế
                  alt={employee.name}
                  className={cx("avatar")}
                />
                <div className={cx("rating")}>
                  <span className={cx("rating-value")}>{employee.rating}</span>
                  <span className={cx("star-icon")}>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                </div>
              </div>
              <div className={cx("employee-info")}>
                <h3>{employee.name}</h3>
                <p className={cx("vaccinated")}>
                  <span className={cx("check-icon")}>
                    <FontAwesomeIcon icon={faSquareCheck} />
                  </span>
                  <span className={cx("vaccinated-text")}>
                    {employee.vaccinated
                      ? "Đã tiêm vaccine Covid-19"
                      : "Chưa tiêm vaccine Covid-19"}
                  </span>
                </p>
                <p className={cx("experience")}>
                  Kinh nghiệm: {employee.experience}
                </p>
                <p className={cx("skill")}>Kỹ năng: {employee.skills}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <>
      <div className={cx("header")}>
        <h1 className={cx("header-title")}>Nhân viên ưu thích</h1>
      </div>
      <div className={cx("content-wrapper")}>
        <UserFavouriteEmployees />
        <CommonFavouriteEmployees />
      </div>
    </>
  );
}

export default Favourite;
