
function addGif(res) {
    let $gifDiv = $("<div>")
    let $gif = $("<img>", {
        src: res,
        class: "gif-style"
    })
    $gifDiv.append($gif)
    $gifContainer.append($gifDiv)
}

async function getGif() {
    let searchTerm = $input.val();
    $input.val('');
    const res = await axios.get('http://api.giphy.com/v1/gifs/random', {
        params: {
            api_key: "ifZbd9n1eH1RoG2ncIvhDnBplV162Tji",
            tag: searchTerm
        }
    })
    const gifUrl = res.data.data.images.original.url;
    addGif(gifUrl)
}

$("form").on('submit', async (e) => {
    e.preventDefault();
    getGif();
})

$("#remove-btn").on("click", () => {
    $gifContainer.empty()
})

const $input = $("#search-input")
const $gifContainer = $('#gifs-container')
