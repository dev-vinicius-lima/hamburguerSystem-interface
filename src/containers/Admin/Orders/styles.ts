import Select, { Props as SelectProps } from 'react-select'
import styled from 'styled-components'

type CombinedProps = SelectProps & {
	isOpen: boolean
}

interface LinkMenuProps {
	isActiveStatus: boolean
}

export const Container = styled.div`
	background-color: #efefef;
	min-height: 100vh;
	width: 100%;
	padding: 20px;
	border-radius: 20px;
`
export const ProdutcsImg = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 10px;
`

export const SelectStyled: typeof Select = styled(Select)<CombinedProps>`
	width: 220px;
	.css-13cymwt-control {
		cursor: pointer;
	}
`

export const Menu = styled.div`
	display: flex;
	gap: 40px;
	justify-content: center;
	margin: 20px 0;
`
export const LinkMenu = styled.a<LinkMenuProps>`
	color: #502314;
	cursor: pointer;
	font-weight: ${(props) => (props.isActiveStatus ? 'semibold' : 'normal')};
	color: ${(props) => (props.isActiveStatus ? '#fa8b0d' : '#502314')};
	border-bottom: ${(props) => (props.isActiveStatus ? '2px solid #fa8b0d' : 'none')};
	padding-bottom: 5px;
`
