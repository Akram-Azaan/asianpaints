import React, { useEffect, useState } from "react";
import styles from "./Dropdown.module.scss";

function Dropdown({
  className,
  getSelectedValue = null,
  options = [],
  placeHolder,
  value = null,
  ...rest
}) {
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    value || options?.[0] || {}
  );
  useEffect(() => {
    getSelectedValue && getSelectedValue?.(selectedOption);
  }, [selectedOption]);

  const toggleShow = () => {
    setShow(!show);
  };

  const handleSelect = (value, toggle) => {
    setSelectedOption(value);
    getSelectedValue?.(value,true);
    if (toggle) {
      toggleShow();
    }
  };

  return (
    <div
      className={`${styles.customDropdown} ${show? styles.focus:''} ${className}`}
      onClick={toggleShow}
    >
      <label>{rest.label}</label>
      <div className={styles.dropdownToggle}>
        {selectedOption?.label || placeHolder || "Select"}
      </div>
      <div
        className={`${styles.customDropdownList} ${show ? styles.show : ""}`}
      >
        <ul>
          {options?.map((list, index) => {
            return (
              <li
                key={index}
                onClick={() => handleSelect(list, list?.closeModal)}
                className={
                  selectedOption?.value === list?.value ? styles.active : ""
                }
              >
                {list?.label}
              </li>
            );
          })}
        </ul>
        <div onClick={toggleShow} className={styles.dropdownOverlay}></div>
      </div>
    </div>
  );
}

export default Dropdown;
