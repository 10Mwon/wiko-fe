import { communityData } from "@/store/dummy";
import CommunityItem from "./CommunityItem";

export default function Community() {
  return (
    <section className="my-10">
      <h1 className="title">나라별 커뮤니티</h1>
      <div className="flex gap-5 overflow-x-scroll mt-4">
        {communityData.map((item, index) => (
          <CommunityItem
            key={index}
            countryName={item.countryName}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
