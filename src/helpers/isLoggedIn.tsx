const isLoggedIn =()=>{
 if(localStorage.getItem('username')) return true;
  return false
}

export default isLoggedIn