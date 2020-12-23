import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            To be added
          </p>

          {close}
        </article>

        <article
          id="product"
          className={`${this.props.article === 'product' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">product</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h3>
            Automated Customer Onboarding
          </h3>
          <p>
            Easy, all digital sign-up process. Accessible from any device.     
         </p>

         <h3>
            Easy Client Billing
         </h3>
          <p>
            Billing can be done on a flat-fee basis or with a breakpoint tier system you customize. You define the billing cycle and the rate, wealthbot takes care of the rest.
          </p>

          <h3>
            Flexible Portfolio Models
          </h3>
          <p>
            We can provide access to the entire investment universe of securities. Link to any asset class and build as many models as your heart desires. Each model can be tied to it's own risk assessment number.
          </p>
            
          <h3>
            Customizable Risk Questionnaire
          </h3>
          <p>
            Ask the questions that make your clients talk. Understand your clients and build your own risk assessment.
          </p>

          <h3>
            Automated Rebalancer
          </h3>
          <p>
            Generate and sends rebalancing trade orders to your custodian based on an asset class's tolerance bands, a set rebalancing schedule or both.
          </p>

          <h3>
            Bank Level Security
          </h3>
          <p>
            Wealthbot uses the same 128-bit encryption and physical security as banks. Plus, clients’ assets reside with your custodian and are never directly touched by your system.  
          </p>

          <h3>
            Tax-Optimized Portfolio Management
          </h3>
          <p>
            Harvest losses to offset taxes on both gains and income, enable municipal bond substitutions, and automatically identify and avoid wash sales.
          </p>

          <h3>
            Automated Document Flow
          </h3>
          <p>
            Save time and trees by on-boarding your clients without paper using our DocuSign integration.
          </p>
          {close}
        </article>

        <article
          id="download"
          className={`${this.props.article === 'download' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Download</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <h2>
            Three Easy Steps
          </h2>

          <h3>
            <a href="https://github.com/wealthbot-io/wealthbot">Step 1</a>
          </h3>
          <p>
            Click this step to go to our Github Repository!
          </p>

          <h3>
            Step 2
          </h3>
          <p>
            Follow the instructions in our ReadMe file.
          </p>

          <h3>
            Step 3
          </h3>
          <p>
            Enjoy Wealthbot, as you just unlocked your own wealth management system.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form name="contact" method="POST" data-netlify="true">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/wealthbot"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/wealthbotofficial/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/wealthbot-io/wealthbot" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/wealthbot-io/wealthbot"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
