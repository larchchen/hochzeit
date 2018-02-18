var React = require('react');
var ReactDOM = require('react-dom');
var DefaultLayout = require('./layouts/DefaultLayout');
var Seperator = require('./seperator');

class Prepare extends React.Component {
  snow() {
    if (this.props.lang === 'cn') {
      return (
        <div className="one-half column">
          <div className="align-center">
            <h4>阿尔卑斯的雪</h4>
          </div>
          <div className="align-center">
            <ul>
              <li>
                当地气温大约在+5&#8451;到-15&#8451;之间。一定要注意保暖。
              </li>
              <li>
                羽绒服或者冲锋衣是必要装备。
              </li>
              <li>
                另外也推荐准备一双防水的雪地靴。
              </li>
              <li>
                手套，帽子，围巾，总之裹成个粽子就对了。
              </li>
              <li>
                滑雪器材也可以带哦。
              </li>
              <li>
                还有计划好婚礼前后的行程。
              </li>
              <li>
                相机千万不要落在家里。
              </li>
              <li>
                如果需要我们的推荐，找我们来私聊。
              </li>
            </ul>
          </div>
        </div>
      );
    }
    return (
      <div className="one-half column">
        <div className="align-center">
          <h4>Enjoy Alps and snow</h4>
        </div>
        <div className="align-center">
          <ul>
            <li>
              Keep warm. Temprature ranges from +5&#8451; to -15&#8451;.
            </li>
            <li>
              Definitely you need proper winter jackets.
            </li>
            <li>
              A pair of water-proof snow boots are highly recommended.
            </li>
            <li>
              Gloves, Beanie, Scarf. Become a bear.
            </li>
            <li>
              Bring your ski equipments.
            </li>
            <li>
              Plan your pre/post-wedding trips.
            </li>
            <li>
              Don't forget you camera.
            </li>
            <li>
              If you need any recommendations, ask us.
            </li>
          </ul>
        </div>
      </div>
    );
  }

  wedding() {
    if (this.props.lang === 'cn') {
      return (
        <div className="one-half column">
          <div className="align-center">
            <h4>婚礼中最亮的星</h4>
          </div>
          <div className="align-center">
            <ul>
              <li>
                我们的婚礼从下午2点持续到午夜。前一晚记得睡个好觉。
              </li>
              <li>
                先生们请着正装出席。
              </li>
              <li>
                女士们请着小礼服出席。
              </li>
              <li>
                成为舞王。
              </li>
              <li>
                在我们的婚礼游戏中夺魁，收些迷弟迷妹。
              </li>
              <li>
                在米其林星级餐厅中拍照发朋友圈。但如果有任何过敏，请及时告诉我们。
              </li>
              <li>
                不要携带任何礼物。
              </li>
              <li>
                <a href="/beOurGuest/cn">最重要的是要和我们预约席位。</a>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    return (
      <div className="one-half column">
        <div className="align-center">
          <h4>Be a wedding pro</h4>
        </div>
        <div className="align-center">
          <ul>
            <li>
              Rest well. Our wedding lasts from 2pm until midnight.
            </li>
            <li>
              Gentlemen, please dress up in black-tie suit.
            </li>
            <li>
              Ladies, please put on your favourite cocktail dress.
            </li>
            <li>
              Be ready to swing.
            </li>
            <li>
              Triumph our party games and make some new friends.
            </li>
            <li>
              Tell us any allergies and enjoy our Michelin-stared restaurant.
            </li>
            <li>
              Don't bring along any gifts.
            </li>
            <li>
              <a href="/beOurGuest/en">Most importantly, tell us you are coming.</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  render() {
    let snow = this.snow();
    let wedding = this.wedding();
    return (
      <DefaultLayout title={this.props.title}>
        <div id="prepare-photo-wrapper"></div>
        <div id="body-wrapper">
          <div className="container prepare-container">
            <div className="row align-center">
              {this.props.lang === 'cn' ? <h1>如何准备</h1> : (
                <h1>Are you prepared?</h1>
              )}
            </div>
            <Seperator />
            <div className="row">
              {snow}
              <hr className="u-full-width mobile-only" />
              {wedding}
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Prepare;
