import { Container } from './styles';
import {  Box, Button } from "@chakra-ui/react";
import { IoCloseCircle } from 'react-icons/io5';
import { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as RepositoriesActions from "../../store/ducks/products/actions";
import { IProductCart } from '../../store/ducks/products/types';
import { ApplicationState } from '../../store';

interface ShoppingCartProps {
  product: IProductCart;
}

interface DispatchProps {
  deleteRequest(idProduct: number): void;
  addRequest(product: IProductCart): void;
  loading: boolean;
}

type Props = ShoppingCartProps & DispatchProps; 
class ShoppingCart extends Component<Props> {

  aumentar(qtd) {
    const { addRequest, product } = this.props;
    addRequest({...product, quantity: qtd + 1})
  };

  diminuir(qtd) {
    const { addRequest, product } = this.props;
    if (qtd > 1) {
      addRequest({...product, quantity: qtd - 1})
    } else {
      return;
    }
  };

  render () {
    const { product, deleteRequest } = this.props;

    return (
      <Container>
        <Box className="content">
          <img src={product.photo} alt='foto do produto'/>
          <p className="description">{product.name}</p>
          <Box display="flex" flexDirection="column">
            <p>:Qtd.</p>
            <Box borderWidth="1px" display="flex" alignItems="center" borderRadius="4px">
              <Button type='button' onClick={() => this.diminuir(product.quantity)} borderWidth="1px" borderRadius="none" bgColor="transparent" size="xs">-</Button>
              <span>{product.quantity}</span>
              <Button type='button' onClick={() => this.aumentar(product.quantity)} borderWidth="1px" borderRadius="none" bgColor="transparent" size="xs">+</Button>
            </Box>
          </Box>
            <h3>R$ ${product.price}</h3>
            <Button onClick={() => deleteRequest(product.id)} _hover={{background: 'transparent'}} bg="transparent"  className="delete">
              <IoCloseCircle  style={{cursor: 'pointer'}} color={"#000000"} size={23} />
            </Button>
        </Box>
      </Container>
    );
  }

};

const mapStateToProps = (state: ApplicationState) => ({
  loading: state.products.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);