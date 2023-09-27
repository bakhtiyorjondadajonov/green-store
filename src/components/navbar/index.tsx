import type { FC } from "react";
import {
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  BellOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import SiteMap from "./siteMap";
import { useReduxDispatch } from "../../hooks/useRedux";
import { switchSiteMapModalVisibility } from "../../redux/modalSlice";
// import { useDispatch } from "react-redux";

const Navbar: FC = () => {
  const dispatch = useReduxDispatch();
  const iconStyle: string = "cursor-pointer text-[20px]";
  return (
    <div className="w-[80%] m-auto flex justify-between h-[90px] items-center border-b-2">
      <SiteMap />
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
          alt="logo"
        />
      </div>
      <div className="flex gap-4 cursor-pointer max-md:hidden">
        <h3>Home</h3>
        <h3>Blog</h3>
      </div>
      <div className="flex gap-[30px] items-center">
        <SearchOutlined className={iconStyle} />
        <BellOutlined className={iconStyle} />
        <ShoppingCartOutlined className={iconStyle} />
        <button
          className="
          rounded-md
          flex
        text-white 
        w-[100px] h-[35px]
        bg-[#46A358]
        justify-center
        items-center
        max-md:hidden
        "
        >
          <LoginOutlined />
          &nbsp; Login
        </button>
        <MenuOutlined
          className={`${iconStyle} hidden max-md:block`}
          onClick={() => dispatch(switchSiteMapModalVisibility())}
        />
      </div>
    </div>
  );
};

export default Navbar;
