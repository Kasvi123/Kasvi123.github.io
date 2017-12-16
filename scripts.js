var likeCount = 0;

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === 'wander' && password === 'wander') {
        document.getElementById('error').classList.add('hide');
        window.location.href = 'home.html';
    } else {
        document.getElementById('error').classList.remove('hide');
    }
}

function like() {
    var likes = document.getElementById('likes');
    likeCount += 1;
    likes.innerHTML = 'Likes: ' + likeCount;
}

function goToPage(pageName) {
	window.location.href = pageName + '.html';
}
