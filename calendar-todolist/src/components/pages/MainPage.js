import React, { PureComponent } from 'react';
import MainTemplate from '../templates/MainTemplate';
import Header from '../organisms/Header';
import BigCalendar from '../organisms/BigCalendar';
import Charts from '../organisms/Charts';
import ModalTemplate from '../templates/ModalTemplate';
import ModalPortal from '../../ModalPortal';
import SignInModal from '../organisms/Modal';

// 리덕스
import { connect } from 'react-redux'
import * as actions from '../../modules/redux';

// 리덕스 스토어의 상태를 조회하거나, 액션을 디스패치 할 수 있는 컴포넌트.
class MainPage extends PureComponent {

  constructor() {
    super();
    this.state = {
      first: true
    };
    this.handleCalendarDataChange = this.handleCalendarDataChange.bind(this);
    this.onSelectEvent = this.onSelectEvent.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    console.log('MainPage componentDidMount');
    const date = new Date();
    if(localStorage.getItem('token')!==null) {
      this.handleCalendarDataChange(date, 'login');
    }
    this.setState({first:false});
  }
  
  componentDidUpdate() {
    console.log('MainPage componentDidUpdate');
  }

  handleCalendarDataChange(stringDate, when) {
    this.props.requestCalendarData(stringDate, when);
  }

  onSelectEvent(data) {
    this.props.requestTodolists(data.start);
    this.props.history.push('/writing');
  }
  
  logout() {
    localStorage.removeItem('token');
    this.props.setSignIn(false);
    alert('로그아웃 되었습니다 :)');
  }
  
  render() {
    const {first} = this.state;
    return (
      <>
      {(first && !this.props.isSignIn) && (
        <ModalPortal>
          <ModalTemplate>   
            <SignInModal 
              onXClick={
                ()=> {
                  this.setState({
                    first: false
                  });
                }
              }
            />
          </ModalTemplate>
        </ModalPortal>
      )}{' '}
      <MainTemplate 
        headerSection={
          <Header 
            modal={this.props.modal}
            isSignIn={this.props.isSignIn}
            onWritingButtonClick={this.props.goToWriting}
            onSignButtonClick={
              this.props.isSignIn && localStorage.getItem('token')!== null? 
              this.logout : this.props.showModal
            }
            page='main'
          />
        }>
        <BigCalendar
          onSelectEvent={(data)=> { this.onSelectEvent(data) }}
          onRangeChange={ 
            (data) => {
              this.handleCalendarDataChange(data.start, 'onRangeChange');
            }
          }
          events={
            this.props.isSignIn? this.props.calendarData.data : []
          }
          isSignIn={this.props.isSignIn}
        />
        {this.props.isSignIn && (<Charts onRangeChange={(data)=>{}}/>)}
      </MainTemplate>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isSignIn: state.redux.isSignIn,
  modal: state.redux.modal,
  calendarData: state.redux.calendarData,
  date: state.redux.date
});

const mapDispatchToProps = (dispatch) => ({
  setSignIn: (boolean) => dispatch(actions.setSignIn(boolean)),
  showModal: () => dispatch(actions.showModal()),
  closeModal: () => dispatch(actions.closeModal()),
  goToWriting: () => dispatch(actions.goToWriting()),
  requestCalendarData: (date, when) => dispatch(actions.requestCalendarData(date, when)),
  requestTodolists: (date) => dispatch(actions.requestTodolists(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);