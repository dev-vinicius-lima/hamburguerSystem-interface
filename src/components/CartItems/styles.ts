import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	border-radius: 20px;
	background-color: #fff;
`

export const Header = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	padding: 10px;
	margin: 10px;
	height: auto;
	grid-gap: 25px;
	border-bottom: 1px solid #b5b5b5;
	margin-bottom: 1rem;
	p {
		font-size: 16px;
		color: #b5b5bb;
		text-align: center;
	}
`

export const Body = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	align-items: center;
	width: 96%;
	padding: 10px;
	grid-gap: 15px;
	border-radius: 5px;
	margin-bottom: 1rem;
	border-bottom: 1px solid #b5b5b5;
	box-shadow: 1px 0px 10px rgba(181, 181, 181, 0.5);

	img {
		width: 120px;
		height: 120px;
		border-radius: 10px;
		object-fit: cover;
	}
	p {
		font-size: 16px;
	}

	#quantityContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		#decrementButton {
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			outline: none;
			width: 30px;
			height: 30px;
			border: none;
			border-radius: 5px;
			background-color: #fa8b0d;
			color: #fff;
			font-size: 32px;
		}
		#incrementButton {
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			outline: none;
			width: 30px;
			height: 30px;
			border: none;
			border-radius: 5px;
			background-color: #fa8b0d;
			color: #fff;
			font-size: 32px;
		}
	}
`

export const EmptyCart = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
	font-size: 24px;
`
