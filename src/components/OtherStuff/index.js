import React from "react";
import webworks from "../../images/webworks_bw.png";
import UI_design_works from "../../images/printScreen_240306_.jpg";
import OtherWorks_IuLa from "../../images/OtherWorks_IuLa_bw.png";
import Pdf from "../../document/Laura Iuga_mixedPortfolio.pdf";
import {
  OtherContainer,
  OtherH1,
  OtherWrapper,
  OtherCard,
  OtherIcon,
  OtherH2,
  OtherH2Soon,
  OtherP,
} from "./OtherElements";

const Other = () => {
  return (
    <>
      <OtherContainer id="other">
        <OtherH1>Other Projects</OtherH1>
        <OtherP hidden>This section is under construction!</OtherP>
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
            <OtherH2>UI and Graphic Design</OtherH2>
          </OtherCard>
          <OtherCard>
            <OtherIcon src={webworks} />
            <OtherH2Soon>Soon...  Old Web Projects </OtherH2Soon>
          </OtherCard>
          <OtherCard>
            <OtherIcon src={OtherWorks_IuLa} />
            <OtherH2Soon>Soon... Art related projects</OtherH2Soon>
          </OtherCard>
        </OtherWrapper>
      </OtherContainer>
    </>
  );
};

export default Other;
