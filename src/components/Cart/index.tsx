import { Container } from './styles';
import { useRef } from 'react'
import { Button, useDisclosure } from '@chakra-ui/react'
import DrawerCart from '../DrawerCart/index';
import cartImg from '../../assets/cart.svg';

interface CartProps {
  productsWithCartLength: number;
}

export const Cart = ({productsWithCartLength}: CartProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const btnRef = useRef();
  
    return (
      <Container>
        <Button ref={btnRef as any}  onClick={onOpen}>
            <img src={cartImg} alt='carrinho de compras' />
            <span>{productsWithCartLength}</span>
        </Button>
        <DrawerCart
          isOpen={isOpen}
          onClose={onClose}
          btnRef={btnRef}
        />
      </Container>
    )
}