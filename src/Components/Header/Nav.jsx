import { Link } from "react-router-dom";
import NavLink from "../../Services/Data/NavData";
import { HiMenuAlt1 } from "react-icons/hi";
import { Switch } from "antd";
import logo from "/logo.png";
import Handlers from "../../Services/Toolkit/Handlers";

const Nav = () => {
  const {
    isMenuOpen,
    view,
    isDropdownOpen,
    isMobileDropdownOpen,
    scrolled,
    sidebarRef,
    dropdownRef,
    handleToggleMenu,
    handleSetView,
    handleSetDropdownOpen,
    handleSetMobileDropdownOpen,
    handleNavigation,
  } = Handlers();

  return (
    <>
      <div
        className={`header fixed top-0 left-0 z-[999] px-[2rem] py-[0.2rem] max-lg:py-[1rem] max flex justify-center 
        items-center gap-[4rem] w-[100%] max-lg:justify-end ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
        ref={sidebarRef}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full transition-all duration-[0.4s] ease-linear opacity-[1] bg-white`}
        />

        <div className="relative flex justify-center max-xl:justify-between gap-[6rem] w-full items-center">
          <Link
            to={"/"}
            onClick={handleNavigation}
            className="relative flex justify-start items-center w-auto h-auto"
          >
            <img
              src={logo}
              alt="logo"
              className="w-full max-xl:w-[50%] h-full object-cover"
            />
          </Link>
          <div className="flex items-center justify-end gap-[4rem] max-lg:gap-[2rem]">
            <nav className="relative navbar w-[auto] hidden xl:flex">
              <ul className="flex items-start gap-[4rem] transition-all duration-[0.2s] ease-in-out">
                {NavLink.map((e) => {
                  if (e.submenu) {
                    return (
                      <div
                        key={e.id}
                        className="relative cursor-pointer"
                        onMouseEnter={() => handleSetDropdownOpen(e.id)}
                        onMouseLeave={() => handleSetDropdownOpen(null)}
                      >
                        <span
                          className={`navlink border-b-[1px] pb-[0.5rem] border-none ${e.class}`}
                        >
                          {e.title} &nbsp;
                          <i className="fa-solid fa-chevron-down text-[1.4rem] relative bottom-[0.2rem]"></i>
                        </span>
                        {isDropdownOpen === e.id && (
                          <div
                            ref={dropdownRef}
                            className="absolute left-[-6rem] mt-[0.2rem] px-[2rem] py-[2rem] border-[1px] border-[#d2d2d2] 
                            w-[300px] bg-white shadow-lg rounded-lg z-50 flex flex-col gap-[1rem]"
                          >
                            {e.submenu.map((sub) => (
                              <Link
                                key={sub.id}
                                to={sub.to}
                                className="block text-[2rem] hover:text-[darkblue] text-black transition"
                                onClick={handleNavigation}
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  } else {
                    return (
                      <Link
                        key={e.id}
                        to={e.to}
                        onClick={() => {
                          handleNavigation();
                          handleSetView(e.title);
                        }}
                        className={`navlink ${
                          view === e.title
                            ? `border-[#ff3d64] text-[#ff3d64]`
                            : `border-transparent text-[#212121] hover:text-[var(--text-primary)]`
                        } ${e.class} border-b-[1px] pb-[0.2rem]`}
                      >
                        {e.title}
                      </Link>
                    );
                  }
                })}
              </ul>
            </nav>
            <div className="relative flex items-center justify-center gap-[2rem]">
              <a
                href="#"
                className="fa-brands fa-facebook text-[#b11f3c] text-[2.2rem] hover:opacity-[0.5]"
              />
              <a
                href="#"
                className="fa-brands fa-linkedin text-[#b11f3c] text-[2.2rem] hover:opacity-[0.5]"
              />
              <a
                href="#"
                className="fa-brands fa-instagram text-[#b11f3c] text-[2.2rem] hover:opacity-[0.5]"
              />
              <div className="xl:hidden">
                <HiMenuAlt1
                  size={20}
                  className="text-[#212121] cursor-pointer"
                  onClick={handleToggleMenu}
                />
              </div>
            </div>
            <div className="max-xl:hidden">
              <Switch
                checkedChildren="🔆"
                unCheckedChildren="⏾"
                className="scale-[1.2]"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={sidebarRef}
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-full h-screen bg-[white] transition-transform duration-[0.3s] ease-in-out 
        xl:hidden z-[999]`}
      >
        <div className="flex justify-between w-full items-center gap-[1rem] p-[1rem]">
          <Link
            to={"/"}
            onClick={handleNavigation}
            className="relative flex justify-start items-start w-auto h-auto"
          >
            <img
              src={logo}
              alt="logo"
              className="w-full max-sm:w-[50%] h-full object-cover"
            />
          </Link>
          <div className="flex justify-end items-center gap-[2rem]">
            <Switch
              checkedChildren="🔆"
              unCheckedChildren="⏾"
              className="scale-[1.2]"
            />
            <HiMenuAlt1
              size={20}
              className="text-[#212121] cursor-pointer"
              onClick={handleToggleMenu}
            />
          </div>
        </div>
        <ul className="flex flex-col justify-center items-center text-center h-full px-[6rem] py-[0rem] gap-[3rem] text-[black]">
          {NavLink.map((e) => {
            if (e.submenu) {
              return (
                <div key={e.id} className="w-full flex flex-col items-center">
                  <span
                    className="block text-[2rem] font-semibold cursor-pointer"
                    onClick={() =>
                      handleSetMobileDropdownOpen(
                        isMobileDropdownOpen === e.id ? null : e.id
                      )
                    }
                  >
                    {e.title} &nbsp;
                    <i className="fa-solid fa-chevron-down text-[1.4rem] relative bottom-[0.2rem]"></i>
                  </span>
                  <div
                    className={`w-full overflow-y-auto flex flex-col gap-[0.5rem] justify-center items-center text-center transition-all duration-300 ease-in-out z-[100] 
                    ${
                      isMobileDropdownOpen === e.id
                        ? "max-h-[300px] mt-[1rem] mb-[-2rem] translate-y-0 opacity-[1]"
                        : "max-h-0 -translate-y-full opacity-0"
                    }`}
                  >
                    {e.submenu.map((sub) => (
                      <Link
                        key={sub.id}
                        to={sub.to}
                        className="block text-[1.6rem] text-black py-[0.5rem] transition"
                        onClick={handleNavigation}
                      >
                        <i className="fa-solid fa-circle text-[1rem] text-[grey]"></i>
                        &nbsp; {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <Link
                  key={e.id}
                  to={e.to}
                  onClick={handleNavigation}
                  className={`relative navlink ${e.class}`}
                >
                  {e.title}
                </Link>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default Nav;
