import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Outfit } from '@next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weights: [500, 700],
});

function App({ Component, pageProps }) {
  return (
    <main className={outfit.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}

export default App;
