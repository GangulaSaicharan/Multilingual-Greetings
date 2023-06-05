import './App.css'
import {Component} from 'react'

import TabItem from './Components/TabItem'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTab: languageGreetingsList[0].id}

  renderImage = () => {
    const {activeTab} = this.state
    const item = languageGreetingsList.find(each => each.id === activeTab)
    return <img className="image" src={item.imageUrl} alt={item.imageAltText} />
  }

  changeTabItem = id => {
    this.setState({activeTab: id})
  }

  render() {
    return (
      <div className="app-container">
        <h1>Multilingual Greetings</h1>
        <ul className="list">
          {languageGreetingsList.map(each => (
            <TabItem
              tabDetails={each}
              key={each.id}
              changeTabItem={this.changeTabItem}
            />
          ))}
        </ul>
        {this.renderImage()}
      </div>
    )
  }
}

export default App
