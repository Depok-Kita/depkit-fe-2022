import React from "react";
import Head from "next/head";
import {
  Header,
  SponsorContactPerson,
  SponsorMediaPartner,
  SponsorSponsorship,
} from "@components";

const Sponsor = () => {
  return (
    <div>
      <div className="bg-powder-light justify-center items-center mobile:pt-24 tablet:pt-36 desktop:pt-24 mobile:pb-20 tablet:pb-14">
        <div className="flex flex-col gap-8">
          <Header
            preset="h3"
            className="text-center font-black tablet:text-[38px] desktop:text-[48px] pt-4 pb-2"
          >
            Depok Kita Partnership
          </Header>

          <SponsorSponsorship />
          <SponsorMediaPartner />
          <div className="mobile:pt-4 tablet:pt-4 desktop:pt-6">
            <SponsorContactPerson />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
