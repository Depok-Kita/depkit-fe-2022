import React from "react";
import { Body, Button, Card, ComingSoon, Header, Navbar } from "@components";
import {
  SponsorExampleMedium,
  SponsorExampleSmall,
  SponsorExampleExtraSmall,
  UliranB,
  UliranD,
  UliranF,
} from "@components/uliran";

export const SponsorMediaPartner = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Card
          preset="light"
          className="flex justify-center mobile:w-4/5 tablet:w-11/12 desktop:w-5/6 mobile:h-[335px] tablet:h-[290px] desktop:h-[370px] relative"
        >
          <Header
            preset="h3"
            className="text-center tablet:scale-100 tablet:text-[24px] desktop:text-[30px]"
          >
            Media Partner
          </Header>

          {/* LETAKAN MEDIA PARTNER DI SINI */}
          <div className="py-5 flex flex-col gap-3">
            <div className="flex gap-2">
              <SponsorExampleMedium />
              <SponsorExampleMedium />
            </div>
            <div className="flex gap-2">
              <SponsorExampleSmall />
              <SponsorExampleSmall />
              <SponsorExampleSmall />
            </div>
            <div className="flex gap-2">
              <SponsorExampleExtraSmall />
              <SponsorExampleExtraSmall />
              <SponsorExampleExtraSmall />
              <SponsorExampleExtraSmall />
              <SponsorExampleExtraSmall />
            </div>
          </div>

          {/* ULIRAN DESKTOP */}
          <div className="mobile:invisible table:invisible desktop:visible absolute left-12 top-0">
            <UliranB />
          </div>
          {/* ULIRAN TABLET */}
          <div className="mobile:invisible tablet:visible desktop:invisible absolute left-8 top-0">
            <UliranD />
          </div>
          {/* ULIRAN MOBILE */}
          <div className="flex justify-center">
            <div className="mobile:visible tablet:invisible desktop:invisible absolute bottom-0 pb-10">
              <UliranF />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
