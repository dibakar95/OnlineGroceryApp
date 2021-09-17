

export const serviceProducts=()=>{
     return fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data =>data)
}

export const signUp=(payload)=>{
    console.log("payload",payload)
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title:payload.title ,
          body:payload.body ,
          userId:payload.id ,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) =>json);
}

