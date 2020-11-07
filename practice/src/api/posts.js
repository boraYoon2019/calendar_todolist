
import moment from "moment"

export const getTodolists = async date => {
  // 기본적으로 유닉스 타임스탬프형 String date를 매개변수로 받지만,
  // string (YYYY-MM-DD) 형태 String을 받아도 상관없음. 

    const token = localStorage.getItem('token');

    const dateString = moment(new Date(date)).format('YYYY-MM-DD').toString();

      const response = await fetch(`http://15.165.223.171:8000/api/posts/?search=${dateString}`,
      {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${token}`
        }
      });

      const rawData = await response.json();

      if(!response.ok) {
        switch (response.status) {
          case 401:
            throw new Error('Signature has expired');
          default:
            throw new Error(Object.getOwnPropertyNames(rawData)[0]);
          }
      }

      const refinedData = await rawData.map(function(obj){ 
        
        let newData = {};
        newData['id'] = obj.id;
        newData['title'] = obj.title;        
        newData['feedback'] = obj.feedback;        
        newData['comments'] = obj.comments;
        
        return newData;
      });

      return refinedData;

};

export const addTodolist = async todolist_jsonObject => {
    const token = localStorage.getItem('token');

      const listResponse = await fetch(`http://15.165.223.171:8000/api/posts/`,
      {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify(todolist_jsonObject)
      });

      let rawData = await listResponse.json();
      console.log('addTodolist', rawData);
      if(!listResponse.ok) {
        switch (listResponse.status) {
          case 400:
            throw new Error('non_field_errors');
  
          default:
            // throw new Error(Object.getOwnPropertyNames(rawData)[0]);
            throw new Error(rawData[0],rawData[1]);
        }  
      }

      const refinedData = {};
      refinedData['id'] = rawData.id;
      refinedData['title'] = rawData.title;        
      refinedData['feedback'] = rawData.feedback;      
      refinedData['comments'] = [];

      console.log(refinedData.id);
      const itemsResponse = await fetch(`http://15.165.223.171:8000/api/posts/${refinedData.id}/list/`,
      {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify(todolist_jsonObject.comments)
      });

      const todolistItems_jsonArray = await itemsResponse.json();
      console.log('addTodolistItems', todolistItems_jsonArray);

      if(!itemsResponse.ok) {
        switch (itemsResponse.status) {
          case 400:
            throw new Error('non_field_errors');
  
          default:
            throw new Error(todolistItems_jsonArray[0], todolistItems_jsonArray[1]);
        }  
      }
      // const refinedItemData = 

      refinedData.comments = todolistItems_jsonArray;
      return refinedData;
};


export const deleteTodolist = async todolistId => {
  const token = localStorage.getItem('token');

    const response = await fetch(`http://15.165.223.171:8000/api/posts/${todolistId}/`,
    {
      method: 'delete',
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    });

    if(!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error('non_field_errors');

        default:
          // throw new Error(Object.getOwnPropertyNames(rawData)[0]);
          throw new Error(response.json());
      }  
    }

    return response;

};

export const deleteTodoItem = async (todolistId, itemId) => {
  const token = localStorage.getItem('token');

    const response = await fetch(`http://15.165.223.171:8000/api/posts/${todolistId}/list/${itemId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    });

    console.log('deleteTodoItem', response);

    if(!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error('non_field_errors');

        default:
          throw new Error(response.json()[0], response.json()[1]);
      }  
    }

    return response;

};

export const updateTodoItem = async (todolistId, itemId, content) => {
  const token = localStorage.getItem('token');
  console.log('updateTodoItem, id, content', todolistId,itemId,content);
    const response = await fetch(`http://15.165.223.171:8000/api/posts/${todolistId}/list/${itemId}/`,
    {
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(content)
    });

    const rawData = await response.json();
    console.table(rawData);
    if(!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error('non_field_errors');

        default:
          // throw new Error(rawData[0],rawData[1]);
          // console.log(response);
          throw new Error(rawData);
      }  
    }
    
    const refinedData = {};
    refinedData['id'] = rawData.id;
    refinedData['post'] = rawData.post;        
    refinedData['detail_title'] = rawData.detail_title;
    refinedData['detail_context'] = rawData.detail_context;
    refinedData['is_completed'] = rawData.is_completed;
      
    return refinedData;

};
