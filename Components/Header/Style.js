//Modules and packages
import styled from "styled-components/native";

//Components

import Colors from '../../Constants/Colors';


export const StyledContainerView = styled.View`
    marginTop: 10;
    alignItems: center;
    justifyContent: center;
`

export const StyledImage = styled.Image`
    width: 150;
    height: 150;
`

export const StyledText = styled.Text`
    color: ${Colors.colorText};
    paddingBottom: 10;
    fontFamily: PoppinsExtraBold;
`