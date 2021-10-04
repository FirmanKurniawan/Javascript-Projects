<script>
	import Notes from './components/Notes.svelte'
	import AddNote from './components/AddNote.svelte'
	import moment from 'moment'

	let tgl = ''

	const getDate = () => {
		tgl = moment().format('MMMM Do YYYY, h:mm:ss a')
	}

	setInterval(() => {
		getDate()
	}, 1000)
	

</script>

<main>
	<p class="created">created with 💓 by <a href="https://gitlab.com/yusup209">muhammad </a><a href="https://github.com/yusup209">yusup</a> using <a href="https://svelte.dev">svelte</a></p>
	<h1 class="text-center">Simple Notes</h1>
	<p class="text-center">{ tgl }</p>
	<AddNote />
	<Notes />
</main>

<style scoped>
	p{margin-bottom: 30px;}
	p.created{
		position: absolute;
		top: 0;
		right: 0;
		padding: 10px;
		font-style: italic;
		margin-top: 0px;
		color: #888;
	}
</style>