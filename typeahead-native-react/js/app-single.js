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
  getInitialState: function() {
    return {
      items: [],
      viewStatus: 'passive',
      query: ''
    };
  },
  handleFocus: function() {
    this.setState({viewStatus: 'active'});
  },
  handleBlur: function() {
    this.setState({viewStatus: 'passive'});
  },
  handleChange: function(e) {
    var value = e.target.value.trim();

    this.setState({query: value});
    this.searchIcons(value);
  },
  searchIcons: function(query) {
    var result = [];

    icons.forEach(function(item) {
      if (item.name.indexOf(query) > -1) {
        result.push(item);
      }
    })
    this.setState({items: result});
  },
  render: function() {
    var itemsTpl, itemsArray = [],
        items = this.state.items;

    if (items.length > 0) {
        itemsArray = items.map(function(item, index) {
          
          var name = item.name,
              nickname = item.nickname,
              tweets = item.tweets,
              following = item.following,
              followers = item.followers,
              text = item.text;

          return (
            <div className="item-wrapper">
              <div className="item clearfix">
                <div className="left-column pull-left">
                  <div className="profile-image"></div>
                </div>
                <div className="right-column pull-left">
                  <div className="top-block"><span className="name">{name}</span><span className="identification main-grey-color">{nickname}</span></div>
                  <div className="center-block"><span className="info">{text}</span></div>
                  <div className="bottom-block">
                    <div className="social-activity">
                      <div className="social-parameters"><span className="social-param-name main-grey-color">Tweets:</span><span className="social-counter">{tweets}</span></div>
                      <div className="social-parameters"><span className="social-param-name main-grey-color">Following:</span><span className="social-counter">{following}</span></div>
                      <div className="social-parameters"><span className="social-param-name main-grey-color">Followers:</span><span className="social-counter">{followers}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })

        itemsTpl = <div className="items-list-block">
                    <div className="items-list-wrapper">
                      <div className="items-list-inner">
                        <div className="items-list" element-id="items-list">
                          {itemsArray}
                        </div>
                      </div>
                    </div>
                  </div>
    } else {
      itemsTpl = "";
    }

    return(
      <div className="search-block-wrapper">
        <div className={'search-block-inner ' + (this.state.viewStatus) }>
          <div className="search-block" element-id="search-block" view-status="loading">
            <input className="search-input" 
              onChange={this.handleChange}
              onFocus={this.handleFocus}  
              onBlur={this.handleBlur}        
              autoFocus={false}
              value={this.state.query}
              ref="search"
            />
            <div className="loader-wrapper">
              <div className="loader">Loading</div>
            </div>
          </div>
          {itemsTpl}
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
