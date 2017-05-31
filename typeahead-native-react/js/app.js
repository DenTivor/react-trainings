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

var Item = React.createClass({

  render: function() {
    var name = this.props.data.name,
        nickname = this.props.data.nickname,
        tweets = this.props.data.tweets,
        following = this.props.data.following,
        followers = this.props.data.followers,
        text = this.props.data.text;

    return(
      
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
    )
  }
})

var ItemsList = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  render: function() {
    var data = this.props.data,
        itemsArray, tpl;

    if (data.length > 0) {
      itemsArray = data.map(function(item, index) {
        return (
          <div className="item-wrapper" key={index}>
            <Item data={item} />
          </div>
        )
      })

      tpl = <div className="items-list-block">
              <div className="items-list-wrapper">
                <div className="items-list-inner">
                  <div className="items-list" element-id="items-list">
                    {itemsArray}
                  </div>
                </div>
              </div>
            </div>
    } else {
      tpl = "";
    }

    return (
      <div>
        {tpl}        
      </div>
    );
    
  }
})

var SearchBlock = React.createClass({
  getInitialState: function() {
    return {
      query: '',
      isFocused: true
    };
  },
  onFieldChangeHandler: function(e) {
    var value = e.target.value.trim();

    this.setState({query: value});
    window.ee.emit('query:updated', {query: value});
  },
  onFocus: function() {
    window.ee.emit('viewStatus:update', {status: 'active'});
  },
  onBlur: function() {
    window.ee.emit('viewStatus:update', {status: 'passive'});
  },
  render: function() {
    return (
      <div className="search-block" element-id="search-block" view-status="loading">
        <input className="search-input"
          onChange={this.onFieldChangeHandler}
          onFocus={this.onFocus}  
          onBlur={this.onBlur}        
          autoFocus={false}
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
      items: [],
      viewStatus: 'passive'
    };
  },
  componentDidMount: function() {
    var self = this;
    window.ee.addListener('query:updated', function(query) {
       self.searchIcons(query.query);
    });
    window.ee.addListener('viewStatus:update', function(status) {
       self.updateStatus(status.status);
    });
  },
  updateStatus: function(status) {
    this.setState({viewStatus: status});
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
  componentWillUnmount: function() {
    window.ee.removeListener('query:updated');
    window.ee.removeListener('viewStatus:update');
  },
  render: function() {
    return (
      <div className="search-block-wrapper" >
        <div className="search-block-wrapper">
          <div className={'search-block-inner ' + (this.state.viewStatus) }>
            <SearchBlock />
            <ItemsList data={this.state.items}/>
          </div>
        </div>
        <div className="notification-text-wrapper">
          <div className="notification-text-inner">
            <div className="notification-text">
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