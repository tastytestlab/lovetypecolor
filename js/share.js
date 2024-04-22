const url = 'https://justest.shop/';

function kakaoShare() {
    Kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
        objectType: 'feed',
        content: {
            title: '연애유형 컬러 테스트!',
            description: '핫한 질문들로 알아보는 연애유형 컬러 테스트!',
            imageUrl:
                'img/share.png',
            link: {
                mobileWebUrl: 'https://justest.shop/',
                webUrl: 'https://justest.shop/',
            },
        },
        itemContent: {
            profileText: 'Kakao',
            profileImageUrl: 'https://justest.shop/',
            titleImageUrl: 'img/share.png',
            titleImageText: '',
            titleImageCategory: '',
        },
        social: {
            likeCount: 10,
            commentCount: 20,
            sharedCount: 30,
        },
        buttons: [
            {
                title: '웹으로 이동',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: 'https://developers.kakao.com',
                },
            },
            {
                title: '앱으로 이동',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: 'https://developers.kakao.com',
                },
            },
        ],
    });
}    