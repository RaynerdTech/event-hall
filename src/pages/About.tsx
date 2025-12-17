import React from "react";



const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section
        className="w-full h-screen bg-cover bg-center bg-left md:bg-center"
        style={{ backgroundImage: "url('/abouthall.jpg')" }}
      ></section>

      {/* MAIN TITLE */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold md:mt-14 mt-8 mb-0 tracking-wide">
        ABOUT US
      </h2>

      {/* ------------------ SECTION 1: OUR STORY ------------------ */}
      <section className="w-full py-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 md:px-4 lg:px-0 items-stretch">
          {/* IMAGE */}
          <div className="w-full sm:h-[300px] md:h-[420px] lg:h-auto order-1 lg:order-none">
            <img
              src="/flowerhall.jpg"
              alt="Flower decoration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="w-full bg-transparent lg:bg-[#F4F4F4] flex flex-col justify-center text-center px-6 lg:py-10 sm:py-2 order-2 lg:order-none">
            <h3 className="text-2xl tracking-wide mb-4 md:mb-6">
              OUR STORY
            </h3>

            <p className="text-[14px] md:text-[16px] mb-4 text-[#000] tracking-[0.25px] leading-[20px] md:tracking-[1.8px] md:leading-[24px]">
              Elevating the Art of Celebration. Glory was born from a simple
              realisation: South East London deserved a premium venue—a modern,
              clean, adaptable space that didn't require travelling to Central
              London to feel luxurious. For too long, local celebrations had to
              settle for less.
            </p>
            <p className="text-[14px] md:text-[16px] mb-4 text-[#000] tracking-[0.25px] leading-[20px] md:tracking-[1.8px] md:leading-[24px] mt-4">
              Inspired by the elegance and intention of a beautiful wedding,
              Glory was created to bring that same refined experience to the
              community. A space designed with care, crafted for flexibility,
              and elevated with a premium finish that transforms every event.
            </p>
            <p className="text-[14px] md:text-[16px] mb-4 text-[#000] tracking-[0.25px] leading-[20px] md:tracking-[1.8px] md:leading-[24px] mt-4">
              Glory isn't just a venue. It's where luxury meets local. A place
              that truly elevates the art of celebration.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------ SECTION 2: VENUE ------------------ */}
      <section className="w-full py-0.7 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8  items-stretch">
          {/* IMAGE */}
          <div className="w-full sm:h-[300px] md:h-[420px] lg:h-auto order-3 lg:order-2">
            <img
              src="/chairhall.jpg"
              alt="Event venue"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="w-full bg-transparent lg:bg-[#F4F4F4] flex flex-col justify-center text-center md:px-6 px-14 lg:py-10 order-4 lg:order-none sm:py-2">
            <h3 className="text-2xl font-semibold tracking-wide mb-4 md:mb-6">
              OUR VENUE
            </h3>
            <p className="text-[14px] md:text-[16px] mb-4 text-[#000] tracking-[0.25px] leading-[20px] md:tracking-[1.8px] md:leading-[24px]">
              Located in the heart of Catford, Lewisham, Glory is a modern,
              versatile space designed to make every occasion stand out. From
              weddings and milestone birthdays to funeral receptions, product
              launches, and comedy shows, our venue adapts seamlessly to your
              event.
            </p>
            <p className="text-[14px] md:text-[16px] mb-4 text-[#000] tracking-[0.25px] leading-[20px] md:tracking-[1.8px] md:leading-[24px] mt-4">
              The interior is stylish, clean, and elegant, offering a premium
              feel without the need to travel into Central London. With on-site
              parking and excellent transport links—just steps from Catford Bus
              Garage and Bellingham Station—your guests can arrive with ease.
            </p>
            <p className="text-[14px] md:text-[16px] mb-4 text-[#000] tracking-[0.25px] leading-[20px] md:tracking-[1.8px] md:leading-[24px] mt-4">
              At Glory, we believe a well-executed event makes all the
              difference. Our team is committed to delivering a smooth,
              high-quality experience from start to finish. Glory — elevating
              the art of celebration.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------ NEW SECTION: FEATURES / AMENITIES ------------------ */}
      {/* Desktop / Tablet wrapper (md+) with curvy bottom border + shadow */}
      <section className="w-full hidden md:block ">
        <div
          className="max-w-7xl mx-auto bg-white"
          style={{
            borderRadius: "0 0 40px 40px",
            boxShadow:
              "0 1px 2px 0 rgba(244, 244, 244, 0.30), 0 1px 3px 1px rgba(0, 0, 0, 0.06)",
          }}
        >
          <div className="flex justify-between items-center px-0">
            {/* five items evenly spaced on md+ */}
            <div className="w-1/5">
              {/* Replace this SVG with your actual SVG */}
              <div className="flex flex-col items-center text-center py-8">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 99 99" fill="none" className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[99px] lg:h-[99px]"
