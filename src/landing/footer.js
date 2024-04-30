import React from 'react'
import { Link } from 'react-router-dom'

const FooterLanding = () => {
  return (
    <>

      <footer class="py-5 in-cirro-footer">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="row gx-0 mb-3">
                <div class="col-md-12 col-lg-3 footer-logo">
                  <img src="img/logog.png" alt="footer-logo" width="150" height="58" class="mb-1 d-block" />

                </div>

                <div class="col-md-12 col-lg-9">

                  <div align="center">
                    <div id="google_translate_element"></div>
                  </div>


                  <div class="d-flex flex-column flex-xl-row justify-content-xl-end">
                    <ul class="list-inline in-footer-link order-last order-xl-first">
                      <li class="list-inline-item"><Link to="/contact">Contact</Link></li>
                      <li class="list-inline-item"><Link to="/about">FAQ</Link></li>
                      <li class="list-inline-item"><Link to="/education">Careers</Link></li>
                      <li class="list-inline-item"><Link to="/about">Partners</Link></li>
                    </ul>
                    <div class="social-media-list small hstack gap-3 ms-lg-5 order-first order-xl-last">
                      <div><Link to="https://www.facebook.com/" class="color-facebook text-decoration-none"><i class="fab fa-facebook-square"></i></Link></div>
                      <div><Link to="https://twitter.com/" class="color-twitter text-decoration-none"><i class="fab fa-twitter"></i></Link></div>
                      <div><Link to="#" class="color-linkedin text-decoration-none"><i class="fab fa-linkedin"></i></Link></div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-3 mt-5 d-flex">
                  <div class="align-self-end">
                    <p class="mb-0 copyright-text">© 2024 SignalBlaze Limited</p>
                    <p class="mb-0 copyright-text">All Rights Reserved.</p>
                  </div>
                </div>
                <div class="col-md-12 col-lg-9 d-lg-flex justify-content-lg-end d-none d-lg-block">
                  <div class="align-self-end">
                    <nav class="nav in-footer-link-2">
                      <Link class="nav-link border-end-md" to="/terms">Risk Disclosure</Link>
                      <Link class="nav-link border-end-md" to="/terms">Privacy policy</Link>
                      <Link class="nav-link border-end-md" to="/terms">Customer Agreement</Link>
                      <Link class="nav-link pe-0" to="/terms">AML policy</Link>

                    </nav>
                  </div>
                </div>
              </div>
              <p class="mb-0 copyright-text"><i>You can start your online trading today with SignalBlaze. Please feel free to browse our economic calendar. It contains important information on EURUSD, BTCUSD, GBPUSD, USDCHF, BTCETH, AUDUSD, USDCAD, NZDUSD and other currency pairs and trading instruments and provides up-to-date market news and market research. SignalBlaze offers a deposit forex bonus of up to 50%*. You can trade micro-lots (0.01 lots) with SignalBlaze.</i></p>
            </div>
          </div>
        </div>
      </footer>
      <div class="d-none d-md-block">
        <Link to="#" class="to-top fas fa-arrow-up text-decoration-none text-white"></Link>
      </div>


      <link rel="stylesheet" to="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />


      <Link to="https://wa.me/+2347018411414?text=Hello" class="floating" target="_blank">
        <i class="fab fa-whatsapp fab-icon"></i>
      </Link>


    </>
  )
}

export default FooterLanding
