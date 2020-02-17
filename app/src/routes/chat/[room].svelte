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

                room = rooms.filter((element) => {
                    return element.name === room
                })[0]
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
    }
</style>

<div class="hero is-large" style="background-image: url(/img/rooms/{room.img})">
    <div class="hero-body">
        <ul class="container">
            {#each messages as message}
                <li><Message from={message.from} at={message.at}>{message.content}</Message></li>
            {/each}            
        </ul>
    </div>

    <div class="hero-footer container">
        <form class="form section">
            <div class="field has-addons">
                <div class="control">
                    <input
                        name="message"
                        type="text"
                        placeholder="Write a message"
                        class="input is-medium is-rounded"
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