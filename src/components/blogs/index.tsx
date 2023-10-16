import React from "react";
import type { FC } from "react";

import BlogCarousel from "./blog-carousel";
const Blogs: FC = () => {
  return (
    <div className="w-[80%] flex m-auto flex-col gap-[15px] mb-8">
      <h2 className="text-3xl font-semibold text-center text-gray-700 leading-16">
        Our blog posts
      </h2>
      <div className="text-base font-light leading-6 text-center text-gray-700">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </div>
      <BlogCarousel />
    </div>
  );
};

export default Blogs;
