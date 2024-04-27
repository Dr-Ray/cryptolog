import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeDashboard from './user/home';
import HomePageLayout from './component/userpagelayout';
import MiningPage from './user/mining';
import Nopage from './user/nopage';
import UserWatchList from './user/trading/watchlist';
import UserAccount from './user/account';
import UserReferals from './user/referals';
import SignoutUser from './user/signout';
import UserMarkets from './user/trading/markets';
import DepositFunds from './user/deposit/fund';
import DepositStep1 from './user/deposit/step1';
import DepositStep2 from './user/deposit/step2';
import DepositStep3 from './user/deposit/step3';
import DepositSingle from './user/deposit/single';
import DepositList from './user/deposit/list';
import WithdrawalList from './user/withdraws/list';
import CryptoWithdrawal from './user/withdraws/crypto';
import MiningPlans from './user/plans/mining';
import TradingPlans from './user/plans/trading';
import SignalPlans from './user/plans/signals';
import UserTrades from './user/trading/trades';
import AllPlans from './user/plans/allplans';
import BuyCrypto from './user/pages/buycrypto';
import CopyTrading from './user/trading/copyTrading';
import DepositStep4 from './user/deposit/step4';
import UploadProof from './user/deposit/uploadproof';
import EmailVerification from './user/verification/email';
import AddressVerification from './user/verification/address';
import IdentityVerification from './user/verification/identity';
import AddressUpdate from './user/accountupdates/address';
import PasswordUpdate from './user/accountupdates/password';
import EmailUpdate from './user/accountupdates/email';
import PhotoUpdate from './user/accountupdates/photo';
import VerificationHome from './user/verification';
import MiningContracts from './user/miningcontracts';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route index element={<HomeDashboard />} />
					<Route path="/user" element={<HomePageLayout />}>
						<Route index element={<HomeDashboard />} />
						<Route path='/user/referals' element={<UserReferals />} />
						<Route path='/user/mining' element={<MiningPage />} />
						<Route path='/user/trades' element={<UserTrades />} />
						<Route path='/user/mining-contracts' element={<MiningContracts />} />
						<Route path='/user/signout' element={<SignoutUser />} />
						<Route path='/user/buy-crypto' element={<BuyCrypto />} />

						<Route path='/user/account'>
							<Route index path='/user/account' element={<UserAccount />} />
							<Route path='/user/account/verification/home' element={<VerificationHome />} />
							<Route path='/user/account/verification/email' element={<EmailVerification />} />
							<Route path='/user/account/verification/address' element={<AddressVerification />} />
							<Route path='/user/account/verification/identity' element={<IdentityVerification />} />
							{/* Account updates */}
							<Route path='/user/account/update/address' element={<AddressUpdate />} />
							<Route path='/user/account/update/password' element={<PasswordUpdate />} />
							<Route path='/user/account/update/photo' element={<PhotoUpdate />} />
							<Route path='/user/account/update/email' element={<EmailUpdate />} />
						</Route>

						<Route path='/user/trading'>
							<Route path='/user/trading/watchlist' element={<UserWatchList />} />
							<Route path='/user/trading/markets' element={<UserMarkets />} />
						</Route>

						<Route path='/user/traders/'>
							<Route index path='/user/traders/' element={<CopyTrading />} />
							<Route path='/user/traders/single' element={<UserMarkets />} />
						</Route>

						<Route path='/user/deposits'>
							<Route index path='/user/deposits/fund' element={<DepositFunds />} />
							<Route path='/user/deposits/fund/step1' element={<DepositStep1 />} />
							<Route path='/user/deposits/fund/step2' element={<DepositStep2 />} />
							<Route path='/user/deposits/fund/step3/:type/:amount/:account' element={<DepositStep3 />} />
							<Route path='/user/deposits/fund/step4' element={<DepositStep4 />} />
							<Route path='/user/deposits/single' element={<DepositSingle />} />
							<Route path='/user/deposits/list' element={<DepositList />} />
							<Route path='/user/deposits/upload-proof/:id' element={<UploadProof />} />
						</Route>

						<Route path='/user/withdrawals'>
							<Route path='/user/withdrawals/crypto' element={<CryptoWithdrawal />} />
							<Route path='/user/withdrawals/list' element={<WithdrawalList />} />
						</Route>

						<Route path='/user/plans/'>
							<Route index path='/user/plans/' element={<AllPlans />} />
							<Route path='/user/plans/categories/mining' element={<MiningPlans />} />
							<Route path='/user/plans/categories/trading' element={<TradingPlans />} />
							<Route path='/user/plans/categories/signals' element={<SignalPlans />} />
						</Route>

						<Route path='*' element={<Nopage />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>

	);
}

export default App;
