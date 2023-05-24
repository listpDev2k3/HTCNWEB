const validate = (value, id, name, classList) => {
    console.log(classList)
    const textError = document.getElementsByClassName("text-" + id)[0];
    const getPattern = (id) => {
      let pattern;
      id === "password"
        ? (pattern = /^[a-zA-Z0-9][^(!@#$%^&*()_)]{5,16}$/)
        : id === "account"
        ? (pattern = /^[a-z0-9]{5,20}$/)
        : id === "phone__number"
        ? (pattern = /^(0\d{9})|(09\d{8})$/)
        : id === "email"
        ? (pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        : id === "password"
        ? (pattern = /^[a-zA-Z0-9][^(!@#$%^&*()_)]{5,16}$/)
        : "";
      return pattern;
    };
    id === "resut-password"
      ? document.getElementById("password").value === value
        ? ""
        : (textError.innerHTML = "Nhập Lại Password Không Đúng !")
      : "";
    value === ""
      ? (textError.innerHTML = "Vui lòng nhập trường này !")
      : getPattern(id).test(value.trim()) === true
      ? (textError.innerHTML = "")
      : (textError.innerHTML = "Trường này phải là " + name + " !");
  };
  