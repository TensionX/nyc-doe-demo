function loading(show) {
    const progressBar = document.querySelector('.progress-bar');
    const overlay = document.querySelector('.loading-overlay');

    if (show) {
        overlay.style.display = 'block';
        progressBar.style.display = 'block';
        // progressBar.style.animation = 'loading 2s infinite linear';
    } else {
        overlay.style.display = 'none';
        // progressBar.style.animation = 'none';
        progressBar.style.display = 'none';
    }
}

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    document.body.appendChild(progressBar);

    const overlay = document.createElement('div');
    overlay.classList.add('loading-overlay');
    document.body.appendChild(overlay);


