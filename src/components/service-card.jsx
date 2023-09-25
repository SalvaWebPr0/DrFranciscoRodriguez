import { useMemo } from "react";

const ServiceCard = ({
  procedureName,
  dimension,
  imageDimension,
  procedureDescription,
  propBackgroundImage,
  propLineHeight,
}) => {
  const card1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const brazilianButtLiftStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div
      className="rounded-3xs w-[350px] h-[466.99px] flex flex-col py-[15px] px-[13px] box-border items-start justify-end gap-[15px] bg-[url('/card-1@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-9xl text-gray-white font-body-regular-600 hover:bg-gainsboro-400 hover:cursor-pointer sm:w-[100%!important] sm:mb-5"
      style={card1Style}
    >
      <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start">
        <div
          className="flex-1 relative leading-[20.32px] font-medium"
          style={brazilianButtLiftStyle}
        >
          {procedureName}
        </div>
      </div>
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start text-xl">
        <div className="relative leading-[18.98px] font-semibold [background:radial-gradient(50%_50%_at_50%_50%,_#dbb346_7.29%,_#f0dca7_68.23%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          $ 20,690 - 34,000
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between text-4xs">
        <div className="self-stretch w-[324px] flex flex-row py-0 px-2.5 box-border items-start justify-start gap-[17px]">
          <div className="flex flex-row items-center justify-start gap-[4.35px]">
            <img
              className="relative w-[14.12px] h-[14.01px] object-cover"
              alt=""
              src={dimension}
            />
            <div className="relative leading-[16.27px] font-medium">4</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[4.35px]">
            <img
              className="relative w-[13.17px] h-[13.16px] object-cover"
              alt=""
              src={imageDimension}
            />
            <div className="relative leading-[16.27px] font-medium">
              Recuperacion 5- 10 dias
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8.71px] text-center text-[11.61px]">
          <div className="rounded-[1.45px] bg-black w-[23px] h-6 flex flex-row p-[2.902620315551758px] box-border items-center justify-center">
            <img
              className="relative w-[14.51px] h-[14.51px] object-cover"
              alt=""
              src={procedureDescription}
            />
          </div>
          <div className="rounded-8xs bg-black flex flex-row p-[2.902620315551758px] items-start justify-start">
            <div className="relative tracking-[0.33em] leading-[17.42px] font-medium flex items-end justify-center w-[98px] shrink-0">
              Cotizar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
