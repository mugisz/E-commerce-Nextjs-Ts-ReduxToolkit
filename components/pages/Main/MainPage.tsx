import Image from "next/image";

import TopGadgetMenu from "@/components/ui/TopGadgetMenu/TopGadgetMenu";
import style from "../Main/main.module.scss";
export default function MainPage() {
  return (
    <main className={style.main}>
      <TopGadgetMenu />
    </main>
  );
}
