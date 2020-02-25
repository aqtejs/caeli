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
    import MSG from '../../components/Message.svelte'
    import { onMount } from 'svelte'
    import { Message } from '../../classes/Message'

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
                console.error('There was an error when loading rooms')
            })
    })

    let socket = io()
    let messages = []

    socket.on('chat message', (data) => {
        messages = [...messages, data]
    })

    function send(event){
        let target = event.target
        let msg = target.elements[0].value.trim()

        if(msg != "")
            socket.emit('chat message', new Message(msg))

        target.reset()
    }
</script>

<style lang="scss" scoped>
    .hero{
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        height: 100%;
    }

    .hero-footer{
        position: sticky;
        bottom: 0;
        left: 0;
        right: 0;

        form, .field, .control.msg, input{
            width: 100%;
        }
    }
</style>

<svelte:head>
    <title>{room.name != null ? room.name : "Loading chat..."}</title>
</svelte:head>

<div class="hero is-fullheight is-relative is-dark" style="background-image: url(/img/rooms/{room.img})">
    <div class="hero-body">
        <ul class="container">
            {#each messages as message}
                <li><MSG from={message.from} at={message.at}>{message.content}</MSG></li>
            {/each}            
        </ul>
    </div>

    <div class="hero-footer">
        <form class="form section" on:submit|preventDefault={send}>
            <div class="field has-addons">
                <div class="control msg">
                    <input
                        name="message"
                        type="text"
                        placeholder="Write a message"
                        class="input is-medium is-rounded is-success"
                        autocomplete="off"
                        maxlength="280"
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