const generator = require('generate-password')

export function generatePassword() {
	return generator.generate({
		length: 10,
		numbers: true,
		symbols: true,
		exclude: '".,:[]{}',
	})
}
