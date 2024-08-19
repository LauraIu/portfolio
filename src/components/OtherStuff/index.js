import React from "react";
import webworks from "../../images/webworks.png";
import UI_design_works from "../../images/printScreen_240306_.jpg";
import OtherWorks_IuLa from "../../images/OtherWorks_IuLa.png";
import Pdf from "../../document/Laura Iuga_mixedPortfolio.pdf";
import {
  OtherContainer,
  OtherH1,
  OtherWrapper,
  OtherCard,
  OtherIcon,
  OtherH2,
  OtherP,
} from "./OtherElements";

const Other = () => {
  return (
    <>
      <OtherContainer id="other">
        <OtherH1>Other Projects from the Past</OtherH1>
        <OtherP>This section is under construction!</OtherP>
        <OtherWrapper>
          <OtherCard 
            as="a"
            href={Pdf}
            require
                target="_blank"
                alt="Laura Iuga_mixedPortfolio.pdf | Creative designe works"
            >
            <OtherIcon 
            
            src={UI_design_works} />
            <OtherH2>UI and design works</OtherH2>
          </OtherCard>
          <OtherCard>
            <OtherIcon src={webworks} />
            <OtherH2>Art related projects</OtherH2>
          </OtherCard>
          <OtherCard>
            <OtherIcon src={OtherWorks_IuLa} />
            <OtherH2>Inbetween stuff</OtherH2>
          </OtherCard>
        </OtherWrapper>
      </OtherContainer>
    </>
  );
};

export default Other;
