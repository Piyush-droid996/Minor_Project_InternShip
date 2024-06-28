export default function checkAdmin(){
    const localUser = JSON.parse(localStorage.getItem('user'));
    if(localUser && localUser.isAdmin){
        return localUser.isAdmin;
    }
    return false;
}
    