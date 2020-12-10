<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-touch-fullscreen" content="yes"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="MobileOptimized" content="width"/>
    <meta name="HandheldFriendly" content="true"/>
    <title>Снегурочке</title>
    <link rel="stylesheet" href="style.css"/>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap" rel="stylesheet">
    <!--<link rel="shortcut icon" type="image/x-icon" href="img/ico.png"/>-->
    <!-- production version, optimized for size and speed -->
    <!--<script src="https://cdn.jsdelivr.net/npm/vue"></script>-->
    <!-- development version, includes helpful console warnings -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
<div id="app" class="container">
    <button @click="link">подарок</button>
    <transition>
        <svg class="click" v-if="click === true" width="100" height="84" viewBox="0 0 100 84" fill=""
             xmlns="http://www.w3.org/2000/svg">
            <path d="M71.6455 0.606428C63.3036 0.561847 55.3733 4.22546 49.9999 10.6063C44.6601 4.18184 36.7078 0.507817 28.3543 0.606428C12.6946 0.606428 0 13.301 0 28.9607C0 55.7963 46.8354 81.9986 48.7342 83.0114C49.5003 83.5233 50.4995 83.5233 51.2658 83.0114C53.1646 81.9986 100 56.176 100 28.9607C100 13.301 87.3052 0.606428 71.6455 0.606428Z"
                  fill="inherit"/>
        </svg>
    </transition>
</div>

<script src="script.js"></script>
</body>
</html>