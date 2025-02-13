"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { relatedLocalJobs } from "@/store/dummy";
import Image from "next/image";
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

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
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
    const timer = setInterval(autoSlide, 3000);
    return () => clearInterval(timer);
  }, [autoSlide]);

  return (
    <section className="px-4">
      <h1 className="mt-[160px] font-lexend font-semibold">
        Local government-linked jobs
      </h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent className="w-full">
          {relatedLocalJobs.map((item) => (
            <CarouselItem
              key={item.id}
              className="flex-shrink-0 w-36 relative basis-1/3 ml-4 pl-0"
            >
              <Image
                src={item.imgUrl}
                alt={`${item.local} image`}
                width={300}
                height={400}
                className="object-cover"
              />
              <span className="absolute text-white font-lexend font-bold z-10 bottom-3.5 left-4">
                {item.local}
              </span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
