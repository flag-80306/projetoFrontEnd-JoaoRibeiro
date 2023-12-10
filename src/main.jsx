import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ContactView from './views/ContactView.jsx';
import AboutUsView from './views/AboutUsView.jsx';
import NotFoundPageView from './views/NotFoundPageView.jsx';

import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <App /> */}
		<NotFoundPageView />
	</React.StrictMode>,
);
