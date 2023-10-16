import React from "react";
import type { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BlogsCard from "../blogs-card";
import type { BlogCardType } from "../../../@types/blog";

const fakeBlogData: BlogCardType[] = [
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/4f35/4de5/b3a1897ab9540ae4953f1e0f0ace9952?Expires=1698019200&Signature=eZh3Bih4PqlNMRiw~kYCV43A12Ya6il~67ENdf6JpbUkLUFufzcEdtvx0iDk171-KkWr89q~fetP2btpb5mQUQprsn0-ToR3IUKYHJNTKgpwQCg3AqDRPGtlId9XClvh6d41LPYrPjCMmCddGqnUtK3UZsP8rT4SepiQSUvBgnk~cpp4dJ8CU3K3qcr6iN5HB0jH1Do~ySNc9pLvHuAngZpPdafnd68c31hyopNI8mJJUDIz8JjEwNt2~pykFAyJ1DzEXik9o2Yc9ec-MkxUct4IFYh0FeWyMkRIIzDqP5kLDWHHpapzH~wCcLz8QpHm3S5Lvo6OBTEdJR3fyUBzrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: "September 12 I Read in 6 minutes",
    title: "Cactus & Succulent Care Tips",
    description:
      "Cacti are succulents are easy care plants for any home or patio.",
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/5d6a/fe05/19b43ea40d6912ed9f6c86bde26ac437?Expires=1698019200&Signature=jb6H-T5MnAgNYlea7ct2s7nQAENx1NaF8CMZipNDCLk~HVa2O7anrINvRdbw6TVucGgiXUK5JPKgZyrzHNTZ-WqQQ7tLXeQhTZpC4Jk5~s96wPcmYT27aTSRJhd29CGvxEfHZwQU~Z1kRxzvmYLQREH2z-rPEDhZytG5ljAmj5-IbHfOUW5Kn3ZNtPKmYmsPTWlJE8C0ioPs9y6Rcyh9qpY56SP2F0-gEtLfr2MR6fnz2dxwxy1RhCXRY2EanrITiFcSx-pDoRpEimWfrD6VZByyc0Yw41t18heVVm3uT62pIRrnZqtE4nhj~rUuaSuG4TyY36jM8BvtOWj6JvYSfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: "September 12 I Read in 6 minutes",
    title: "Top 10 Succulents for Your Home",
    description: "Best in hanging baskets. Prefers medium to high light.",
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/708d/5ac3/4916119d54b3f3ce81cb3585303dc87b?Expires=1698019200&Signature=E7Kcs6IholNE6v3UDGBSEc27Emkps9cW2CClI0Pxr7WWJ06i4SWyTjO3nX-g4mzpgFFc67vLYTWEzOPBoCCej2CM1sr9mQa-LpE187oLTbBQMxpxxFTX9VvK2rXzPswekj7DulOiRmvaPD9IxBfE5er3PFuKtEVB7DqaM3RFZS8sc6nL5fLLv-AcyH6aafMoNIQLPwAKUTzf~-AtbuP4ENNp0Owb4RjJjftcwRwRFI-4t9T3DeUygjJ3tMsRHpEWNTVWHcGqA7Qnt6uBWf66xQ2f63ndsy~kjHExPFWdBveT8-xjlXQAxrwBO0UW1-u1kM1gIF3olkzFm41yewgktw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: "September 15 I Read in 3 minutes",
    title: "Cacti & Succulent Care Tips",
    description:
      "Cacti and succulents thrive in containers and because most are..",
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/76ec/a5ae/aad8a62909bb4bd3fb02922695ada788?Expires=1698019200&Signature=RwprTsoj7S5wRvsBul6dbFdy~TaypvqVWRBcoven6QuKV2RsnsIVOLDx7OG6RhBEm7LfAVM7eMoG5WpOLny1Ku4Bt0OweG7SrFy5s1ZqDKPEJABBXvMOvLjNBy9jqcxJNd5i0TAXeb9zkHfHCjsvpzEnxvsf4o3SPcYCRbxq35e7WchuDcPhv1TUSiCKg8eSYEv8BrXuTThaFkn9za7SKR0650BlKOYlWJIOPzjIGeUYQ1~HNz3Tw~fDvJDbf-aUrKiuLLa4ZX-~~mDlmzo639X26dwEJvKZ2R~6Gr5DbK22LIk0S~Pk0qBEO5fsfxVNbFtcbo5BQF35bwdSzUgt1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: "September 15 I Read in 3 minutes",
    title: "Best Houseplants Room by Room",
    description: "The benefits of houseplants are endless. In addition to..",
  },
];

// import './styles.css';
const BlogCarousel: FC = () => {
  return (
    <div className="w-[100%] flex m-auto h-[361px]  ">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[400px]  mySwiper"
      >
        {fakeBlogData.map((data, index) => (
          <SwiperSlide className="h-[100%]" key={index}>
            <BlogsCard
              imgUrl={data.imgUrl}
              title={data.title}
              date={data.date}
              description={data.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogCarousel;
