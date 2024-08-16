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