>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M69.8231 15.3713L72.4527 41.6679C72.2354 41.5668 72.0151 41.4699 71.7923 41.377C57.526 35.4327 41.4769 35.4327 27.2106 41.377C26.988 41.4699 26.768 41.5668 26.5507 41.6679L29.1804 15.3713C29.7603 9.57235 34.6399 5.15629 40.4678 5.15625H58.5354C64.3632 5.15625 69.2431 9.57231 69.8231 15.3713ZM29.2716 46.327C42.2177 40.9327 56.7823 40.9327 69.7282 46.327C74.3399 48.2485 77.3438 52.7542 77.3438 57.75V61.875C77.3438 63.5836 75.9586 64.9688 74.25 64.9688H71.1748L78.2174 89.6177C78.8432 91.8085 77.5748 94.0917 75.3844 94.7174C73.1936 95.3432 70.9108 94.0747 70.2846 91.8844L62.5948 64.9688H36.4075L28.7174 91.8844C28.0915 94.0747 25.8084 95.3432 23.6179 94.7174C21.4273 94.0917 20.1589 91.8085 20.7848 89.6177L27.8274 64.9688H24.75C23.0414 64.9688 21.6563 63.5836 21.6563 61.875V57.75C21.6563 52.7542 24.6601 48.2485 29.2716 46.327Z" fill="black"/>
</svg>
                <p className="text-sm font-bold leading-[14px] tracking-[0.1px] md:text-base md:font-medium md:leading-6 md:tracking-[0.15px] lg:text-2xl lg:font-bold lg:leading-8 lg:tracking-[2px] font-cormorant mt-3 md:mt-2">
                  200 SEATING <br /> CAPACITY
                </p>
              </div>
            </div>

            <div className="w-1/5">
              <div className="flex flex-col items-center text-center py-8">
                 <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 99 99" fill="none" className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[99px] lg:h-[99px]">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.125 12.375C4.125 10.0968 5.97184 8.25 8.25 8.25H38.5C46.5329 8.25 54.3489 10.8553 60.7749 15.675L84.975 33.825C91.2071 38.4992 94.875 45.8349 94.875 53.625C94.875 60.4597 89.3347 66 82.5 66H8.25C5.97184 66 4.125 64.1532 4.125 61.875V52.5938H33.0049C34.7135 52.5938 36.0987 51.2086 36.0987 49.5C36.0987 38.6787 27.3262 29.9062 16.5049 29.9062H4.125V12.375ZM4.125 36.0938V46.4062H29.5524C28.1558 40.4937 22.8442 36.0938 16.5049 36.0938H4.125ZM80.025 40.425C80.7766 40.9886 81.4721 41.6101 82.1073 42.2812H70.125C60.4428 42.2812 52.5938 34.4322 52.5938 24.75V20.1731C53.7116 20.7983 54.7916 21.4998 55.8249 22.275L80.025 40.425Z" fill="black"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.125 78.375C4.125 76.0968 5.97184 74.25 8.25 74.25H90.75C93.0282 74.25 94.875 76.0968 94.875 78.375C94.875 80.6532 93.0282 82.5 90.75 82.5H8.25C5.97184 82.5 4.125 80.6532 4.125 78.375Z" fill="black"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.75 74.25C27.0282 74.25 28.875 76.0968 28.875 78.375V86.625C28.875 88.9032 27.0282 90.75 24.75 90.75C22.4718 90.75 20.625 88.9032 20.625 86.625V78.375C20.625 76.0968 22.4718 74.25 24.75 74.25ZM49.5 74.25C51.7782 74.25 53.625 76.0968 53.625 78.375V86.625C53.625 88.9032 51.7782 90.75 49.5 90.75C47.2218 90.75 45.375 88.9032 45.375 86.625V78.375C45.375 76.0968 47.2218 74.25 49.5 74.25ZM74.25 74.25C76.5282 74.25 78.375 76.0968 78.375 78.375V86.625C78.375 88.9032 76.5282 90.75 74.25 90.75C71.9718 90.75 70.125 88.9032 70.125 86.625V78.375C70.125 76.0968 71.9718 74.25 74.25 74.25Z" fill="black"/>
</svg>
                <div className="text-sm font-bold leading-[14px] tracking-[0.1px] md:text-base md:font-medium md:leading-6 md:tracking-[0.15px] lg:text-2xl lg:font-bold lg:leading-8 lg:tracking-[2px] font-cormorant mt-3 md:mt-4">
                  NEARBY TRAIN <br /> ACCESS
                </div>
              </div>
            </div>

            <div className="w-1/5">
              <div className="flex flex-col items-center text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99 96" fill="none" className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[99px] lg:h-[99px]"
