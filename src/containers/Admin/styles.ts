import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	min-height: 100vh;
	width: 100%;
	background-color: #efefef;
`

export const Wrapper = styled.div`
	padding: 20px;
	width: 100%;
	@media screen and (max-width: 768px) {
		padding: 0px;
	}
`
