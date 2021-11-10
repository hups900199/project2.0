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
	const pathname = location.pathname.split("/").slice(2)[0];
	const component = AppRoutes.find(
		(route) => route.path === pathname
	)?.component;

	if (component) render("main", component);
	else history.pushState(null, null, "project2.0/home");
}

function registerLinks(container) {
  $(`${container} a`).on('click', event => {
    event.preventDefault();
    history.pushState(null, null, `/project2.0/${event.target.href.split("/").slice(3).join('/')}`);
  })
}
