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

export const ImgProducts = styled.img`
	width: 100%;
	height: 380px;
	object-fit: cover;
`

export const CategoryMenu = styled.div`
	display: flex;
	justify-content: center;
	gap: 1.2rem;
	padding: 5px;
	border-radius: 10px;
	width: 95%;
	margin-bottom: 1rem;

	@media screen and (min-width: 768px) {
		gap: 1.8rem;
		width: 65%;
	}

	@media screen and (min-width: 1300px) {
		gap: 2rem;
		width: 40%;
	}
`

export const CategoryButton = styled.button`
	cursor: pointer;
	background: none;
	border: none;
	color: #9a9a90;
	background-color: transparent;
	padding: 8px;
`

export const ProductContainer = styled.div`
	background-color: #f2e5d4;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	justify-items: center;
	align-items: center;
	gap: 1rem;
	width: 100%;
	padding: 1rem;

	@media screen and (min-width: 885px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: 1300px) {
		grid-template-columns: repeat(4, 1fr);
	}
`