>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8197 4.95068C11.8053 4.95068 6.92969 9.82631 6.92969 15.8407V79.2007C6.92969 85.2151 11.8053 90.0907 17.8197 90.0907H81.1797C87.1941 90.0907 92.0697 85.2151 92.0697 79.2007V15.8407C92.0697 9.82631 87.1941 4.95068 81.1797 4.95068H17.8197ZM77.2197 75.2407C77.2197 73.0536 75.4468 71.2807 73.2597 71.2807C71.0726 71.2807 69.2997 73.0536 69.2997 75.2407C69.2997 77.4278 71.0726 79.2011 73.2597 79.2011C75.4468 79.2011 77.2197 77.4278 77.2197 75.2407ZM22.7697 75.2407C22.7697 73.6004 24.0994 72.2707 25.7397 72.2707H41.5797C43.2199 72.2707 44.5497 73.6004 44.5497 75.2407C44.5497 76.8809 43.2199 78.2107 41.5797 78.2107H25.7397C24.0994 78.2107 22.7697 76.8809 22.7697 75.2407ZM49.4997 16.8307C51.1399 16.8307 52.4697 18.1604 52.4697 19.8007V21.0238C60.4796 22.2943 66.8061 28.6208 68.0764 36.6307H69.2997C70.9399 36.6307 72.2697 37.9604 72.2697 39.6007C72.2697 41.2409 70.9399 42.5707 69.2997 42.5707H68.0764C66.8061 50.5806 60.4796 56.9071 52.4697 58.1774V59.4007C52.4697 61.0409 51.1399 62.3707 49.4997 62.3707C47.8595 62.3707 46.5297 61.0409 46.5297 59.4007V58.1774C38.5198 56.9071 32.1933 50.5806 30.9229 42.5707H29.6997C28.0594 42.5707 26.7297 41.2409 26.7297 39.6007C26.7297 37.9604 28.0594 36.6307 29.6997 36.6307H30.9229C32.1933 28.6208 38.5198 22.2943 46.5297 21.0238V19.8007C46.5297 18.1604 47.8595 16.8307 49.4997 16.8307ZM49.4997 28.7107C48.3141 28.7107 47.2908 28.0159 46.8144 27.0112C41.8616 28.0625 37.9615 31.9626 36.9103 36.9154C37.9149 37.3916 38.6097 38.415 38.6097 39.6007C38.6097 40.7863 37.9149 41.8096 36.9103 42.286C37.9615 47.2387 41.8616 51.1389 46.8144 52.1903C47.2908 51.1857 48.3141 50.4907 49.4997 50.4907C50.6853 50.4907 51.7086 51.1857 52.185 52.1903C57.1377 51.1389 61.0379 47.2387 62.0893 42.286C61.0847 41.8096 60.3897 40.7863 60.3897 39.6007C60.3897 38.415 61.0847 37.3916 62.0893 36.9154C61.0379 31.9626 57.1377 28.0625 52.185 27.0112C51.7086 28.0159 50.6853 28.7107 49.4997 28.7107Z" fill="black"/>
</svg>
                <div className="text-sm font-bold leading-[14px] tracking-[0.1px] md:text-base md:font-medium md:leading-6 md:tracking-[0.15px] lg:text-2xl lg:font-bold lg:leading-8 lg:tracking-[2px] font-cormorant">
  KITCHEN <br /> ACCESS
