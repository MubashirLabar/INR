import { makeStyles } from '@material-ui/core/styles';

const fontFamily = 'Times New Roman';
const container = {
	flexGrow: 1,
	width: '85%',
	paddingTop: 40,
	marginInline: 'auto'
};
const loaderContainer = {
	position: 'fixed',
	// top: 'calc(50% -100px)',
	// left: 'calc(50% -100px)'
	top: '40%',
	width: '100%'
};
const storyImageVideo = {
	marginInline: 'auto',
	cursor: 'pointer',
	transition: 'transform 0.15s ease-in-out',
	objectFit: 'contain',
	minHeight: 200,
	marginBottom: 4,

	'&:hover': {
		transform: 'scale3d(1.05, 1.05, 1)',
		zIndex: 1000
	}
};

const storyImage = {
	marginInline: 'auto',
	cursor: 'pointer',
	maxWidth: 330,
	transition: 'transform 0.15s ease-in-out',
	'&:hover': {
		transform: 'scale3d(1.05, 1.05, 1)'
	},
	marginBottom: 120,
	maxHeight: 330,
	objectFit: 'contain',
	'@media (max-width: 992px)': {
		marginBottom: 80,
		maxWidth: '88%'
	}
};
const rotatedTexts = {
	cursor: 'pointer',
	position: 'fixed',
	top: '50%'
};
const centerText = {
	top: '65%',
	'& p': {
		fontSize: 30,
		fontFamily
	}
};
const rightText = {
	...rotatedTexts,
	transformOrigin: 'top right',
	right: 0,
	transform: 'rotate(90deg) translateX(50%)'
};
const leftText = {
	...rotatedTexts,
	transformOrigin: 'top left',
	left: 0,
	transform: 'rotate(-90deg) translateX(-50%)'
};
const masonryGrid = {
	display: 'flex',
	width: '85%',
	paddingTop: 50,
	margin: 'auto'
};
const masonryGridColumn = {
	backgroundClip: 'padding-box'
};
const dropdownText = {
	fontSize: '12px',
	fontFamily,
	lineHeight: '15px'
};
const dropdownTextLink = {
	fontSize: '12px',
	fontFamily,
	lineHeight: '15px'
};

export const storiesStyles = makeStyles({
	container,
	storyImageVideo,
	storyImage,
	centerText,
	rightText,
	leftText,
	masonryGrid,
	masonryGridColumn,
	dropdownText,
	dropdownTextLink,
	loaderContainer
});

export const singleStoryStyles = makeStyles({
	container: {
		...container,
		'@media (max-width: 992px)': {
			paddingTop: 24
		}
	},
	storyImageSingle: {
		marginInline: 'auto',
		cursor: 'pointer',
		transition: 'transform 0.15s ease-in-out',
		objectFit: 'contain',
		maxHeight: 380,
		maxWidth: 330,
		marginBottom: 20,
		'@media (max-width: 992px)': {
			marginBottom: 80,
			maxWidth: '88%'
		},

		'&:hover': {
			transform: 'scale3d(1.05, 1.05, 1)',
			zIndex: 1000
		}
	},
	header: {
		textAlign: 'center',
		fontSize: 30,
		marginBottom: 40,
		paddingTop: 30,
		fontFamily,
		lineHeight: 1.1
	},
	videoContainer: {
		marginBottom: 20,
		textAlign: 'center',
		'& iframe': {
			maxHeight: 720
		},
		'& div': {
			maxHeight: 720
		}
	},
	loaderContainerSingle: {
		position: 'fixed',
		// top: 'calc(50% -100px)',
		// left: 'calc(50% -100px)'
		top: '40%',
		width: '100%'
	},
	videosContainer: {
		marginBottom: 50,
		textAlign: 'center',
		'& iframe': {
			maxHeight: 400,
			maxWidth: 400
		},
		'& div': {
			maxHeight: 600
		}
	},
	contentContainer: {
		width: 450,
		marginInline: 'auto',
		paddingBottom: 80,
		textAlign: 'center',
		'@media (max-width: 992px)': {
			width: '88%'
		}
	},
	textContainer: {
		marginTop: 20
	},
	entity: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: 16
	},
	contentText: {
		fontFamily,
		color: '#000',
		display: 'block',
		lineHeight: 1.4,
		'@media (max-width: 992px)': {
			fontSize: 14
		}
	},
	masonryGrid: {
		...masonryGrid,
		width: '100%'
	},
	loaderContainer,
	masonryGridColumn,
	storyImage,
	centerText,
	rightText,
	leftText
});
