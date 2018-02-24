var React = require('react');
var DefaultLayout = require('./layouts/defaultLayout');
var Seperator = require('./seperator');
var AWS = require('aws-sdk');

AWS.config.update({region: 'eu-west-1'});

class CoverPage extends React.Component {
  componentWillMount() {
    let validated = this.validate();
    if (validated) {
      let output = JSON.stringify(this.props.data, null, 2);
      let params = {
        Destination: {
          ToAddresses: ['larch.lin.chen@gmail.com']
        },
        Message: {
          Body: {
            Html: {
             Charset: "UTF-8",
             Data: output
            },
            Text: {
             Charset: "UTF-8",
             Data: output
            }
           },
           Subject: {
            Charset: 'UTF-8',
            Data: '[Hochzeit] Guests registered.'
           }
          },
        Source: 'larch.lin.chen@gmail.com',
      };
      let sendPromise = new AWS.SES({apiVersion: '2017-12-01'}).sendEmail(params).promise();
      sendPromise.then((data) => {
        console.log("Email sent.");
        console.log(output);
      }).catch((err) => {
        console.error(err, err.stack);
        console.log("Email detained.");
        console.log(output);
      });
    }
    this.setState({validated: validated});
  }

  validate() {
    let data = this.props.data;
    if (!!!data.mainGuestName) {
      return false;
    }
    let arrivalTime = parseInt(data.arrivalTime);
    if (!Number.isInteger(arrivalTime) || isNaN(arrivalTime)) {
      return false;
    }
    if (arrivalTime < 1 || arrivalTime > 3) {
      console.log('arrival time');
      return false;
    }
    if (data.accommondation !== 'true' && data.accommondation !== 'false') {
      return false;
    }
    return true;
  }

  renderData () {
    if (!this.state.validated) {
      return (
        <div className="container">
          <div className="row"><h1>Naughty you.</h1></div>
        </div>
      );
    }
    let data = this.props.data;
    let accommondation = (
      <div className="row">{
        this.props.lang === 'cn' ? (
          <span>您希望我们为您安排住宿。</span>
        ) : (
          <span>You would like us to arrange accommondation.</span>
        )
      }</div>
    );
    if (data.accommondation === 'false') {
      accommondation = (
        <div className="row">{
          this.props.lang === 'cn' ? (
            <span>您将自己安排住宿。</span>
          ) : (
            <span>You will book your stay by yourself.</span>
          )
        }</div>
      );
    }
    let arrivalTime = null;
    switch (data.arrivalTime) {
      case '1':
        arrivalTime = (
          <div className="row">{
            this.props.lang === 'cn' ? (
              <span>您将在2月10日上午抵达。</span>
            ) : (
              <span>You will arrive in the morning of Feb 10th.</span>
            )
          }</div>
        );
        break;
      case '2':
        arrivalTime = (
          <div className="row">{
            this.props.lang === 'cn' ? (
              <span>您将在2月9日下午抵达。</span>
            ) : (
              <span>You will arrive in the afternoon of Feb 9th.</span>
            )
          }</div>
        );
        break;
      case '3':
        arrivalTime = (
          <div className="row">{
            this.props.lang === 'cn' ? (
              <span>您将在2月9日上午抵达。</span>
            ) : (
              <span>You will arrive in the morning of Feb 9th.</span>
            )
          }</div>
        );
        break;
    }
    let casualDinner = null;
    if (data.casualDinner === 'true') {
      casualDinner = (
        <div className="row">{
          this.props.lang === 'cn' ? (
            <span>您愿意2月9日晚上和我们一起晚餐。</span>
          ) : (
            <span>You would like to have dinner with us in the evening of Feb 9th.</span>
          )
        }</div>
      );
    }
    let activity_dict = {
      'tour': 'Salzburg & Salt mine',
      'ski': 'Ski/Snowboarding',
      'glacier': 'Glacier hiking',
      'igloo': 'Igloo building',
    };
    if (this.props.lang === 'cn') {
      activity_dict = {
        'tour': '游览萨尔斯堡和盐矿',
        'ski': '滑雪',
        'glacier': '冰川徒步',
        'igloo': '建雪屋',
      };
    }
    let activities = null;
    if (data.guestInterests) {
      let guestInterests = data.guestInterests.split(',');
      let fullInterests = guestInterests.map(function(i) {
        if(activity_dict[i]) {
          return activity_dict[i];
        }
      }).join(',');
      if (this.props.lang === 'cn') {
        activities = (
          <div className="row">
            您对{fullInterests}感兴趣。
          </div>
        );
      } else {
        activities = (
          <div className="row">
            You are interested in: {fullInterests}.
          </div>
        );
      }
    }

    let special = null;
    if (data.specialNeed) {
      special = (
        <div className="row" dangerouslySetInnerHTML={{__html: data.specialNeed}} />
      );
    }

    let guest = (<div className="row">{
      this.props.lang === 'cn' ? (
        <span>您将独自前来。</span>
      ) : (
        <span>You will not bring other guests.</span>
      )
    }</div>);
    if (data.otherGuestNames) {
      let guests = null;
      let html = null;
      if (this.props.lang === 'cn') {
        guests = data.otherGuestNames.split().join('，');
        html = "您将与"+guests+"一同前来";
      } else {
        guests = data.otherGuestNames.split().join(',');
        html = "You will come with "+guests+".";
      }
      guest = <div className="row" dangerouslySetInnerHTML={{__html: html}}/>
    }

    return (
      <div className="container">
        {this.props.lang === 'cn' ? (
          <div className="row"><h1>保持联系</h1></div>
        ) : (
          <div className="row"><h1>Keep in touch</h1></div>
        )}
        <Seperator />
        {this.props.lang === 'cn' ? (
          <div className="row">
            我们非常期待在婚礼上见到您！
          </div>
        ) : (
          <div className="row">
            We are so glad that you can come to our wedding.
          </div>
        )}
        <div className="row">&nbsp;</div>
        {this.props.lang === 'cn' ? (
          <div className="row">
            您刚刚告诉我们：
          </div>
        ) : (
          <div className="row">
            You told us that:
          </div>
        )}
        {guest}
        {arrivalTime}
        {accommondation}
        {casualDinner}
        {activities}
        {special}
        <div className="row">&nbsp;</div>
        {this.props.lang === 'cn' ? (
          <div className="row">如果您的计划有任何变化请及时通知我们。</div>
        ) : (
          <div className="row">Please inform us if anything changes.</div>
        )}
      </div>
    );
  }

  render() {
    let data = this.renderData();
    return (
      <DefaultLayout title={this.props.title}>
        <div id="touch-photo-wrapper"></div>
        <div className="touch-container">
          {data}
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = CoverPage;
