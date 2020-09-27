import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import store from '../../store';

// 정의된 Template에 데이터를 넣어 뷰를 완성시키는 단계.
// 클래스 시스템의 인스턴스, 객체의 구현체, 페이지 설계도로 그린 페이지 그 자체.

class MainPage extends React.Component {

  constructor(props) {
    super();
    this.state = {
			// 이 컴포넌트의 초기 state 값 설정
      isLogin: false,
      data:''
		};
		this.getCalendarData = this.getCalendarData.bind(this);
  }

  getCalendarData(month) {
    console.log(month);
    fetch("http://15.165.223.171:8000/api/posts/?search=09")
      .then(res => res.json())
      .then(json => {
        const data = json.map(function(obj){ 
          let newData = {};
          newData['title'] = obj.title;
          newData['start'] = obj.start_at;
          newData['end'] = obj.end_at !== null? obj.end_at: obj.start_at;
          return newData;
       });
       console.log(data);
      })

    // 유저의 로그인 상태에 따라 데이터 받아오는 로직
    // fetch('http://localhost:3000').then((res) => {
    //   if (res.status === 200 || res.status === 201) { 
    //     // 성공 HTTP 상태 코드면

    //     res.text().then(text => console.log(text)); // 텍스트 출력
    //   } else { 
    //     // 실패 HTTP 상태 코드면
    //     console.error(res.statusText);
    //   }
    // }).catch(err => console.error(err));
  }
  
  componentDidMount() {
    this.getCalendarData(5);
  }

  render() {
    return <MainTemplate></MainTemplate>;
  }
}

export default MainPage;