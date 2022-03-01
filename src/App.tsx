import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TrendingItem from "./components/TrendingItem";
import { tabItems, trendingItems, postItems } from "./data/tabItems";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import NewReleasesOutlinedIcon from '@material-ui/icons/NewReleasesOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ClassIcon from '@material-ui/icons/Class';

function App() {
  const [tabClicked, setTabClicked] = useState("Hot");
  const [open, setOpen] = useState(false);
  let tabClick = false;
  let clickedTab: any;

  const clickDiv = (event: any) => {
    console.log(event);
    const isChildClicked = event.target.children.length == 0 ? true : false;
    let text = "";
    if (isChildClicked) {
      text = event.target.innerText;
      setTabClicked(text);
    }
    else {
      text = event.target.children[1].innerText;
      setTabClicked(text);
    }
    // if (clickedTab)
    //   clickedTab.classList.remove("clicked");
    // tabClick = true;
    // if (tabClick && !clickedTab.classList.included("clicked")) {
    //   if (isChildClicked)
    //     clickedTab = event.target.parentElement;
    //   else
    //     clickedTab = event.target;
    //   clickedTab.classList.add("clicked");
    // }
    // tabClick = false;
  }
  console.log(postItems[tabClicked]);

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
            <div onClick={clickDiv}>
              <a className="tabs_item" role="button">
                <WhatshotSharpIcon />
                <span className="tabs_item_label">Hot</span>
              </a>
            </div>
            <div onClick={clickDiv}> <a className="tabs_item" role="button">
              <KeyboardArrowDownOutlinedIcon />
              <span className="tabs_item_label">Rising</span>
            </a>
            </div>
            <div onClick={clickDiv}>
              <a className="tabs_item" role="button">
                <NewReleasesOutlinedIcon />
                <span className="tabs_item_label">New</span>
              </a>
            </div>
            <div onClick={clickDiv}>
              <a className="tabs_item" role="button">
                <EqualizerOutlinedIcon />
                <span className="tabs_item_label">Top</span>
              </a>
            </div>
            <div style={{ flexFlow: "row nowrap" }} className="tabs_list_right wrap">
              <div className="tabs_list_right_dropdown" onClick={() => setOpen(!open)}>
                <button role="menuitem" className="tabs_list_button">
                  <span className="tabs_list_dropdown_icon_container">
                    <ViewAgendaIcon />
                  </span>
                  <ExpandMoreIcon />
                </button>
                {open && <div style={{ bottom: 0, borderRadius: "5px", background: "#f2f8fc" }} className="dropdown">
                  <button role="menuitem" className="tabs_list_button">
                    <span className="tabs_list_dropdown_icon">
                      <ViewCompactIcon />
                      <span className="tabs_list_dropdown_text">Card</span>
                    </span>
                  </button>
                  <button role="menuitem" className="tabs_list_button">
                    <span className="tabs_list_dropdown_icon">
                      <ClassIcon />
                      <span className="tabs_list_dropdown_text">Classic</span>
                    </span>
                  </button>
                  <button role="menuitem" className="tabs_list_button">
                    <span className="tabs_list_dropdown_icon">
                      <ViewCompactIcon />
                      <span className="tabs_list_dropdown_text">Compact</span>
                    </span>
                  </button>
                </div>}
              </div>

            </div>
          </div>
          } />
        </div>
        <div className="posts_list_container">
          <TrendingItem render={() =>
            <div className="posts_list">
              {
                postItems[tabClicked].map((postItem: any) =>
                  <div>
                    <div>
                      <div className=" ">
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
          } />
        </div >
        <div className="sidebar_widget">
          <div className="sidebar_widget_container">
            <div className="sidebar_widget_list_container">
              <div className="sidebar_widget_list_container_block">
                <div className="sidebar_widget_list_container_top">
                  <h2 className="sidebar_widget_list_header">
                    <a>
                      Top
                      <span>
                        &nbsp;
                        Aww
                        &nbsp;
                      </span>
                      Communities
                    </a>
                  </h2>
                </div>
                <ol></ol>
              </div>
            </div>

          </div>
        </div>

      </div >
    </div >
  );
}

export default App;
