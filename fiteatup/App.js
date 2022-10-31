import App from './src/App';

export default App;





// //WebView 사용하기
/* global kakao */
// import React from 'react';
// import { View } from 'react-native';
// import { WebView } from 'react-native-webview';

// const App = () => {

//     const MapHTML = `
        // <!DOCTYPE html>
        // <html>
        // <head>
        //     <meta charset="utf-8">
        //     <title>지도 생성하기</title>
            
        // </head>
        // <body>
        // <div id="map" style="width:100%; height:500px; border: 1px solid black"></div>
        
        // <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b0ece2dec2b280e9e198f8f6f3e01f17"></script>
        // <script>
        // var mapContainer = document.getElementById('map'),
        //     mapOption = { 
        //         center: new kakao.maps.LatLng(33.450701, 126.570667),
        //         level: 3
        //     };
        
        // var map = new kakao.maps.Map(mapContainer, mapOption); 
        // </script>
        // </body>
        // </html>
//     `

//     return(
//         <WebView source={{ uri: 'http://localhost:3000/' }} />
//     );
// };
// export default App;