import React, {Component} from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'Hello world',
      newItem: '',
      items: []
    }
  }
  updateItem(item) {
   this.setState({
     newItem: item
   })
  }
  addItem() {
    const items = [...this.state.items]
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem
    }
    items.push(newItem)
    this.setState({
      items
    })
  }
  deleteItem(target) {
    let items = [...this.state.items]
    items = items.filter(item => item.id !== target)
    this.setState({
      items
    })
    console.log(items)
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <ul>
            {
              this.state.items.map(item => (
                <React.Fragment key={item.id}>
                  <li>{item.value}</li>
                  <button onClick={() => this.deleteItem(item.id)}>X</button>
                </React.Fragment>
                
              ))
            }
          </ul>  
          <input 
            type="text"
            placeholder="Enter new item"
            onChange={e => this.updateItem(e.target.value)}
          />
          <button onClick={() => this.addItem()}>Add Item</button>
        </div>
      </div>
    )
  }
  
}

export default App;
