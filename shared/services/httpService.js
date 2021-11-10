const http = Object.freeze({
  get: (url, options = {}) => $.get(url, ...options),
  post: (url, options = {}) => $.post(url, ...options)
})