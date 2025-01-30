import { exchangeRateData } from "@/store/dummy";
import Image from "next/image";
export default function ExchangeRate() {
  // useEffect(()=>{
  //실시간 환율 정보받아오기
  // },[])
  return (
    <section>
      <h1 className="title">실시간 환율</h1>
      <ul className="mt-4">
        {exchangeRateData.map((item) => (
          <li
            className="flex w-full justify-between font-medium mb-4"
            key={item.Currencies}
          >
            <div className="flex gap-2 items-center">
              <Image
                src={item.icon}
                width={50}
                height={50}
                priority
                alt=""
                className="w-[21px] h-[15px]"
              />
              <span>{item.Currencies}</span>
            </div>
            <div>
              <span className="font-semibold">{item.exchangeRate}</span>원
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
