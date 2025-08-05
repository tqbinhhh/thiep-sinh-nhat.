const invitationOverlay = document.getElementById('invitation-overlay');
const openButton = document.getElementById('open-button');
const invitationContent = document.getElementById('invitation-content');
const birthdaySong = document.getElementById('birthday-song');

function openInvitation() {
    invitationOverlay.classList.add('opened');
    invitationContent.classList.add('visible');

    // Chờ overlay biến mất rồi phát nhạc
    setTimeout(() => {
        birthdaySong.play();
    }, 1000); // 1 giây, bằng thời gian của transition
}

openButton.addEventListener('click', openInvitation);
invitationOverlay.addEventListener('click', openInvitation);