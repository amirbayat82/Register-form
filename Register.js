function CheckUserName(username_text) {
  if (username_text.length < 3) return true;
  else return false;
}
function CheckPassword(password_text) {
  if (password_text.length < 8) return true;
  else return false;
}
function result() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let username_txt = CheckUserName(username);
  let password_txt = CheckPassword(password);
  if (username_txt) alert("نام کاربری نمیتواند کمتر از 3 کاراکتر باشد");
  else if (password_txt) alert("پسورد نمیتواند کمتر از 8 کاراکتر باشد");
  else alert("welcome");
}
