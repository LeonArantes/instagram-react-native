import styled from 'styled-components';
import { BLACK_OPACITY } from '../../constants/Colors';
import ImageBlurLoading from 'react-native-image-blur-loading';

export const Container = styled.View`
  width: 90%;
  height: auto;
  min-height: 420px;
  background-color: green;
  border-radius: 20px;
  overflow: hidden;
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${BLACK_OPACITY};
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
`;

export const WrapperProfileImage = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;

export const ProfileImage = styled(ImageBlurLoading).attrs({
  borderRadius: 50,
})`
  flex: 1;
`;
