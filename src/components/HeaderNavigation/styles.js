import styled from 'styled-components/native';
import { BLACK_MAIN } from '../../constants/Colors.js';

export const Container = styled.View`
  width: 100%;
  height: 80px;
  padding-top: ${(props) => props.statusHeight + 10}px;
  background-color: ${BLACK_MAIN};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const TouchButton = styled.TouchableOpacity``;
