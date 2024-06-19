const getTokenByType = (type:string) => {
    const hasToken = localStorage.getItem('_tokens');
    if (hasToken == null) return null;
    else return JSON.parse(hasToken)[`${type}Token`];
};

const checkUserToken = () => {
    const hasToken = localStorage.getItem('_tokens');
    if (!hasToken || !hasToken.indexOf('accessToken')) {
        localStorage.removeItem('_user');
        return false;
    };
    return true;
}

const removeUser = () => localStorage.removeItem('_tokens');

export const JWTService = {
    getTokenByType,
    checkUserToken,
    removeUser
}