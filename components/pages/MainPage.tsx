import Image from "next/image";
import style from "../pages/main.module.scss";
export default function MainPage() {
  return (
    <main className={style.main}>
      <section className={style.topSection}>
        <h1 className={style.topTitle}>
          Grab the best deal on
          <span className={style.spanColor}> Iphones</span>
        </h1>
        <div className={style.cardFlex}>
          <div className={style.cardItem}>
            <Image
              alt="iphone"
              src="https://content2.rozetka.com.ua/goods/images/big_tile/364623745.jpg"
              width={100}
              height={175}
            />
            <p className={style.phoneName}>Iphone 15 Pro</p>
            <div className={style.priceBlock}>
              <span className={style.price}>₴ 32334</span>
              <strike className={style.grab}> ₴ 5000</strike>
            </div>
            <div className={style.absoluteRightBLock}>
              <p>
                56%
                <br />
                OFF
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
