import '../styles/App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/_index.scss';
import '../components/Brands/_Brands.scss';
import '../components/DataCard/_DataCard.scss';
import '../components/Header/_Header.scss';
import '../components/Button/_Button.scss';
import '../components/Sidebar/_Sidebar.scss';
import '../components/Layout/_Authenticated.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
