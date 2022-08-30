import App from './src/App';

export default App;















// // import React, { useState } from 'react';
// // import { Text, View } from 'react-native';
// // import axios from 'axios';
// // import MyInput from './src/components/MyInput';
// // import MyButton from './src/components/MyButton';
// // import { WebView } from 'react-native-webview';

// // const App = () => {    
// //     const [search, setSearch] = useState('');
// //     const [result, setResult ] =useState({});
// //     const [name, setName] = useState('');
// //     const [url, setUrl] = useState('');

// //     const onPressButton = () => {
// //         axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${search}&size=2`,
// //             { headers: { 
// //                 Authorization: 'KakaoAK 9863ff67c85145b5b83608df6fdad5f3'}})
// //             .then((res) => { console.log(res.data.documents);
// //                             // setName(res.data.documents[0].place_name);
// //                             // setUrl(res.data.documents[0].place_url);
// //                             // setResult(res.data.documents);
// //                             }
// //                 )
// //             .catch(err => {console.log(err.message)})

// //         // console.log('hello');
// //     };

// //     return(
// //         <View>
// //             <MyInput onChangeText={text => setSearch(text)}/>
// //             <MyButton title="검색"  onPress={onPressButton} />
// //             <Text>음식점은 {name}</Text>
// //             {/* <WebView source={{ uri: url }} style={{ marginTop: 10 }} /> */}
// //         </View>
// //     );
// // };


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