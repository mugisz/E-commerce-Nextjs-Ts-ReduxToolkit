"use client";
import React from "react";

import style from "./header.module.scss";
import "./burger.scss";

import Image from "next/image";

import logoImg from "@/images/Group 2.svg";
import list from "@/images/list.svg";
import search from "@/images/search.svg";
import busket from "@/images/buy.svg";
import Link from "next/link";

const menuLinks = [
  { title: "Iphone", links: "/iphone" },

  { title: "Ipad", links: "/ipad" },
  { title: "MacBook", links: "/mac" },
  { title: "AppleWatch", links: "/wotch" },
];
export default function Header() {
  const [menuState, SetTogle] = React.useState(false);
  return (
    <header className={style.header}>
      <div className="container">
        <nav className={style.nav}>
          <div className={style.logo}>
            <Image src={logoImg} width={48} height={48} />
            <Link href="/">
              <h1> Ecommerce</h1>
            </Link>
          </div>
          <div className={style.rightTextBlock}>
            <div className={style.searchBlock}>
              <Image src={search} width={18} height={18} />

              <input type="text" placeholder="Search essentials and more ..." />
              <Image
                className={style.inputRightImg}
                src={list}
                width={24}
                height={24}
              />
            </div>

            <div className={style.cartBlock}>
              <Link href="/busket">
                <Image src={busket} width={24} height={24} />
              </Link>

              <Link href="/busket">
                <span>Cart</span>
              </Link>
            </div>
          </div>
          <div id="menu">
            <div
              id="menu-bar"
              className={menuState ? "change" : ""}
              onClick={() => SetTogle((prev) => !prev)}
            >
              <div id="bar1" className="bar"></div>
              <div id="bar2" className="bar"></div>
              <div id="bar3" className="bar"></div>
            </div>
            <nav className={`nav ${menuState ? "change" : ""}`} id="nav">
              <ul>
                {menuLinks?.map((item) => (
                  <Link href={item.links}>
                    <li>{item.title}</li>
                  </Link>
                ))}

                <Link href="/busket">
                  <div className="BurgerflexBusket">
                    <Link href="/busket">
                      <li>Cart</li>
                    </Link>

                    <Link href="/busket">
                      <Image src={busket} width={24} height={24} />
                    </Link>
                  </div>
                </Link>
              </ul>

              <div
                className={`menu-bg ${menuState ? "change-bg" : ""}`}
                id="menu-bg"
              ></div>
            </nav>
          </div>
        </nav>
      </div>
      <section className={style.botomMenu}>
        <div className="container">
          <ul className={style.menuFlex}>
            {menuLinks?.map((item) => (
              <Link className={style.botomLinks} href={item.links}>
                <li>{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </header>
  );
}
