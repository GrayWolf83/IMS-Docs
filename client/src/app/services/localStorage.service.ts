const TOKEN_KEY = 'IMS-Docs-jwt-token'
const REFRESH_KEY = 'IMS-Docs-jwt-refresh-token'
const EXPIRES_KEY = 'IMS-Docs-jwt-expires'

export function setTokens({
	refreshToken,
	accessToken,
	expiresIn = 3600,
}: {
	refreshToken: string
	accessToken: string
	expiresIn: number | string
}) {
	const expiresDate = new Date().getTime() + Number(expiresIn) * 1000
	localStorage.setItem(TOKEN_KEY, accessToken)
	localStorage.setItem(REFRESH_KEY, refreshToken)
	localStorage.setItem(EXPIRES_KEY, expiresDate.toString())
}
export function getAccessToken() {
	return localStorage.getItem(TOKEN_KEY)
}
export function getRefreshToken() {
	return localStorage.getItem(REFRESH_KEY)
}
export function removeAuthData() {
	localStorage.removeItem(TOKEN_KEY)
	localStorage.removeItem(REFRESH_KEY)
	localStorage.removeItem(EXPIRES_KEY)
}

export function getTokenExpiresDate() {
	return localStorage.getItem(EXPIRES_KEY)
}

const localStorageService = {
	setTokens,
	getAccessToken,
	getRefreshToken,
	getTokenExpiresDate,
	removeAuthData,
}
export default localStorageService
