import ShoppingCart from "../ShoppingCart";
import { Container } from "./styles";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
} from "@chakra-ui/react";
import { ApplicationState } from "../../store";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import * as RepositoriesActions from "../../store/ducks/products/actions";
import { Component } from "react";
import { IProductCart } from "../../store/ducks/products/types";

interface DrawerCartProps {
  onClose(): void;
  isOpen: boolean;
  btnRef: any;
}

interface DispatchProps {
  productsWithCart: IProductCart[];
}

type Props = DrawerCartProps & DispatchProps; 

class DrawerCart extends Component<Props> {
  state = {
    total: 0,
  }

  componentWillReceiveProps(nextProps: Readonly<Props>): void {
    const { productsWithCart } = nextProps;

    if (productsWithCart !== this.props.productsWithCart) {
      let total = 0;
      productsWithCart.forEach((product) => {
        total = Number(total) + (Number(product.price) * product.quantity);
      });
  
      this.setState({
        total
      });
    }
  }

  render () {
    const { btnRef, onClose, isOpen, productsWithCart } = this.props;
    const { total } = this.state;

    return (
      <Drawer
        initialFocusRef={btnRef}
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
        size="sm"
      >
        <Container w="100%" h="100%" bg="#0F52BA">
          <DrawerHeader
            className="drawer-header"
            display="flex"
            max-width="30%"
            alignItems="center"
            justifyContent="space-between"
          >
            <span>Carrinho de compras</span>
            <Box className="box-button" onClick={onClose}>
              <button type="button">X</button>
            </Box>
          </DrawerHeader>
          <DrawerBody className="drawer-body">
            {productsWithCart.map((product) => (
              <ShoppingCart key={product.id} product={product} />
            ))}
          </DrawerBody>
          <DrawerFooter
            className="footer"
            display="flex"
            flexDirection="column"
            p="0"
          >
            <Box
              className="box-footer"
              p="0 3rem"
              w="100%"
              display="flex"
              justifyContent="space-between"
            >
              <h3>Total:</h3>
              <h3>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(total))}
              </h3>
            </Box>
            <Button
              mt="20px"
              h="5rem"
              w="100%"
              bg="#000"
              colorScheme="cyan"
              borderRadius="none"
            >
              <h3>Finalizar Compra</h3>
            </Button>
          </DrawerFooter>
        </Container>
      </Drawer>
    );
  }

};

const mapStateToProps = (state: ApplicationState) => ({
  products: state.products.data,
  productsWithCart: state.products.productsWithCart,
  loading: state.products.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DrawerCart);