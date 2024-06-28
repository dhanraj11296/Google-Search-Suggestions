import './index.css'
const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails
  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="suggestionItem">
      <p className="suggestionText">{suggestion}</p>
      <button type="button" className="arrowButton" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
