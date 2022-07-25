import { Body } from "@components";
import { ChatIcon, MailIcon } from "@heroicons/react/outline";

export const SponsorContactPerson = () => {
  return (
    <div className="flex justify-center bg-powder-light items-center pb-20">
      <div className="grid-cols-1">
        <div className="flex justify-center pb-8">
          <Body
            preset="p1"
            className="text-center mobile:text-[20px] mobile:max-w-[220px] tablet:text-[26px] tablet:max-w-[500px]"
          >
            for Depok Kita partnership purposes, please kindly contact:
          </Body>
        </div>
        <div className="flex justify-start mobile:pl-2 tablet:pl-20">
          {/* https//wa.me/{phone number} */}
          <a href="https://wa.me/">
            <button className="mobile:w-[250px] tablet:w-[490px] absolute border-none">
              <div className="flex gap-2 items-center">
                <ChatIcon className="mobile:w-7" />
                <Body
                  preset="b1"
                  className="mobile:text-[14px] tablet:text-[24px]"
                >
                  eugenius mario
                </Body>
              </div>
            </button>
          </a>
        </div>
        <br />
        <br />
        <div className="flex justify-start mobile:pl-2 tablet:pl-20">
          <a href="mailto:eugeniusms@gmail.com?subject=[ Sponsor and Media Partner Depok Kita ]">
            <button
              className="mobile:w-[250px] tablet:w-[490px] absolute border-none"
              type="submit"
            >
              <div className="flex gap-2 items-center">
                <MailIcon className="mobile:w-7" />
                <Body
                  preset="b1"
                  className="mobile:text-[14px] tablet:text-[24px]"
                >
                  eugeniusms@gmail.com
                </Body>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
