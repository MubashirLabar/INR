import { requestOptions, BASE_URL } from '../constants';

export const getSingleStory = async slug => {
	try {
		const response = await fetch(`${BASE_URL}/stories/inr/view/${slug}/`, requestOptions);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getStoriesVideo = async callback => {
	try {
		const response = await fetch(`${BASE_URL}/stories/inr/list/`, requestOptions);
		const result = await response.json();
		return callback(result);
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getStories = async () => {
	try {
		const response = await fetch(`${BASE_URL}/stories/inr/list/`, requestOptions);
		const result = await response.json();
		const data = [...result.results].sort(() => Math.random() - 0.5);

		return data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
