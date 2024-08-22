const formatDate = (date: string) => {
	return new Date(date).toLocaleDateString('pt-BR', {
		year: '2-digit',
		month: '2-digit',
		day: '2-digit',
		hour: 'numeric',
		minute: 'numeric',
	})
}

export default formatDate
