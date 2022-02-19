import React from "react";
import "./App.css";
import Header from "./components/Header";
import TrendingItem from "./components/TrendingItem";
import { tabItems, trendingItems } from "./data/tabItems";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <div className="heading">Trending Today</div>
        <div className="trending_section">
          {trendingItems.map((item: any) =>
            <TrendingItem render={() => <div className="trending_list_container">
              <div className="trending_list_item">
                <div className="trending_list_item_title">{item.title}</div>
                <div className="trending_list_item_description">{item.description}</div>
                <div className="trending_list_item_sub">{item.subreddit}</div>
              </div>
            </div>
            } />
          )}
        </div>

        <div className="popular_posts">Popular posts</div>
        <div className="updates_from_posts">
          <TrendingItem render={() => <div className="tabs_list">
            {tabItems.map((tabItem: any) =>
              <a className="tabs_item" role="button">
                {tabItem.icon}
                <span className="tabs_item_label"> {tabItem.label}</span>
              </a>
            )}
            <div className="tabs_more_button_container">
              <button className="tabs_more_button">
                <MoreHorizIcon />
              </button>
            </div>
          </div>
            // <div className="recap_container">
            //   <div className="updates_header">
            //     <h2 className="updates_from_reddit">updates from reddit</h2>
            //     <CloseIcon className="close_icon" />
            //   </div>
            //   <div className="inner_container">

            //   </div>

            // </div>
          } />
        </div>
      </div >
    </div >
  );
}

export default App;
