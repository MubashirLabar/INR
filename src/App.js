import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Stories from './pages/Stories';
import SingleStory from './pages/SingleStory';
import styleApp from './app.module.css';
import StorieVideos from './pages/StoriesVideo';
import StoriesPodcast from './pages/StoriesPodcast';
import { getStories } from './services/storyService';

const App = () => {
	const [stories, setStories] = useState(undefined);
	useEffect(() => {
		(async function () {
			const data = await getStories();
			setStories(data);
		})();
	}, []);

	return (
		<BrowserRouter>
			<div className={styleApp.navbar}>
				<Navbar />
			</div>
			<Switch>
				<Route path="/story/:slug">
					<SingleStory />
				</Route>
				<Route exact path="/">
					<Stories stories={stories} />
				</Route>
				<Route exact path="/tv">
					<StorieVideos />
				</Route>
				<Route exact path="/radio">
					<StoriesPodcast />
				</Route>
				<Redirect to="/" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
