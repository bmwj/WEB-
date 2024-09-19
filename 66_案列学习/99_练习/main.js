function imagePreview(){
    const hightlight = document.querySelector('.gallery-hightlight');
    const previews = document.querySelectorAll('.room-preview img')
    
    previews.forEach(preview => {
        preview.addEventListener('click',function(){
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace('small','big');
            console.log(bigSrc);
            hightlight.src = bigSrc;
            previews.forEach(preview =>preview.classList.remove('room-active'));
            preview.classList.add('room-active');
        });
    });
}
imagePreview();