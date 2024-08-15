import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: #fff;
	box-shadow: 0px 0px 5px 0px rgba(87, 87, 87, 0.2);
	border-radius: 10px;
	height: 220px;
	width: 400px;
	gap: 1rem;

	img {
		width: 200px;
		border-radius: 5px;
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 2rem;
		align-items: center;
	}

	#link {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		cursor: pointer;
		background-color: #fa8b0d;
		padding: 15px;
		border-radius: 10px;
		outline: none;
		border: none;
		font-weight: bold;
		font-size: 24px;
		color: #fff;
		transition: all 0.25s ease-in-out;
		&:hover {
			background-color: transparent;
			border: 1px solid #fa8b0d;
			color: #fa8b0d;
		}
	}
`
export const ProductName = styled.p``
export const ProductPrice = styled.p``
