import { Container,Title,Load } from './styles';
import {TouchableOpacityProps} from 'react-native'

type prop = TouchableOpacityProps & {
  title:string
  isLoading?:boolean
}

export function Button({title,isLoading=false, ...rest}:prop) {
  return (
    <Container
    activeOpacity={0.7}
    disabled={isLoading}
    {...rest}
    >
    {
      isLoading ? <Load/> : <Title>{title}</Title>
    }
    </Container>
  );
}