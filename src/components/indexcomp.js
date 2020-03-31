import React , {Component} from 'react';


class FirstItems extends React.Component{
    state ={
        data:[]
    }

    componentDidMount(){
      const gitInfo= (name)=> fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${name}`);
     const array =[]
     gitInfo('adele')
     .then(res=>{
            array.push(res.json());
            return gitInfo('selena')})
        .then(res=>{
             array.push(res.json());
            return gitInfo('charlie puth')})
        .then(res=>
             array.push(res.json()))
        .then(res=> this.setState({data :array}))
        .then(res=>console.log(this.state.data))
        .catch(err=> console.log(err))
        
    }
    render(){
       return <h1>stars</h1>
    }
}

export default FirstItems;