import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	form {
		width: 500px;
		background-color: #fff;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
		border-radius: 10px;
		padding: 30px;
		display: flex;
		flex-direction: column;
		#button {
			margin-top: 1.5rem;
		}
	}
`

export const Label = styled.label`
	margin: 5px 0;
`

export const LabelUpload = styled.label`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed #525252;
	border-radius: 10px;
	padding: 10px;
	width: 100%;
	margin-bottom: 20px;

	span {
		color: #525252;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16px;
		gap: 0.5rem;
	}

	input {
		opacity: 0;
		width: 1px;
	}
`

export const Input = styled.input`
	min-width: 280px;
	margin: 0px 0 20px 0;
	height: 40px;
	border-radius: 10px;
	outline: none;
	border: none;
	padding: 0 15px;
	background-color: #f2e5d4;
`
