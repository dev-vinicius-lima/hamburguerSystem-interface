import EditIcon from '@mui/icons-material/Edit'
import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	
`

export const Img = styled.img`
	width: 100px;
	height: 90px;
	object-fit: cover;
	border-radius: 5px;
`

export const EditIcons = styled(EditIcon)`
	cursor: pointer;
	color: #323d5d;
`
