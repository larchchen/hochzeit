var React = require('react');
var ReactDOM = require('react-dom');
var WrapperLayout = require('./layouts/wrapperLayout');
var Seperator = require('./seperator');

class Intro extends React.Component {
  prepare() {
    if (this.props.lang === 'cn') {
      return (
        <div className="one-half column">
          其实，我们一年多前已经是合法夫妻啦！<br />
          所以，这场婚礼我们只邀请了我们生命中最重要的人。<br />
          当然，我们也非常欢迎你生命中最重要的人。<br />
          而且，如果你能早一天来，我们还会安排超级有趣的活动。<br /> 
          但是，请务必着礼服出席。<br />
          <a target="_blank" href="/prepare/en">
            了解该如何准备你的行李。
          </a>
        </div>
      );
    }
    return (
      <div className="one-half column">
        Yes, we're already legally registered one year ago, secretly.<br />
        Yes, this wedding is for the closest families and friends only.<br />
        Yes, your beloved one(s) are welcomed as well.<br />
        Yes, there will be a lot of fun and even more if you arrive earlier.<br /> 
        Yes, semi-formal attire is expected.<br />
        <a target="_blank" href="/prepare/en">
          Yes, please read this to prepare your trip.
        </a>
      </div>
    );
  }

  direction() {
    if (this.props.lang === 'cn') {
      return (
        <div className="one-half column">
          当然，新娘和新郎没人会逃婚啦！<br />
          所以，婚礼只会举办这一次了。<br />
          但是，我们不会接受任何形式的礼物或礼金。<br />
          如果，你能负担一下自己的住宿费用，我们会很感激的。<br />
          另外，到达婚礼的地点可能需要一些周折。<br />
          <a target="_blank" href="/schloss/en">
            了解如何前来我们的婚礼。  
          </a>
          <br />
        </div>
      );
    }
    return (
      <div className="one-half column">
        No, we will not host more weddings in any other places.<br />
        No, neither the bride nor the groom will run away from the wedding.<br />
        No, we will not accept any gifts in any form, although we would appreciate if you could pay for your accommondation.<br />
        No, there is no direct access to the premise.<br /> 
        <a target="_blank" href="/schloss/en">
          No, you need to read this to get there.
        </a>
        <br />
      </div>
    );
  }
  register() {
    if (this.props.lang === 'cn') {
      return (
        <div className="one-half column">
          注意，如果你计划来参加我们的婚礼，请务必告诉我们！<br />
          而且，截止日期是2018年7月1日。<br />
          当然，我们还是非常欢迎你的到来，如果你忘记了通知我们。<br />
          但是，我们可能就无法为你安排住宿，接机或者各种活动。<br />
          另外，如果你的计划发生了任何变化，也请及时通知我们。<br />
        <a target="_blank" href="/beOurGuest/cn">
            现在就告诉我们你的计划。  
          </a>
          <br />
        </div>
      );
    }
    return (
      <div className="one-half column">
        Yes, we need your confirmation as early as possible.<br />
        Yes, the deadline is July 1, 2018.<br />
        Yes, you are still welcomed if you miss the dealine, but we won't be able to guarantee your accommondation any more.<br />
        Yes, please inform us immediately if anything changes.<br />
        <a target="_blank" href="/beOurGuest/en">
          Yes, please fill this questionnaire to help with our arrangement.
        </a>
      </div>
    );

  }

  render() {
    let prepare = this.prepare();
    let direction = this.direction();
    let register = this.register();
    return (
      <WrapperLayout title={this.props.title}>
        <div className="container">
          <div className="row align-center">
            {this.props.lang === 'cn' ? (
              <h1>我们结婚啦</h1>
            ) : (
              <h1>Yes, we're married</h1>
            )}
          </div>
          <Seperator />
          <div className="row intro reverse-in-mobile">
            {prepare}
            <div className="one-half column image">
              <img src="/static/images/hand-in-hand.jpg" />
            </div>
          </div>
          <Seperator />
          <div className="row intro">
            <div className="one-half column image">
              <img src="/static/images/hug.jpg" />
            </div>
            {direction}
          </div>
          <Seperator />
          <div className="row intro reverse-in-mobile">
            {register}
            <div className="one-half column image">
              <img src="/static/images/wall.jpg" />
            </div>
          </div>
          <Seperator />
        </div>
      </WrapperLayout>
    );
  }
}

module.exports = Intro;
