import styled from 'styled-components'

import logo from '../../assets/bigfomeelogo.png'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	background-color: #000000;
`

export const LoginImage = styled.div`
	display: flex;
	height: 200px;
	width: 100vw;
	background-image: url(${logo});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 400px;
	}
`

export const ContainerItens = styled.div`
	h1 {
		color: #cb1819;
		font-weight: bold;
		font-size: 50px;
		text-align: center;
		margin: 0px 0px 50px 0px;
	}
	color: #ffff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 500px);
`

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	align-items: start;
	width: 90%;
	margin: 15px 0;
	font-size: 24px;
	color: #fa8b0d;
	font-weight: bold;
`

export const Input = styled.input`
	display: flex;
	font-size: 24px;
	flex-direction: column;
	background-color: #eeeeee;
	align-items: center;
	width: 90%;
	padding: 5px 10px;
	height: 60px;
	border-radius: 10px;
	outline: none;
	border: none;
`

export const P = styled.p`
	display: flex;
	align-items: center;
	font-size: 24px;
`

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fa8b0d;
	width: 90%;
	height: 60px;
	border-radius: 10px;
	outline: none;
	border: none;
	font-weight: bold;
	font-size: 24px;
	color: #cb1819;
	margin: 30px 0px 15px 0;
	cursor: pointer;
	transition: all 0.25s ease-in-out;

	&:hover {
		background-color: #cb1819;
		color: #fa8b0d;
	}
`

export const SignLink = styled.a`
	color: #cb1819;
	font-weight: bold;
	font-size: 24px;
	padding: 0px 10px;
`
