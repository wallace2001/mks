import { Box, Button } from '@chakra-ui/react';
import { IProduct } from '../../utilities/types';
import { Container } from "./styles";
import bagImg from "../../assets/bag.svg";
import { IProductCart } from '../../store/ducks/products/types';


interface CardProps {
    product: IProduct;
    addRequest(product: IProductCart): void;
}


export const ProductCards = ({product, addRequest}: CardProps) => {
    
    return (
        
            <Container 
                w="13.6rem"
                h="100%"
                m="0 0"
                display="flex"
                borderRadius="8px"
                flexDirection="column"
                justifyContent="space-between">
                <Box flex="1" alignSelf="center">
                    <img src={product.photo} alt="Foto do produto" />
                </Box>
                <Box flex="1" p="0 0.5rem" display="flex" justifyContent="space-between" alignItems="center" className="name_price">
                    <p className="name">{product.name}</p>
                    <div>
                        <p>R${product.price}</p>
                    </div>
                </Box>
                <Box flex="1"  display="flex" justifyContent="flex-start" alignItems="flex-start">
                    <p className="description">{product.description}</p>
                </Box>
                <Button onClick={() => addRequest({...product, quantity: 1})} className='button-purchase' colorScheme='cyan' w="100%" borderRadius="0 0 8px 8px" h="31.91px" bg="#0F52BA" alignSelf="flex-end">
                    <img className='bagImg' src={bagImg} alt="bolsa de compras" ></img>
                    <span className="textButton">COMPRAR</span>
                </Button>
            </Container>
        
    )
}