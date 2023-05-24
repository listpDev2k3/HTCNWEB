const validate = (value, id, name) => {
    const textError = document.getElementsByClassName("text-"+id)[0]
    const getPattern = (id) =>{
        let pattern;
        id === "password"
            ? pattern =/^[a-zA-Z0-9][^(!@#$%^&*()_)]{5,16}$/
            : (id === "account" 
            ?pattern=/^[a-z0-9]{5,20}$/:"")
        return pattern;
    }
    value === ""
        ? (textError.innerHTML = "Vui lòng nhập trường này !")
        : getPattern(id).test(value.trim()) === true
        ? (textError.innerHTML = "")
    : (textError.innerHTML = "Trường này phải là " + name + " !");
}