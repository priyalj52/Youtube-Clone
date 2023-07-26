
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import './App.css';
import { AppContext } from './context/context';

import Header from './components/Header';
import { Feed } from '@mui/icons-material';
import MainPage from './components/MainPage';
import FeedPage from './components/Feed';
import VideoCardDetails from './components/VideoCardDetails';
import SearchResult from './components/SearchResult';


function App() {
  
  return (
  
  <div>
    <AppContext>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<FeedPage/>}/>
        <Route path="/video/:id" element={<VideoCardDetails />} />
        <Route
                            path="/searchResult/:searchQuery"
                            element={<SearchResult />}
                        />
      </Routes>
   {/* <MainPage/> */}
      </BrowserRouter>

    </AppContext>
 
  </div>
  
    
     
   
  
  );
}

export default App;
