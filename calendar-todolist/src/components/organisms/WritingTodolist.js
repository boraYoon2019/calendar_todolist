import React, { PureComponent } from 'react';
import UlList from '../atoms/UlList';
import Form from '../atoms/Form';
import ListLayout from '../atoms/ListLayout';
import Input from '../atoms/Input';
import ListItem from '../molecules/ListItem';
import Button from '../atoms/Button';
import CircleButton from '../atoms/CircleButton';
import FlexContainer from '../atoms/FlexContainer';
class WritingTodolist extends PureComponent {

  constructor() {
    super();
    this.state = {
      title: '',
      listItem: '',
      list: []
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.makeList = this.makeList.bind(this);
    this.addTodolistItem = this.addTodolistItem.bind(this);
    this.addTodolistItemByEnter = this.addTodolistItemByEnter.bind(this);
    this.deletelistItem = this.deletelistItem.bind(this);    
  }
  
  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }  
  handleItemChange(event) {
    this.setState({listItem: event.target.value});
  }

  makeList(event) {
    event.preventDefault();
    // 해당 리스트들 사가 액션 - post로 넘겨서 리스트 만들기
    const todolist = {
      "title": this.state.title,
      "feedback": "",
      "start_at": "",
      "end_at": "",
      "test" : false,
      "comments": this.state.list
    }
    this.props.makeList(todolist);
    
    this.setState({
      title: '',
      listItem: '',
      list: []
    });
  }

  addTodolistItemByEnter(event) {

    if( event.key== 'Enter' ){

      if(this.state.listItem === '') {
        alert('내용을 입력해주세요 :)');        
        event.preventDefault();
        return;
      }

      const list = Object.assign({}, this.state.list);
      this.setState({ list: this.state.list.concat(
        {
          "id": list.length>0? list[list.length-1].id+1 : 0,
          "detail_title": event.target.value,
          "detail_context": "",
          "is_completed": false
        }
      )});

      this.setState({ listItem: ''});
      event.preventDefault();
    }
  }

  addTodolistItem(event) {
    event.preventDefault();
    
    if(this.state.listItem === '') {
      alert('내용을 입력해주세요 :)');
      return;
    }
    const list = this.state.list;      
      this.setState({ list: this.state.list.concat(
        {
          "id": list.length>0? list[list.length-1].id+1 : 0,
          "detail_title": this.state.listItem,
          "detail_context": "",
          "is_completed": false
        }
      )});

      this.setState({ listItem: ''});
      // this.state.listItem = '';
  }
  
  deletelistItem(event) {
    event.preventDefault();
    const id=event.target.value;

    this.setState( 
      { list: this.state.list.filter(item=>{ return item.id!=id; }) } 
    );
    event.preventDefault();
  }
  
	render() {

    const {
      handleTitleChange, 
      handleItemChange, 
      addTodolistItem, 
      addTodolistItemByEnter,
      deletelistItem,
    } = this;

    const { list, listItem, title} = this.state;
    const listItems = list.map((item, index) => 
      <ListItem 
        key={index}
        id={index}
        onXClick={deletelistItem}
      >
      {item.detail_title}
      </ListItem>
    );

  	return (
      <>
        <ListLayout>
          <Form inList='true'>
            <Input
              maxWidth="18em"
              fontSize="1.4rem"
              placeholder="Todolist Title"
              value={this.state.title}
              onChange={handleTitleChange}
              title="true"
              id="title"
            ></Input>
            <FlexContainer justifyContent='space-between'>
              <Input 
                placeholder="내용 입력 후 Enter!"
                value={this.state.listItem}
                title="false"
                margin="0"
                onChange={handleItemChange}
                onKeyPress={addTodolistItemByEnter}
                id="content"
              ></Input>
              <CircleButton onClick={addTodolistItem} margin='.2em' maxWidth='1.2em'>+</CircleButton>
            </FlexContainer>
            
            <UlList>
              {listItems}
            </UlList>
            <Button onClick={this.makeList}>만들기</Button>
          </Form>
        </ListLayout>
      </>
		);
	}
}

export default WritingTodolist;