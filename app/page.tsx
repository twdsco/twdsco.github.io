import {
  Store,
  AppWindowMac,
  CloudCog,
  Smartphone,
  Server,
  Container,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
interface ServiceItem {
  Icon: LucideIcon;
  title: string;
}

interface NakamaItem {
  img: string;
  url: string;
}

export default function Home() {
  const serviceItems: ServiceItem[] = [
    { Icon: Store, title: "網路設備批發/零售" },
    { Icon: AppWindowMac, title: "網頁應用程式開發與維護" },
    { Icon: CloudCog, title: "系統與設備維護" },
    { Icon: Smartphone, title: "應用程式解決方案" },
    { Icon: Server, title: "網站代管營運" },
    { Icon: Container, title: "容器化解決方案" },
  ];

  const nakama: NakamaItem[] = [
    { img: "proxmox.png", url: "https://www.proxmox.com" },
    { img: "unitech.svg", url: "https://www.unitech.com.tw/" },
  ];
  return (
    <div>
      <div
        id="banner"
        className="bg-cover bg-center text-white h-1/2 min-h-[410px] flex justify-center items-center text-shadow-md font-bold bg-[url('/img/background.jpg')]"
      >
        <div className="container mx-auto">
          <img
            src="/logo/twds_white.svg"
            alt="Taiwan Digital Streaming Co. Logo"
            className="banner__logo"
            width="128"
          />
          <p className="banner__title text-6xl">台灣數位串流有限公司</p>
          <p className="banner__subtitle text-4xl">
            Taiwan Digital Streaming Co.
          </p>
        </div>
      </div>
      <div className="container mx-auto text-center my-8 flex flex-col gap-8">
        {/* 簡介部分 */}
        <section>
          <div className="landing__title text-3xl font-bold underline decoration-blue-600 decoration-4 mb-2 inline-block">
            簡介
          </div>
          <p>
            發源自開源社群、擁抱，並持續貢獻於開源社群，在注重開源的同時不忘資安上的保護。
          </p>
        </section>
        {/* 營運項目 */}
        <section>
          <div className="text-3xl font-bold underline decoration-blue-600 decoration-4 mb-2 inline-block">
            營運項目
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {serviceItems.map(({ Icon, title }, index) => (
              <div
                key={index}
                className=" bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-lg shadow-md"
              >
                {/* 替換成Font Awesome或相似圖示系統 */}
                <div className="flex items-center justify-center text-white mb-2">
                  <Icon size={56} strokeWidth={1.5} />
                </div>
                <div className="text-white font-bold">{title}</div>
              </div>
            ))}
          </div>
        </section>
        {/* 經銷/合作 */}
        <section>
          <div className=" text-3xl font-bold underline decoration-blue-600 decoration-4 mb-2 inline-block">
            經銷/合作
          </div>
          <div className=" flex justify-center items-center">
            {nakama.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                className="inline-block m-2"
                style={{
                  backgroundImage: `url('/img/partners/${item.img}')`,
                  width: "300px",
                  height: "64px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              ></a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
