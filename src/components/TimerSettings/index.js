import React, { useState } from "react";
import { ReactComponent as IconSettings } from "../../assets/icon-settings.svg";
import style from "./TimerSettings.module.scss";
import Modal from "./modal";

const TimerSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = (e) => {
    if (e.target.tagName === "svg" || e.target.tagName === "path") {
      setIsModalOpen(true);
    }
    if (e.target.id === "modalContainer" || e.target.id === "iconClose") {
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <button className={style.icon} onClick={handleModal}>
        <IconSettings />
      </button>

      {isModalOpen && <Modal handleModal={handleModal} />}
    </div>
  );
};

export default TimerSettings;
