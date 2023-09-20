async function shortUrl(){
    let url = document.getElementById('url').value;
    let simple = document.getElementById('simple_url');
    let response = await fetch('http://localhost:3000/create',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            url
        })
    })
    response = await response.json()
    simple.innerHTML = `Tu url simplificada es <a target="_blank" href="${response.shorted_url}">${response.shorted_url}</a>`
}