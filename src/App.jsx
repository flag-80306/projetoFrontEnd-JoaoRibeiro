import NavBar from './components/NavBar.jsx';
import { Route, Switch } from 'wouter';
import FooterBar from './components/FooterBar.jsx';
import AboutUsView from './views/AboutUsView.jsx';
import AboutUsLiliana from './views/AboutUsLiliana.jsx';
import ContactView from './views/ContactView.jsx';
import HomeView from './views/HomeView.jsx';
import ExperiencesView from './views/ExperiencesView.jsx';
import NotFoundPageView from './views/NotFoundPageView.jsx';
import TourView from './views/TourView.jsx';
// import TourView_test from './views/TourView_test.jsx';
import BookNowView from './views/BookNowView.jsx';

function App() {
	return (
		<>
			<NavBar />
			<Switch>
				<Route path='/' components='HomeView'>
					<HomeView />
				</Route>
				<Route path='/Experiences' components='Experiences'>
					<ExperiencesView />
				</Route>
				<Route path='/AboutUs'>
					<AboutUsView />
				</Route>
				<Route path='/AboutUsLiliana'>
					<AboutUsLiliana />
				</Route>
				<Route path='/Contact'>
					<ContactView />
				</Route>
				<Route path='*'>
					<NotFoundPageView />
				</Route>
				<Route path='/TourView'>
					<TourView />
				</Route>
				{/* <Route path='/TourView_test'>
					<TourView_test />
				</Route> */}
				<Route path='/BookNow'>
					<BookNowView />
				</Route>
				<Route component={NotFoundPageView} />
			</Switch>

			<FooterBar />
		</>
	);
}

export default App;
