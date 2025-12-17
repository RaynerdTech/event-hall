import React, { useState, useRef, useEffect } from "react";
import "./Media.css";

type LightboxMedia =
  | { type: "image"; src: string }
  | { type: "video"; src: string };

const Media: React.FC = () => {
  const [lightbox, setLightbox] = useState<LightboxMedia | null>(null);
  const [activeTab, setActiveTab] = useState<"space" | "gallery">(() => {
    const savedTab = localStorage.getItem("mediaActiveTab");
    return savedTab === "gallery" ? "gallery" : "space";
  });
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX, y: clientY });
    setIsDragging(false);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragStart) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    const deltaX = clientX - dragStart.x;
    const deltaY = clientY - dragStart.y;
    
    if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
      setIsDragging(true);
    }
    
    setDragOffset({ x: deltaX, y: deltaY });
  };

  const handleDragEnd = () => {
    if (isDragging && (Math.abs(dragOffset.y) > 100 || Math.abs(dragOffset.x) > 100)) {
      setLightbox(null);
    }
    setDragStart(null);
    setDragOffset({ x: 0, y: 0 });
    setIsDragging(false);
  };

  return (
    <>
      <div className="w-full mb-22">
        {/* HERO */}
        <section
          className="media-hero"
          style={{ backgroundImage: "url('/mediabackground.jpg')" }}
        />

        {/* INNER CONTENT (76%) */}
        <div className="media-inner">
          {/* TABS */}
          <h2
            className=" mt-10 md:mt-18
            text-black 
            text-center 
            font-cormorant 
            font-bold 
            /* Mobile */
            text-[24px] leading-[32px] tracking-[2px]
            /* Tablet/Desktop */
            md:text-[36px] md:leading-[44px] md:tracking-[4px]
          "
          >
            MEDIA
          </h2>

          <div className="media-tabs">
            <button
              className={`text-base leading-6 tracking-[0.15px] font-cormorant font-medium ${
                activeTab === "space" ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab("space");
                localStorage.setItem("mediaActiveTab", "space");
              }}
            >
              OUR SPACE
            </button>

            <button
              className={`text-base leading-6 tracking-[0.15px] font-cormorant font-medium ${
                activeTab === "gallery" ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab("gallery");
                localStorage.setItem("mediaActiveTab", "gallery");
              }}
            >
              GALLERY
            </button>
          </div>

          {/* CONTENT */}
          <div className="media-content">
            {activeTab === "space" && <OurSpace open={setLightbox} />}
            {activeTab === "gallery" && <Gallery open={setLightbox} />}
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => !isDragging && setLightbox(null)}
          style={{ touchAction: 'none' }}
        >
          <button
            className="absolute top-5 right-5 text-white text-6xl z-10"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>

          <div
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            style={{
              transform: `translate(${dragOffset.x}px, ${dragOffset.y}px)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease',
              opacity: isDragging ? Math.max(0.3, 1 - Math.abs(dragOffset.y) / 300) : 1,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
          >
            {lightbox.type === "image" ? (
              <img
                src={lightbox.src}
                className="max-h-full max-w-full object-contain"
                onClick={(e) => e.stopPropagation()}
                alt="Lightbox"
                draggable={false}
              />
            ) : (
              <video
                src={lightbox.src}
                controls
                autoPlay
                playsInline
                className="max-h-full max-w-full"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Media;

const AutoplayVideo = ({ src, onClick, className = "" }: { src: string; onClick: () => void; className?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.log('Autoplay prevented, will retry on interaction');
      }
    };

    playVideo();

    const handleVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        playVideo();
      }
    };

    const handleInteraction = () => {
      if (video.paused) {
        playVideo();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('click', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      className={className}
      onClick={onClick}
    />
  );
};

const OurSpace = ({ open }: { open: (m: LightboxMedia) => void }) => (
  <div className="media-grid">
    {/* Row 1 */}
    <div className="row grid-60-40">
      <div className="overflow-hidden">
        <img
          src="/firsthallchair.jpg"
          className="our-space-main transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer"
          onClick={() => open({ type: "image", src: "/firsthallchair.jpg" })}
          alt="First hall chair"
        />
      </div>

      <div className="overflow-hidden">
        <img
          src="/secondhallchair.jpg"
          className="our-space-main transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer"
          onClick={() => open({ type: "image", src: "/secondhallchair.jpg" })}
          alt="Second hall chair"
        />
      </div>
    </div>

    {/* Row 2 */}
    <div className="row grid-65-35">
      <div className="overflow-hidden">
        <img
          src="/firsttable.jpg"
          className="our-space-main transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer"
          onClick={() => open({ type: "image", src: "/firsttable.jpg" })}
          alt="First table"
        />
      </div>

      <div className="overflow-hidden">
        <img
          src="/secondtable.jpg"
          className="our-space-main transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer"
          onClick={() => open({ type: "image", src: "/secondtable.jpg" })}
          alt="Second table"
        />
      </div>
    </div>

    {/* Overlay rows */}
    <div className="overlay-wrapper">
      <div className="row grid-50-50">
        <div className="overflow-hidden">
          <img
            src="/firsthall.jpg"
            className="our-space-main transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer"
            onClick={() => open({ type: "image", src: "/firsthall.jpg" })}
            alt="First hall"
          />
        </div>

        <div className="overflow-hidden">
          <img
            src="/secondhall.jpg"
            className="our-space-main transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer"
            onClick={() => open({ type: "image", src: "/secondhall.jpg" })}
            alt="Second hall"
          />
        </div>
      </div>

      <div className="center-overlay">
        <AutoplayVideo
          src="/hallvideo.mp4"
          className="cursor-pointer"
          onClick={() => open({ type: "video", src: "/hallvideo.mp4" })}
        />
      </div>

      <div className="row grid-50-50">
        <div className="overflow-hidden">
          <img
            src="/thirdhall.jpg"
            className="our-space-main transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer"
            onClick={() => open({ type: "image", src: "/thirdhall.jpg" })}
            alt="Third hall"
          />
        </div>

        <div className="overflow-hidden">
          <img
            src="/forthhall.jpg"
            className="our-space-main transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer"
            onClick={() => open({ type: "image", src: "/forthhall.jpg" })}
            alt="Fourth hall"
          />
        </div>
      </div>
    </div>

    {/* Last row */}
    <div className="row grid-60-40">
      <div className="overflow-hidden">
        <img
          src="/firstlast.jpg"
          className="lastimage transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer"
          onClick={() => open({ type: "image", src: "/firstlast.jpg" })}
          alt="First last"
        />
      </div>

      <div className="overflow-hidden">
        <img
          src="/secondlast.jpg"
          className="lastimage transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer"
          onClick={() => open({ type: "image", src: "/secondlast.jpg" })}
          alt="Second last"
        />
      </div>
    </div>
  </div>
);

const Gallery = ({ open }: { open: (m: LightboxMedia) => void }) => (
  <div className="media-grid">
    {/* Row 1 */}
    <div className="row grid-50-50">
      <div className="overflow-hidden">
        <img
          src="/images/event-decoration (2).jpg"
          className="galleryheight transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer"
          onClick={() =>
            open({ type: "image", src: "/images/event-decoration (2).jpg" })
          }
          alt="Decoration 2"
        />
      </div>

      <div className="overflow-hidden">
        <img
          src="/images/event-decoration (5).jpg"
          className="galleryheight transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer"
          onClick={() =>
            open({ type: "image", src: "/images/event-decoration (5).jpg" })
          }
          alt="Decoration 5"
        />
      </div>
    </div>

    {/* Row 2 */}
    <div className="row grid-30-70">
      <div className="overflow-hidden">
        <img
          src="/secondtable.jpg"
          className="galleryheight transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer"
          onClick={() => open({ type: "image", src: "/secondtable.jpg" })}
          alt="Second table gallery"
        />
      </div>

      <AutoplayVideo
        src="https://res.cloudinary.com/dcembbzmm/video/upload/7ec021d2d2644f2aae07c95bb6e0cb94_ox3qjn.mp4"
        className="galleryheight cursor-pointer"
        onClick={() =>
          open({
            type: "video",
            src: "https://res.cloudinary.com/dcembbzmm/video/upload/7ec021d2d2644f2aae07c95bb6e0cb94_ox3qjn.mp4",
          })
        }
      />
    </div>

    {/* Overlay section */}
    <div className="overlay-wrapper">
      <div className="row grid-50-50">
        <div className="overflow-hidden">
          <img
            src="/firsthall.jpg"
            className="last transition-transform duration-300 ease-in-out lg:hover:scale-110"
            alt="First hall gallery"
          />
        </div>

        <div className="overflow-hidden">
          <img
            src="/secondhall.jpg"
            className="last transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer"
            onClick={() => open({ type: "image", src: "/secondhall.jpg" })}
            alt="Second hall gallery"
          />
        </div>
      </div>

      <div className="center-overlay">
        <AutoplayVideo
          src="/overlay2.mp4"
          className="cursor-pointer"
          onClick={() => open({ type: "video", src: "/overlay2.mp4" })}
        />
      </div>

      <div className="row grid-50-50">
        <div className="overflow-hidden">
          <img
            src="/thirdhall.jpg"
            className="last transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer"
            onClick={() => open({ type: "image", src: "/thirdhall.jpg" })}
            alt="Third hall gallery"
          />
        </div>

        <div className="overflow-hidden">
          <img
            src="/forthhall.jpg"
            className="last transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer"
            onClick={() => open({ type: "image", src: "/forthhall.jpg" })}
            alt="Fourth hall gallery"
          />
        </div>
      </div>
    </div>
  </div>
);