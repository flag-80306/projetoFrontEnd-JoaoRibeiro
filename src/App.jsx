import NavBar from './components/NavBar.jsx';
import { Route, Switch } from 'wouter';
import FooterBar from './components/FooterBar.jsx';
import AboutUsView from './views/AboutUsView.jsx';

import ContactView from './views/ContactView.jsx';
import HomeView from './views/HomeView.jsx';
import ExperiencesView from './views/ExperiencesView.jsx';
import NotFoundPageView from './views/NotFoundPageView.jsx';
import TourView from './views/TourView.jsx';

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

				<Route path='/Contact'>
					<ContactView />
				</Route>
				<Route path='*'>
					<NotFoundPageView />
				</Route>

				<Route path='/TourView/:tour' component={TourView} />

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
