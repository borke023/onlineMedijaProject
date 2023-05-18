const accessKey = 'UTdnoh3OYzjpP4fOi42ls8irvbaFHJzmWPJrY3qCMVI'; // Replace with your Unsplash API access key
const apiUrl = 'https://api.unsplash.com/photos/random';
const newPhotoBtn = document.getElementById('new-photo-btn');
const photo = document.getElementById('photo');
const imgWrapper = document.getElementById('generate-img-wrapper')
newPhotoBtn.addEventListener('click', () => {
    imgWrapper.style.display = 'block';
  fetch(`${apiUrl}?client_id=${accessKey}`)
    .then(response => response.json())
    .then(data => {
      photo.src = data.urls.regular;
      photo.alt = data.alt_description;
    })
    .catch(error => console.error(error));
});
