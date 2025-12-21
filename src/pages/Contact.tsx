import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';

// --- Custom Icon Helpers ---
const createIcon = (svg: string, size: [number, number] = [40, 40], anchor?: [number, number]) => L.divIcon({
  html: svg,
  className: 'custom-marker',
  iconSize: size,
  iconAnchor: anchor || [size[0] / 2, size[1]], 
});

const hiddenIcon = (extraClass: string = '') => L.divIcon({
    html: '',
    className: `hidden-marker ${extraClass}`,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
});

// --- Standardized Icons (All 20x20) ---
const phoneSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M19.9983 10.999H21.9983C21.9983 5.869 18.1253 2 12.9883 2V4C17.0503 4 19.9983 6.943 19.9983 10.999Z" fill="white"/>
    <path d="M13.0003 8.00024C15.1033 8.00024 16.0003 8.89724 16.0003 11.0002H18.0003C18.0003 7.77524 16.2253 6.00024 13.0003 6.00024V8.00024ZM16.4223 13.4432C16.2301 13.2686 15.9776 13.1754 15.7181 13.1835C15.4585 13.1915 15.2123 13.3001 15.0313 13.4862L12.6383 15.9472C12.0623 15.8372 10.9043 15.4762 9.71228 14.2872C8.52028 13.0942 8.15928 11.9332 8.05228 11.3612L10.5113 8.96724C10.6977 8.78637 10.8064 8.54006 10.8144 8.28045C10.8225 8.02083 10.7292 7.76828 10.5543 7.57624L6.85928 3.51324C6.68432 3.3206 6.44116 3.20374 6.18143 3.1875C5.92171 3.17125 5.66588 3.2569 5.46828 3.42624L3.29828 5.28724C3.12539 5.46075 3.0222 5.69169 3.00828 5.93624C2.99328 6.18624 2.70728 12.1082 7.29928 16.7022C11.3053 20.7072 16.3233 21.0002 17.7053 21.0002C17.9073 21.0002 18.0313 20.9942 18.0643 20.9922C18.3088 20.9786 18.5396 20.8749 18.7123 20.7012L20.5723 18.5302C20.7417 18.3328 20.8276 18.077 20.8115 17.8173C20.7954 17.5576 20.6788 17.3143 20.4863 17.1392L16.4223 13.4432Z" fill="white"/>
  </svg>
);

const envelopeSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 16" fill="none">
    <path d="M20 0H0V16H20V0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="white"/>
  </svg>
);

const locationSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z" fill="white"/>
  </svg>
);

const instagramSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.75C0 1.23122 1.23122 0 2.75 0H17.75C19.2688 0 20.5 1.23122 20.5 2.75V17.75C20.5 19.2688 19.2688 20.5 17.75 20.5H2.75C1.23122 20.5 0 19.2688 0 17.75V2.75ZM14.75 10.25C14.75 12.7353 12.7353 14.75 10.25 14.75C7.76472 14.75 5.75 12.7353 5.75 10.25C5.75 7.76472 7.76472 5.75 10.25 5.75C12.7353 5.75 14.75 7.76472 14.75 10.25ZM15.7578 5.75C16.3101 5.75 16.7578 5.30228 16.7578 4.75C16.7578 4.19772 16.3101 3.75 15.7578 3.75H15.7488C15.1965 3.75 14.7488 4.19771 14.7488 4.75C14.7488 5.30228 15.1965 5.75 15.7488 5.75H15.7578Z" fill="white"/>
  </svg>
);

const tiktokSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 0C1.23122 0 0 1.23122 0 2.75V17.75C0 19.2688 1.23122 20.5 2.75 20.5H17.75C19.2688 20.5 20.5 19.2688 20.5 17.75V2.75C20.5 1.23122 19.2688 0 17.75 0H2.75ZM12.75 4.25C12.75 3.69772 12.3023 3.25 11.75 3.25C11.1977 3.25 10.75 3.69772 10.75 4.25V12.75C10.75 14.1307 9.6307 15.25 8.25 15.25C6.86929 15.25 5.75 14.1307 5.75 12.75C5.75 11.3693 6.86929 10.25 8.25 10.25C8.8023 10.25 9.25 9.8023 9.25 9.25C9.25 8.6977 8.8023 8.25 8.25 8.25C5.76472 8.25 3.75 10.2647 3.75 12.75C3.75 15.2353 5.76472 17.25 8.25 17.25C10.7353 17.25 12.75 15.2353 12.75 12.75V7.81299C13.6159 8.4052 14.6776 8.75 15.75 8.75C16.3023 8.75 16.75 8.3023 16.75 7.75C16.75 7.19772 16.3023 6.75 15.75 6.75C14.9897 6.75 14.2149 6.46074 13.6402 5.98178C13.0706 5.50714 12.75 4.89642 12.75 4.25Z" fill="white"/>
  </svg>
);

const facebookSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21" fill="none">
    <path d="M2.75 0C1.23122 0 0 1.23122 0 2.75V17.75C0 19.2688 1.23122 20.5 2.75 20.5H9.0154L9.0153 12.9995H8.25C7.55964 12.9995 7 12.4398 7 11.7495C7 11.0591 7.55964 10.4995 8.25 10.4995H9.0106L9.0005 7.76205C8.9938 5.96243 10.4508 4.5 12.2504 4.5H15.25C15.9404 4.5 16.5 5.05964 16.5 5.75C16.5 6.44036 15.9404 7 15.25 7H12.2504C11.8351 7 11.4989 7.33748 11.5005 7.75278L11.5106 10.4995H13.2499C13.9402 10.4995 14.4999 11.0591 14.4999 11.7495C14.4999 12.4398 13.9402 12.9995 13.2499 12.9995H11.5153L11.5154 20.5H17.75C19.2688 20.5 20.5 19.2688 20.5 17.75V2.75C20.5 1.23122 19.2688 0 17.75 0H2.75Z" fill="white"/>
  </svg>
);

const linkedinSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 0C1.23122 0 0 1.23122 0 2.75V17.75C0 19.2688 1.23122 20.5 2.75 20.5H17.75C19.2688 20.5 20.5 19.2688 20.5 17.75V2.75C20.5 1.23122 19.2688 0 17.75 0H2.75ZM6.50898 4.61914C6.50898 5.3095 5.94934 5.86914 5.25898 5.86914H5.25C4.55964 5.86914 4 5.3095 4 4.61914C4 3.92878 4.55964 3.36914 5.25 3.36914H5.25898C5.94934 3.36914 6.50898 3.92878 6.50898 4.61914ZM5.25117 6.75C5.80345 6.75 6.25117 7.19772 6.25117 7.75V15.25C6.25117 15.8023 5.80345 16.25 5.25117 16.25C4.69888 16.25 4.25117 15.8023 4.25117 15.25V7.75C4.25117 7.19772 4.69888 6.75 5.25117 6.75ZM9.251 6.75C9.8033 6.75 10.251 7.19772 10.251 7.75V7.78513C10.8393 7.44479 11.5224 7.25 12.251 7.25C14.4601 7.25 16.251 9.0409 16.251 11.25V15.25C16.251 15.8023 15.8033 16.25 15.251 16.25C14.6987 16.25 14.251 15.8023 14.251 15.25V11.25C14.251 10.1454 13.3555 9.25 12.251 9.25C11.1464 9.25 10.251 10.1454 10.251 11.25V15.25C10.251 15.8023 9.8033 16.25 9.251 16.25C8.6987 16.25 8.251 15.8023 8.251 15.25V7.75C8.251 7.19772 8.6987 6.75 9.251 6.75Z" fill="white"/>
  </svg>
);

const glorySvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="140" height="60" viewBox="0 0 140 60" fill="none">
  <g transform="translate(0, 20)">
    <path d="M14.902 10.5812L17.9248 14.8347C18.5407 15.7013 18.8487 16.1345 19.0077 16.6332C19.1667 17.132 19.1667 17.6643 19.1667 18.7293V33.3332H9.16667C6.02397 33.3332 4.45262 33.3332 3.47632 32.3518C2.5 31.3707 2.5 29.7913 2.5 26.6327V18.7293C2.5 17.6643 2.5 17.132 2.65902 16.6332C2.81803 16.1345 3.12595 15.7013 3.74178 14.8347L6.76467 10.5812C8.61942 7.9714 9.54678 6.6665 10.8333 6.6665C12.1199 6.6665 13.0473 7.9714 14.902 10.5812Z" stroke="#4E4E4E" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round" fill="white"/>
    <path d="M14.1667 33.3335V26.6668C14.1667 25.4207 14.1667 24.7977 13.8987 24.3335C13.7232 24.0295 13.4707 23.777 13.1667 23.6015C12.7026 23.3335 12.0795 23.3335 10.8333 23.3335C9.58718 23.3335 8.9641 23.3335 8.5 23.6015C8.19597 23.777 7.94348 24.0295 7.76795 24.3335C7.5 24.7977 7.5 25.4207 7.5 26.6668V33.3335" stroke="#4E4E4E" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.1654 33.3332H30.832C33.9747 33.3332 35.546 33.3332 36.5224 32.3568C37.4987 31.3805 37.4987 29.8092 37.4987 26.6665V19.0802C37.4987 17.8857 37.4987 17.2885 37.2995 16.7385C37.1005 16.1887 36.7182 15.7299 35.9535 14.8123L31.1644 9.06527C30.1814 7.8857 29.6899 7.2959 29.018 6.9812C28.346 6.6665 27.5784 6.6665 26.0429 6.6665H10.832" stroke="#4E4E4E" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M36.668 16.6665H19.168" stroke="#4E4E4E" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <g transform="translate(8, 0)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6893 22.6825L11.6949 22.6851C11.8888 22.7713 12.1107 22.7715 12.3046 22.6854L12.3083 22.6837C12.331 22.6733 12.3869 22.6477 12.4203 22.632C12.4913 22.5986 12.5934 22.5496 12.7221 22.4853C12.9794 22.3566 13.3438 22.1663 13.7797 21.9161C14.6496 21.4166 15.813 20.6738 16.9801 19.7012C19.2892 17.7769 21.75 14.8358 21.75 11C21.75 5.61522 17.3848 1.25 12 1.25C6.61522 1.25 2.25 5.61522 2.25 11C2.25 14.8358 4.71077 17.7769 7.01986 19.7012C8.18703 20.6738 9.35038 21.4166 10.2203 21.9161C10.6562 22.1663 11.0206 22.3566 11.2779 22.4853C11.4034 22.548 11.613 22.6466 11.6893 22.6825ZM12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7Z" fill="#8B4A63"/>
  </g>
  <text x="45" y="48" fill="#1a1a1a" font-family="serif" font-weight="500" font-size="16" style="text-transform: uppercase; letter-spacing: 2px;">Glory</text>
</svg>`;

const parkingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6893 22.6825L11.6949 22.6851C11.8888 22.7713 12.1107 22.7715 12.3046 22.6854L12.3083 22.6837C12.331 22.6733 12.3869 22.6477 12.4203 22.632C12.4913 22.5986 12.5934 22.5496 12.7221 22.4853C12.9794 22.3566 13.3438 22.1663 13.7797 21.9161C14.6496 21.4166 15.813 20.6738 16.9801 19.7012C19.2892 17.7769 21.75 14.8358 21.75 11C21.75 5.61522 17.3848 1.25 12 1.25C6.61522 1.25 2.25 5.61522 2.25 11C2.25 14.8358 4.71077 17.7769 7.01986 19.7012C8.18703 20.6738 9.35038 21.4166 10.2203 21.9161C10.6562 22.1663 11.0206 22.3566 11.2779 22.4853C11.4034 22.548 11.613 22.6466 11.6893 22.6825ZM12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7Z" fill="#8B4A63"/></svg>`;

