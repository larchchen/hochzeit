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
      stage: 0,
      mainGuestName: '',
      otherGuests: [],
      arrivalTime: 0
    };
    this.handleMainGuestNameChange = this.handleMainGuestNameChange.bind(this);
    this.handleOtherGuestNameChange = this.handleOtherGuestNameChange.bind(this);
    this.addGuest = this.addGuest.bind(this);
    this.removeGuest = this.removeGuest.bind(this);
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
          <label htmlFor="mainGuestName">Your name</label>
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
        <div className="row">
          <h5>When will you arrive at our wedding castle?</h5>
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="four columns">
            <input
              type="button"
              value="Morning, 5th Feb"
              className={this.state.arrivalTime === 3 ? "button-clicked" : undefined}
              onClick={(e) => this.setArrivalTime(1, e)}
            />
          </div>
          <div className="four columns">
            <input
              type="button"
              value="Afternoon, 5th Feb"
              className={this.state.arrivalTime === 2 ? "button-clicked" : undefined}
              onClick={(e) => this.setArrivalTime(2, e)}
            />
          </div>
          <div className="four columns">
            <input
              type="button"
              value="Morning, 6th Feb"
              className={this.state.arrivalTime === 1 ? "button-clicked" : undefined}
              onClick={(e) => this.setArrivalTime(3, e)}
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

  getHiddenForm() {
    let guestNames = this.state.otherGuests.filter((g) => g.length > 0).join();
    return (
      <form action="" method="post" style={{display: "none"}}>
        <input type="hidden" name="mainGuestName" value={this.state.mainGuestName} />
        <input type="hidden" name="otherGuestNames" value={guestNames} />
        <input type="hidden" name="arrivalTime" value={this.state.arrivalTime} />
        <input type="hidden" name="casualDinner" value={!!this.state.casualDinner} />
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
    return (
      <div className="container">
        <div className="row">
          <h1>Be our guest</h1>
        </div>
        <div className="row">
          <hr className="u-full-width" />
        </div>
        {guestNameRows}
        <SectionSeperator />
        {arrivalTimeRow}
        <SectionSeperator />
        {casualDinnerRow}
        {hiddenForm}
      </div>
    );
  }
}

module.exports = Questionaire;
