import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom'
import Select from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { Button, ErrorMessage } from '../../../components'
import { Paths } from '../../../Constants/Paths'
import apiBigFomee from '../../../services/api'
import { Container, Input, Label, LabelUpload, ContainerCheckBox } from './styles'

interface Inputs {
	name: string
	price: string
	file: string
	category: string
	category_id: number
	offer: boolean
}

interface CategoryProps {
	id: number
	name: string
}

const schema = Yup.object().shape({
	name: Yup.string().required('O campo Nome é obrigatório!'),
	price: Yup.string().required('O campo Preço é obrigatório!'),
	category_id: Yup.number().required('Escolha uma categoria!'),
	offer: Yup.boolean(),
})

const EditProduct = () => {
	const navigate = useNavigate()
	const { state } = useLocation()
	console.log(' state =>', state)

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
			offer: false,
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
		productDataFormData.append('offer', data.offer.toString())
		if (data.file[0]) {
			productDataFormData.append('file', data.file[0])
		}

		toast.promise(apiBigFomee.put(`/products/${state.id}`, productDataFormData), {
			pending: 'Editando Produto...',
			success: 'Produto editado com sucesso!',
			error: 'Erro ao editar produto, tente mais tarde',
		})

		if (apiBigFomee !== undefined) {
			setTimeout(() => {
				navigate(Paths.listProduct, { replace: true })
			}, 1000)
		}
	}
	return (
		<Container>
			<form noValidate onSubmit={handleSubmit((data) => onSubmitForm(data))}>
				<Label>Nome</Label>
				<Input type="text" {...register('name')} placeholder="digite o nome do produto" defaultValue={state.name} />
				<ErrorMessage>{errors.name?.message}</ErrorMessage>
				<Label>Preço</Label>
				<Input type="number" {...register('price')} placeholder="Ex: 10" defaultValue={state.price} />
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
						defaultValue={state.file}
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
					defaultValue={state.category_id}
					render={({ field }) => {
						return (
							<Select
								{...field}
								required
								value={category.filter((option) => option.id.toString() === field.value.toString())}
								placeholder="Editar a categoria?"
								options={category.map((option) => {
									return { id: option.id, name: option.name }
								})}
								getOptionLabel={(option) => option.name}
								getOptionValue={(option) => option.id.toString()}
								onChange={(value) => value && field.onChange(value.id)}
								id="select"
							/>
						)
					}}
				></Controller>
				<ContainerCheckBox>
					<input type="checkbox" defaultChecked={state.offer} {...register('offer')} />
					<Label htmlFor="offer">Produto em oferta?</Label>
				</ContainerCheckBox>
				<Button id="button" type="submit">
					Editar Produto
				</Button>
			</form>
		</Container>
	)
}

export default EditProduct
