<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>おしゃべりずんだもん</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>
    <h2>おしゃべりずんだもん</h2>
    <button id="btn">start</button>
    <div id="content"></div>

    <!-- 文字起こし用js -->
    <script src="{{ asset('/js/Audio_to_transcription.js') }}"></script>
    <script src="{{ asset('/js/Open_ai_api.js') }}"></script>

    <body>
        <html>
