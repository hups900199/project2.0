const AppRoutes = [
	{
		path: "login",
		component: "app/account/login.html",
	},
	{
		path: "home",
		component: "app/home",
	},
  {
		path: "about",
		component: "app/about",
	},
];

matchRouteToComponent();

function matchRouteToComponent() {
	const pathname = location.pathname.split("/").slice(2).join("/");
	const component = AppRoutes.find((route) => route.path === pathname)?.component;

	if (component) render(pathname === "login" ? "#app" : "main", component);
	else redirectTo("home");
}

function registerLinks(container) {
  $(`${container} a`).on('click', event => {
    event.preventDefault();
		redirectTo(event.target.href.split("/").slice(3).join('/'));
  });
}

function redirectTo(url, state) {
	history.pushState(state ?? null, null, `/project2.0/${url}`);
};
