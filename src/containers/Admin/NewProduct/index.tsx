import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { Select } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '../../../components'
import { Container, Input, Label, LabelUpload } from './styles'

interface Inputs {
	name: string
	price: string
	upload: string
}

const NewProduct = () => {
	const [filename, setFilename] = useState('')
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>()
	return (
		<Container>
			<form noValidate>
				<Label>Nome</Label>
				<Input type="text" {...register('name')} />

				<Label>Preço</Label>
				<Input type="number" {...register('price')} />

				<LabelUpload>
					<span>
						{filename || (
							<>
								<CloudUploadIcon />
								Selecionar uma imagem
							</>
						)}
					</span>
					<input
						type="file"
						accept="image/png, image/jpeg"
						{...register('upload')}
						onChange={(e) => {
							e.target.files && setFilename(e.target.files[0].name)
						}}
					/>
				</LabelUpload>

				<Select />
				<Button id="button">Adicionar Produto</Button>
			</form>
		</Container>
	)
}

export default NewProduct
