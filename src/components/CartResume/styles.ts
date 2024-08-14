import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: 20px;
	background-color: #fff;
	padding: 10px;
	width: 50%;

	#resumeContainerTop {
		display: flex;
		flex-direction: column;
		width: 90%;
		margin: 10px;

		@media screen and (max-width: 768px) {
			width: 100%;
		}
		#resumeTitle {
			text-align: center;
			font-size: 19px;
			margin-bottom: 18px;

			@media screen and (max-width: 768px) {
				font-size: 16px;
			}
		}
		#resumeItemsContainer {
			display: flex;
			justify-content: space-between;
			text-align: center;
			font-size: 19px;
			margin-bottom: 18px;
			@media screen and (max-width: 768px) {
				font-size: 16px;
			}
		}

		#resumeDeliveryContainer {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 18px;
			font-size: 18px;

			@media screen and (max-width: 768px) {
				font-size: 16px;
			}
		}
	}
	#resumeContainerBottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		margin: 10px;
		font-size: 22px;
		margin-bottom: 1rem;

		@media screen and (max-width: 768px) {
			font-size: 18px;
		}
	}
`
