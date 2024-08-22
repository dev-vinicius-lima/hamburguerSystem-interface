import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
	isactive?: boolean
}

export const Container = styled.div`
	width: 100%;
	height: 100px;
	margin: 0 auto;
	background-color: #fff;
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
	z-index: 99;

	@media screen and (max-width: 768px) {
		/* display: none; */
	}
`

export const ItemContainer = styled.div<Props>`
	width: 70px;
	padding: 10px;
	border-radius: 7px;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	/* gap: 5px; */
	&:hover {
		cursor: pointer;
		transform: scale(1.03);
		background-color: #fff;
		#icon {
			color: #fa8b0d;
		}
		#label {
			color: #fa8b0d;
		}
	}
	#icon {
		font-size: 30px;
		transition: all 0.25s ease-in-out;
	}
`
export const LinkMenu = styled(Link)<Props>`
	display: flex;
	gap: 1rem;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	text-decoration: none;
	color: #502314;
	font-weight: bold;
	font-size: 20px;
	transition: all 0.25s ease-in-out;
`
