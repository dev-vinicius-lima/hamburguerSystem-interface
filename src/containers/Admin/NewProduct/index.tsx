import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'
import * as Yup from 'yup'

import { Button, ErrorMessage } from '../../../components'
import apiBigFomee from '../../../services/api'
import { Container, Input, Label, LabelUpload } from './styles'

interface Inputs {
	name: string
	price: string
	upload: string
	category: string
	category_id: number
}

interface CategoryProps {
	id: number
	name: string
}

const schema = Yup.object().shape({
	name: Yup.string().required('O campo Nome é obrigatório!'),
	price: Yup.string().required('O campo Preço é obrigatório!'),
	category: Yup.object().required('Escolha uma categoria!'),
	// upload: Yup.string(),
})

const NewProduct = () => {
	const [filename, setFilename] = useState('')
	const [category, setCategory] = useState<CategoryProps[]>([])
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<Inputs>({
		defaultValues: {
			category_id: 0,
		},
		resolver: yupResolver(schema) as never,
	})

	useEffect(() => {
		apiBigFomee
			.get('/categories')
			.then((response) => {
				setCategory(response.data)
			})
			.catch((error) => console.error('Failed to fetch categories', error))
	}, [])
	return (
		<Container>
			<form noValidate onSubmit={handleSubmit((data) => console.log('teste submit =>', data))}>
				<Label>Nome</Label>
				<Input type="text" {...register('name')} />

				<ErrorMessage>{errors.name?.message}</ErrorMessage>

				<Label>Preço</Label>
				<Input type="number" {...register('price')} />
				<ErrorMessage>{errors.price?.message}</ErrorMessage>

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

				<Controller
					name="category_id"
					control={control}
					render={({ field }) => {
						return (
							<Select
								{...field}
								value={category.filter((option) => option.id.toString() === field.value.toString())}
								placeholder="Selecione uma categoria"
								options={category}
								getOptionLabel={(option) => option.name}
								getOptionValue={(option) => option.id.toString()}
								onChange={(value) => value && field.onChange(value.id)}
							/>
						)
					}}
				></Controller>
				<ErrorMessage>{errors.category?.message}</ErrorMessage>

				<Button id="button" type="submit">
					Adicionar Produto
				</Button>
			</form>
		</Container>
	)
}

export default NewProduct
