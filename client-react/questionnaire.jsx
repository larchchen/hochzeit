var React = require('react');

class SectionSeperator extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="one column">&nbsp;</div>
        <div className="ten columns"><hr className="u-full-width" /></div>
        <div className="one column">&nbsp;</div>
      </div>
    );
  }
}

class Questionaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainGuestName: '',
      otherGuests: [],
      arrivalTime: 0,
      guestInterests: []
    };
    this.handleMainGuestNameChange = this.handleMainGuestNameChange.bind(this);
    this.handleOtherGuestNameChange = this.handleOtherGuestNameChange.bind(this);
    this.addGuest = this.addGuest.bind(this);
    this.removeGuest = this.removeGuest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMainGuestNameChange(event) {
    this.setState({mainGuestName: event.target.value});
  }
  
  handleOtherGuestNameChange(index, event) {
    let otherGuests = [...this.state.otherGuests];
    otherGuests.splice(
      index, 1, event.target.value
    );
    this.setState({otherGuests: otherGuests});
  }

  addGuest(event) {
    let otherGuests = [...this.state.otherGuests, ''];
    this.setState({otherGuests: otherGuests});
  }

  removeGuest(index, event) {
    let otherGuests = [...this.state.otherGuests];
    otherGuests.splice(index, 1);
    this.setState({otherGuests: otherGuests});
  }

  setArrivalTime(option, event) {
    this.setState({arrivalTime: option});
  }

  setCasualDinner(option, event) {
    this.setState({casualDinner: option});
  }

  setAccommondation(option, event) {
    this.setState({accommondation: option});
  }

  toggleGuestInterests(option, event) {
    let guestInterests = [...this.state.guestInterests];
    let index = guestInterests.indexOf(option);
    if (index < 0) {
      guestInterests.push(option);
    } else {
      guestInterests.splice(index, 1);
    }
    this.setState({guestInterests: guestInterests});
  }

  hasGuestInterests(option) {
    return this.state.guestInterests.indexOf(option) >= 0;
  }

  handleSubmit(e) {
    let hasError = false;
    e.preventDefault();
    if (this.state.accommondation === undefined) {
      hasError = true;
      this.setState({isErrorAccommondation: true});
    }
    if (!Number.isInteger(this.state.arrivalTime) || this.state.arrivalTime < 1 || this.state.arrivalTime > 3) {
      hasError = true;
      this.setState({isErrorArrivalTime: true});
    }
    if (!!!this.state.mainGuestName) {
      hasError = true;
      this.setState({isErrorGuestName: true});
    }
    if (!hasError) {
      e.target.submit();
    }
  }

  getGuestNameRows() {
    let mainTitle = "Your name";
    let guestButton = "With your +1?";
    let otherTitle = "Coming with you";
    let moreGuest = "With more?";
    if (this.props.lang === 'cn') {
      mainTitle = "您的姓名";
      guestButton = "携客出席？";
      otherTitle = "同行宾客";
      moreGuest = "更多";
    }
    let addNewGuestButton = (
      <div className="row">
        <div className="three columns">&nbsp;</div>
        <div className="six columns">
          <input
            type="button"
            value={guestButton}
            onClick={this.addGuest}
          />
        </div>
        <div className="three columns">&nbsp;</div>
      </div>
    );
    let mainGuestRow = (
      <div className="row">
        <div className="three columns">&nbsp;</div>
        <div className="six columns">
          <label className={(this.state.isErrorGuestName ? 'error' : '')} htmlFor="mainGuestName">{mainTitle} *</label>
          <input
            className="u-full-width"
            type="text"
            id="mainGuestName"
            value={this.state.mainGuestName}
            onChange={this.handleMainGuestNameChange}
          />
        </div>
        <div className="three columns">&nbsp;</div>
      </div>
    );
    let otherGuestRows = addNewGuestButton;
    if (this.state.otherGuests.length > 0) {
      otherGuestRows = (
        <div>
          <div className="row">
            <div className="three columns">&nbsp;</div>
            <div className="six columns"><label>{otherTitle}</label></div>
            <div className="three columns">&nbsp;</div>
          </div>
          {this.state.otherGuests.map(
            (guest, i) =>
              <div className="row" key={"guest-" + i}>
                <div className="three columns">&nbsp;</div>
                <div className="six columns">
                  <input
                    className="u-full-width"
                    type="text"
                    value={guest}
                    onChange={(e) => this.handleOtherGuestNameChange(i, e)}
                  />
                </div>
                <div className="one column">
                  <i
                    className="material-icons icon-remove-guest"
                    onClick={(e) => this.removeGuest(i, e)}
                  >
                    remove_circle_outline
                  </i>
                </div>
                <div className="two columns">&nbsp;</div>
              </div>
            )
          }
          <div className="row">
            <div className="three columns">&nbsp;</div>
            <div className="six columns">
              <input
                type="button"
                value={moreGuest}
                onClick={this.addGuest}
              />
            </div>
            <div className="three columns">&nbsp;</div>
          </div>
        </div>
      );
    }
    return (
      <div>
        {mainGuestRow}
        {otherGuestRows}
      </div>
    );
  }

  getArrivalTimeRow() {
    let title = "When will you arrive at our wedding castle?";
    let option1 = "Morning, 9th Feb";
    let option2 = "Afternoon, 9th Feb";
    let option3 = "Morning, 10th Feb";
    if (this.props.lang === 'cn') {
      title = "您预订的到达时间？";
      option1 = "2月9日上午";
      option2 = "2月9日下午";
      option3 = "2月10日上午";
    }
    return (
      <div>
        <div className={"row " + (this.state.isErrorArrivalTime ? 'error' : '')}>
          <h5>{title} *</h5>
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="four columns">
            <input
              type="button"
              value={option1}
              className={this.state.arrivalTime === 3 ? "button-clicked" : undefined}
              onClick={(e) => this.setArrivalTime(3, e)}
            />
          </div>
          <div className="four columns">
            <input
              type="button"
              value={option2}
              className={this.state.arrivalTime === 2 ? "button-clicked" : undefined}
              onClick={(e) => this.setArrivalTime(2, e)}
            />
          </div>
          <div className="four columns">
            <input
              type="button"
              value={option3}
              className={this.state.arrivalTime === 1 ? "button-clicked" : undefined}
              onClick={(e) => this.setArrivalTime(1, e)}
            />
          </div>
        </div>
      </div>
    );
  }

  getCasualDinnerRow() {
    let title = "Would you like to join our family dinner the evening before?";
    let yes = "Yes";
    let no = "No";
    if (this.props.lang === 'cn') {
      title = "您是否愿意加入我们婚礼前夜的家庭聚餐？";
      yes = "当然了";
      no = "不用了";
    }
    return (
      <div>
        <div className="row">
          <h5>{title}</h5>
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="four columns">&nbsp;</div>
          <div className="two columns">
            <input
              type="button"
              value={yes}
              className={this.state.casualDinner ? "button-clicked" : undefined}
              onClick={(e) => this.setCasualDinner(true, e)}
            />
          </div>
          <div className="two columns">
            <input
              type="button"
              value={no}
              className={this.state.casualDinner === false ? "button-clicked" : undefined}
              onClick={(e) => this.setCasualDinner(false, e)}
            />
          </div>
          <div className="four columns">&nbsp;</div>
        </div>
      </div>
    );
  }

  getAccommondationRow() {
    let title = "Do you want us to arrange accommondation for you?";
    let yes = "Yes";
    let no = "No";
    let footnote1 = "We would arrange rooms in our wedding castle or partnered 4-star hotel, depending on availability.";
    let footnote2 = "Price ranges from &euro;210 to &euro;260 per double room per night.";
    if (this.props.lang === 'cn') {
      title = "您是否需要我们安排住宿？";
      yes = "当然了";
      no = "不用了";
      footnote1 = "我们可以根据情况为您安排我们婚礼城堡中或者合作4星酒店的房间，";
      footnote2 = "双人间价格在每晚210欧到260欧左右。";
    }
    return (
      <div>
        <div className={"row " + (this.state.isErrorAccommondation ? 'error' : '')}>
          <h5>{title} *</h5>
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="four columns">&nbsp;</div>
          <div className="two columns">
            <input
              type="button"
              value={yes}
              className={this.state.accommondation ? "button-clicked" : undefined}
              onClick={(e) => this.setAccommondation(true, e)}
            />
          </div>
          <div className="two columns">
            <input
              type="button"
              value={no}
              className={this.state.accommondation === false ? "button-clicked" : undefined}
              onClick={(e) => this.setAccommondation(false, e)}
            />
          </div>
          <div className="four columns">&nbsp;</div>
        </div>
        <div className="row footnote">
          {footnote1}<br />{footnote2}
        </div>
      </div>
    );
  }

  getGuestInterestsRow() {
    let title = "Anything interests you?";
    let tour = "Salzburg & Salt mine";
    let ski = "Ski / Snowboarding";
    let glacier = "Glacier hiking";
    let igloo = "Igloo building";
    if (this.props.lang === "cn") {
      title = "感兴趣的活动？";
      tour = "游览萨尔斯堡和盐矿";
      ski = "滑雪";
      glacier = "冰川徒步";
      igloo = "建雪屋";
    }
    return (
      <div>
        <div className="row">
          <h5>{title}</h5>
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="six columns">
            <input
              type="button"
              value={tour}
              className={this.hasGuestInterests('tour') ? "button-clicked" : undefined}
              onClick={(e) => this.toggleGuestInterests('tour', e)}
            />
          </div>
          <div className="six columns">
            <input
              type="button"
              value={ski}
              className={this.hasGuestInterests('ski') ? "button-clicked" : undefined}
              onClick={(e) => this.toggleGuestInterests('ski', e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <input
              type="button"
              value={glacier}
              className={this.hasGuestInterests('glacier') ? "button-clicked" : undefined}
              onClick={(e) => this.toggleGuestInterests('glacier', e)}
            />
          </div>
          <div className="six columns">
            <input
              type="button"
              value={igloo}
              className={this.hasGuestInterests('igloo') ? "button-clicked" : undefined}
              onClick={(e) => this.toggleGuestInterests('igloo', e)}
            />
          </div>
        </div>
      </div>
    );
  }

  getHiddenForm() {
    let guestNames = this.state.otherGuests.filter((g) => g.length > 0).join(',');
    let guestInterests = this.state.guestInterests.join(',');
    let url = "/keepInTouch/" + this.props.lang;
    let error = null;
    if (this.state.isErrorGuestName || this.state.isErrorAccommondation || this.state.isErrorArrivalTime) {
      error = <div style={{padding: "20px 0"}} className="row error">Please provide more information.</div>
    }
    let placeholder = "Do you need any special arrangement?";
    if (this.props.lang === 'cn') {
      placeholder = "需要特殊安排？";
    }
    let button = "Be our guest";
    if (this.props.lang === 'cn') {
      button = "好了";
    }
    return (
      <form action={url} method="post" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="two columns">&nbsp;</div>
          <div className="eight columns">
            <textarea
              className="u-full-width"
              name="specialNeed"
              rows="4"
              placeholder={placeholder}>
            </textarea>
          </div>
          <div className="two columns">&nbsp;</div>
        </div>
        {error}
        <div className="row">
            <input type="hidden" name="mainGuestName" value={this.state.mainGuestName} />
            <input type="hidden" name="otherGuestNames" value={guestNames} />
            <input type="hidden" name="arrivalTime" value={this.state.arrivalTime} />
            <input type="hidden" name="casualDinner" value={!!this.state.casualDinner} />
            <input type="hidden" name="accommondation" value={!!this.state.accommondation} />
            <input type="hidden" name="guestInterests" value={guestInterests} />
            <input type="submit" value={button}/>
        </div>
      </form>
    );
  }

  render() {
    let hiddenForm = this.getHiddenForm();
    let guestNameRows = this.getGuestNameRows();
    let arrivalTimeRow = this.getArrivalTimeRow();
    let casualDinnerRow = null;
    if (this.state.arrivalTime > 1) {
      casualDinnerRow = <div>{this.getCasualDinnerRow()}<SectionSeperator /></div>;
    }
    let accommodationRow = this.getAccommondationRow();
    let guestInterestsRow = this.getGuestInterestsRow();
    return (
      <div className="container">
        <div className="row">
          {this.props.lang === 'cn' ? (
            <h1>敬请惠临</h1>
          ) : (
            <h1>Be our guest</h1>
          )}
        </div>
        <div className="row">
          <hr className="u-full-width" />
        </div>
        {guestNameRows}
        <SectionSeperator />
        {arrivalTimeRow}
        <SectionSeperator />
        {casualDinnerRow}
        {accommodationRow}
        <SectionSeperator />
        {guestInterestsRow}
        <SectionSeperator />
        {hiddenForm}
      </div>
    );
  }
}

module.exports = Questionaire;
