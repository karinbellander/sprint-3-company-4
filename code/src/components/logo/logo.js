import React from "react"
import "./logo.css"

class Logo extends React.Component {
  render() {
    return (

      <div className="logo-container">

        <div className="logo">
          <img src="./images/homebound_logo_green.svg" alt="logo" />
        </div>

        <div className="symbol">
          <img src="./images/huslogogreen.png" alt="symbol for productcategory" />
        </div>
      </div>

    )
  }
}

export default Logo
