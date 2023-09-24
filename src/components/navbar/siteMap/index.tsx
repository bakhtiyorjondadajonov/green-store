import type { FC } from "react";
import { Modal } from "antd";
import { LoginOutlined } from "@ant-design/icons";
const customLinkStyle: string = `
 text-[18px]
 font-normal
 leading-6
 cursor-pointer
 
 p-1



`;
const linkHoverStyle: string = `
hover:text-[#46A358] hover:border-l-4  hover:border-current hover:ease-in duration-100    

`;
const SiteMap: FC = () => {
  return (
    <Modal open={true} footer={false} title="Site map">
      <div className="flex flex-col gap-4 mt-5">
        <h3 className={`${customLinkStyle} ${linkHoverStyle}`}>Home</h3>
        <h3 className={`${customLinkStyle} ${linkHoverStyle}`}>Blogs</h3>
        <button
          className="
          rounded-md
          flex
          text-[16px]
          font-medium
        text-white 
        w-[80%] h-[49px]
        bg-[#46A358]
        self-center
        justify-center
        items-center
        max-md:hidden
        "
        >
          <LoginOutlined />
          &nbsp; Login
        </button>
      </div>
    </Modal>
  );
};

export default SiteMap;
