function Look(props) {
  if (!props.see) {
    return null; }
  
  return (
    <div>
    <input type="text" value="text"></input>
    <input type="number"value="number"></input>
    </div> );
}

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isstate: true}
    this.toClick = this.toClick.bind(this);
  }

  toClick() {
    this.setState(prev=>({isstate: !prev.isstate}));
  }
  
  render() {
    return (
      <div>
        <Look see={this.state.isstate} />
        <button onClick={this.toClick}>
          {this.state.isstate ?'Button':'button'}
        </button>
      </div>
    );
  }
}
const root =ReactDOM.createRoot(document.getElementById('root')); 
root.render(<State/>);
