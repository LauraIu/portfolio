import React from "react";
import webworks from "../../images/webworks.png";
import OtherWorks_IuLa from "../../images/OtherWorks_IuLa.png";
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
          <OtherCard>
            <OtherIcon src={webworks} />
            <OtherH2>Web and design works</OtherH2>
            {/* <OtherP>Jahh mffd kkfrhffms, nfjdhf, dhjdg ab ffhdjtr.</OtherP> */}
          </OtherCard>
          <OtherCard>
            <OtherIcon src={webworks} />
            <OtherH2>Art related projects</OtherH2>
            {/* <OtherP>Jahh mffd kkfrhffms, nfjdhf, dhjdg ab ffhdjtr.</OtherP> */}
          </OtherCard>
          <OtherCard>
            <OtherIcon src={OtherWorks_IuLa} />
            <OtherH2>Inbetween stuff</OtherH2>
            {/* <OtherP>Jahh mffd kkfrhffms, nfjdhf, dhjdg ab ffhdjtr.</OtherP> */}
          </OtherCard>
        </OtherWrapper>
      </OtherContainer>
    </>
  );
};

export default Other;
