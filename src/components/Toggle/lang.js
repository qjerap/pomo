import React, { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useTranslation } from "react-i18next";

const LangToggle = () => {
  const [lang, setLang] = useState("fr");

  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    lang === "fr" ? setLang("en") : setLang("fr");

    i18n.changeLanguage(lang);
  };

  return (
    <Toggle
      className=""
      onChange={changeLanguage}
      icons={{ checked: "en", unchecked: "fr" }}
      aria-label="Dark mode"
    />
  );
};

export default LangToggle;
