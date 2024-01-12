function NewTab(url) {
    window.open(url, '_blank');
}



function post() {
    document.getElementById('messages').innerHTML += ('<li>'+document.getElementById("NewMsg").value+'</li>')
}

window.onload = () => {
    messages.innerHTML = data.map(i => `<li>${i}</li>`).join('');
};


document.getElementById("post_bttn").addEventListener("click", function () {
    const newComment = document.getElementById("NewMsg").value;
    const commentContainer = document.getElementById("messages");
    const commentElement = document.createElement("p");
    commentElement.innerText = newComment;
    commentContainer.appendChild(commentElement);
    document.getElementById("NewMsg").value = "";
});