
export const joinIn = async (action) => {

    const data = {
      username: action.payload.id, 
      password: action.payload.pw
    }

    const response = await fetch(`http://15.165.223.171:8000/accounts/signup/`,
    {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    
    if(!response.ok) {

      switch (response.status) {
        case 400:
          throw new Error('non_field_errors');

        default:
          throw new Error(Object.getOwnPropertyNames(result)[0]);
      }

    }

    return result;
};


export const signIn = async (action) => {
    const data = {
      "username":action.payload.id, 
      "password":action.payload.pw
    }
    
    const response = await fetch(`http://15.165.223.171:8000/accounts/login/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    
    if(!response.ok) {

      switch (response.status) {
        case 400:
          throw new Error('non_field_errors');

        default:
          throw new Error(Object.getOwnPropertyNames(result)[0]);
      }
    }

    return result;
};