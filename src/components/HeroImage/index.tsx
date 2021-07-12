import React from "react";

// Styles
import { Content, Wrapper, Text } from "./HeroImage.styles";

type Props = {
  title: string;
  text: string;
  image: string;
};

const HeroImage: React.FC<Props> = ({ title, text, image }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

export default HeroImage;
