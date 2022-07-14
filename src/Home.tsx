import { Header } from "./components/Header";
import { Box, Spinner } from "@chakra-ui/react";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/global";
import { IProduct } from "./utilities/types";
import { ProductCards } from "./components/ProductCards";
import { Component } from "react";
import { ApplicationState } from "./store";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import * as RepositoriesActions from "./store/ducks/products/actions";

interface DispatchProps {
  products: IProduct[];
  productsWithCart: IProduct[];
  loading: boolean;
  loadRequest(): void;
  getRequest(): void;
  deleteRequest(idProduct: number): void;
  addRequest(product: IProduct): void;
}

type Props = DispatchProps;

class Home extends Component<Props> {
  componentDidMount() {
    const { loadRequest, getRequest } = this.props;

    loadRequest();
    getRequest();
  }

  render() {
    const { loading, products, productsWithCart, addRequest, deleteRequest } = this.props;

    return (
      <Box>
        <Header
          deleteRequest={deleteRequest}
          productsWithCartLength={productsWithCart.length}
        />
        <Box
          bg="#E5E5E5"
          h="100%"
          display="grid"
          justifyContent="center"
          alignItems="center"
          gridTemplate="1fr 1fr / 1fr 1fr 1fr 1fr"
          gridGap="1rem 1.2rem"
          p="7rem 12rem"
        >
          {loading ? (
            <Spinner />
          ) : (
            products.map((product) => (
              <ProductCards
                key={product.id}
                product={product}
                addRequest={addRequest}
              />
            ))
          )}
        </Box>
        <Footer />
        <GlobalStyle />
      </Box>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  products: state.products.data,
  productsWithCart: state.products.productsWithCart,
  loading: state.products.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
