import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	background-color: #f2e5d4;
`
export const ContainerHeader = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	max-height: 340px;
	margin-bottom: 2rem;
`

export const ImgCart = styled.img`
	width: 100%;
	height: 400px;
	object-fit: cover;
`

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 30px;
	padding-bottom: 30px;
	width: 96%;
	border-radius: 20px;
	gap: 1rem;
	background-color: #f2e5d4;
`
