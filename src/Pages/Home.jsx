import Search from '../components/Search';
import Trending from '../components/Trending';
import Sellers from '../components/Sellers';
import Auction from '../components/Auction';
import Review from '../components/Review';
import Footer from '../components/Footer';
import Intro from '../components/Intro';

function Home() {
  return (
    <>
    <Intro />
    <Search />
      <Trending />
      <Sellers />
      <Auction />
      <Review />
      <Footer />
    </>
  );
}

export default Home;
