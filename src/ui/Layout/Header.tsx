import React, { memo } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../services/redux/user";

const Header: React.FC = () => {
  const user = useSelector(selectUser);

  return (
    <header className="bg-gray-800 	max-w-full fixed right-0 left-0 z-50 top-0 h-11">
      <div className="flex items-center justify-between px-4 py-2 mx-auto xl:max-w-[1280px]">
        <div className="text-white text-lg font-bold">Logo</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="/search" className="text-white">
                Tìm kiếm công việc
              </a>
            </li>
            <li>
              <a href="/companies" className="text-white">
                Công Ty
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white">
                Liên hệ
              </a>
            </li>
            <li>
              <a href="/create-cv" className="text-white">
                Tạo CV
              </a>
            </li>
            <li>
              {!(
                user.name === "" &&
                user.token === "" &&
                user.token_type === ""
              ) ? (
                <a href="/profile" className="text-white">
                  Chào mừng {user.name}
                </a>
              ) : (
                <a href="/sign-in" className="text-white">
                  Đăng nhập
                </a>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);