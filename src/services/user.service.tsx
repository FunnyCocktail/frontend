const getUserId = () => {
    const user = localStorage.getItem('_user');
    if(user) return JSON.parse(user)['id'];
    else return user;
}

export const userService = {
    getUserId
}