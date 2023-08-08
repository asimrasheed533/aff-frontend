import { Menu, X } from "react-feather";
import { useEffect, useState } from "react";

import ClickAwayListener from "react-click-away-listener";
import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import { megaMenuList } from "../data/megaMenuList";

export default function Header() {
  const [isService, setIsService] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [serviceName, setServiceName] = useState(megaMenuList[0].title);

  const changeNavState = () => {
    if (window.innerWidth <= 1060) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  useEffect(() => {
    changeNavState();
    window.addEventListener("resize", () => {
      changeNavState();
      setIsService(false);
    });
    window.addEventListener("scroll", changeNavState);
  }, []);

  const handleOnClick = (name) => {
    if (window.innerWidth < 1060) {
      setIsOpen(false);
    }
    if (name !== undefined || name !== null) {
      setServiceName(name);
      setIsService(!isService);
    }
  };

  const handleOnHover = (name) => {
    if (window.innerWidth > 1060) {
      setServiceName(name);
      setIsService(true);
    }
  };

  return (
    <div
      onMouseLeave={() => {
        if (window.innerWidth > 1060) {
          setIsService(false);
        }
      }}
    >
      <div
        className={isService ? "header header__active" : "header"}
        style={
          isOpen && window.innerWidth < 1060
            ? {
                backgroundColor: "#d64c00",
              }
            : {}
        }
      >
        <ClickAwayListener
          onClickAway={() => {
            if (window.innerWidth < 1060) {
              setIsOpen(false);
            }
          }}
        >
          <div className="header__content">
            <Link to="/" className="header__content__logo">
              <svg
                width="112"
                height="41"
                viewBox="0 0 112 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58.785 17.8076V17.982H73.2674V28.1727H58.785V41H45V18.0936C45 6.47295 52.5935 0 65.8518 0C70.6414 0 75.0252 0.913746 78 2.46223L74.0289 12.6529C71.7516 11.4532 69.1255 10.9371 67.019 10.9371C61.8238 10.9371 58.785 13.0575 58.785 17.8076Z"
                  fill={isService ? "#d64c00" : "white"}
                />
                <path
                  d="M93.3644 17.8076V17.982H107.405V28.1727H93.3644V41H80V18.0936C80 6.47295 87.3618 0 100.216 0C104.866 0 109.109 0.913746 112 2.46223L108.15 12.6529C105.942 11.4532 103.396 10.9371 101.354 10.9371C96.3174 10.9371 93.3713 13.0575 93.3713 17.8076H93.3644Z"
                  fill={isService ? "#d64c00" : "white"}
                />
                <path
                  d="M19.9965 0C8.17235 0 0 7.10192 0 19.6384V41H13.4487V32.9284H26.3182V41H40V19.6384C40 7.10192 31.8277 0 19.9965 0ZM20.0247 23.9359C17.1217 23.9359 14.7766 21.4872 14.7766 18.7734C14.7766 15.2642 20.0247 9.18087 20.0247 9.18087C20.0247 9.18087 25.2728 15.041 25.2728 18.7734C25.2728 21.4872 22.9207 23.9359 20.0247 23.9359Z"
                  fill={isService ? "#d64c00" : "white"}
                />
              </svg>
            </Link>
            {isOpen ? (
              <div className="header__content__nav">
                {megaMenuList.map((item) => (
                  <Link
                    key={item.title}
                    to={item.link}
                    className={
                      isService
                        ? "header__content__nav__link header__content__nav__link__active"
                        : "header__content__nav__link"
                    }
                    onClick={() => handleOnClick(item.title)}
                    onMouseOver={() => handleOnHover(item.title)}
                  >
                    {item.title}
                  </Link>
                ))}
                <button
                  className="header__content__nav__linkbtn"
                  onClick={() => {
                    if (window.innerWidth < 1060) {
                      setIsOpen(false);
                    }
                  }}
                >
                  Request a Sample
                </button>
                <div className="header__content__nav__top">
                  <div className="header__content__nav__top__left">
                    <Link
                      className={`header__content__nav__top__left__link ${
                        isService
                          ? "header__content__nav__top__left__link__active"
                          : ""
                      }`}
                      to="/"
                    >
                      Supplier Portal
                    </Link>
                    <Link
                      className={`header__content__nav__top__left__link ${
                        isService
                          ? "header__content__nav__top__left__link__active"
                          : ""
                      }`}
                      to="/"
                    >
                      Distributor Portal
                    </Link>
                    <Link
                      className={`header__content__nav__top__left__link ${
                        isService
                          ? "header__content__nav__top__left__link__active"
                          : ""
                      }`}
                      to="/"
                    >
                      Careers
                    </Link>
                  </div>
                  <div className="header__content__nav__top__right">
                    <div
                      className={`header__content__nav__top__right__lang ${
                        isService
                          ? "header__content__nav__top__right__link__active"
                          : ""
                      }`}
                    >
                      EN |
                    </div>
                    <Link
                      to="/"
                      className={`header__content__nav__top__right__link ${
                        isService
                          ? "header__content__nav__top__right__link__active"
                          : ""
                      }`}
                    >
                      Contact
                    </Link>
                    <a
                      href="#"
                      className={`header__content__nav__top__right__link ${
                        isService
                          ? "header__content__nav__top__right__link__active"
                          : ""
                      }`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.7955 18.02V11.1874H14.1328L14.4835 8.52378H11.7955V6.82348C11.7955 6.05255 12.0129 5.52718 13.1413 5.52718L14.5781 5.5266V3.1442C14.3296 3.11253 13.4767 3.03992 12.484 3.03992C10.411 3.03992 8.99182 4.28099 8.99182 6.55968V8.52378H6.64746V11.1874H8.99182V18.02H11.7955Z"
                          fill="currentColor"
                        />
                        <mask
                          id="mask0_777_2099"
                          maskUnits="userSpaceOnUse"
                          x="6"
                          y="3"
                          width="9"
                          height="16"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.7955 18.02V11.1874H14.1328L14.4835 8.52378H11.7955V6.82348C11.7955 6.05255 12.0129 5.52718 13.1413 5.52718L14.5781 5.5266V3.1442C14.3296 3.11253 13.4767 3.03992 12.484 3.03992C10.411 3.03992 8.99182 4.28099 8.99182 6.55968V8.52378H6.64746V11.1874H8.99182V18.02H11.7955Z"
                            fill="currentColor"
                          />
                        </mask>
                        <g mask="url(#mask0_777_2099)"></g>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className={`header__content__nav__top__right__link ${
                        isService
                          ? "header__content__nav__top__right__link__active"
                          : ""
                      }`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.9983 5.50585C18.4125 5.76543 17.7839 5.94147 17.1235 6.02006C17.7978 5.61625 18.314 4.97575 18.5587 4.21489C17.9261 4.58884 17.2279 4.86038 16.484 5.00758C15.8882 4.37205 15.0408 3.9762 14.1009 3.9762C12.2978 3.9762 10.8357 5.43823 10.8357 7.24042C10.8357 7.49601 10.8646 7.74565 10.9203 7.98437C8.20708 7.8481 5.8012 6.54819 4.19097 4.57293C3.9095 5.05432 3.74937 5.61524 3.74937 6.214C3.74937 7.34684 4.32623 8.34639 5.20147 8.93118C4.66638 8.91329 4.16312 8.76609 3.72253 8.52142V8.5622C3.72253 10.1436 4.8484 11.4634 6.34126 11.7638C6.06774 11.8374 5.77932 11.8781 5.48094 11.8781C5.27011 11.8781 5.06621 11.8573 4.8663 11.8175C5.28202 13.1154 6.48747 14.0592 7.9157 14.0851C6.79877 14.9604 5.39044 15.4805 3.86079 15.4805C3.59723 15.4805 3.33763 15.4646 3.08203 15.4358C4.52716 16.3637 6.24282 16.9048 8.08677 16.9048C14.093 16.9048 17.3762 11.9299 17.3762 7.61539L17.3652 7.19269C18.0067 6.73515 18.5617 6.16029 18.9983 5.50585Z"
                          fill="currentColor"
                        />
                        <mask
                          id="mask0_502_3092"
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="3"
                          width="16"
                          height="14"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.9983 5.50585C18.4125 5.76543 17.7839 5.94147 17.1235 6.02006C17.7978 5.61625 18.314 4.97575 18.5587 4.21489C17.9261 4.58884 17.2279 4.86038 16.484 5.00758C15.8882 4.37205 15.0408 3.9762 14.1009 3.9762C12.2978 3.9762 10.8357 5.43823 10.8357 7.24042C10.8357 7.49601 10.8646 7.74565 10.9203 7.98437C8.20708 7.8481 5.8012 6.54819 4.19097 4.57293C3.9095 5.05432 3.74937 5.61524 3.74937 6.214C3.74937 7.34684 4.32623 8.34639 5.20147 8.93118C4.66638 8.91329 4.16312 8.76609 3.72253 8.52142V8.5622C3.72253 10.1436 4.8484 11.4634 6.34126 11.7638C6.06774 11.8374 5.77932 11.8781 5.48094 11.8781C5.27011 11.8781 5.06621 11.8573 4.8663 11.8175C5.28202 13.1154 6.48747 14.0592 7.9157 14.0851C6.79877 14.9604 5.39044 15.4805 3.86079 15.4805C3.59723 15.4805 3.33763 15.4646 3.08203 15.4358C4.52716 16.3637 6.24282 16.9048 8.08677 16.9048C14.093 16.9048 17.3762 11.9299 17.3762 7.61539L17.3652 7.19269C18.0067 6.73515 18.5617 6.16029 18.9983 5.50585Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_502_3092)"></g>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className={`header__content__nav__top__right__link ${
                        isService
                          ? "header__content__nav__top__right__link__active"
                          : ""
                      }`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 22 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.97677 2.10376H14.5279C17.0925 2.10376 19.1788 4.19012 19.1787 6.75445V14.3056C19.1787 16.87 17.0925 18.9563 14.5279 18.9563H6.97677C4.41243 18.9563 2.32617 16.8701 2.32617 14.3056V6.75445C2.32617 4.19012 4.41243 2.10376 6.97677 2.10376ZM14.528 17.4611C16.2679 17.4611 17.6835 16.0456 17.6835 14.3056H17.6834V6.75447C17.6834 5.01461 16.2678 3.59901 14.5279 3.59901H6.97673C5.23687 3.59901 3.82137 5.01461 3.82137 6.75447V14.3056C3.82137 16.0456 5.23687 17.4612 6.97673 17.4611H14.528ZM6.33908 10.5302C6.33908 8.09632 8.31905 6.1163 10.7528 6.1163C13.1866 6.1163 15.1666 8.09632 15.1666 10.5302C15.1666 12.9639 13.1866 14.9438 10.7528 14.9438C8.31905 14.9438 6.33908 12.9639 6.33908 10.5302ZM7.85858 10.5301C7.85858 12.1258 9.15688 13.4239 10.7526 13.4239C12.3482 13.4239 13.6465 12.1258 13.6465 10.5301C13.6465 8.93424 12.3483 7.63601 10.7526 7.63601C9.15678 7.63601 7.85858 8.93424 7.85858 10.5301Z"
                          fill="currentColor"
                        />
                        <mask
                          id="mask0_502_3093"
                          maskUnits="userSpaceOnUse"
                          x="2"
                          y="2"
                          width="18"
                          height="17"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.97677 2.10376H14.5279C17.0925 2.10376 19.1788 4.19012 19.1787 6.75445V14.3056C19.1787 16.87 17.0925 18.9563 14.5279 18.9563H6.97677C4.41243 18.9563 2.32617 16.8701 2.32617 14.3056V6.75445C2.32617 4.19012 4.41243 2.10376 6.97677 2.10376ZM14.528 17.4611C16.2679 17.4611 17.6835 16.0456 17.6835 14.3056H17.6834V6.75447C17.6834 5.01461 16.2678 3.59901 14.5279 3.59901H6.97673C5.23687 3.59901 3.82137 5.01461 3.82137 6.75447V14.3056C3.82137 16.0456 5.23687 17.4612 6.97673 17.4611H14.528ZM6.33908 10.5302C6.33908 8.09632 8.31905 6.1163 10.7528 6.1163C13.1866 6.1163 15.1666 8.09632 15.1666 10.5302C15.1666 12.9639 13.1866 14.9438 10.7528 14.9438C8.31905 14.9438 6.33908 12.9639 6.33908 10.5302ZM7.85858 10.5301C7.85858 12.1258 9.15688 13.4239 10.7526 13.4239C12.3482 13.4239 13.6465 12.1258 13.6465 10.5301C13.6465 8.93424 12.3483 7.63601 10.7526 7.63601C9.15678 7.63601 7.85858 8.93424 7.85858 10.5301Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_502_3093)"></g>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className={`header__content__nav__top__right__link ${
                        isService
                          ? "header__content__nav__top__right__link__active"
                          : ""
                      }`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 22 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.1114 2.80585H4.75282C3.90318 2.80585 3.20801 3.50101 3.20801 4.35066V16.7092C3.20801 17.5589 3.90318 18.254 4.75282 18.254H17.1114C17.961 18.254 18.6562 17.5589 18.6562 16.7092V4.35066C18.6562 3.50101 17.961 2.80585 17.1114 2.80585ZM7.84246 15.9368H5.52523V8.98512H7.84246V15.9368ZM6.68385 7.67202C5.91144 7.67202 5.29351 7.05409 5.29351 6.28169C5.29351 5.50928 5.91144 4.89135 6.68385 4.89135C7.45625 4.89135 8.07418 5.50928 8.07418 6.28169C8.07418 7.05409 7.45625 7.67202 6.68385 7.67202ZM16.339 15.9368H14.0217V11.843C14.0217 11.2251 13.481 10.6844 12.8631 10.6844C12.2452 10.6844 11.7045 11.2251 11.7045 11.843V15.9368H9.38728V8.98512H11.7045V9.91201C12.0907 9.29408 12.9404 8.83063 13.6355 8.83063C15.1031 8.83063 16.339 10.0665 16.339 11.5341V15.9368Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="header__content__cta">
              <button
                className="header__content__menu"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                title={isOpen ? "Close" : "Open"}
              >
                {isOpen ? (
                  <X size={20} color="currentColor" />
                ) : (
                  <Menu size={20} color="currentColor" />
                )}
              </button>
            </div>
          </div>
        </ClickAwayListener>
      </div>
      {isService ? (
        <MegaMenu
          onClickAway={() => {
            setIsService(false);
          }}
          data={
            megaMenuList.find((item) => item.title === serviceName).children
          }
        />
      ) : null}
    </div>
  );
}
