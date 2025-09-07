export default defineNuxtRouteMiddleware((to) => {
    const authToken = useCookie('auth_token');

    const protectedRoutes = ['/dashboard', '/**'];

    if (authToken.value && (to.path === '/login' || to.path === '/register')) {
        return navigateTo('/dashboard');
    }

    if (
        !authToken.value &&
        protectedRoutes.some(path => to.path === path || to.path.startsWith(path + '/'))
    ) {
        return navigateTo('/login');
    }
});