</div>

              </div>
            </div>

            <div className="w-1/5">
              <div className="flex flex-col items-center text-center py-8">
               <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 99 99" fill="none" className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[99px] lg:h-[99px]">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 45.3589C10.5282 45.3589 12.375 47.2056 12.375 49.4839V90.7434C12.375 93.0216 10.5282 94.8684 8.25 94.8684C5.97184 94.8684 4.125 93.0216 4.125 90.7434V49.4839C4.125 47.2056 5.97184 45.3589 8.25 45.3589Z" fill="#141B34"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M90.75 45.3589C93.0282 45.3589 94.875 47.2056 94.875 49.4839V90.7434C94.875 93.0216 93.0282 94.8684 90.75 94.8684C88.4718 94.8684 86.625 93.0216 86.625 90.7434V49.4839C86.625 47.2056 88.4718 45.3589 90.75 45.3589Z" fill="#141B34"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 65.9922C51.7782 65.9922 53.625 67.8394 53.625 70.1172V74.2405C53.625 76.5188 51.7782 78.3655 49.5 78.3655C47.2218 78.3655 45.375 76.5188 45.375 74.2405V70.1172C45.375 67.8394 47.2218 65.9922 49.5 65.9922ZM49.5 82.4959C51.7782 82.4959 53.625 84.3431 53.625 86.6209V90.7447C53.625 93.0229 51.7782 94.8697 49.5 94.8697C47.2218 94.8697 45.375 93.0229 45.375 90.7447V86.6209C45.375 84.3431 47.2218 82.4959 49.5 82.4959Z" fill="#141B34"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M35.1872 15.3147C35.7107 13.5699 37.3166 12.375 39.1383 12.375H59.8616C61.6832 12.375 63.2895 13.5699 63.8129 15.3147L66.6435 24.75H32.3566L35.1872 15.3147ZM80.0836 30.9375L78.0104 28.8644L81.3025 25.5483C82.9076 23.9315 82.8981 21.3197 81.2811 19.7147C79.6645 18.1097 77.0525 18.1192 75.4475 19.736L74.1456 21.0473L71.7148 12.9441C70.1444 7.70962 65.3268 4.125 59.8616 4.125H39.1383C33.6734 4.125 28.8555 7.70962 27.2851 12.9441L24.8542 21.0473L23.5524 19.736C21.9474 18.1192 19.3357 18.1097 17.7189 19.7147C16.1021 21.3197 16.0925 23.9315 17.6976 25.5483L20.9895 28.8644L18.9164 30.9375C17.3692 32.4847 16.5 34.5831 16.5 36.7711V48.0682C16.5 52.0876 19.4299 55.6174 23.5624 56.1437C23.9326 56.1908 24.3288 56.2398 24.75 56.2906V59.8125C24.75 62.0907 26.5968 63.9375 28.875 63.9375C31.1532 63.9375 33 62.0907 33 59.8125V57.1011C37.6431 57.4633 43.2832 57.75 49.5 57.75C55.7168 57.75 61.3569 57.4633 66 57.1011V59.8125C66 62.0907 67.8468 63.9375 70.125 63.9375C72.4032 63.9375 74.25 62.0907 74.25 59.8125V56.2906C74.6712 56.2398 75.0676 56.1908 75.4376 56.1437C79.57 55.6174 82.5 52.0876 82.5 48.0682V36.7711C82.5 34.5831 81.6309 32.4847 80.0836 30.9375ZM25.7153 34.3578C24.1871 33.5937 22.3287 34.2131 21.5646 35.7414C20.8005 37.2696 21.4199 39.1279 22.9482 39.8921L27.0732 41.9546C28.6014 42.7185 30.4597 42.0993 31.2239 40.571C31.988 39.0428 31.3686 37.1844 29.8403 36.4203L25.7153 34.3578ZM76.0411 39.8921C77.5694 39.1279 78.189 37.2696 77.4246 35.7414C76.6607 34.2131 74.8023 33.5937 73.274 34.3578L69.149 36.4203C67.6207 37.1844 67.0011 39.0428 67.7655 40.571C68.5295 42.0993 70.3878 42.7185 71.9161 41.9546L76.0411 39.8921ZM43.3154 40.2187C41.6068 40.2187 40.2216 41.6039 40.2216 43.3125C40.2216 45.0211 41.6068 46.4062 43.3154 46.4062H55.6904C57.399 46.4062 58.7841 45.0211 58.7841 43.3125C58.7841 41.6039 57.399 40.2187 55.6904 40.2187H43.3154Z" fill="#141B34"/>
</svg>
                <div className="text-sm font-bold leading-[14px] tracking-[0.1px] md:text-base md:font-medium md:leading-6 md:tracking-[0.15px] lg:text-2xl lg:font-bold lg:leading-8 lg:tracking-[2px] font-cormorant mt-3 md:mt-4">
                  OFF ROAD <br /> PARKING
                </div>
              </div>
            </div>

            <div className="w-1/5">
              <div className="flex flex-col items-center text-center py-8">
               <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 99 99" fill="none" className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[99px] lg:h-[99px]"
