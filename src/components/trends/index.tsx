import React from "react";
import type { FC } from "react";
import TrendsCard from "./trends-card";
import type { SlideProps } from "../../@types/slide";

const fakeData: SlideProps[] = [
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/9531/c63d/3f618aefdf1ccb10a5aa0e2d00f45d0b?Expires=1698019200&Signature=JI~fQ4aOFFZoL0l2lfFQ76KJeg1pUupAls0Dz0pskqykzeTVNMrV91tVIvA3iSZzoIeR7ZeqQi6dxydygvFqwDXssMpmxlYGeSYyOZCnJC0R50qdtYArwtxpG5t1GAujT~Mpd-MXzZ~QK5gGkc1Cu6C0SLK3PucwAln1aX6TPAOJDfSpxKm6gSncbogPTZE2IX5-h~NIEcLLwE70fitRLOXZJV9-N50g9MO07gIpWJ2mCu9fNJH~AvPBRCuVDxOIZ9QKgz-YheEugZa1cfKyP6NoIGC4Dj8BR2lHQlxlu5Z9coHS4QjmRfKyk3sRLAVUbW84zAUNCsPnxObqs7FX8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    heroTitle: "Summer Cactus & Succulents",
    paragraph:
      " We are online plant shop offering a wide rance of cheap and trendy plants",
    btnText: "Find more &rarr;",
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/7c59/7aa9/1ee5df5d1fd65d8184246c0c9918f920?Expires=1698019200&Signature=OE5Sog7A98-g6fwUVJ2FAWQgUrDxpEMO1JKVmoKkioLXNnKsUx94S8Hui0mnz65QaVTzGlVihOGHQS-o1GAvLnAv2OHWm5IWyPknU7XtWl-xn3GQ4Ta3N5gG92MNnz6I77jsnnWl-RPy8cNHhYEj~22vQ92-NrzaDxbVPg2C9IuVnNtP~R8FHuzFIOEvtB9oQ02csfvD4tpVW58dprgmZpmtgAi5LQBZ5AwvGk11sU0x0T-GgnxEIksJVIvLE7UiqksGO6rf1R1evqRsbTbIcH4Dee2jCbMJSZC3z-B6riKG-uUY7oDoIQK1lbTtc1laaTmArFo5kFe5~M9jUhAlJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    heroTitle: "Styling Trends",
    paragraph:
      " We are online plant shop offering a wide rance of cheap and trendy plants",
    btnText: "Find more &rarr;",
  },
];

const Trends: FC = () => {
  return (
    <div className="flex m-auto w-[80%]  gap-[28px]  ">
      {fakeData.map((data, index) => (
        <TrendsCard
          key={index}
          imgUrl={data.imgUrl}
          heroTitle={data.heroTitle}
          paragraph={data.paragraph}
          btnText={data.btnText}
        />
      ))}
    </div>
  );
};

export default Trends;
