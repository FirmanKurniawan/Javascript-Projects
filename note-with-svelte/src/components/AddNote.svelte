<script>
    import {db} from '../configs/firestore'

    let title
    let desc

    const addNote = () => {
        if (title.trim() != ""){
        db.collection('notes').add({
            title, desc
        })} else  {
            alert('judul tidak boleh kosong ya.... hehe 😎')
        }
        title = ''
        desc = ''
    }
</script>

<form on:submit|preventDefault={addNote}>
    <h3>Add Note</h3>
    <input type="text" bind:value={title} required>
    <textarea cols="10" rows="3" bind:value={desc}></textarea>

    <div class="actions">
        <button>+</button>
    </div>
</form>


<style>
    form{
        width: 600px;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 0px 10px 10px 10px;
        box-shadow: 0px 2px 3px rgba(0,0,0,.1);
        display: grid;
        margin-bottom: 25px;
    }

    


</style>