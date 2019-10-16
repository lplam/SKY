import axios from 'axios'

class API {
  getData = () => {
    return axios
      .get('https://forth-heroku-app.herokuapp.com/users')
      .then(function(response) {
        if (response.status === 200 && response != null) {
          var data = response.data
          return data
        } else {
          throw new Error('Empty data')
        }
      })
      .catch(function(error) {
        console.log(error)
        return [] // Return empty array in case error response.
      })
  }

  getDataURL = (url) =>{
    return axios
      .get(url)
      .then(function(response) {
        if (response.status === 200 && response != null) {
          var data = response.data
          return data
        } else {
          throw new Error('Empty data')
        }
      })
      .catch(function(error) {
        console.log(error)
        return [] // Return empty array in case error response.
      })
  }

  putData = (data, id) =>{
    return axios({
      method: 'put',
      url : `https://forth-heroku-app.herokuapp.com/users/${id}`,
      data: data
    })
    .then(function(response){
      console.log('thành công rồi')
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  putDataWithParamAccount = (data, Account) =>{
    return axios({
      method: 'put',
      url : `https://forth-heroku-app.herokuapp.com/users`,
      data: data,
      params: {
        account: 'account1'
      }
    })
    .then(function(response){
      console.log('thành công rồi')
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  getDataWithAccountParams = (account) =>
  {
    return axios
      .get('https://forth-heroku-app.herokuapp.com/users', {
        params: {
          account: account
        }
      })
      .then(function(response) {
        if (response.status === 200 && response != null) {
          var data = response.data
          console.log(response.data);
          console.log("thanh cong roi")
          return data
        } else {
          throw new Error('Empty data')
        }
      })
      .catch(function(error) {
        console.log(error)
        return [] // Return empty array in case error response.
      })
  }

  GenKey = (data) => {
    return axios
      .post('http://localhost:4000/key',
      {
        method: data.method,
        id: data.id,
        type: data.type,
        user: data.user,
        start: data.start
      })
      .catch(function(error) {
        console.log(error)
      })
  }


  postData = (data)=>{
    return axios
    .post('https://forth-heroku-app.herokuapp.com/users',
    {
      id: 0,
      account : data.account,
      password: data.password,
      name: data.name,
      avatar: data.avatar
    })
    .then(function(response){
      if (response.status === 201 && response != null) {
       console.log('created');
      } else {
        throw new Error('Empty data')
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default API;