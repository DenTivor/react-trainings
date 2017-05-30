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
    text: 'В четчерг, четвертого числа...'
    
  },
  {
    name: 'User green icon',
    nickname: '@user_green',
    tweets: '42978',
    following: '4200',
    followers: '8',
    text: 'В четчерг, четвертого числа...'
    
  }
];

window.ee = new EventEmitter();

var Item = React.createClass({
  render: function() {
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
  }
})

var ItemsList = React.createClass({
  render: function() {
    return (
      <div className="items-list-block">
        <div className="items-list-wrapper">
          <div className="items-list-inner">
            <div className="items-list" element-id="items-list">
                            
            </div>
          </div>
        </div>
      </div>
    )
  }
})

var SearchBlock = React.createClass({
  getInitialState: function() {
    return {
      query: ''
    };
  },
  componentDidMount: function() {
    ReactDOM.findDOMNode(this.refs.search).focus();
  },
  onFieldChangeHandler: function(e) {
    var value = e.target.value.trim();

    this.setState({query: value});
  },
  componentWillUpdate: function(nextProps, nextState) {
    window.ee.emit('query:updated', {query: nextState.query});
  },
  render: function() {
    return (
      <div className="search-block" element-id="search-block" view-status="loading">
        <input className="search-input"
          onChange={this.onFieldChangeHandler}
          ref="search"
        />
        <div className="loader-wrapper">
          <div className="loader">Loading</div>
        </div>
      </div>
    )
  }
})

var App = React.createClass({
  getInitialState: function() {
    return {
      items: []
    };
  },
  componentDidMount: function() {
    var self = this;
    window.ee.addListener('query:updated', function(query) {
       self.searchIcons(query.query);
    });
  },
  searchIcons: function(query) {
    var result = [];

    icons.forEach(function(item) {
      if (item.name.indexOf(query) > -1) {
        result.push(item);
      }
    })

    // set state
  },
  componentWillUnmount: function() {
    window.ee.removeListener('query:updated');
  },
  render: function() {
    return (
      <div className="search-block-wrapper" >
        <div className="search-block-wrapper">
          <div className="search-block-inner">
            <SearchBlock />
            <ItemsList />
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