import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
	margin: 0.5rem 0rem;
	width: 95vw;
	height: auto;
	color: #fff;
	gap: 2rem;
	h1 {
		color: #502314;
		font-weight: bold;
		font-size: 45px;
		text-align: center;
		margin: 10px 0px;
		padding: 10px 20px;
		border-radius: 10px;
	}

	.swiper-pagination-bullet {
		background-color: #000;
		width: 60px;
		height: 1px;
	}
	.swiper-pagination-bullet-active {
		background-color: #fa8b0d;
		width: 60px;
		height: 1px;
	}
`

export const ContainerItens = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	height: 500px;
	padding: 0px 10px;

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

	#image {
		width: 100%;
		height: 290px;
		border-radius: 10px;
		object-fit: cover;

		@media screen and (min-width: 885px) {
			#image {
				width: 100%;
				height: 300px;
			}
		}
	}
`
