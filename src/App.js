import React, { useState } from "react";
import "./styles/main.css";
import BtnDarkMode from '../src/components/btnDarkMode/BtnDarkMode';
import logo from "./img/logoW.png";
import logo2 from "./img/notif.png";
// import logo3 from "./img/moon.png";
import logo4 from "./img/logo.png";
import logo5 from "./img/healthcare1.png";
import logo6 from "./img/Object.png";
import logo7 from "./img/caring.png";


function App() {
  const [open, setOpen] = useState(false);
  const Menus = ["История посещений", "Безопасность и вход", "Выйти"];
  const MenusSecond = [
    "Ваш последний визит 09.02.2024 16:44:06",
    "Петрова Наталья Владимировна",
    "Под вашим аккаунтом вы можете создавать, изменять, подписывать и отправлять транзакции.",
  ];

  return (
    <div className="App">
      <nav className="nav dark">
        <div className="container">
          <div className="nav-row">
            <a href="./index.html" className="logo">
              <img src={logo} alt="Logo" />
            </a>
            <ul className="nav-list">
              <li className="nav-list__item">
                <a href="/">
                  <img src={logo2} alt="Notification" />
                </a>
              </li>
              <li className="nav-list__item_two">
              <BtnDarkMode />
              </li>
            </ul>
            <button onClick={() => setOpen(!open)} className="modal">
              <img src={logo4} alt="Logo" />
              <p className="nav-list__user">Иванов Иван Иванович</p>{" "}
              {open && (
                <div className="modal-container">
                  <div className="modal-content">
                    <ul className="menu-list">
                      {Menus.map((menu) => (
                        <li key={menu}>{menu}</li>
                      ))}
                    </ul>
                    <hr />
                    <ul className="menu-list_second">
                      {MenusSecond.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>
      <div className="burger-menu">
        <div className="burger-menu__inner">
          <ul className="burger-menu__list">
            <li>
              <a href="/">Страхование</a>
            </li>

            <li>
              <a href="/">Инвестиции</a>
            </li>

            <li>
              <a href="/">Переводы</a>
            </li>

            <li>
              <a href="/">Кредиты</a>
            </li>

            <li>
              <a href="/">Депозиты</a>
            </li>

            <li>
              <a href="/">Поддержка</a>
            </li>
          </ul>
        </div>
      </div>

      <header className="header">
        <div className="header__wrapper">
          <div className="header__leftside">
            <div className="header__inner">
              <h2 className="header__title">Медицинское страхование</h2>
            </div>
            <div className="header__inner_text">
              <a className="header__inner_text_link" href="/">
                Узнать поподробнее
              </a>
            </div>
          </div>

          <div className="header__rightside">
            <img src={logo5} alt="logo" />
          </div>
        </div>
      </header>

      <header className="header_down_side">
        <div className="header__wrapper_second">
          <div className="header__leftside">
            <div className="header__inner">
              <h2 className="header__title">Автомобильное страхование</h2>
            </div>
            <div className="header__inner_text">
              <a className="header__inner_text_link" href="/">
                Узнать поподробнее
              </a>
            </div>
          </div>
          <div className="header__rightside">
            <img src={logo6} alt="logo" />
          </div>
        </div>
        <div className="header__wrapper_second">
          <div className="header__leftside">
            <div className="header__inner">
              <h2 className="header__title">Жизненное страхование</h2>
            </div>
            <div className="header__inner_text">
              <a className="header__inner_text_link" href="/">
                Узнать поподробнее
              </a>
            </div>
          </div>
          <div className="header__rightside">
            <img src={logo7} alt="logo" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
