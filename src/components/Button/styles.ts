import styled from 'styled-components'

export const ContainerButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fa8b0d;
	width: 100%;
	padding: 10px 5px;
	border-radius: 10px;
	outline: none;
	border: none;
	font-weight: bold;
	font-size: 24px;
	color: #cb1819;
	cursor: pointer;
	transition: all 0.25s ease-in-out;

	&:hover {
		background-color: #cb1819;
		color: #fa8b0d;
	}

	@media screen and (min-width: 768px) {
		font-size: 24px;
		padding: 15px 10px;
		width: 100%;
	}
`
