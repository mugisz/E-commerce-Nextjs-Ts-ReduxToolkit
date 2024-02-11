// import style from "../ItemsMap/items.module.scss";

// import Image from "next/image";

// import busked from "@/images/addToCard.svg";
// import axios from "axios";

// import { Iphones } from "@/components/interfaces/Iphone";

// const getAllIphone = async () => {
//   const { data } = await axios<Iphones[]>("http://localhost:3001/iphone", {});
//   console.log(data);
//   return data;
// };
// export default async function ItemsMap() {
//   const data: Iphones[] = await getAllIphone();

//   return (
//     <section className={style.mainItemsBlock}>
//       <div className="container">
//         <div className={style.flex}>
//           {data?.map((mas) => (
//             <div className={style.items}>
//               <Image src={mas.img} width={120} height={180} alt="iphone" />
//               <div className={style.textBlock}>
//                 <p>{mas.name}</p>
//                 <span>{mas.price}</span>
//               </div>
//               <div className={style.btnBlock}>
//                 <button className={style.cta}>
//                   <span>See more</span>
//                   <svg width="15px" height="10px" viewBox="0 0 13 10">
//                     <path d="M1,5 L11,5"></path>
//                     <polyline points="8 1 12 5 8 9"></polyline>
//                   </svg>
//                 </button>
//               </div>
//               <Image
//                 className={style.busked}
//                 src={busked}
//                 width={30}
//                 height={30}
//                 alt="busked"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
export default function ItemsMap() {
  return <h1>da</h1>;
}
