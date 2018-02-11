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
    let addNewGuestButton = (
      <div className="row">
        <div className="three columns">&nbsp;</div>
        <div className="six columns">
          <input
            type="button"
            value="With your +1?"
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
          <label className={(this.state.isErrorGuestName ? 'error' : '')} htmlFor="mainGuestName">Your name *</label>
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
            <div className="six columns"><label>Coming with you</label></div>
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
                value="With more?"
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
    return (
      <div>
        <div className={"row " + (this.state.isErrorArrivalTime ? 'error' : '')}>
          <h5>When will you arrive at our wedding castle? *</h5>
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="four columns">
            <input
              type="button"
              value="Morning, 9th Feb"
              className={this.state.arrivalTime === 3 ? "button-clicked" : undefined}
              onClick={(e) => this.setArrivalTime(3, e)}
            />
          </div>
          <div className="four columns">
            <input
              type="button"
              value="Afternoon, 9th Feb"
              className={this.state.arrivalTime === 2 ? "button-clicked" : undefined}
              onClick={(e) => this.setArrivalTime(2, e)}
            />
          </div>
          <div className="four columns">
            <input
              type="button"
              value="Morning, 10th Feb"
              className={this.state.arrivalTime === 1 ? "button-clicked" : undefined}
              onClick={(e) => this.setArrivalTime(1, e)}
            />
          </div>
        </div>
      </div>
    );
  }

  getCasualDinnerRow() {
    return (
      <div>
        <div className="row">
          <h5>Would you like to join our family dinner the evening before?</h5>
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="four columns">&nbsp;</div>
          <div className="two columns">
            <input
              type="button"
              value="Yes"
              className={this.state.casualDinner ? "button-clicked" : undefined}
              onClick={(e) => this.setCasualDinner(true, e)}
            />
          </div>
          <div className="two columns">
            <input
              type="button"
              value="No"
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
    return (
      <div>
        <div className={"row " + (this.state.isErrorAccommondation ? 'error' : '')}>
          <h5>Do you want us to arrange accommondation for you? *</h5>
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="four columns">&nbsp;</div>
          <div className="two columns">
            <input
              type="button"
              value="Yes"
              className={this.state.accommondation ? "button-clicked" : undefined}
              onClick={(e) => this.setAccommondation(true, e)}
            />
          </div>
          <div className="two columns">
            <input
              type="button"
              value="No"
              className={this.state.accommondation === false ? "button-clicked" : undefined}
              onClick={(e) => this.setAccommondation(false, e)}
            />
          </div>
          <div className="four columns">&nbsp;</div>
        </div>
        <div className="row footnote">
          We would arrange rooms in our wedding castle
          or partnered 4-star hotel, depending on availability.
          <br />
          Price ranges from &euro;210 to &euro;260 per double room per night.
        </div>
      </div>
    );
  }

  getGuestInterestsRow() {
    return (
      <div>
        <div className="row">
          <h5>Anything interests you?</h5>
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="six columns">
            <input
              type="button"
              value="Salzburg & Salt mine"
              className={this.hasGuestInterests('tour') ? "button-clicked" : undefined}
              onClick={(e) => this.toggleGuestInterests('tour', e)}
            />
          </div>
          <div className="six columns">
            <input
              type="button"
              value="Ski / Snowboarding"
              className={this.hasGuestInterests('ski') ? "button-clicked" : undefined}
              onClick={(e) => this.toggleGuestInterests('ski', e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <input
              type="button"
              value="Glacier hiking"
              className={this.hasGuestInterests('glacier') ? "button-clicked" : undefined}
              onClick={(e) => this.toggleGuestInterests('glacier', e)}
            />
          </div>
          <div className="six columns">
            <input
              type="button"
              value="Igloo building"
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
    return (
      <form action={url} method="post" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="two columns">&nbsp;</div>
          <div className="eight columns">
            <textarea
              className="u-full-width"
              name="specialNeed"
              rows="4"
              placeholder="Do you need any special arrangement?">
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
            <input type="submit" value="Be our guest"/>
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
