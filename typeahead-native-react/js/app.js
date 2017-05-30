'use strict';

var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];

window.ee = new EventEmitter();



var App = React.createClass({
  render: function() {
    return (
      <div className="search-block-wrapper" >
        <div className="search-block-wrapper">
          <div className="search-block-inner">
            <div className="search-block" element-id="search-block" view-status="loading">
              <input className="search-input"/>
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
        <div className="notification-text-wrapper">
          <div className="notification-text-inner">
            <div className="notification-text" element-id="notification-text">
              test
            </div>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);