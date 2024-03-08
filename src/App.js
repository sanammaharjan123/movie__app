import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import 'swiper/css';
import Banner from "./pages/Banner";
import Header from "./pages/Header";
import Main from './pages/Main';
import Footer from './pages/Footer';
import ContentSection from './components/ContentSection';

import Routes from './routes/Routes'
function App() {

  return (
    <>
      <Header />
      <Banner />
      <Main />
      <ContentSection  />
      <Footer />
      <Routes/>
    
      
    </>
  );
}

export default App;
