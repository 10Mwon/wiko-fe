"use client";
import { googleTranslate } from "@/utils/googleTranslate";
import { useEffect, useState } from "react";
const data = {
  id: 7,
  jobName: "健身与健康公司",
  title: "社交媒体营销专家",
  location: "首尔市江南区",
  pay: "3,000,000",
  imgUrl: "https://imgs.albamon.kr/images/franchise_booth/54/Logo_URL_1.gif",
};
export default function Page() {
  const [translateData, setData] = useState(data);
  useEffect(() => {
    const fetchData = async () => {
      const result = await googleTranslate(data);
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>{translateData.jobName}</h1>
      <h2>{translateData.title}</h2>
      <p>{translateData.location}</p>
      <p>{translateData.pay}</p>
    </div>
  );
}
