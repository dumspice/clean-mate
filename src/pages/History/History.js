import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./History.module.scss";
import Shift from "./components/Shift/Shift";
import CleanMart from "./components/CleanMart/CleanMart";
import CleanHistory from "./components/CleanHistory/CleanHistory";

const cx = classNames.bind(styles);

function History() {
  const [activeTab, setActiveTab] = useState("cale");

  const handleActiveTab = (tab) => {
    console.log(tab);

    setActiveTab(tab);
  };

  return (
    <>
      <div className={cx("header")}>
        <h1 className={cx("header-title")}>Lịch sử</h1>
      </div>
      <div className={cx("history-tabs")}>
        <div
          className={cx("tab", { active: activeTab === "cale" })}
          onClick={() => handleActiveTab("cale")}
        >
          Ca lẻ
        </div>
        <div
          className={cx("tab", { active: activeTab === "tongvesinh" })}
          onClick={() => handleActiveTab("tongvesinh")}
        >
          Tổng vệ sinh
        </div>
        <div
          className={cx("tab", { active: activeTab === "cleanmart" })}
          onClick={() => handleActiveTab("cleanmart")}
        >
          CleanMart
        </div>
      </div>
      <div className={cx("tab-content")}>
        {activeTab === "cale" && <Shift />}
        {activeTab === "tongvesinh" && <CleanHistory />}
        {activeTab === "cleanmart" && <CleanMart />}
      </div>
    </>
  );
}

export default History;
