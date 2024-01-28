import React from "react";

import Image from "next/image";

import call from "@/images/call.svg";
import watsApp from "@/images/watsApp.svg";

import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footerFlex}>
          <div className={style.footerLeftSider}>
            <h1 className={style.nameTag}>Ecommerce </h1>
            <div className={style.leftContactsFlex}>
              <h1>Contact Us</h1>
              <div className={style.leftblockFlex}>
                <Image src={watsApp} alt="logo" width={24} height={24} />
                <div className={style.leftTextBlock}>
                  <span>Whats App</span>
                  <p>+ 068 611 611 611</p>
                </div>
              </div>
              <div className={style.leftblockFlex}>
                <Image src={call} alt="logo" width={24} height={24} />
                <div className={style.leftTextBlock}>
                  <span>Call Us</span>
                  <p>+ 068 611 611 611</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.footerRightFlex}>
            <div className={style.rightItem}>
              <h1>Most Popular Iphone</h1>
              <span>Iphone 15</span>
              <span>Iphone 15</span>
              <span>Iphone 15</span>
              <span>Iphone 15</span>
              <span>Iphone 15</span>
              <span>Iphone 15</span>
              <span>Iphone 15</span>
            </div>
            <div className={style.rightItem}>
              <h1>Most Popular Items</h1>
              <span>Iphone 15</span>
              <span>Mackbook</span>
              <span>Iphone 15</span>
              <span>Iphone 15</span>
              <span>Iphone 15</span>
              <span>Iphone 15</span>
              <span>Iphone 15</span>
            </div>
          </div>
        </div>
      </div>
      <section className={style.botomFooterSection}>
        <h1>© 2024 All rights reserved. Reliance Retail Ltd.</h1>
      </section>
    </footer>
  );
};

export default Footer;
