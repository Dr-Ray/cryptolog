import React from 'react'

const CryptoWithdrawal = () => {
  return (
    <>
      <section class="roww center">
        <div class="col l4 s12 offset-l4">
          <p>CRYPTO WITHDRAWAL</p>
          <div class="cardd-panel">
            <form autocomplete="off">
              <div class="roww">
                <div class="input-field undefined">
                  <label class="active">from</label>
                  <select id="from" class="browser-default app-mb-3">
                    <option value="trading_balance_profit" selected="">Trading Profit Balance ($0.00)</option>
                    <option value="trading_balance_deposit">Trading Deposit Balance ($0.00)</option>
                    <option value="mining_balance_btc">Bitcoin Mining (0 BTC) </option>
                    <option value="mining_balance_eth">Ethereum Mining (0 ETH)</option>
                    <option value="mining_balance_atom">Cosmos Mining (0 ATOM)</option>
                    <option value="mining_balance_doge">Dogecoin Mining (0 DOGE)</option>
                    <option value="mining_balance_bnb">Binance Coin Mining (0 BNB)</option>
                    <option value="referral_balance">Referral Balance ($0.00)</option>
                  </select>
                </div>
                <div class="input-field undefined">
                  <label class="active">crypto currency</label>
                  <select id="crypto_currency" class="browser-default undefined">
                    <option value="Bitcoin BTC" selected="">Bitcoin BTC</option>
                    <option value="Tether USDT">Tether USDT</option>
                    <option value="Ethereum ETH">Ethereum ETH</option>
                  </select>
                </div>
                <div>
                  <div class="input-field">
                    <span class=" prefix">USD</span>
                    <label class="active" for="amount">amount</label>
                    <input type="number" id="amount" min="" max="" step="any" inputmode="decimal" name="amount" class="" required="" value="" />
                  </div>
                </div>
                <div>
                  <div class="input-field undefined">
                    <input type="text" id="wallet_address" name="wallet_address" maxlength="300" inputmode="text" required="" value="" />
                    <label class="active" for="wallet_address">wallet address</label>
                  </div>
                </div>
              </div>
              <div><button type="submit" class="btnn btnn-full">Submit</button></div>
              <div class="red black-text lighten-4 cardd-panel">
                <span>insufficient funds</span><br />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default CryptoWithdrawal
