import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Booking.module.scss";

const cx = classNames.bind(styles);
function Booking() {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
  });

  const services = [
    { id: 1, name: "Giúp việc theo giờ", icon: "🕒" },
    { id: 2, name: "Giúp việc định kỳ", icon: "📅" },
    { id: 3, name: "Tổng vệ sinh", icon: "🧹" },
    { id: 4, name: "Vệ sinh sofa, nệm, rèm, thảm", icon: "🛋️" },
    { id: 5, name: "Vệ sinh điều hòa, diệt nấm", icon: "❄️" },
    { id: 6, name: "Phun khử khuẩn", icon: "💉" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Đặt dịch vụ: ${formData.service}, Ngày: ${formData.date}, Giờ: ${formData.time}`
    );
    // Here you would typically send data to a backend
  };

  return (
    <section className={cx("booking")}>
      <h2>Đặt dịch vụ</h2>
      <div className={cx("service-selection")}>
        {services.map((service) => (
          <div
            key={service.id}
            className={cx("service-card", {
              selected: formData.service === service.name,
            })}
            onClick={() => setFormData({ ...formData, service: service.name })}
          >
            <span>{service.icon}</span>
            <span>{service.name}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={cx("booking-form")}>
        <label>
          Ngày:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Giờ:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Đặt ngay</button>
      </form>
    </section>
  );
}

export default Booking;
