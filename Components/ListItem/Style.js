//Modules and packages
import styled from "styled-components/native";

//Components

import Colors from "../../Constants/Colors";

export const StyledFlatList = styled.FlatList`
  width: 100%;
  height: 20%;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
    justifyContent: center;
    alignItems: center;
    width: 300;
    borderColor: ${Colors.borderColor};
    borderWidth: 0.2;
    marginTop: 10;
`
export const StyledContainerResult = styled.View`
    height: 150;
`
export const StyledContainerText = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    width: 300;
    height: 115;
`
export const StyledContainerTextInfo = styled.View`
    borderRightColor: #fff;
    borderRightWidth: 0.2;
    height: 100%;
    width: 50%;
    justifyContent: center;
    alignItems: center;
`
export const StyleContainerImageResult = styled.View`
    height: 100%;
    width: 50%;
    justifyContent: center;
    alignItems: center;
`
export const StyledTextResult = styled.Text`
    color: ${Colors.colorText};
    fontFamily: PoppinsExtraBold;
`
export const StyledTextRescued = styled.Text`
    fontSize: 25;
    backgroundColor: ${Colors.colorTextBackgroundRescued};
    textAlign: center;
    color: ${Colors.colorText};
    fontFamily: PoppinsExtraBold;
`
export const StyledTextNotReturned = styled.Text`
    fontSize: 25;
    backgroundColor: ${Colors.colorTextBackgroundNoReturn};
    textAlign: center;
    color: ${Colors.colorText};
    fontFamily: PoppinsExtraBold;
`