import NavigationRight from "./navigation-right";


const TopHeaderComponent = () => {
  return (
    <header className="self-stretch bg-gray-600 h-[162px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] z-[2] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <nav className="m-0 flex-1 rounded-3xs bg-gray-500 flex flex-row py-2.5 px-5 items-center  justify-center">
        <NavigationRight
          pREGUNTASWidth="862px"
          salvaWebProLongLogoAlone5TextDecoration="none"
          tESTIMONIOSTextDecoration="none"
          aCERCATextDecoration="none"
          propTextDecoration="none"
          propTextDecoration1="none"
          propTextDecoration2="none"
        />
      </nav>
    </header>
  );
};

export default TopHeaderComponent;
