export function getMailHtml(name: string, password: string) {
	return `
        <h3>Уважаемый ${name}!</h3>
        <p>Вы успешно зарегистрированы в системе IMS-Docs<p>

        <p>Ваш пароль для входа в систему: ${password}<p>
        
    `
}
