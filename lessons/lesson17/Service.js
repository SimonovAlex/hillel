import { API_URL, USER_ID } from "./constants.js";
import {cookedData } from "./utils.js";

export default class Service {
    static async getInitialTodos () {

        try{
            const data = await fetch(`${API_URL}/users/${USER_ID}/todos`);
            const json = await data.json();
            return json.map(cookedData);
        
        } catch(e){
            console.error(e)
        }
    }
    
    static async createTodo (item) {
        try{

            const data = await fetch(API_URL + '/todos/', {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })

            if(!data.ok){
              throw new Error(data.status);
            }


            const json = await data.json();
            
            return json;
        }
        catch(e){          
            console.error(e)

        }
    }

    static async deleteTodo (id) {
        await fetch(`${API_URL}/todos/${id}`, {
            method: 'DELETE'
          })
    }

    static async updateTodo (id, data) {

        try{
            const responce = await fetch(`${API_URL}/todos/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                 data,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              }
    
            )
    
    
            if(!responce.ok){
                throw new Error(responce.status);
              }
    
    
              const json = await responce.json();
              
              return json;
        }
        catch(e){          
            console.error(e)

        }

        // .then(data => {
        //     // console.log(data)
        //     if(!data.ok){
        //       throw new Error(data.status);
        //     }
        //     return data
        //   })
        //   .then(async data => {
        //     const json = await data.json()
        //     const idx = state.findIndex(item => item.id === json.id);
        //     state[idx] = cookedData(json)
        //   }).then(data => {
        //     renderLi();
        //     return data
        //   })
    }

}