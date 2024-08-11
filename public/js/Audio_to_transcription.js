const speech = new webkitSpeechRecognition();
speech.lang = 'ja-JP';

const btn = document.getElementById('btn');
const content = document.getElementById('content');

btn.addEventListener('click', function () {
    // 音声認識をスタート
    speech.start();
});

speech.addEventListener('result', function (e) {
    // 音声認識で取得した情報を、コンソール画面に表示
    console.log(e);
    // 読み取った音声をHTMLに表示
    var autotext = e.results[0][0].transcript;
    console.log(autotext);
    content.innerHTML += '<div>' + autotext + '</div>';

    // autotextをAjaxを使用してLaravelに送信
    $.ajax({
        url: '/openai-api',  // LaravelのルートURL
        method: 'POST',
        data: { autotext: autotext },  // 送信するデータ
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')  // CSRFトークンをヘッダーに追加
        },
        success: function (response) {
            console.log("データが正常に送信されました。", response);
        },
        error: function (xhr, status, error) {
            console.error("エラーが発生しました。", xhr.responseText);
        }
    });
});