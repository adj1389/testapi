import React from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      item: [],
      isLoaded: false,
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res =>{
    return res.json();//making sure
})
.them(data =>{
 console.log("This is line 18 in App.js", data)
    this.setState({
      item: data,
      isLoaded: true,
    })
  })
}


render(){
  var{item, isLoaded} = this.state;
  return(
    <div className+"App">
      <div className="Names">
        <ul>
        {items.map(el =>){
          return(
            <li key={el.id}>
            Name:{el.name} | UserName: {el.username} |
            <a href={"https://" + el.website}>Website<a/>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
   );
  }
}

export default App;
