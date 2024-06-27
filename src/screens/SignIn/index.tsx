import { Container, Title,Slogan } from './styles';
import backgroundImg from '../../assets/background.png'
import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <Container source={backgroundImg}>
      
      <Title>Ignite Fleet</Title>

      <Slogan>Gestão de uso de Veículos</Slogan>

      <Button title='Entar com google'/>
    </Container>
  );
}