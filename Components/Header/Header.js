///Modules and packages
import React from "react";
import { StatusBar } from "expo-status-bar";

//Components

import { StyledContainerView, StyledImage, StyledText } from "./Style";

const Header = () => {
  return (
    <StyledContainerView>
      <StyledImage

        source={require("../../assets/logoPuppies.png")}
        resizeMode="contain"
      />
      <StyledText>¡Bienvenidos a mascotas recatadas!</StyledText>
      <StatusBar backgroundColor="#fff" animated={true} hidden={true} />
    </StyledContainerView>
  );
};

export default Header;
