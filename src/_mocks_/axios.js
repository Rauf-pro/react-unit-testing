const axios = {
    get: jest.fn(() => {
      return Promise.resolve({
        data: [
          { id: 100, name: 'Leanne Graham', email: 'leanne@example.com', phone: 4612145112 },
          { id: 200, name: 'Ervin Howell', email: 'ervin@example.com', phone: 4612145113 },
          { id: 300, name: 'Clementine Bauch', email: 'clementine@example.com', phone: 46121451144 }
        ]
      })
    })
  };
  export default axios;