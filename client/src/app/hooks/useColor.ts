import { useColorMode } from '@chakra-ui/react'

const useColor = () => {
	const { colorMode } = useColorMode()
	const light = colorMode === 'dark' ? 'gray.200' : 'gray.600'
	const dark = colorMode === 'dark' ? 'gray.600' : 'gray.200'
	return {
		light,
		dark,
	}
}

export default useColor
