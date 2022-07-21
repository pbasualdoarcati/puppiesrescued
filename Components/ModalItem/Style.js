//Modules and packages
import styled from "styled-components/native";

//Components

import Colors from "../../Constants/Colors";

export const ModalContainerView = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: ${Colors.colorBackgroundModal};
`;

export const ModalView = styled.View`
  backgroundColor: ${Colors.colorBackgroundModalView};
  borderTopLeftRadius: 20;
  borderTopRightRadius: 20;
  borderBottomLeftRadius: 20;
  borderBottomRightRadius: 20;
  width: 80%;
  height: 50%;
  alignItems: center;
  justifyContent: space-between;
  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 10%;
  padding-right: 10%;
  flexDirection: column;
`;
export const ModalViewMessage = styled.View`
  marginBottom: 10;
  justifyContent: center;
  alignItems: center;
`;

export const ModalViewButton = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  marginTop: 15;
`;

export const ModalViewTouchable = styled.View`
  paddingHorizontal: 20;
  paddingVertical: 10;
  marginTop: auto;
  marginBottom: auto;
  marginLeft: auto;
  marginRight: auto;
  backgroundColor: ${Colors.colorBackgroundButton};
  borderTopLeftRadius: 20;
  borderTopRightRadius: 20;
  borderBottomLeftRadius: 20;
  borderBottomRightRadius: 20;
  width: 50%;
`;

export const ModalTitle = styled.Text`
  fontSize: 22;
  color: ${Colors.colorModalTitle};
`;

export const ModalTextButton = styled.Text`
  alignSelf: center;
  color: ${Colors.colorText};
`;

export const ModalTextItem = styled.Text`
  fontSize: 30;
`;
