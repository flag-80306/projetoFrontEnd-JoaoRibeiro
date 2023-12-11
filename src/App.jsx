import NavBar from './NavBar.jsx';
import { Route, Switch } from 'wouter';
import FooterBar from './FooterBar.jsx';
import TitleContainer from './components/TitleContainer.jsx';
import AboutUsView from './views/AboutUsView.jsx';
import ContactView from './views/ContactView.jsx';
import HomeView from './views/HomeView.jsx';
import ExperiencesView from './views/ExperiencesView.jsx';
import NotFoundPageView from './views/NotFoundPageView.jsx';
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
			</Switch>

			<FooterBar />
		</>
	);
}

export default App;
