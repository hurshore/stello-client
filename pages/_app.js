import '../styles/globals.css';
import Layout from '../components/Layout/Layout';
import { AuthProvider } from '../context/authContext';
import { CartProvider } from '../context/cartContext';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <InstantSearch indexName="products" searchClient={searchClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </InstantSearch>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
