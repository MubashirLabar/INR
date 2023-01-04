const getHostName = url => {
	const u = new URL(url);
	return u.host.replace(/^www./, '');
};

export default getHostName;
