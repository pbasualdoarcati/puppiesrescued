//Modules and packages
import styled from "styled-components/native";

//Components

import Colors from '../../Constants/Colors';

export const StyledView = styled.View`
    flex: 1;
    backgroundColor: ${Colors.colorBackground};
    alignItems: center;
    justifyContent: center;
`
export const StyledTextInput = styled.TextInput`
    maxWidth: 80%;
    borderColor: ${Colors.borderColor};
    borderWidth: 1;
    padding-top: 10;
    padding-bottom: 10;
    padding-left: 10;
    padding-right: 10;
    marginTop: 10;
    marginBottom: 10;
    marginLeft: 10;
    marginRight: 10;
    color: ${Colors.colorText};
`
export const StyledText = styled.Text`
    color: ${Colors.colorText};
    alignSelf: center;
`