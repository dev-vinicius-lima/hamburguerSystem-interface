import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { Button, ErrorMessage } from '../../../components'
import { Paths } from '../../../Constants/Paths'
import apiBigFomee from '../../../services/api'
import { Container, Input, Label, LabelUpload } from './styles'

interface Inputs {
	name: string
	price: string
	file: string
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
	category_id: Yup.number().required('Escolha uma categoria!'),
	// file: Yup.mixed().test('required', 'Arquivo obrigatório!', (value) => value !== ''),
})

const NewProduct = () => {
	const navigate = useNavigate()
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

	const onSubmitForm = async (data: Inputs) => {
		const productDataFormData = new FormData()
		productDataFormData.append('name', data.name)
		productDataFormData.append('price', data.price)
		productDataFormData.append('category_id', data.category_id.toString())
		productDataFormData.append('file', data.file[0])

		if (!data.file[0]) {
			toast.error('Selecione uma imagem!')
			return
		}

		toast.promise(apiBigFomee.post('/products', productDataFormData), {
			pending: 'Criando Produto...',
			success: 'Produto criado com sucesso!',
			error: 'Erro ao criar produto, tente mais tarde',
		})

		if (apiBigFomee !== undefined) {
			navigate(Paths.listProduct, { replace: true })
		}
	}
	return (
		<Container>
			<form noValidate onSubmit={handleSubmit((data) => onSubmitForm(data))}>
				<Label>Nome</Label>
				<Input type="text" {...register('name')} placeholder="digite o nome do produto" />

				<ErrorMessage>{errors.name?.message}</ErrorMessage>

				<Label>Preço</Label>
				<Input type="number" {...register('price')} placeholder="Ex: 10" />
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
						{...register('file')}
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
								required
								value={category.filter((option) => option.id.toString() === field.value.toString())}
								placeholder="Selecione uma categoria"
								options={category}
								getOptionLabel={(option) => option.name}
								getOptionValue={(option) => option.id.toString()}
								onChange={(value) => value && field.onChange(value.id)}
								id="select"
							/>
						)
					}}
				></Controller>

				<Button id="button" type="submit">
					Adicionar Produto
				</Button>
			</form>
		</Container>
	)
}

export default NewProduct
