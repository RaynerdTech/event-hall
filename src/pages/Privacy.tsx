import React from "react";

const Privacy: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[860px] px-6 py-8 text-black font-cormorant">
        
        {/* PAGE TITLE */}
        <h1 className="text-[28px] font-bold tracking-[3px] mb-6">
          PRIVACY POLICY
        </h1>

        {/* SECTION 1 */}
        <h2 className="text-[24px] font-bold tracking-[2px] mb-1">
          Important information and who we are
        </h2>
        <p className="text-[14px] md:text[16px] mb-6">
          From the moment you swing past the elegant fountain on our driveway,
          you'll know you've really arrived. Just like the Willow trees that
          have stood on our grounds for a century or more, we're rooted in
          quality. And from crystal chandeliers to luxurious furnishings,
          you'll feel it at every turn. GLORY truly is the perfect setting
          for you, your guests and your celebration.
        </p>

        {/* SECTION 2 */}
        <h2 className="text-[24px] font-bold tracking-[2px] uppercase mb-1">
          Purpose of this privacy notice
        </h2>
        <p className="text-[14px] md:text[16px] mb-4">
          This privacy notice aims to give you information on how we, GLORY,
          collect and process your personal data through your use of this
          website, including any data you may provide through this website
          when you request contact from us or purchase any of our services.
        </p>
        <p className="text-[14px] md:text[16px] mb-4">
          This website is not intended for children and we do not knowingly
          collect data relating to children.
        </p>
        <p className="text-[14px] md:text[16px] mb-6">
          It is important that you read this privacy notice together with any
          other privacy notice or fair processing notice we may provide on
          specific occasions when we are collecting or processing personal data
          about you so that you are fully aware of how and why we are using your data.
        </p>

        {/* SECTION 3 */}
        <h2 className="text-[24px] font-bold tracking-[2px] uppercase mb-1">
          CONTROLLER
        </h2>
        <p className="text-[14px] md:text[16px] mb-4">
          GLORY is the controller and responsible for your personal data
          (collectively referred to as "GLORY", "we", "us" or "our" in this
          privacy notice).
        </p>
        <p className="text-[14px] md:text[16px] mb-6">
          We have appointed a data privacy manager who is responsible for
          overseeing questions in relation to this privacy notice. If you have
          any questions about this privacy notice, including any requests to
          exercise your legal rights, please contact the data privacy manager
          using the details set out below.
        </p>

        {/* SECTION 4 */}
        <h2 className="text-[28px] font-bold tracking-[2px] uppercase mb-1">
          CONTACT DETAILS
        </h2>
        <div className="text-[14px] md:text[16px]">
          <p>GLORY email address: info@gloryrsvp.co.uk</p>
          <p>
            Postal address: GLORY, Unit 18 Bellingham Trading Estate, Franthorne
            Way, Catford SE6 3BX
          </p>
        </div>

      </div>
    </div>
  );
};

export default Privacy;