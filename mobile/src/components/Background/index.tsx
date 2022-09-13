import { ImageBackground } from 'react-native';
import backgroundImg from '../../assets/baground.png';

import { styles } from './styles';

interface Props {
    children: React.ReactNode;
}

export function background({ children }: Props) {
  return (
    <ImageBackground 
        source={backgroundImg}
        defaultSource={backgroundImg}
        style={styles.container}
        >
            {children}
    </ImageBackground>
  );
}