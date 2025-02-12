import { googleTranslate } from "@/utils/googleTranslate";
const data = {
  id: 7,
  jobName: "健身与健康公司",
  title: "社交媒体营销专家",
  location: "首尔市江南区",
  pay: "3,000,000",
  imgUrl: "https://imgs.albamon.kr/images/franchise_booth/54/Logo_URL_1.gif",
};
export default async function Page() {
  const translated = (await googleTranslate(data)) || "";
  console.log(translated);
  return <div>testPage</div>;
}
