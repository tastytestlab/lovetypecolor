const url = 'https://https://justest.shop/';

function setShare() {
    var mainImg = document.querySelector('#mainImage');
    var mainAlt = mainImg.firstElementChild.alt;
    const shareTitle = '연애유형 컬러 테스트';
    const shareDes = infoList[mainAlt].name;
    const shareImage = url + 'img/image-' + mainAlt + '.png';
    const shareURL = url;
}

function kakaoShare() {
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDes,
            imageUrl:
                shareImage,
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL,
            },
        },

        buttons: [
            {
                title: '웹으로 이동',
                link: {
                    mobileWebUrl: shareURL,
                    webUrl: shareURL,
                },
            },

        ],
    });
}