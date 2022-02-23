import React from "react";
import "./App.css";
import Header from "./components/Header";
import TrendingItem from "./components/TrendingItem";
import { tabItems, trendingItems, postItems } from "./data/tabItems";
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
        <div className="posts_list_container">
          {/* <div>
            <div>
              <div className="posts_list_container_inner"> */}
          <TrendingItem render={() =>
            <div className="posts_list">
              {
                postItems.map((postItem: any) =>
                  <div>
                    <div>
                      <div className="posts_list_item_container">
                        <div className="posts_list_item" style={{ flexDirection: "column" }}>
                          <div className="posts_list_item_header">
                            <div className="posts_list_item_icon_container">
                              <a className="posts_list_item_icon_href">
                                <img alt="Subreddit Icon" role="presentation" src="https://styles.redditmedia.com/t5_3hx3r/styles/communityIcon_kkg7izl7pwy61.jpg?width=256&amp;s=440641db6ea0cb39e09fb16b5c02171d98f23fc6" className="posts_list_item_icon" />
                              </a>
                            </div>
                            <div className="posts_list_item_information_container">
                              <div className="posts_list_item_information">
                                <div className="posts_list_item_information_item">
                                  <a className="posts_list_item_subreddit">
                                    {postItem.subReddit}
                                  </a>
                                  <div id="SubredditInfoTooltip--t3_swc0ru--MurderedByWords"></div>
                                </div>
                                <span className="dot_container" role="presentation">•</span>
                                <span className="posted_by">Posted by</span>
                                <div className="posts_list_item_author">
                                  <a className="posts_list_item_author_href">{postItem.author}</a>
                                </div>
                                <a className="posts_list_item_timestamp">4 hours ago</a>
                              </div>
                            </div>
                          </div>
                          <div className="posts_list_item_title_container">
                            <div className="posts_list_item_title">
                              {postItem.title}
                            </div>
                          </div>
                          <div className="posts_list_item_image_container"></div>
                        </div>
                      </div></div></div>
                )
              }
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
          {/* </div>
      </div>

    </div> */}
        </div >

      </div >
    </div >
  );
}

export default App;