//Github Pages LINK === https://usheninte.github.io/react-ajax/fetch.html

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  //componentDidMount() - this is a key Lifecycle method
  //most common use case: starting AJAX calls to load data for your component
  //can call setState

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
    /* .then(function(response) {
      return response.json()
    }) */
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        items: responseData.results
      });
    })
    .catch(error => {
      console.log('Fetching and parsing data error', error);
    })
  }
  
  render() {
    let items = this.state.items;
    console.log(items);
    return(
      <div>
        {items.map(function(star) {
          return <p key={star.name}><b>{star.name}</b> has an eye colour of: <b>{star.eye_color}</b></p>;
        })}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App />
    <br /><br /><br />
    <h3><a href="https://github.com/Usheninte/react-ajax">View on Github</a></h3>
  </div>,
  document.getElementById("app")
);