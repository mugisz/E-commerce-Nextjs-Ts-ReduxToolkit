import Image from "next/image";
import Carousel from "@/components/ui/Carousel/Carousel";
import MainPage from "@/components/pages/MainPage";
export default function Home() {
  return (
    <>
      <Carousel />
      <MainPage />
    </>
  );
}
