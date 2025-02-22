import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  min-height:56px;
  max-height:56px;
  border-radius:6px;
  justify-content: center;
  align-items:center;
  background-color:${({theme}:any)=>theme.COLORS.BRAND_MID};

`;

export const Title = styled.Text`
  color: ${({theme}:any)=>theme.COLORS.WHITE};
  font-size: ${({theme}:any)=>theme.FONT_SIZE.MD}px;
  font-family:  ${({theme}:any)=>theme.FONT_FAMILY.BOLD};
`;

export const Load= styled.ActivityIndicator
.attrs(({theme}:any)=>({
  color: theme.COLORS.WHITE
}))``;