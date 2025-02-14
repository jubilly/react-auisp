export default function session() {
    const today = new Date();
    const twoDays = 1 * 24 * 60 * 60 * 1000;

    const dateToExpire = new Date(today.getTime() + twoDays);
    const dateToExpireString = dateToExpire.toISOString();
    if (typeof window !== 'undefined' && window.localStorage) {
        const user = window.localStorage.getItem('login-user');
        console.log('user', user);
        if (dateToExpireString > today) {
            window.localStorage.removeItem('login-user');
            console.warn('Sessão inválida');
            window.location.href = '/';
            return;
        }
        console.log('Sessão válida...');
        if (user && window.location.pathname === '/') {
            window.location.href = '/exams';
            return;
        }
        if (!user) {
            window.location.href = '/';
        }
    }
}
