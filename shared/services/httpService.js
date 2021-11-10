const http = Object.freeze({
	get: (url, ...options) => $.get(`${appBaseURL}/${url}`, ...options),
	post: (url, ...options) => $.post(`${appBaseURL}/${url}`, ...options),
});
