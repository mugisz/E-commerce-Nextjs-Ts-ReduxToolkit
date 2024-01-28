import Image from "next/image";

import MainSection from "@/components/ui/MainSection/MainSection";

import style from "../Main/main.module.scss";
export default function MainPage() {
  return (
    <main className={style.main}>
      <MainSection />
    </main>
  );
}
