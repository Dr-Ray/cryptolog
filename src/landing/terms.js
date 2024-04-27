import React from 'react'
import { Link } from 'react-router-dom'

const TermsLanding = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6 className="d-none">Breadcrumb</h6>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className="py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-0 gx-md-5 gx-lg-5">
              <div className="col-12 col-md-12 col-lg-12 mb-md-2 mb-lg-4">
                <h1 className="fw-bold text-center">Our <span className="text-highlight">Legal Docs</span></h1>
              </div>

            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                <div className="card">
                  <div className="card-body p-3 p-md-5">
                    <h2 className="fw-bold">Terms & Agreement</h2>
                    <p>Please read these terms and conditions carefully. By accessing this site and any pages thereof, you agree to be bound by the terms and conditions below. If you do not agree to the terms and conditions below, do not access this site, or any pages thereof.</p>
                    <div className="accordion accordion-style-5 mt-4" id="sampleFive">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#a5One" aria-expanded="true">
                            Use of Information and Materials
                          </button>
                        </h2>
                        <div id="a5One" className="accordion-collapse collapse show" data-bs-parent="#sampleFive">
                          <div className="accordion-body">
                            <p>The information and materials contained in these pages, and the terms, conditions, and descriptions that appear, are subject to change. Unauthorized use of SignalBlaze' web sites and systems including but not limited to unauthorized entry into SignalBlaze' systems, misuse of passwords, or misuse of any information posted on a site is strictly prohibited. Not all products and services are available in all geographic areas. </p>

                            <p>Your eligibility for particular products and services is subject to final determination by SignalBlaze and/or its affiliates. Copyright and Trademark. Copyright in the pages and in the screens displaying the pages, and in the information and material therein and in their arrangement, is owned by SignalBlaze unless otherwise indicated. SignalBlaze, LTD and the SignalBlaze are trademarks and service marks of SignalBlaze and are used and/or registered throughout the world. SignalBlaze, Ltd and their subsidiaries also claim rights in certain other trademarks and service marks contained in these web pages.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a5Two" aria-expanded="false">
                            CUSTOMER TRADING AGREEMENT
                          </button>
                        </h2>
                        <div id="a5Two" className="accordion-collapse collapse" data-bs-parent="#sampleFive">
                          <div className="accordion-body">
                            <p>This Client Trading Agreement"Agreement" is between SignalBlaze Limited and its affiliates, operator of the brand name SignalBlaze (hereinafter: "SignalBlaze")
                              and any end user “Client” each a "Party" and together, the "Parties" and applies to any dealings between them. This Agreement incorporates by reference any
                              additional appendices, including but limited to the Risk Disclosure and Declaration of Beneficial Ownership.</p>

                            <p><b><i>Generally, you will be required to upgrade your live trading account from Dynamic to a classNameical Account before your profit can be pulled out of your Live Trading Account!</i></b></p>

                            <p>1. General Services Rule: Client may enter into transactions with SignalBlaze, in connection with spot and forward foreign currency contracts,
                              foreign currencies swap transactions, and such other transactions as SignalBlaze may from time to time make available (the “Services”).</p>
                            <p>2. Margin: The Services may involve margined transactions, requiring Client to deposit cash to secure its obligations under this Agreement (“Security Margin”).</p>
                            <p>3. Direct Relationship: Unless otherwise agreed in writing, SignalBlaze and Client each enter into this Agreement as principal and SignalBlaze will not accept an
                              undisclosed/unapproved principal acting through Client. With regard to such a principal, Client agrees to provide SignalBlaze with its identity, personal information,
                              and other information that SignalBlaze may seek.</p>
                            <p>4. No Recommendation or Solicitation: SignalBlaze does not recommend, solicit, offer, advise, suggest, concur on the merits of, or otherwise provide any opinion
                              whether to buy or sell any currency or to engage in any other transaction. Neither the availability of the Services nor any communication by anyone associated
                              with SignalBlaze should be construed in this manner.</p>
                            <p>5. Errors: Quotations provided by SignalBlaze, via third parties or otherwise, may be incorrect for any reason. Following a transaction involving such quotation
                              errors, SignalBlaze in its discretion reserves the right to correct the affected account balance. Any dispute arising from such errors or corrections will be
                              resolved on the basis of the fair market value of the relevant currency at the time of the error.</p>
                            <p>6. Market Fluctuations: Client acknowledges that the market for currency is subject to sudden changes due news events and other announcements, acts of war or
                              terrorism, power failures, strikes or civil commotions, business trends, political developments, fluctuations in other financial and commodity markets, and other
                              factors beyond SignalBlaze' control. SignalBlaze may determine in its sole discretion that an emergency or exceptional market condition exists, in which case it
                              reserves the right to impose trading limits or special terms, cancel or suspend any transaction, or close an account.</p>
                            <p>7. Availability: This site is not intended for distribution to, or use by, any person or entity in any jurisdiction or country where such distribution or use would be contrary to local law or regulation.</p>
                            <p>8. Trading Indices: The Client hereby acknowledge that he is aware that in the case of Contract for Difference (CFD) trade, SignalBlaze shall open its trading
                              within 5 minutes of the opening of the relevant market. SignalBlaze reserves the right not to accept any trade of such instrument during the first 5 minutes of the
                              trading day. SignalBlaze reserves its right to cancel any trade, in its own discretion, of such instrument made during the first 5 minutes of the trading day.</p>
                            <p>9. SignalBlaze shall execute the Client’s withdrawal within 96 working hours once all the above conditions are met and upon approval of such by the SignalBlaze
                              Back Office Department. The Client acknowledges that fund transfer times may vary according to its account type, issuing bank, intermediary bank, receiving bank,
                              destination country or any other 3rd party involved in the transfer of funds. SignalBlaze shall not be liable for any fund transfer delay caused by such 3rd party.</p>
                            <p>10. Complaints: - Based on an operational agreement with SignalBlaze Ltd., we are responsible for complaints where End-Users have
                              deposited money through our Platform. Our customer service is always available for any request, complaint or inquiry you may have
                              at : support@signalblaze.com. We have put in place formal procedures for handling complaints fairly and promptly, and each such filed inquiry shall be
                              thoroughly investigated and addressed in a fair manner.</p>
                            <hr className="uk-margin-medium-top uk-margin-small-bottom" />
                            <ul className="in-faq-5 uk-accordion" data-uk-accordion="collapsible: false">
                              <li className="uk-open">
                                <Link className="uk-accordion-title" to="#">Trading Guidelines</Link>
                                <div className="uk-accordion-content">
                                  <ul className="uk-list uk-list-bullet">
                                    <li>Follow the Company Trading Guides</li>
                                    <li>Always contact your account manager if you are having issues.</li>
                                    <li>Never give out your account login details to third party usage.</li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a5Three" aria-expanded="false">
                            Privacy Policy
                          </button>
                        </h2>
                        <div id="a5Three" className="accordion-collapse collapse" data-bs-parent="#sampleFive">
                          <div className="accordion-body">
                            <p>We accept that customer trust is the establishment of our business. That is the reason we are straightforward about how we gather and utilize the data you give us, and we need to feature the decisions you have for getting to and controlling your data. If it's not too much trouble see beneath to figure out how our different business lines utilize your data to give you the best customer experience. As usual, you can get in touch with us at support@signalblaze.com with any inquiries or criticism.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a5Four" aria-expanded="false">
                            Data We Collect from You
                          </button>
                        </h2>
                        <div id="a5Four" className="accordion-collapse collapse" data-bs-parent="#sampleFive">
                          <div className="accordion-body">
                            <p>At the point when you access our platform to do business with us—regardless of whether on our sites, on our applications, at occasions TradesAssets joins in, sorts out or supports, or in our branches or workplaces—we may gather certain individual data about you. For instance: <br />

                              When you apply for our items, we may gather data, for example, your name, address, standardized savings number, date of birth, pay, and work data.  <br />

                              When you visit our sites or utilize our portable applications, we may gather data, for example, your PC IP address, your gadget identifier, your area, and what pages you view or visit. <br />

                              When you visit our branches or workplaces or go to occasions that we support or arrange, we may gather contact data, for example, your email address, your telephone number or your physical location. We may likewise gather sound or visual data about you because of safety efforts we use in our offices.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a5Four" aria-expanded="false">
                            How we Use your Data
                          </button>
                        </h2>
                        <div id="a5Four" className="accordion-collapse collapse" data-bs-parent="#sampleFive">
                          <div className="accordion-body">
                            <p>We utilize your own data to help items and administrations that you use or that we offer to you. For instance, in the event that you have accounts with us: <br />

                              We may utilize data, for example, your record balance, trading action, advance sum, and transaction history to show it to you on the web or through our mobile applications. <br />

                              We may use data, for example, voiceprints for account verification and for use with misrepresentation counteraction innovations. <br />

                              We may utilize your contact data to advertise our items and administrations to you.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a5Four" aria-expanded="false">
                            Company Trademarks
                          </button>
                        </h2>
                        <div id="a5Four" className="accordion-collapse collapse" data-bs-parent="#sampleFive">
                          <div className="accordion-body">
                            <p>Our Company trademarks include the following list. The absence of any Company trademark, product name, service name, or any other name from this list does not belong to SignalBlaze Company intellectual property rights.</p>
                            <p>The Company logo and name is ® Registered in The United States and UK with registrations over the world. The ® Registered mark shall only be used in The United States and UK until registrations are completed elsewhere.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card bg-light border-0 mt-4 mb-1">
                      <div className="card-body px-2 py-1">

                        <p><i>All trading involves risk. CFDs are leveraged products and can result in losses that exceed your initial deposit. Please ensure you fully understand the risk involved and take care to manage your exposure.</i>
                        </p>
                        <small>For general inquiries please contact <Link className="link-primary text-decoration-none" to="mailto:">info@signalblaze.com</Link></small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-end-0 border-end-md border-end-lg">
              <div className="icon-wrap bg-info flex-shrink-0 mb-2 mb-md-3 mb-lg-3">
                <i className="fas fa-file fa-lg text-white"></i>
              </div>
              <h4 className="fw-bold">Terms of Service</h4>
              <p>Read the Terms of Service and License Agreement for SignalBlaze as well as our SignalBlazeApp & Developer Agreements.</p>
              <ul className="list-unstyled lh-lg mb-0">
                <li><Link className="btn btn-link link-primary text-decoration-none p-0" to="#"><i className="fas fa-file-pdf fa-sm me-1"></i>License Agreement</Link></li>
                <li><Link className="btn btn-link link-primary text-decoration-none p-0" to="#"><i className="fas fa-file-pdf fa-sm me-1"></i>Term of Services for SignalBlaze Trade</Link></li>
              </ul>
              <hr className="d-md-none d-lg-none my-3 my-md-3" />
            </div>
            <div className="border-end-md-0 border-end-lg">
              <div className="icon-wrap bg-info flex-shrink-0 mb-2 mb-md-3 mb-lg-3">
                <i className="fas fa-globe fa-lg text-white"></i>
              </div>
              <h4 className="fw-bold">Policies</h4>
              <p>Find out more about what information we collect at SignalBlaze, how we use it, and what control you have over your data.</p>
              <ul className="list-unstyled lh-lg mb-0">
                <li><Link className="btn btn-link link-primary text-decoration-none p-0" to="#"><i className="fas fa-file-pdf fa-sm me-1"></i>Privacy Statement</Link></li>
              </ul>
              <hr className="d-md-none d-lg-none my-3 my-md-3" />
            </div>
            <div className="d-md-none d-lg-block">
              <div className="icon-wrap bg-info flex-shrink-0 mb-2 mb-md-3 mb-lg-3">
                <i className="fas fa-shield-alt fa-lg text-white"></i>
              </div>
              <h4 className="fw-bold">Security</h4>
              <p>Learn more about how we keep your work and personal data safe when you’re using our services.</p>
              <ul className="list-unstyled lh-lg mb-0">
                <li><Link className="btn btn-link link-primary text-decoration-none p-0" to="#"><i className="fas fa-file-pdf fa-sm me-1"></i>SignalBlaze Trade Security</Link></li>
                <li><Link className="btn btn-link link-primary text-decoration-none p-0" to="#"><i className="fas fa-file-pdf fa-sm me-1"></i>Responsible Disclosure Policy</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default TermsLanding
