var React = require('react');
var ReactDOM = require('react-dom');
var DefaultLayout = require('./layouts/defaultLayout');
var Seperator = require('./seperator');

class Arrive extends React.Component {
  arriveByAir() {
    if (this.props.lang === 'cn') {
      return (
        <div className="six columns">
          <h4>飞机</h4>
          <p>
            酒店附近有三个机场：<br />
            慕尼黑(MUC)，因斯布鲁克(INN)，萨尔斯堡(SZG)。<br />
            您可以在机场租车或者让我们为您安排接机巴士。<br />
            从慕尼黑/因斯布鲁克/萨尔斯堡乘车抵达各需要约2.5/2/1.5小时。<br />
            另外您还可以搭乘前往维也纳的飞机，然后换乘火车前来。
          </p>
        </div>
      );
    }
    return (
      <div className="six columns">
        <h4>Arrival by air</h4>
        <p>
          There are three airports nearby.<br />
          Munich (MUC), Innsbruck (INN), Salzburg (SZG).<br />
          You can rent a car at the airport.<br />
          Or you can ask us to arrange an airport shuttle for you.<br />
          It takes roughly 2.5 hours from Munich, 2 hours from Innsbruck, or 1.5 hours from Salzburg.<br />
          It is also possible to land at Vienna (VIE) and continue your journey by train.
        </p>
      </div>
    );
  }

  arriveByTrain() {
    if (this.props.lang === 'cn') {
      return (
        <div className="six columns">
          <h4>火车</h4>
          <p>
            距离酒店最近的火车站叫<b>Zell am See Bahnhof</b>。<br />
            我们也可以为您在<b>Salzburg Hbf</b>安排接站和换乘汽车。<br />
            您可以在<a href="http://www.oebb.at/en/"><b>ÖBB的网站</b></a>上规划行程并订票.<br />
            如果提前定票的话，可能还会有折扣。<br />
            从Zell am See Bahnhof花不到15欧就可以打一辆出租车前来酒店，仅需要6分钟。
            
          </p>
        </div>
      );
    }
    return (
      <div className="six columns">
        <h4>Arrival by train</h4>
        <p>
          The most convenient train station is <b>Zell am See Bahnhof</b>.<br />
          You can also arrive at <b>Salzburg Hbf</b> and ask us to arrange a shuttle for you.<br />
          You can plan your trip on <a href="http://www.oebb.at/en/">ÖBB's website</a>.<br />
          You may get cheaper tickets if booking ahead.<br />
          A taxi ride from Zell am See Bahnhof to Schloss Prielau takes 6 minutes and less than &euro;15.<br />
        </p>
      </div>
    );
  }

  footnote() {
    if (this.props.lang === 'cn') {
      return (
        <p className="footnote">
          当然，Zell am See还有一个可供私人飞机降落的机场，酒店也自带直升机停机坪。<br />
          如果您需要用到上述设施，请告诉我们并让我们抱紧您的大腿。
        </p>
      );
    }
    return (
      <p className="footnote">
        Well, there is an airport at Zell am See and a helicopter landing site at Schloss Prielau, allowing you to arrive by private jet or helicopter.<br />
        Tell us if you need them and let's be friends forever.
      </p>
    );
  }

  render() {
    let googleMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.5531280400096!2d12.801333633065235!3d47.342597979168026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47771d40af102d8f%3A0xa448d8b442b36dff!2sSchloss+Prielau+Hotel+%26+Restaurants!5e0!3m2!1sen!2suk!4v1518264590804";
    let arriveByAir = this.arriveByAir();
    let arriveByTrain = this.arriveByTrain();
    let footnote = this.footnote();
    return (
      <DefaultLayout title={this.props.title}>
        <div id="arrive-photo-wrapper">
          <div className="arrive-photo-inner">
            {this.props.lang === 'cn' ? (
              <h1>Schloss Prielau酒店</h1>
            ) : (
              <h1>Here is Schloss Prielau</h1>
            )}
          </div>
        </div>
        <div id="body-wrapper">
          <div className="container arrive-page">
            <div className="row align-center">
              {this.props.lang === 'cn' ? (
                <h4>
                  您可能需要几个小时才能到达我们的婚礼酒店。
                </h4>
              ) : (
                <h4>
                  Please kindly note that you need a few hours to arrive here.
                </h4>
              )}
              {this.props.lang === 'cn' ? (
                <h4>
                  我们的婚礼于2019年2月10日下午2点准时开始。  
                </h4>
              ) : (
                <h4>
                  Our wedding starts at 14:00, 10th Feb, 2019.
                </h4>
              )}
            </div>
            <Seperator />
            <div className="row align-center">
              <div className="six columns">
                {this.props.lang === 'cn' ? (
                  <h4>地址</h4>
                ) : (
                  <h4>Address</h4>
                )}
                <p>
                  Schloss Prielau<br />
                  Hofmannsthalstraße<br />
                  A-5700 Zell am See<br />
                  {this.props.lang === 'cn' ? <span>奥地利</span> : <span>Austria</span>} 
                </p>
              </div>
              <div className="six columns">
                <iframe src={googleMapSrc} frameborder="0" style={{border:0}} height="100%" width="100%" allowfullscreen></iframe>
              </div>
            </div>
            <Seperator />
            <div className="row align-center">
              {arriveByAir}
              <hr className="u-full-width mobile-only" />
              {arriveByTrain}
            </div>
            <div className="row align-center">
              {footnote}
            </div>
            <Seperator />
            <div className="row align-center">
              <img
                className="arrive-by-plane"
                src="/static/images/distance.png"
              />
            </div>
            <Seperator />
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Arrive;
