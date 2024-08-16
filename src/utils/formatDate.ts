const formatDate = (date: string) => {
	return new Date(date).toLocaleDateString('pt-BR', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	})
}

export default formatDate
