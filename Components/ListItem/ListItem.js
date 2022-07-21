///Modules and packages
import React from "react";

//Components

import { StyledFlatList, StyledTouchableOpacity, StyledContainerResult, StyledContainerText, StyledContainerTextInfo, StyledTextResult, StyleContainerImageResult, StyledTextRescued, StyledTextNotReturned } from './Style'



const ListItem = (props) => {
  const { itemList, onHandlerModal } = props;

  return (
    <StyledFlatList
      data={itemList}
      renderItem={(data) => (
        <StyledTouchableOpacity
          key={data.item.id}
          onPress={() => onHandlerModal(data.item.id)}
        >
          <StyledContainerResult >
            <StyledContainerText>
              <StyledContainerTextInfo>
                <StyledTextResult>
                  Dirección: {data.item.value}{" "}
                </StyledTextResult>
                <StyledTextResult>Fecha: {data.item.date}</StyledTextResult>
              </StyledContainerTextInfo>
              <StyleContainerImageResult>
                <StyledTextResult>Imagen: {data.item.image}</StyledTextResult>
              </StyleContainerImageResult>
            </StyledContainerText>

            {data.item.rescued === true ? (
              <StyledTextRescued> ¡Devuelto!</StyledTextRescued>
            ) : (
              <StyledTextNotReturned >
                {" "}
                ¡Todavia sin su dueño!
              </StyledTextNotReturned>
            )}
          </StyledContainerResult>
        </StyledTouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ListItem;
