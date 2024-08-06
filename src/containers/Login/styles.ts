import styled from 'styled-components'

import logo from '../../assets/bigfomeelogo.png'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: #000000;

	@media screen and (min-width: 1300px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
	}

	#SignLink {
		color: #cb1819;
		font-weight: bold;
		font-size: 18px;
		padding: 0px 10px;

		@media screen and (min-width: 768px) {
			font-size: 24px;
		}
	}
`

export const LoginImage = styled.div`
	height: 300px;
	width: 100vw;
	@media screen and (min-width: 768px) {
		height: 500px;
		width: 50%;
	}
	background-image: url(${logo});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
`

export const ContainerItens = styled.div`
	h1 {
		color: #cb1819;
		font-weight: bold;
		font-size: 45px;
		text-align: center;
		margin: 10px 0px;
		@media screen and (min-width: 768px) {
			font-size: 50px;
			margin: -120px 0px 20px 0px;
		}
		@media screen and (min-width: 1300px) {
			font-size: 60px;
			margin: 20px 0px 20px 0px;
		}
	}

	form {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	color: #ffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: calc(100vh - 350px);
	@media screen and (max-width: 390px) {
		height: calc(100vh - 220px);
	}
	@media screen and (min-width: 768px) {
		width: 70%;
		margin: 0 auto;
		height: calc(100vh - 600px);
		margin: 0px 0px 40px 0px;
	}
	@media screen and (min-width: 1024px) {
		width: 40%;
		height: calc(100vh - 600px);
		margin: 0px 0px 40px 0px;
	}
`

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	align-items: start;
	width: 95%;
	margin: 0px 0px 15px 0px;
	font-size: 24px;
	color: #fa8b0d;
	font-weight: bold;

	@media screen and (min-width: 768px) {
		font-size: 24px;
		width: 100%;
	}
`

export const Input = styled.input`
	display: flex;
	align-items: center;
	font-size: 24px;
	flex-direction: column;
	background-color: #eeeeee;
	width: 100%;
	padding: 10px 10px;
	border-radius: 10px;
	outline: none;
	border: none;
	margin: 0px 0px 15px 0px;

	@media screen and (min-width: 768px) {
		font-size: 24px;
		padding: 15px 10px;
		width: 100%;
	}
`

export const ErrorMessage = styled.p`
	color: #cb1819;
	font-weight: bold;
	margin-bottom: 5px;
`

export const P = styled.p`
	display: flex;
	align-items: center;
	font-size: 18px;
	@media screen and (min-width: 768px) {
		font-size: 24px;
	}
`
