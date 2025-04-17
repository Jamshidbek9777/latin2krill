import React from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "antd";
import { Languages } from "lucide-react";
import Wrapper from "../layout/wrapper";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const languageOptions = [
    { key: "uz", label: "O'zbek" },
    { key: "ru", label: "Русский" },
    { key: "en", label: "English" },
    { key: "kr", label: "Ўзбек" },
  ];

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    window.location.reload();
  };

  return (
    <div className="bg-white shadow-sm">
      <Wrapper>
        <div className="flex justify-between items-center h-16">
          <div className="flex text-2xl font-semibold text-[#004AAD] gap-2 items-center cursor-pointer">
            <img src="/img/logo.png" alt="logo" className="w-12" />
            <h1>Latin to Krill</h1>
          </div>

          <Dropdown
            menu={{
              items: languageOptions.map((lang) => ({
                key: lang.key,
                label: (
                  <div
                    onClick={() => changeLanguage(lang.key)}
                    className="hover:text-red-500"
                  >
                    {lang.label}
                  </div>
                ),
              })),
            }}
            trigger={["click"]}
          >
            <div className="flex items-center gap-2 cursor-pointer p-2 px-3 rounded-xl hover:bg-gray-100 transition-all ease-in-out select-none">
              <Languages size={20} />
              <span className="text-base capitalize">{i18n.language}</span>
            </div>
          </Dropdown>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
