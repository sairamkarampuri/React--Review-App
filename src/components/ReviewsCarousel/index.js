// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)

    this.state = {cardNo: 0}
  }

  onClickLeftArrow = () => {
    const {cardNo} = this.state
    if (cardNo > 0) {
      this.setState(prevState => ({cardNo: prevState.cardNo - 1}))
    }
  }

  onClickRightArrow = () => {
    const {cardNo} = this.state
    const {reviewsList} = this.props
    const listLength = reviewsList.length
    console.log(listLength)
    if (cardNo < listLength - 1)
      this.setState(prevState => ({cardNo: prevState.cardNo + 1}))
  }

  render() {
    const {reviewsList} = this.props
    const {cardNo} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="reviews-heading">Reviews</h1>
          <div className="carousal-container">
            <button
              className="button"
              type="button"
              data-testid="leftArrow"
              onClick={this.onClickLeftArrow}
            >
              <img
                className="arrow-img"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <ul className="person-details-container">
              <img
                className="profile-img"
                src={reviewsList[cardNo].imgUrl}
                alt={reviewsList[cardNo].username}
              />
              <p className="profile-name">{reviewsList[cardNo].username}</p>
              <p className="company-name">{reviewsList[cardNo].companyName}</p>
              <p className="description">{reviewsList[cardNo].description}</p>
            </ul>
            <button
              className="button"
              type="button"
              data-testid="rightArrow"
              onClick={this.onClickRightArrow}
            >
              <img
                className="arrow-img"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
