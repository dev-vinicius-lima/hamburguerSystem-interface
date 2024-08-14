import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 1.5rem;
	width: 100%;
	padding: 1rem 1.5rem;
	height: 72px;
	background-color: #fff;
	margin-bottom: 1rem;
	box-shadow: 0px 0px 10px 0px rgba(87, 87, 87, 0.4);
	position: fixed;
	z-index: 50;
`
export const ContainerLeft = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 2rem;
`

export const ContainerRigth = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
	#link {
		color: #503114;
		cursor: pointer;
		text-decoration: none;
		transition: all 0.25s ease-in-out;

		&:hover {
			color: #fa8b0d;
		}
	}
`

export const PageLink = styled.a`
	#link {
		display: flex;
		align-items: center;
		cursor: pointer;
		text-decoration: none;
		color: #502314;
		font-size: 18px;
		transition: all 0.25s ease-in-out;

		&:hover {
			color: #fa8b0d;
		}
	}
`

export const ContainerText = styled.div`
	font-weight: 300;
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 5px;
	font-size: 18px;
`
export const Line = styled.div`
	height: 40px;
	border-right: 2px solid #b5b5b5;
`
