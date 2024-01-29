import Image from "next/image";

import style from "@/components/pages/Main/main.module.scss";
import "./mainCard.scss";

import { popularItemMas } from "@/components/services/unchanget";
import Link from "next/link";
import Carousel from "../Carousel/Carousel";

import rewiewLogo from "@/images/rewiewsPhoto.svg";

import rewiewStar from "@/images/rewiewsStart.svg";

export default function MainSection() {
  const rewiews = [
    { img: rewiewLogo, name: "Olga Andrus" },
    { img: rewiewLogo, name: "Vika Sheba" },
    { img: rewiewLogo, name: "Inna Octos" },
    { img: rewiewLogo, name: "Olga Andrus" },
    { img: rewiewLogo, name: "Vika Sheba" },
    { img: rewiewLogo, name: "Inna Octos" },
  ];
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
          {categoryMas?.map((product) => (
            <div className={style.categoryItem}>
              <Image width={100} height={125} src={product.img} />
              <p className={style.categoryName}>{product.name}</p>
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
      <section className={style.topSection}>
        <h1 className={style.topTitle}>
          Еhe newest novelties
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
      <section className={style.rewiewsBlock}>
        <h1 className={style.topTitle}>
          Top
          <span className={style.spanColor}> Rewiew</span>
        </h1>
        <div className={style.rewiewsFlex}>
          {rewiews?.map((rewiew, key) => (
            <div className={style.rewiewsItem} key={key}>
              <Image src={rewiew.img} alt="logo" width={79.86} height={79.2} />
              <div className={style.rewiewsTextBlock}>
                <span>{rewiew.name}</span>
                <div className={style.rewiewStarFlex}>
                  <Image src={rewiewStar} alt="logo" width={32} height={42} />
                  <Image src={rewiewStar} alt="logo" width={32} height={42} />
                  <Image src={rewiewStar} alt="logo" width={32} height={42} />
                  <Image src={rewiewStar} alt="logo" width={32} height={42} />
                  <Image src={rewiewStar} alt="logo" width={32} height={42} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
