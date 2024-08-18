import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
	width: 220px;
	min-height: 100vh;
	background-color: #3c3c3c;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0.5rem;
	gap: 0.5rem;
	z-index: 99;
`

export const ItemContainer = styled.div`
	width: 100%;
	padding: 10px;
	border-radius: 7px;
	background-color: #fff;
	box-shadow: 0px 0px 14px rgba(255, 255, 255, 0.35);
	display: flex;
	align-items: center;
	padding: 10px;
	gap: 5px;
	#icon {
		font-size: 30px;
		color: #3c3c3c;
		transition: all 0.25s ease-in-out;
	}
	&:hover {
		cursor: pointer;
		transform: scale(1.03);
		#icon {
			color: #fa8b0d;
		}
		#label {
			color: #fa8b0d;
		}
	}
`

export const LinkMenu = styled(Link)`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	color: #3c3c3c;
	font-weight: bold;
	font-size: 20px;
	transition: all 0.25s ease-in-out;
`
