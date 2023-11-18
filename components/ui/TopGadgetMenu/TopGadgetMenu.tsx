import Image from "next/image";

import style from "@/components/pages/Main/main.module.scss";
import "../TopGadgetMenu/mainCard.scss";

import { popularItemMas } from "@/components/services/unchanget";
import Link from "next/link";
export default function TopGadgetMenu() {
  return (
    <div>
      <section className={style.topSection}>
        <h1 className={style.topTitle}>
          Grab the best deal on
          <span className={style.spanColor}> Iphones</span>
        </h1>
        <div className={style.cardFlex}>
          {popularItemMas?.map((mas) => (
            <div className={style.cardItem}>
              <div className={style.imageBlock}>
                <Image alt="iphone" src={mas.img} width={100} height={125} />
              </div>
              <p className={style.phoneName}>{mas.name}</p>
              <div className={style.priceBlock}>
                <span className={style.price}>₴ {mas.price}</span>
                <strike className={style.grab}>₴ {mas.price + 2400}</strike>
              </div>
              <button className={style.cardBtn}>Add to card</button>
              <div className={style.absoluteRightBLock}>
                <p>
                  56%
                  <br />
                  OFF
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={style.gadgetCatrgory}>
        <h1 className={style.topTitle}>
          Gadget
          <span className={style.spanColor}> Category</span>
        </h1>
        {/* <div className={style.flexCategory}>
          {categoryMas?.map((mas) => (
            <div className={style.categoryItem}>
              <Image width={100} height={125} src={mas.img} />
              <p className={style.categoryName}>{mas.name}</p>
            </div>
          ))} */}
        <div className="ag-format-container">
          <div className="ag-courses_box">
            <div className="ag-courses_item">
              <Link href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">Iphone</div>

                <div className="ag-courses-item_date-box">
                  Series:
                  <span className="ag-courses-item_date"> Xr-15</span>
                </div>
              </Link>
            </div>
            <div className="ag-courses_item">
              <Link href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">MackBook</div>
                <div className="ag-courses-item_date-box">
                  Series:
                  <span className="ag-courses-item_date">
                    m1 2019 - m3 2023
                  </span>
                </div>
              </Link>
            </div>

            <div className="ag-courses_item">
              <Link href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">Apple Watch</div>
                <div className="ag-courses-item_date-box">
                  Series:
                  <span className="ag-courses-item_date"> 7-8</span>
                </div>
              </Link>
            </div>

            <div className="ag-courses_item">
              <Link href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">Ipad</div>

                <div className="ag-courses-item_date-box">
                  Gen:
                  <span className="ag-courses-item_date"> 8th-10th</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
