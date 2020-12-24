export default ({isAuth, values, errors}: any) => {
    const rules = {
        email: (value: any) => {
            if (!value) {
                errors.email = "Введите E-Mail";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = "Неверный E-Mail";
            }
        },

        password: (value: any) => {
            if (!value) {
                errors.password = "Введите пароль";
            } else if (
                !isAuth &&
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
            ) {
                errors.password = "Слишком лёгкий пароль";
            }
        },

        password_2: (value: any) => {
            if(!isAuth && values.password != value) {
                errors.password = "Пароли не совпадают."
            }
        },

        fullname: (value: any) => {
            if (!isAuth && !value) {
                errors.fullname = "Укажите своё имя и фамилию"
            }
        }
    }
    // @ts-ignore
    Object.keys(values).forEach(key => rules[key] && rules[key](values[key]))
};