>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M90.75 90.75C93.0282 90.75 94.875 88.9032 94.875 86.625V37.125C94.875 34.8468 93.0282 33 90.75 33C88.4718 33 86.625 34.8468 86.625 37.125V41.25H31.9325C31.961 40.7882 31.9758 40.3123 31.9486 39.828C31.7477 36.2631 29.9567 32.9425 27.03 30.9214C26.2524 30.3846 25.2521 29.984 24.4076 29.6887C23.4937 29.3693 22.4615 29.0763 21.4548 28.8146C18.8598 28.1401 16.6516 27.4938 14.1233 28.0733C13.5089 28.2143 12.9325 28.4246 12.375 28.6816V16.5C12.375 14.2218 10.5282 12.375 8.25 12.375C5.97184 12.375 4.125 14.2218 4.125 16.5V86.625C4.125 88.9032 5.97184 90.75 8.25 90.75C10.5282 90.75 12.375 88.9032 12.375 86.625V70.125H21.6562V74.25C21.6562 78.2368 24.8882 81.4688 28.875 81.4688H74.25C78.2368 81.4688 81.4688 78.2368 81.4688 74.25V70.125H86.625V86.625C86.625 88.9032 88.4718 90.75 90.75 90.75ZM12.375 43.8001L21.6562 48.4407V61.875H12.375V43.8001ZM81.4688 49.5H86.625V61.875H81.4688V49.5Z" fill="black"/>
</svg>
                <div className="text-sm font-bold leading-[14px] tracking-[0.1px] md:text-base md:font-medium md:leading-6 md:tracking-[0.15px] lg:text-2xl lg:font-bold lg:leading-8 lg:tracking-[2px] font-cormorant mt-3 md:mt-4">
                  CHANGING <br /> ROOM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile wrapper (sm and below) - no curvy border, two rows: first row 2 items, second row 3 items */}
      <section className="w-full block md:hidden bg-white">
        <div className="max-w-7xl mx-auto px-0 py-2">
          <div className="flex flex-wrap">
            {/* First two items: each takes 1/2 width on mobile */}
            <div className="px-0 w-1/2">
              <div className="flex flex-col items-center text-center py-2 -mr-12">
               <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 99 99" fill="none" className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[99px] lg:h-[99px]">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M69.8231 15.3713L72.4527 41.6679C72.2354 41.5668 72.0151 41.4699 71.7923 41.377C57.526 35.4327 41.4769 35.4327 27.2106 41.377C26.988 41.4699 26.768 41.5668 26.5507 41.6679L29.1804 15.3713C29.7603 9.57235 34.6399 5.15629 40.4678 5.15625H58.5354C64.3632 5.15625 69.2431 9.57231 69.8231 15.3713ZM29.2716 46.327C42.2177 40.9327 56.7823 40.9327 69.7282 46.327C74.3399 48.2485 77.3438 52.7542 77.3438 57.75V61.875C77.3438 63.5836 75.9586 64.9688 74.25 64.9688H71.1748L78.2174 89.6177C78.8432 91.8085 77.5748 94.0917 75.3844 94.7174C73.1936 95.3432 70.9108 94.0747 70.2846 91.8844L62.5948 64.9688H36.4075L28.7174 91.8844C28.0915 94.0747 25.8084 95.3432 23.6179 94.7174C21.4273 94.0917 20.1589 91.8085 20.7848 89.6177L27.8274 64.9688H24.75C23.0414 64.9688 21.6563 63.5836 21.6563 61.875V57.75C21.6563 52.7542 24.6601 48.2485 29.2716 46.327Z" fill="black"/>
</svg>
                <div className="text-sm font-bold leading-[14px] tracking-[0.1px] md:text-base md:font-medium md:leading-6 md:tracking-[0.15px] lg:text-2xl lg:font-bold lg:leading-8 lg:tracking-[2px] font-cormorant mt-3 md:mt-4">
                  200 SEATING <br /> CAPACITY
                </div>
              </div>
            </div>

            <div className="px-0 w-1/2">
              <div className="flex flex-col items-center text-center py-2 -ml-12">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 99 99" fill="none" className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[99px] lg:h-[99px]">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.125 12.375C4.125 10.0968 5.97184 8.25 8.25 8.25H38.5C46.5329 8.25 54.3489 10.8553 60.7749 15.675L84.975 33.825C91.2071 38.4992 94.875 45.8349 94.875 53.625C94.875 60.4597 89.3347 66 82.5 66H8.25C5.97184 66 4.125 64.1532 4.125 61.875V52.5938H33.0049C34.7135 52.5938 36.0987 51.2086 36.0987 49.5C36.0987 38.6787 27.3262 29.9062 16.5049 29.9062H4.125V12.375ZM4.125 36.0938V46.4062H29.5524C28.1558 40.4937 22.8442 36.0938 16.5049 36.0938H4.125ZM80.025 40.425C80.7766 40.9886 81.4721 41.6101 82.1073 42.2812H70.125C60.4428 42.2812 52.5938 34.4322 52.5938 24.75V20.1731C53.7116 20.7983 54.7916 21.4998 55.8249 22.275L80.025 40.425Z" fill="black"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.125 78.375C4.125 76.0968 5.97184 74.25 8.25 74.25H90.75C93.0282 74.25 94.875 76.0968 94.875 78.375C94.875 80.6532 93.0282 82.5 90.75 82.5H8.25C5.97184 82.5 4.125 80.6532 4.125 78.375Z" fill="black"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.75 74.25C27.0282 74.25 28.875 76.0968 28.875 78.375V86.625C28.875 88.9032 27.0282 90.75 24.75 90.75C22.4718 90.75 20.625 88.9032 20.625 86.625V78.375C20.625 76.0968 22.4718 74.25 24.75 74.25ZM49.5 74.25C51.7782 74.25 53.625 76.0968 53.625 78.375V86.625C53.625 88.9032 51.7782 90.75 49.5 90.75C47.2218 90.75 45.375 88.9032 45.375 86.625V78.375C45.375 76.0968 47.2218 74.25 49.5 74.25ZM74.25 74.25C76.5282 74.25 78.375 76.0968 78.375 78.375V86.625C78.375 88.9032 76.5282 90.75 74.25 90.75C71.9718 90.75 70.125 88.9032 70.125 86.625V78.375C70.125 76.0968 71.9718 74.25 74.25 74.25Z" fill="black"/>
