// import React from "react"
// import { Link } from "react-router-dom"
// import Game from "../../components/Game/Game"
// import SubmitButton from "../../components/SubmitButton/SubmitButton"
// import ForkImageComponent from "../../components/ForkImageComponent/ForkImageComponent"
// import Layout from "../../components/Layout"

// export default class GamePage extends React.Component {
//   getLevelTime = () => {
//     const currentLevel = this.props.location.query.level
//     if (currentLevel === "easy") return 6
//     else if (currentLevel === "hard") return 8
//   }
//   getCardNumbers = () => {
//     const currentLevel = this.props.location.query.level
//     if (currentLevel === "easy") return 6
//     else if (currentLevel === "hard") return 8
//   }
//   render() {
//     const timeLevel = this.getLevelTime()
//     const cardNumbers = this.getCardNumbers()
//     return (
//       <Layout>
//         <ForkImageComponent />
//         <Game timeLevel={timeLevel} cardNumbers={cardNumbers} />
//         <div className="quitGame">
//           <Link to="/pick-level-page">
//             <SubmitButton buttonTitle="Quit Game" />
//           </Link>
//         </div>
//       </Layout>
//     )
//   }
// }

import React from "react"
import { Link } from "react-router-dom"
import Game from "../../components/Game/Game"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import ForkImageComponent from "../../components/ForkImageComponent/ForkImageComponent"
import Layout from "../../components/Layout"

export default class GamePage extends React.Component {
  getLevelTime = () => {
    const currentLevel = this.props.location.query.level
    if (currentLevel === "easy") return 6
    else if (currentLevel === "hard") return 8
  }
  getCardNumbers = () => {
    const currentLevel = this.props.location.query.level
    if (currentLevel === "easy") return 6
    else if (currentLevel === "hard") return 8
  }
  state = {
    currentLevel: this.props.location.search && this.props.location.search,
  }
  render() {
    const timeLevel = this.getLevelTime()
    const cardNumbers = this.getCardNumbers()
    const { currentLevel } = this.state
    return (
      <Layout>
        <ForkImageComponent />
        <Game
          timeLevel={timeLevel}
          cardNumbers={cardNumbers}
          currentLevel={currentLevel}
        />
        <div className="quitGame">
          <Link to="/pick-level-page">
            <SubmitButton buttonTitle="Quit Game" />
          </Link>
        </div>
      </Layout>
    )
  }
}