const ContactPage: React.FC = () => {
  const gloryPos: [number, number] = [51.4328, -0.0125];
  const mainAddress = "Unit 18, Bellingham Trading Estate, Franthorne Way, Catford, SE6 3BX";
  
  const topLabelPos: [number, number] = [51.4400, -0.0125];
  const bottomLabelPos: [number, number] = [51.4270, -0.0125];
  
  const parkingData = [
    { pos: [51.4345, -0.0180] as [number, number], name: "Knapmill Road, Catford" },
    { pos: [51.4365, -0.0155] as [number, number], name: "Randlesdown Road, Catford" },
    { pos: [51.4310, -0.0090] as [number, number], name: "Broadmead, Catford" },
    { pos: [51.4325, -0.0160] as [number, number], name: "Bromley Road, Catford" },
    { pos: [51.4380, -0.0110] as [number, number], name: "Athelney Street, Catford" },
    { pos: [51.4350, -0.0130] as [number, number], name: "Brookehowse Road, Catford" },
    { pos: [51.4290, -0.0110] as [number, number], name: "Bellingham Road, Catford" },
    { pos: [51.4370, -0.0140] as [number, number], name: "Daneby Road, Catford" },
    { pos: [51.4330, -0.0070] as [number, number], name: "Callender Road, Catford" },
  ];

  const handleNav = (dest: string) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dest)}`, '_blank');
  };

  const labelContent = (
      <>Off street parking <br/> available at the various locations</>
  );

  return (
    <div className="bg-white min-h-screen font-serif text-[#1a1a1a]">
      <header className="py-6 text-center">
        <h1 className="text-24px md:text-[36px] tracking-[2px] uppercase font-bold md:tracking-[4px]">Contact Us</h1>
      </header>

      <main className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Map 1: Hall Location */}
        <section className="mb-0 w-full">
          <h2 className="text-22px md:text-[24px] md:tracking-[2px] uppercase font-bold tracking-normal mb-2">Hall Location</h2>
          <div className="w-full relative z-0 h-[400px]">
            <MapContainer center={gloryPos} zoom={16} className="h-full w-full">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker 
                position={gloryPos} 
                icon={createIcon(glorySvg, [140, 60], [20, 55])}
                eventHandlers={{ click: () => handleNav(mainAddress) }}
              >
                <Tooltip permanent direction="top" offset={[50, -54]} className="nav-tooltip">
                  Click for navigations to the hall
                </Tooltip>
              </Marker>
            </MapContainer>
          </div>
        </section>

        {/* Info Blocks */}
        <div className="flex flex-col lg:grid lg:grid-cols-[35%_65%] items-stretch">
          <div className="contents lg:flex lg:flex-col">
            <div className="bg-[#000] text-white p-12 order-2 lg:order-none">
              <div className="space-y-10 text-[13px] font-sans tracking-widest">
                
                {/* INTERACTIVE PHONE */}
                <a href="tel:+442086985416" className="flex items-center gap-6 group hover:text-gray-300 transition-colors">
                  <span className="flex-shrink-0">{phoneSvg}</span>
                  <span className="font-plex md:text-[16px] text-[14px] md:tracking-[1.8px] tracking-[0.25px]">F: +44(0)20 8698 5416</span>
                </a>

                {/* INTERACTIVE EMAIL */}
                <a href="mailto:info@gloryrsvp.co.uk" className="flex items-center gap-6 group hover:text-gray-300 transition-colors">
                  <span className="flex-shrink-0">{envelopeSvg}</span>
                  <span className="font-plex md:text-[16px] text-[14px] md:tracking-[1.8px] tracking-[0.25px]">info@gloryrsvp.co.uk</span>
                </a>

                {/* INTERACTIVE ADDRESS */}
                <button onClick={() => handleNav(mainAddress)} className="flex items-start gap-6 leading-relaxed group hover:text-gray-300 transition-colors text-left w-full">
                  <span className="mt-1 flex-shrink-0">{locationSvg}</span>
                  <p className="font-plex md:text-[16px] text-[14px] md:tracking-[1.8px] tracking-[0.25px] md:leading-[24px] leading-[20px]">
                    {mainAddress.split(',').map((line, i) => (
                    <React.Fragment key={i}>{line.trim()}<br/></React.Fragment>
                  ))}</p>
                </button>

                <div className="">
                  <p className="text-[12px] uppercase mb-6 tracking-[0.6px]">Find Us</p>
                  <div className="flex gap-8 items-center">
                    <div className="cursor-pointer hover:opacity-70 transition-opacity" onClick={() => window.open('https://www.instagra.com/glory_rsvp/#')}>{instagramSvg}</div>
                    <div className="cursor-pointer hover:opacity-70 transition-opacity" onClick={() => window.open('https://www.tiktok.com/@Glory_rsvp')}>{tiktokSvg}</div>
                    <div className="cursor-pointer hover:opacity-70 transition-opacity" onClick={() => window.open('https://web.facebook.com/gloryrsvp')}>{facebookSvg}</div>
                    <div className="cursor-pointer hover:opacity-70 transition-opacity" onClick={() => window.open('https://linkedin.com')}>{linkedinSvg}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex-grow min-h-[450px] bg-[#5a243a] overflow-hidden flex flex-col items-center justify-center text-white order-5 lg:order-none">
              <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 3.5, opacity: 0.5 }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }} className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#f8a3a3] rounded-full blur-3xl pointer-events-none" />
              <div className="z-10 text-center px-10">
                <h2 className="text-4xl tracking-[0.4em] uppercase font-light mb-4">Glory RSVP</h2>
                <p className="text-[12px] uppercase tracking-[0.25em] italic">Elevating the art of celebration</p>
              </div>
            </div>
          </div>

          {/* Map 2: Parking */}
          <div className="contents lg:flex lg:flex-col">
            <div className="bg-white md:p-10 p-6 text-center flex flex-col justify-center order-3 lg:order-none h-auto lg:min-h-[150px]">
              <h2 className="text-[22px] tracking-normal lg:text-[32px] uppercase font-bold leading-[28px] lg:leading-[40px] lg:tracking-[4px]">Looking for where to park?<br/>Follow the directions.</h2>
            </div>
            <div className="relative order-4 lg:order-none border-l border-gray-100 w-full z-0 h-[400px] lg:h-auto lg:flex-grow">
              <MapContainer center={[51.4335, -0.0125]} zoom={14} className="h-full w-full">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
                <Marker 
                  position={gloryPos} 
                  icon={createIcon(glorySvg, [140, 60], [20, 55])} 
                  eventHandlers={{ click: () => handleNav(mainAddress) }} 
                />
                
                <Marker position={topLabelPos} icon={hiddenIcon()}>
                     <Tooltip permanent direction="top" offset={[0, -20]} className="nav-tooltip">
                        {labelContent}
                     </Tooltip>
                </Marker>

                 <Marker position={bottomLabelPos} icon={hiddenIcon('mobile-hidden-marker')}>
                     <Tooltip permanent direction="bottom" offset={[0, 20]} className="nav-tooltip mobile-hidden-label">
                        {labelContent}
                     </Tooltip>
                </Marker>
                
                {parkingData.map((item, i) => (
                  <Marker 
                    key={i} 
                    position={item.pos} 
                    icon={createIcon(parkingSvg, [22, 22], [11, 22])} 
                    eventHandlers={{ click: () => handleNav(item.name) }} 
                  />
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        .custom-marker { background: none; border: none; cursor: pointer; white-space: nowrap; }
        .hidden-marker { background: none; border: none; }
        .leaflet-container { height: 100%; width: 100%; }
        
        .leaflet-tooltip.nav-tooltip {
          background: white;
          border: none;
          box-shadow: 0 4px 15px -3px rgb(0 0 0 / 0.15);
          border-radius: 9999px;
          padding: 10px 24px;
          font-size: 16px;
          font-family: serif; 
          font-weight: 400;
          color: #1a1a1a;
          letter-spacing: 0.5px;
          text-align: center;
          line-height: 1.3;
          z-index: 1000;
        }

        .leaflet-tooltip.nav-tooltip:before { display: none; }

        @media (max-width: 767px) {
          .mobile-hidden-label { display: none !important; }
          .leaflet-tooltip.nav-tooltip { 
            font-size: 13px; 
            padding: 8px 18px; 
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;