</svg>
                <div className="text-sm font-bold leading-[14px] tracking-[0.1px] md:text-base md:font-medium md:leading-6 md:tracking-[0.15px] lg:text-2xl lg:font-bold lg:leading-8 lg:tracking-[2px] font-cormorant mt-3 md:mt-4">
                  NEARBY TRAIN <br /> ACCESS
                </div>
              </div>
            </div>

            {/* Next three items: each takes 1/3 width on mobile */}
            <div className="px-4 w-1/3">
              <div className="flex flex-col items-center text-center py-2">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 86" fill="none" className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[99px] lg:h-[99px]"
>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.89 0C4.87563 0 0 4.87563 0 10.89V74.25C0 80.2645 4.87563 85.14 10.89 85.14H74.25C80.2645 85.14 85.14 80.2645 85.14 74.25V10.89C85.14 4.87563 80.2645 0 74.25 0H10.89ZM70.29 70.29C70.29 68.1029 68.5171 66.33 66.33 66.33C64.1429 66.33 62.37 68.1029 62.37 70.29C62.37 72.4771 64.1429 74.2504 66.33 74.2504C68.5171 74.2504 70.29 72.4771 70.29 70.29ZM15.84 70.29C15.84 68.6498 17.1697 67.32 18.81 67.32H34.65C36.2902 67.32 37.62 68.6498 37.62 70.29C37.62 71.9302 36.2902 73.26 34.65 73.26H18.81C17.1697 73.26 15.84 71.9302 15.84 70.29ZM42.57 11.88C44.2102 11.88 45.54 13.2097 45.54 14.85V16.0732C53.5499 17.3437 59.8764 23.6701 61.1468 31.68H62.37C64.0102 31.68 65.34 33.0097 65.34 34.65C65.34 36.2902 64.0102 37.62 62.37 37.62H61.1468C59.8764 45.6299 53.5499 51.9564 45.54 53.2268V54.45C45.54 56.0902 44.2102 57.42 42.57 57.42C40.9298 57.42 39.6 56.0902 39.6 54.45V53.2268C31.5901 51.9564 25.2637 45.6299 23.9932 37.62H22.77C21.1297 37.62 19.8 36.2902 19.8 34.65C19.8 33.0097 21.1297 31.68 22.77 31.68H23.9932C25.2637 23.6701 31.5901 17.3437 39.6 16.0732V14.85C39.6 13.2097 40.9298 11.88 42.57 11.88ZM42.57 23.76C41.3844 23.76 40.3611 23.0652 39.8847 22.0606C34.932 23.1118 31.0318 27.0119 29.9806 31.9647C30.9852 32.4409 31.68 33.4643 31.68 34.65C31.68 35.8356 30.9852 36.8589 29.9806 37.3353C31.0318 42.288 34.932 46.1883 39.8847 47.2396C40.3611 46.235 41.3844 45.54 42.57 45.54C43.7556 45.54 44.7789 46.235 45.2553 47.2396C50.208 46.1883 54.1083 42.288 55.1596 37.3353C54.155 36.8589 53.46 35.8356 53.46 34.65C53.46 33.4643 54.155 32.4409 55.1596 31.9647C54.1083 27.0119 50.208 23.1118 45.2553 22.0606C44.7789 23.0652 43.7556 23.76 42.57 23.76Z" fill="black"/>
</svg>
               <div className="text-sm font-bold leading-[14px] tracking-[0.1px] md:text-base md:font-medium md:leading-6 md:tracking-[0.15px] lg:text-2xl lg:font-bold lg:leading-8 lg:tracking-[2px] font-cormorant mt-3 md:mt-4">
  KITCHEN <br /> ACCESS
