import Select, { Props as SelectProps } from 'react-select'
import styled from 'styled-components'

type CombinedProps = SelectProps & {
	isOpen: boolean
}

export const Container = styled.div`
	background-color: #efefef;
	min-height: 100vh;
	width: 100%;
	padding: 20px;
	border-radius: 20px;

	#ContainerTable{
		@media screen  and (max-width: 768px) {
			overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: none;
	scrollbar-width: thin;
	scrollbar-color: #fb8b0d transparent;
	min-width: 250px;
		}
	}
`
export const ProdutcsImg = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 10px;
`

export const SelectStyled: typeof Select = styled(Select)<CombinedProps>`
	width: 200px;
	.css-13cymwt-control {
		cursor: pointer;
	}
	@media screen  and (max-width: 768px) {
		width: 150px;
	}
`

export const Menu = styled.div`
	display: flex;
	gap: 40px;
	text-align: center;
	align-items: center;
	justify-content: center;
	margin: 20px 0;
	@media screen and (max-width: 768px) {
	margin: 0 0 20px 0;
	padding: 0px 0px 0px 210px;
	gap: 1rem;
	font-size: 14px;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: none;
	scrollbar-width: thin;
	scrollbar-color: #fb8b0d transparent;
	min-width: 250px;
	}
`
export const LinkMenu = styled.a`
	color: #502314;
	cursor: pointer;
	padding-bottom: 5px;
`
