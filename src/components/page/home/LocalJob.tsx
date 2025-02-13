"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { relatedLocalJobs } from "@/store/dummy";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

// 로컬 잡 아이템의 타입 정의
interface LocalJobItem {
  id: number | string;
  local: string;
  imgUrl: string;
}

export default function LocalJob() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const router = useRouter();
  const t = useTranslations("home");
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  // 자동 슬라이드 기능
  const autoSlide = useCallback(() => {
    if (!api) return;
    api.scrollNext();
    // 마지막 슬라이드인 경우 처음으로 돌아가기
    if (current === count - 1) {
      api.scrollTo(0);
    }
  }, [api, current, count]);

  useEffect(() => {
    const timer = setInterval(autoSlide, 2200);
    return () => clearInterval(timer);
  }, [autoSlide]);

  const onClickcarouselItem = (startAddress: string, endAddress: string) => {
    router.push(
      `/job/local?startAddress=${startAddress}&endAddress=${endAddress}`
    );
  };

  return (
    <section className="px-4">
      <h1 className="mt-[160px] font-lexend font-semibold text-xl mb-4">
        {t("todayRecruit")}
      </h1>
      <div className="relative w-full overflow-hidden">
        {/* 가로 스크롤 숨김 */}
        <Carousel
          opts={{
            align: "center", // 중앙 정렬
            loop: true,
            containScroll: "trimSnaps", // 현재 아이템을 중앙에 오도록 설정
          }}
          setApi={setApi}
        >
          <CarouselContent className="flex gap-x-0">
            {/* 좌우 간격 조정 */}
            {relatedLocalJobs.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex-shrink-0 relative"
                onClick={() =>
                  onClickcarouselItem(item.startAddress, item.endAddress)
                }
              >
                <Image
                  src={item.imgUrl}
                  alt={`${item.location} image`}
                  width={300}
                  height={400}
                  className="object-cover"
                />
                <span className="absolute text-white font-lexend font-bold z-10 bottom-3.5 left-8">
                  {t(item.location)}
                </span>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
