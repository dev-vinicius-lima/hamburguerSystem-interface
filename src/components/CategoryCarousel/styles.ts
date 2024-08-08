import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 95vw;
	height: auto;
	color: #fff;
	gap: 2rem;
	h1 {
		color: #fff;
		background-color: #cb1819;
		font-weight: bold;
		font-size: 45px;
		text-align: center;
		margin: 10px 0px;
		padding: 10px 20px;
		border-radius: 10px;
	}

	.swiper-pagination-bullet {
		background-color: #fff;
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
