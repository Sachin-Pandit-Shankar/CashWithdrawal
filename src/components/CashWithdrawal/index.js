// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {total: 2000}

  balanceDeduction = value => {
    this.setState(prevState => ({
      total: prevState.total - value,
    }))
  }

  render() {
    const {total} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const slice = name.slice(0, 1)
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-card">
            <div className="profile-letter">
              <p>{slice}</p>
            </div>
            <h1 className="profile-name">{name}</h1>
          </div>
          <div className="balance-card">
            <p className="balance-text">Your balance</p>
            <div>
              <p className="total-card">{total}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <div className="withdrawal-card">
            <p className="withdrawal-text">Withdrawal</p>
            <p className="Describe">CHOOSE SUM (IN RUPEES)</p>
            <div>
              <ul className="card-button">
                {denominationsList.map(eachValue => (
                  <DenominationItem
                    denominationsList={eachValue}
                    key={eachValue.id}
                    balanceDeduction={this.balanceDeduction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
