import styled from 'styled-components';
import { BLACK_OPACITY, WHITE } from '../../constants/Colors';
import ImageBlurLoading from 'react-native-image-blur-loading';

export const Container = styled.View`
  width: 95%;
  height: auto;
  min-height: 420px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  margin: 20px auto;
`;

export const Header = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
`;

export const WrapperHeaderItems = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
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

export const ProfileName = styled.Text`
  font-family: 'Poppins-SemiBold';
  color: ${WHITE};
  padding-left: 8px;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.47);
`;

export const ImagePost = styled(ImageBlurLoading)`
  flex: 1;
`;

export const FooterButtons = styled.View`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 0;
  z-index: 9;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 38px;
  height: 38px;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.27);
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;
