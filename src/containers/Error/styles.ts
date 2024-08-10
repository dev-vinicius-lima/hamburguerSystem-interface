import styled from 'styled-components'

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	h1 {
		text-align: center;
		margin-bottom: 1rem;
	}

	#link {
		display: flex;
		text-decoration: none;
		justify-content: center;
		align-items: center;
		background-color: #fa8b0d;
		width: 50%;
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
			width: 50%;
		}
	}
`
