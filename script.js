<><video id="responsiveVideo" controls>
    Your browser does not support the video tag.
</video><script>
        const video = document.getElementById('responsiveVideo');

        function loadVideo() { }
        const screenWidth = window.innerWidth;
        let videoSource = '';

        if (screenWidth {'>'}= 1024) {videoSource = 'video-desktop.mp4'};
        else if (screenWidth {'>'}= 768) {videoSource = 'video-tablet.mp4'};
        else {videoSource = 'video-mobile.mp4'};
        

        video.src = videoSource;
        video.load();
    

        // Load video on page load
        window.onload = loadVideo;

        // Reload video on window resize (optional)
        window.onresize = loadVideo;
    </script></>
document.getElementById('experienceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const experience = document.getElementById('experience').value;
    alert('Thank you for sharing your experience!');});
