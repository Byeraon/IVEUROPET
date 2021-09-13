import React from "react";
import { NavLink } from "react-router-dom";
import style from "./header.module.css";

export const Header = () => {
  return (
    <header>
      <NavLink className={style.logoPlace} exact to="/">
        <div className={style.logo}></div>
        <div className={style.linelogo}></div>
        <h1>Ивевропэт</h1>
      </NavLink>
      <div className={style.menu}>
        <NavLink
          className={style.link}
          activeClassName={style.activeLink}
          exact
          to="/"
        >
          О компании
        </NavLink>
        <NavLink
          className={style.link}
          activeClassName={style.activeLink}
          to="/product"
        >
          Продукция
        </NavLink>
        <NavLink
          className={style.link}
          activeClassName={style.activeLink}
          to="/price"
        >
          Прайс
        </NavLink>
        <NavLink
          className={style.link}
          activeClassName={style.activeLink}
          to="/services"
        >
          Услуги
        </NavLink>
        <NavLink
          className={style.link}
          activeClassName={style.activeLink}
          to="/contacts"
        >
          Контакты
        </NavLink>
      </div>
    </header>
  );
};
