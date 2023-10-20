const wrapper = document.querySelector('.wrapper');
const loginLink= document.querySelector('.login-link');
const registerLink =document.querySelector('.register-link');
const social =document.querySelector('.register-link');


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    if (document.querySelector("#login-form")) {
      document.querySelector("#login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
  
        const user = users.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          localStorage.setItem("currentUser", JSON.stringify(user));
          alert("Đăng nhập thành công");
          window.location.href = "index.html";
        } else {
          alert("Tên đăng nhập hoặc mật khẩu không đúng");
        }
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    if (document.querySelector("#register-form")) {
      document.querySelector("#register-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
  
        if (users.find((user) => user.username === username)) {
          alert("Tên đăng nhập đã tồn tại");
          return;
        }
  
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Đăng ký thành công");
        window.location.href = "login.html";
      });
    }
  });
  