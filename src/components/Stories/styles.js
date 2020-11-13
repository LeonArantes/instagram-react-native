import styled from 'styled-components/native';
import ImageBlurLoading from 'react-native-image-blur-loading';
import LinearGradient from 'react-native-linear-gradient';
import { BLACK_MAIN } from '../../constants/Colors';
export const Container = styled.View`
  width: 65px;
  height: auto;
  align-items: center;
  margin-right: 20px;
`;

export const ButtonStorie = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 65px;
  height: 65px;
  border-radius: 50px;
  position: relative;
`;

export const CircleStorie = styled(ImageBlurLoading).attrs({
  borderRadius: 50,
})`
  flex: 1;
`;

export const ButtonPlus = styled(LinearGradient).attrs({
  colors: ['#6375D6', '#685CFA', '#1A35C6'],
})`
  width: 18px;
  height: 18px;
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  right: 0px;
  border: 2px solid ${BLACK_MAIN};
  border-radius: 50px;
`;

export const BulletStorie = styled(LinearGradient).attrs({
  colors: ['#6375D6', '#685CFA', '#1A35C6'],
})`
  width: 7px;
  height: 7px;
  margin-top: 5px;
  border-radius: 50px;
`;
