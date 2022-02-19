import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import data from "./mockData/trendingItems.json";
import TrendingItem from './components/TrendingItem';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import CloseIcon from '@material-ui/icons/Close';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <div className="heading">Trending Today</div>
        <div className="trending_section">
          {data.map((item: any) => <TrendingItem render={() => <div className="container">
            <div>{item.title}</div>
            <div>{item.description}</div>
            <div>{item.subreddit}</div>
          </div>} />
          )}
        </div>

        <div className="popular_posts">Popular posts</div>
        <div className="updates_from_posts">
          <TrendingItem render={() => <div className='tabs_list'>
            <div>
              <WhatshotSharpIcon />
              <p>
                Hot
              </p>
            </div>
            <div>
              <WhatshotSharpIcon />
              <p>
                New
              </p>
            </div>
            <div>
              <WhatshotSharpIcon />
              <p>
                Top
              </p>
            </div>
          </div>
            // <div className='recap_container'>
            //   <div className="updates_header">
            //     <h2 className="updates_from_reddit">updates from reddit</h2>
            //     <CloseIcon className="close_icon" />
            //   </div>
            //   <div className="inner_container">

            //   </div>

            // </div>
          } />
        </div>
      </div>
    </div >
  );
}

export default App;