</div>

              </div>
            </div>

            <div className="px-4 w-1/3">
              <div className="flex flex-col items-center text-center py-2">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 99 99" fill="none" className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[99px] lg:h-[99px]">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 45.3589C10.5282 45.3589 12.375 47.2056 12.375 49.4839V90.7434C12.375 93.0216 10.5282 94.8684 8.25 94.8684C5.97184 94.8684 4.125 93.0216 4.125 90.7434V49.4839C4.125 47.2056 5.97184 45.3589 8.25 45.3589Z" fill="#141B34"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M90.75 45.3589C93.0282 45.3589 94.875 47.2056 94.875 49.4839V90.7434C94.875 93.0216 93.0282 94.8684 90.75 94.8684C88.4718 94.8684 86.625 93.0216 86.625 90.7434V49.4839C86.625 47.2056 88.4718 45.3589 90.75 45.3589Z" fill="#141B34"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 65.9922C51.7782 65.9922 53.625 67.8394 53.625 70.1172V74.2405C53.625 76.5188 51.7782 78.3655 49.5 78.3655C47.2218 78.3655 45.375 76.5188 45.375 74.2405V70.1172C45.375 67.8394 47.2218 65.9922 49.5 65.9922ZM49.5 82.4959C51.7782 82.4959 53.625 84.3431 53.625 86.6209V90.7447C53.625 93.0229 51.7782 94.8697 49.5 94.8697C47.2218 94.8697 45.375 93.0229 45.375 90.7447V86.6209C45.375 84.3431 47.2218 82.4959 49.5 82.4959Z" fill="#141B34"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M35.1872 15.3147C35.7107 13.5699 37.3166 12.375 39.1383 12.375H59.8616C61.6832 12.375 63.2895 13.5699 63.8129 15.3147L66.6435 24.75H32.3566L35.1872 15.3147ZM80.0836 30.9375L78.0104 28.8644L81.3025 25.5483C82.9076 23.9315 82.8981 21.3197 81.2811 19.7147C79.6645 18.1097 77.0525 18.1192 75.4475 19.736L74.1456 21.0473L71.7148 12.9441C70.1444 7.70962 65.3268 4.125 59.8616 4.125H39.1383C33.6734 4.125 28.8555 7.70962 27.2851 12.9441L24.8542 21.0473L23.5524 19.736C21.9474 18.1192 19.3357 18.1097 17.7189 19.7147C16.1021 21.3197 16.0925 23.9315 17.6976 25.5483L20.9895 28.8644L18.9164 30.9375C17.3692 32.4847 16.5 34.5831 16.5 36.7711V48.0682C16.5 52.0876 19.4299 55.6174 23.5624 56.1437C23.9326 56.1908 24.3288 56.2398 24.75 56.2906V59.8125C24.75 62.0907 26.5968 63.9375 28.875 63.9375C31.1532 63.9375 33 62.0907 33 59.8125V57.1011C37.6431 57.4633 43.2832 57.75 49.5 57.75C55.7168 57.75 61.3569 57.4633 66 57.1011V59.8125C66 62.0907 67.8468 63.9375 70.125 63.9375C72.4032 63.9375 74.25 62.0907 74.25 59.8125V56.2906C74.6712 56.2398 75.0676 56.1908 75.4376 56.1437C79.57 55.6174 82.5 52.0876 82.5 48.0682V36.7711C82.5 34.5831 81.6309 32.4847 80.0836 30.9375ZM25.7153 34.3578C24.1871 33.5937 22.3287 34.2131 21.5646 35.7414C20.8005 37.2696 21.4199 39.1279 22.9482 39.8921L27.0732 41.9546C28.6014 42.7185 30.4597 42.0993 31.2239 40.571C31.988 39.0428 31.3686 37.1844 29.8403 36.4203L25.7153 34.3578ZM76.0411 39.8921C77.5694 39.1279 78.189 37.2696 77.4246 35.7414C76.6607 34.2131 74.8023 33.5937 73.274 34.3578L69.149 36.4203C67.6207 37.1844 67.0011 39.0428 67.7655 40.571C68.5295 42.0993 70.3878 42.7185 71.9161 41.9546L76.0411 39.8921ZM43.3154 40.2187C41.6068 40.2187 40.2216 41.6039 40.2216 43.3125C40.2216 45.0211 41.6068 46.4062 43.3154 46.4062H55.6904C57.399 46.4062 58.7841 45.0211 58.7841 43.3125C58.7841 41.6039 57.399 40.2187 55.6904 40.2187H43.3154Z" fill="#141B34"/>
