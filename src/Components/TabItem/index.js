import './index.css'

const TabItem = props => {
  const {tabDetails, changeTabItem} = props
  const {buttonText, id} = tabDetails

  const onClickTabItem = () => {
    changeTabItem(id)
  }
  return (
    <li>
      <button onClick={onClickTabItem} type="button">
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
