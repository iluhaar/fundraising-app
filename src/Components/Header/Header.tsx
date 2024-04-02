import React from 'react';

import styles from "./header.module.css";

import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_item}>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
        >
          Головна
        </NavLink>
      </div>
      <div className={styles.header_item}>
        <NavLink
          to="/contacts"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
        >
          Зворотній зв'язок
        </NavLink>
      </div>
    </div>
  );
};