</svg>
                <div className="text-sm font-bold leading-[14px] tracking-[0.1px] md:text-base md:font-medium md:leading-6 md:tracking-[0.15px] lg:text-2xl lg:font-bold lg:leading-8 lg:tracking-[2px] font-cormorant mt-3 md:mt-4">OFF ROAD <br /> PARKING</div>
              </div>
            </div>

            <div className="px-4 w-1/3">
              <div className="flex flex-col items-center text-center py-2">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 99 99" fill="none" className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[99px] lg:h-[99px]">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M90.75 90.75C93.0282 90.75 94.875 88.9032 94.875 86.625V37.125C94.875 34.8468 93.0282 33 90.75 33C88.4718 33 86.625 34.8468 86.625 37.125V41.25H31.9325C31.961 40.7882 31.9758 40.3123 31.9486 39.828C31.7477 36.2631 29.9567 32.9425 27.03 30.9214C26.2524 30.3846 25.2521 29.984 24.4076 29.6887C23.4937 29.3693 22.4615 29.0763 21.4548 28.8146C18.8598 28.1401 16.6516 27.4938 14.1233 28.0733C13.5089 28.2143 12.9325 28.4246 12.375 28.6816V16.5C12.375 14.2218 10.5282 12.375 8.25 12.375C5.97184 12.375 4.125 14.2218 4.125 16.5V86.625C4.125 88.9032 5.97184 90.75 8.25 90.75C10.5282 90.75 12.375 88.9032 12.375 86.625V70.125H21.6562V74.25C21.6562 78.2368 24.8882 81.4688 28.875 81.4688H74.25C78.2368 81.4688 81.4688 78.2368 81.4688 74.25V70.125H86.625V86.625C86.625 88.9032 88.4718 90.75 90.75 90.75ZM12.375 43.8001L21.6562 48.4407V61.875H12.375V43.8001ZM81.4688 49.5H86.625V61.875H81.4688V49.5Z" fill="black"/>
</svg>
                <div className="text-sm font-bold leading-[14px] tracking-[0.1px] md:text-base md:font-medium md:leading-6 md:tracking-[0.15px] lg:text-2xl lg:font-bold lg:leading-8 lg:tracking-[2px] font-cormorant mt-3 md:mt-4">CHANGING <br /> ROOM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="w-full py-12 text-center px-6">
  <h2 className="text-[24px] md:text-2xl lg:text-3xl font-cormorant tracking-[2px] mb-6 font-bold leading-[32px] lg:leading-[48px]">
    WHAT OUR COMPANY STANDS FOR
  </h2>

  <div className="max-w-3xl mx-auto space-y-10">

    {/* ITEM 1 */}
     <div className="mb-6 lg:m-0">
      <p className="text-[14px] md:text-[16px] mb-2 text-[#000] tracking-[0.25px] leading-[20px] md:tracking-[1.8px] md:leading-[24px] mt-2">
        <span className="font-cormorant font-bold text-[22px] leading-[28px] md:text-[24px] md:leading-[32px] md:tracking-[2px]">Hospitality & Customer Service:</span>{" "}
        We deliver warm, attentive hospitality and professional customer service
        from your first enquiry to the final guest departure.
      </p>

      {/* DOT – ONLY DESKTOP */}
      <div className="hidden lg:block text-xl">•</div>
    </div>

    {/* ITEM 2 */}
     <div className="mb-6 lg:m-0">
      <p className="text-[14px] md:text-[16px] mb-2 text-[#000] tracking-[0.25px] leading-[20px] md:tracking-[1.8px] md:leading-[24px] mt-2">
        <span className="font-cormorant font-bold text-[22px] leading-[28px] md:text-[24px] md:leading-[32px] md:tracking-[2px]">Premium Venue:</span>{" "}
        We offer a modern, elegant, high-quality space that brings a Central
        London feel to the heart of South East London.
      </p>

      <div className="hidden lg:block text-xl">•</div>
    </div>

    {/* ITEM 3 */}
    <div className="mb-6 lg:m-0">
      <p className="text-[14px] md:text-[16px] mb-2 text-[#000] tracking-[0.25px] leading-[20px] md:tracking-[1.8px] md:leading-[24px] mt-2">
        <span className="font-cormorant font-bold text-[22px] leading-[28px] md:text-[24px] md:leading-[32px] md:tracking-[2px]">Transparent Pricing:</span>{" "}
        We provide clear, honest pricing with no hidden fees, so you always
        know exactly what you're paying for.
      </p>

      <div className="hidden lg:block text-xl">•</div>
    </div>

    {/* ITEM 4 — NO DOT */}
    <div className="m-0 lg:m-0">
      <p className="text-[14px] md:text-[16px] mb-2 text-[#000] tracking-[0.25px] leading-[20px] md:tracking-[1.8px] md:leading-[24px] mt-2">
        <span className="font-cormorant font-bold text-[22px] leading-[28px] md:text-[24px] md:leading-[32px] md:tracking-[2px]">Holistic Approach:</span>{" "}
        We offer a smooth, end-to-end experience, with additional support
        available where needed — including décor, drinks ordering, and
        professional waitstaff — so you can tailor your event to suit your vision.
      </p>
      {/* no dot here */}
    </div>

  </div>
</section>



    </div>
  );
};

export default About;
