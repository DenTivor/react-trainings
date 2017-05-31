'use strict';

var icons = [
  {
    name: 'User blue icon',
    nickname: '@user_blue',
    tweets: '42978',
    following: '4200',
    followers: '8',
    text: 'В четчерг, четвертого числа...'
    
  },
  {
    name: 'User red icon',
    nickname: '@user_red',
    tweets: '92978',
    following: '200',
    followers: '18',
    text: 'В friday, пятого числа...'
    
  },
  {
    name: 'User other red icon',
    nickname: '@user_other_red',
    tweets: '9297823',
    following: '290',
    followers: '180',
    text: 'В tuesday, пятого числа...'
    
  },
  {
    name: 'User green icon',
    nickname: '@user_green',
    tweets: '42978',
    following: '4200',
    followers: '8',
    text: 'В monday, шестого числа...'
    
  }
];

window.ee = new EventEmitter();

var SearchBlock = React.createClass({
  render: function() {
    return(
      <div className="search-block-wrapper">
        <div className="search-block-inner">
          <div className="search-block" element-id="search-block" view-status="loading">
            <input className="search-input" />
            <div className="loader-wrapper">
              <div className="loader">Loading</div>
            </div>
          </div>
          <div className="items-list-block">
            <div className="items-list-wrapper">
              <div className="items-list-inner">
                <div className="items-list" element-id="items-list">
                  <div className="item-wrapper">
                    <div className="item clearfix">
                      <div className="left-column pull-left">
                        <div className="profile-image"></div>
                      </div>
                      <div className="right-column pull-left">
                        <div className="top-block"><span className="name">User blue icon</span><span className="identification main-grey-color">@user_blue</span></div>
                        <div className="center-block"><span className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacinia bibendum! Neque morbi nisi mus convallis lectus: Vulputate justo etiam eros; Molestie proin porta auctor montes magna pellentesque?</span></div>
                        <div className="bottom-block">
                          <div className="social-activity">
                            <div className="social-parameters"><span className="social-param-name main-grey-color">Tweets:</span><span className="social-counter">42978</span></div>
                            <div className="social-parameters"><span className="social-param-name main-grey-color">Following:</span><span className="social-counter">4200</span></div>
                            <div className="social-parameters"><span className="social-param-name main-grey-color">Followers:</span><span className="social-counter">8</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-wrapper">
                    <div className="item clearfix">
                      <div className="left-column pull-left">
                        <div className="profile-image"></div>
                      </div>
                      <div className="right-column pull-left">
                        <div className="top-block"><span className="name">User blue icon</span><span className="identification main-grey-color">@user_blue</span></div>
                        <div className="center-block"><span className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacinia bibendum! Neque morbi nisi mus convallis lectus: Vulputate justo etiam eros; Molestie proin porta auctor montes magna pellentesque?</span></div>
                        <div className="bottom-block">
                          <div className="social-activity">
                            <div className="social-parameters"><span className="social-param-name main-grey-color">Tweets:</span><span className="social-counter">42978</span></div>
                            <div className="social-parameters"><span className="social-param-name main-grey-color">Following:</span><span className="social-counter">4200</span></div>
                            <div className="social-parameters"><span className="social-param-name main-grey-color">Followers:</span><span className="social-counter">8</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-wrapper">
                    <div className="item clearfix">
                      <div className="left-column pull-left">
                        <div className="profile-image"></div>
                      </div>
                      <div className="right-column pull-left">
                        <div className="top-block"><span className="name">User blue icon</span><span className="identification main-grey-color">@user_blue</span></div>
                        <div className="center-block"><span className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacinia bibendum! Neque morbi nisi mus convallis lectus: Vulputate justo etiam eros; Molestie proin porta auctor montes magna pellentesque?</span></div>
                        <div className="bottom-block">
                          <div className="social-activity">
                            <div className="social-parameters"><span className="social-param-name main-grey-color">Tweets:</span><span className="social-counter">42978</span></div>
                            <div className="social-parameters"><span className="social-param-name main-grey-color">Following:</span><span className="social-counter">4200</span></div>
                            <div className="social-parameters"><span className="social-param-name main-grey-color">Followers:</span><span className="social-counter">8</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

var App = React.createClass({
  render: function() {
    return(
      <div>
        <SearchBlock />
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// <div>
//   <SearchBlock />
// </div>