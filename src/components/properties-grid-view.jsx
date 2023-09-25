import "antd/dist/antd.min.css";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import NavigationRight from "./navigation-right";
import ServiceCard from "./service-card";
import Image from "next/image";
import Link from "next/link";

const PropertiesGridView = () => {
  return (
    <div className="bg-gray-white w-[1920px] flex flex-col items-start justify-start text-center text-[52px] text-gray-white font-playfair-display">
      <header className="self-stretch bg-gray-600 h-[152px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
        <div className="flex-1 rounded-3xs bg-gray-500 flex flex-row py-2.5 px-5 items-center justify-between">
          <NavigationRight />
        </div>
      </header>
      <div className="self-stretch h-[336px] flex flex-col items-center justify-center bg-[url('/category@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="relative tracking-[0.18em] leading-[72px] font-semibold">
            Servicios
          </div>
          <div className="relative text-base leading-[24px] text-whitesmoke-400 font-body-regular-600">
            <span>
              <span className="tracking-[0.04em]">Inicio</span>
              {` / `}
            </span>
            <span className="tracking-[0.04em] font-medium text-gray-white">
              Servicios
            </span>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-600 flex flex-col py-[140px] px-0 items-center justify-start gap-[95px] text-left text-base text-lightgray-100 font-body-regular-600 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="w-[272px] flex flex-row items-center justify-start">
          <div className="flex flex-row items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6">
                <Image width={30} height={30}
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/undefined11.png"
                />
                <Image width={30} height={30}
                  className="absolute h-[6.25%] w-[56.25%] top-[21.88%] right-[12.5%] bottom-[71.88%] left-[31.25%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/undefined12.png"
                />
                <Image width={30} height={30}
                  className="absolute h-[6.25%] w-[56.25%] top-[46.88%] right-[12.5%] bottom-[46.88%] left-[31.25%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/undefined12.png"
                />
                <Image width={30} height={30}
                  className="absolute h-[6.25%] w-[56.25%] top-[71.88%] right-[12.5%] bottom-[21.88%] left-[31.25%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/undefined12.png"
                />
                <Image width={30} height={30}
                  className="absolute h-[9.38%] w-[9.38%] top-[20.31%] right-[78.13%] bottom-[70.31%] left-[12.5%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/undefined13.png"
                />
                <Image width={30} height={30}
                  className="absolute h-[9.38%] w-[9.38%] top-[45.31%] right-[78.13%] bottom-[45.31%] left-[12.5%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/undefined13.png"
                />
                <Image width={30} height={30}
                  className="absolute h-[9.38%] w-[9.38%] top-[70.31%] right-[78.13%] bottom-[20.31%] left-[12.5%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/undefined13.png"
                />
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6">
                <Image width={30} height={30}
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/undefined14.png"
                />
                <Image width={30} height={30}
                  className="absolute h-[31.25%] w-[31.25%] top-[15.63%] right-[53.13%] bottom-[53.13%] left-[15.63%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/undefined15.png"
                />
                <Image width={30} height={30}
                  className="absolute h-[31.25%] w-[31.25%] top-[15.63%] right-[15.63%] bottom-[53.13%] left-[53.13%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/undefined15.png"
                />
                <Image width={30} height={30}
                  className="absolute h-[31.25%] w-[31.25%] top-[53.13%] right-[53.13%] bottom-[15.63%] left-[15.63%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/undefined15.png"
                />
                <Image width={30} height={30}
                  className="absolute h-[31.25%] w-[31.25%] top-[53.13%] right-[15.63%] bottom-[15.63%] left-[53.13%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/undefined15.png"
                />
              </button>
            </div>
            <div className="relative leading-[24px]">Ordenar</div>
            <Dropdown
              overlay={
                <Menu>
                  {[
                    { value: "Cuerpo" },
                    { value: "Cara" },
                    { value: "Piernas" },
                    { value: "Inyectables" },
                  ].map((option, index) => (
                    <Menu.Item key={index}>
                      <Link onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["hover"]}
            >
              <Link onClick={(e) => e.preventDefault()}>
                {`Todos `}
                <DownOutlined />
              </Link>
            </Dropdown>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[60px]">
            <ServiceCard
              procedureName="Brazilian Butt Lift"
              dimension="/undefined16.png"
              imageDimension="/undefined17.png"
              procedureDescription="/undefined18.png"
            />
            <ServiceCard
              procedureName="Liposucción"
              dimension="/undefined16.png"
              imageDimension="/undefined17.png"
              procedureDescription="/undefined18.png"
              propBackgroundImage="url('/card-16@3x.png')"
              propLineHeight="20.32px"
            />
            <ServiceCard
              procedureName="Abdominoplastia"
              dimension="/undefined16.png"
              imageDimension="/undefined17.png"
              procedureDescription="/undefined18.png"
              propBackgroundImage="url('/card-17@3x.png')"
              propLineHeight="20.32px"
            />
            <ServiceCard
              procedureName="Braquioplastia"
              dimension="/undefined16.png"
              imageDimension="/undefined17.png"
              procedureDescription="/undefined18.png"
              propBackgroundImage="url('/card-18@3x.png')"
              propLineHeight="20.32px"
            />
            <ServiceCard
              procedureName="Toxina botulínica"
              dimension="/undefined19.png"
              imageDimension="/undefined20.png"
              procedureDescription="/undefined21.png"
              propBackgroundImage="url('/card-19@3x.png')"
              propLineHeight="20.32px"
            />
            <ServiceCard
              procedureName="Rellenos Ácido hialurónico"
              dimension="/undefined19.png"
              imageDimension="/undefined20.png"
              procedureDescription="/undefined21.png"
              propBackgroundImage="url('/card-20@3x.png')"
              propLineHeight="28.32px"
            />
            <ServiceCard
              procedureName="Toxina botulínica"
              dimension="/undefined19.png"
              imageDimension="/undefined20.png"
              procedureDescription="/undefined21.png"
              propBackgroundImage="url('/card-21@3x.png')"
              propLineHeight="20.32px"
            />
            <ServiceCard
              procedureName="Cruroplastia"
              dimension="/undefined19.png"
              imageDimension="/undefined20.png"
              procedureDescription="/undefined21.png"
              propBackgroundImage="url('/card-22@3x.png')"
              propLineHeight="20.32px"
            />
            <ServiceCard
              procedureName="Liposucción de piernas"
              dimension="/undefined22.png"
              imageDimension="/undefined23.png"
              procedureDescription="/undefined24.png"
              propBackgroundImage="url('/card-23@3x.png')"
              propLineHeight="31.32px"
            />
            <ServiceCard
              procedureName="Torsoplastia"
              dimension="/undefined22.png"
              imageDimension="/undefined23.png"
              procedureDescription="/undefined24.png"
              propBackgroundImage="url('/card-24@3x.png')"
              propLineHeight="31.32px"
            />
            <ServiceCard
              procedureName="Levantamiento de busto"
              dimension="/undefined22.png"
              imageDimension="/undefined23.png"
              procedureDescription="/undefined24.png"
              propBackgroundImage="url('/card-25@3x.png')"
              propLineHeight="31.32px"
            />
            <ServiceCard
              procedureName="Aumento de busto"
              dimension="/undefined22.png"
              imageDimension="/undefined23.png"
              procedureDescription="/undefined24.png"
              propBackgroundImage="url('/card-26@3x.png')"
              propLineHeight="31.32px"
            />
            <ServiceCard
              procedureName="Reducción de busto"
              dimension="/undefined25.png"
              imageDimension="/undefined26.png"
              procedureDescription="/undefined27.png"
              propBackgroundImage="url('/card-27@3x.png')"
              propLineHeight="31.32px"
            />
            <ServiceCard
              procedureName="Mastectomía por ginecomastia"
              dimension="/undefined25.png"
              imageDimension="/undefined26.png"
              procedureDescription="/undefined27.png"
              propBackgroundImage="url('/card-28@3x.png')"
              propLineHeight="31.32px"
            />
            <ServiceCard
              procedureName="Cervicoplastia"
              dimension="/undefined25.png"
              imageDimension="/undefined26.png"
              procedureDescription="/undefined27.png"
              propBackgroundImage="url('/card-29@3x.png')"
              propLineHeight="31.32px"
            />
            <ServiceCard
              procedureName="Bichectomia"
              dimension="/undefined25.png"
              imageDimension="/undefined26.png"
              procedureDescription="/undefined27.png"
              propBackgroundImage="url('/card-30@3x.png')"
              propLineHeight="31.32px"
            />
            <ServiceCard
              procedureName="Otoplastia"
              dimension="/undefined28.png"
              imageDimension="/undefined29.png"
              procedureDescription="/undefined30.png"
              propBackgroundImage="url('/card-31@3x.png')"
              propLineHeight="31.32px"
            />
            <ServiceCard
              procedureName="Mentoplastia"
              dimension="/undefined28.png"
              imageDimension="/undefined29.png"
              procedureDescription="/undefined30.png"
              propBackgroundImage="url('/card-32@3x.png')"
              propLineHeight="31.32px"
            />
            <ServiceCard
              procedureName="Labioplastia"
              dimension="/undefined28.png"
              imageDimension="/undefined29.png"
              procedureDescription="/undefined30.png"
              propBackgroundImage="url('/card-33@3x.png')"
              propLineHeight="31.32px"
            />
            <ServiceCard
              procedureName="Rinoplastia"
              dimension="/undefined28.png"
              imageDimension="/undefined29.png"
              procedureDescription="/undefined30.png"
              propBackgroundImage="url('/card-34@3x.png')"
              propLineHeight="31.32px"
            />
            <ServiceCard
              procedureName="Blefaroplastia"
              dimension="/undefined31.png"
              imageDimension="/undefined32.png"
              procedureDescription="/undefined33.png"
              propBackgroundImage="url('/card-35@3x.png')"
              propLineHeight="31.32px"
            />
            <ServiceCard
              procedureName="Ritidectomía"
              dimension="/undefined31.png"
              imageDimension="/undefined32.png"
              procedureDescription="/undefined33.png"
              propBackgroundImage="url('/card-36@3x.png')"
              propLineHeight="31.32px"
            />
            <ServiceCard
              procedureName="Contorno Corporali"
              dimension="/undefined31.png"
              imageDimension="/undefined32.png"
              procedureDescription="/undefined33.png"
              propBackgroundImage="url('/card-37@3x.png')"
              propLineHeight="31.32px"
            />
            <ServiceCard
              procedureName="Aumento de Pantorilla"
              dimension="/undefined31.png"
              imageDimension="/undefined32.png"
              procedureDescription="/undefined33.png"
              propBackgroundImage="url('/card-38@3x.png')"
              propLineHeight="31.32px"
            />
          </div>
        </div>
        <div className="flex flex-row items-end justify-center gap-[8px] text-center text-sendblack">
          <div className="rounded bg-primary-50 flex flex-row p-2.5 items-start justify-start">
            <Image width={30} height={30}
              className="relative w-6 h-6 object-cover"
              alt=""
              src="/undefined34.png"
            />
          </div>
          <div className="rounded-10xs [background:radial-gradient(50%_50%_at_50%_50%,_#8f742b,_#c1a047_21.35%,_#ebc86c_47.4%,_#a0853a_75%,_#cdaa4c)] flex flex-col py-2.5 px-[9px] items-start justify-start text-gray-white">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              1
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              2
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              3
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              ...
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              54
            </div>
          </div>
          <div className="rounded [background:radial-gradient(50%_50%_at_50%_50%,_#8f742b,_#c1a047_21.35%,_#ebc86c_47.4%,_#a0853a_75%,_#cdaa4c)] flex flex-row p-2.5 items-start justify-start">
            <Image width={30} height={30}
              className="relative w-6 h-6 object-cover"
              alt=""
              src="/undefined35.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch bg-sendblack h-[673px] flex flex-col py-[81px] px-[122px] box-border items-center justify-start">
        <div className="self-stretch bg-sendblack flex flex-row p-[50px] items-start justify-start md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col">
          <footer className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-whitesmoke-300 font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
            <div className="w-[312px] h-[300px] flex flex-col items-start justify-start gap-[20px] text-base">
              <div className="flex flex-row items-center justify-center">
                <Image width={30} height={30}
                  className="max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/undefined36.png"
                />
              </div>
              <div className="w-[364px] h-[168px] flex flex-col items-start justify-start gap-[13px]">
                <div className="relative text-5xl leading-[32px] font-semibold [background:radial-gradient(50%_50%_at_50%_50%,_#dbb346_7.29%,_#f0dca7_68.23%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Contactanos
                </div>
                <div className="relative leading-[24px]">
                  Llama al : +52 (686) 338 8341
                </div>
                <div className="relative leading-[24px] flex items-end w-[392px]">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">{`Colón Oriente 265 Int 104, `}</p>
                    <p className="m-0">{`Edificio María y José, `}</p>
                    <p className="m-0">colonia centro, cp 59680</p>
                  </span>
                </div>
                <div className="relative leading-[24px] text-[inherit]">
                  <Link
                    className="text-[inherit]"
                    href="mailto:info@mysite.com"
                    target="_blank"
                  >
                    drfranciscocirugiaplastica@gmail.com
                  </Link>
                </div>
              </div>
              <div className="w-[304px] h-28 flex flex-row items-center justify-between">
                <div className="rounded bg-ghostwhite flex flex-col p-3.5 items-center justify-center border-[1px] border-solid border-gray-white">
                  <Image width={30} height={30}
                    className="relative w-5 h-[21.67px] object-cover"
                    alt=""
                    src="/undefined37.png"
                  />
                </div>
                <div className="rounded bg-ghostwhite flex flex-col p-3.5 items-center justify-center border-[1px] border-solid border-gray-white">
                  <Image width={30} height={30}
                    className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/undefined38.png"
                  />
                </div>
                <div className="rounded bg-ghostwhite flex flex-col p-3.5 items-center justify-center border-[1px] border-solid border-gray-white">
                  <Image width={30} height={30}
                    className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/undefined39.png"
                  />
                </div>
                <div className="rounded bg-ghostwhite flex flex-col p-3.5 items-center justify-center border-[1px] border-solid border-gray-white">
                  <Image width={30} height={30}
                    className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/undefined40.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
              <div className="relative leading-[32px] font-semibold [background:radial-gradient(50%_50%_at_50%_50%,_#dbb346_7.29%,_#f0dca7_68.23%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Servicios
              </div>
              <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base">
                <div className="relative leading-[24px]">Abdominoplastía</div>
                <div className="relative leading-[24px]">
                  Implantes mamarios
                </div>
                <div className="relative leading-[24px]">Liposucción</div>
                <div className="relative leading-[24px]">
                  Brazilian Butt Lift
                </div>
                <div className="relative leading-[24px]">Cotizacion</div>
              </div>
            </div>
            <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
              <div className="relative leading-[32px] font-semibold [background:radial-gradient(50%_50%_at_50%_50%,_#dbb346_7.29%,_#f0dca7_68.23%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Sitio
              </div>
              <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base">
                <div className="relative leading-[24px]">Acerca</div>
                <div className="relative leading-[24px]">Preguntas</div>
                <div className="relative leading-[24px]">Testimonios</div>
                <div className="relative leading-[24px]">Procedimientos</div>
                <div className="relative leading-[24px]">Contacto</div>
              </div>
            </div>
            <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px]">
              <div className="relative leading-[32px] font-semibold [background:radial-gradient(50%_50%_at_50%_50%,_#dbb346_7.29%,_#f0dca7_68.23%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Polizas
              </div>
              <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] text-base">
                <div className="relative leading-[24px]">Terminos de Uso</div>
                <div className="relative leading-[24px]">
                  Politica de Privacidad
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PropertiesGridView;
