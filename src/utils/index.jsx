export const goSingleStory = (slug, history) => {
	history.push({
		pathname: `/story/${slug}`
	});
};
export const onScroll = (page, setPage) => {
	if (document.body.offsetHeight - (window.innerHeight + window.scrollY) <= 100) {
		setPage(page + 1);
	}
};
export const storyImageLoaded = (setLoader, _storyImageLoad) => {
	_storyImageLoad.current += 1;
	if (_storyImageLoad.current === 5) {
		document.dispatchEvent(new Event('storyImagesLoaded', { bubbles: true }));
		setLoader(false);
	}
};

export const storyImageLoadedPodcast = (setLoader, _storyImageLoad) => {
	_storyImageLoad.current += 1;
	if (_storyImageLoad.current === 5) {
		document.dispatchEvent(new Event('storyImagesLoaded', {bubbles: true}));
		setLoader(false);
	}
};

export const goFrontPage = (history) => {
	history.push({
		pathname: '/'
	});
};


export const openLink = () => {
	const win = window.open('https://www.ineverread.com/', '_blank');
	win.focus();
};
export const paginate = (array, pageNumber = 0) => (array ? array.slice(0, (pageNumber + 1) * 15) : []);
