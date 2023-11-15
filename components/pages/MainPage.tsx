import Image from "next/image";
import style from "../pages/main.module.scss";
export default function MainPage() {
  const categoryMas = [
    {
      img: "https://content2.rozetka.com.ua/goods/images/big_tile/364623745.jpg",
      name: "Iphone",
    },
    {
      img: "https://content.rozetka.com.ua/goods/images/big/341858430.jpg",
      name: "MackBook",
    },
    {
      img: "https://content.rozetka.com.ua/goods/images/big_tile/224009738.jpg",
      name: "Ipad",
    },
  ];
  const popularItemMas = [
    {
      img: "https://content2.rozetka.com.ua/goods/images/big_tile/364623745.jpg",
      name: "Iphone 15 Pro 128",
      price: 29999,
    },
    {
      img: "https://content.rozetka.com.ua/goods/images/big_tile/224009738.jpg",
      name: "Ipad 4 mini",
      price: 16550,
    },
    {
      img: " https://content.rozetka.com.ua/goods/images/big_tile/284913550.jpg",
      name: "Iphone 14 128gb",
      price: 20000,
    },
    {
      img: "https://content2.rozetka.com.ua/goods/images/big_tile/269256826.jpg",
      name: "MackBook Air m2",
      price: 40000,
    },
    {
      img: "https://content.rozetka.com.ua/goods/images/big_tile/341858430.jpg",
      name: "MackBook Pro m2",
      price: 72000,
    },
  ];

  return (
    <main className={style.main}>
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
          <span className={style.spanColor}>Gadget</span> Category
        </h1>
        <div className={style.flexCategory}>
          {categoryMas?.map((mas) => (
            <div className={style.categoryItem}>
              <Image width={100} height={125} src={mas.img} />
              <p className={style.categoryName}>{mas.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
