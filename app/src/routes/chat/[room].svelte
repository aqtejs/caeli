<script context="module">
    export async function preload(page, session){
        const { room } = page.params

        return {
            room
        }
    }
</script>

<script>
    import io from 'socket.io-client'
    import Message from '../../components/Message.svelte'
    import { onMount } from 'svelte'

    export let room

    onMount(() =>{
        import('../../config/rooms.json')
            .then((res) => {
                var rooms = res.default                

                var correspondingRoom = rooms.filter((element) => {
                    return element.name === room
                })[0]

                room = correspondingRoom || room 
            })
            .catch(() => {
                console.error('boh, error')
            })
    })

    let socket = io()
    let messages = []

    socket.on('chat message', (data) => {
        messages = [...messages, data]
    })
</script>

<style scoped>
    .hero{
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        height: 100%;
    }

    .is-sticky-bottom{
        position: sticky;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>

<div class="hero is-fullheight is-relative is-dark" style="background-image: url(/img/rooms/{room.img})">
    <div class="hero-body">
        <ul class="container">
            {#each messages as message}
                <li><Message from={message.from} at={message.at}>{message.content}</Message></li>
            {/each}            
        </ul>
    </div>

    <div class="hero-footer">
        <form class="form section is-sticky-bottom">
            <div class="field has-addons">
                <div class="control">
                    <input
                        name="message"
                        type="text"
                        placeholder="Write a message"
                        class="input is-medium is-rounded"
                        autocomplete="off"
                    />
                </div>

                <div class="control">
                    <button
                        type="submit"
                        class="button is-medium is-rounded is-success"
                    >
                        Send
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>