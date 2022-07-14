import { Container } from './styles';
import { Cart } from '../Cart';

interface HeaderProps {
  productsWithCartLength: number;
  deleteRequest(idProduct: number): void;
}

export const Header = ({productsWithCartLength}: HeaderProps) => {
  return (
    <Container>
            <label>
                <h4>MKS</h4>
                <span>Sistemas</span>
            </label>
            <Cart productsWithCartLength={productsWithCartLength}/>
    </Container>
    
  )
}
