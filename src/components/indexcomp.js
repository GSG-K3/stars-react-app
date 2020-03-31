import React , {Component} from 'react';
import "./indexcomp.css"

class FirstItems extends React.Component{
    state ={
        data:[]
    }

    async componentDidMount(){
      const gitInfo= (name)=> fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${name}`);
     const array =[]
     await gitInfo('adele')
     .then(res=>res.json())
        .then(data=>{array.push(data);
           return gitInfo('selena gomez')})
        .then(res=>res.json())
        .then(data=> {array.push(data);
            return gitInfo('massari')} )
        .then(res=> res.json())
        .then(data=>{array.push(data);
            return this.setState({data : array})})

        .catch(err=> console.log(err))
        
    }

    render(){
       return <div>
        {
            this.state.data.map((item)=>{
                return <div className="ItemDiv">
                    <h2>{item.artists[0].strArtist}</h2>
                    <img src={item.artists[0].strArtistFanart} alt="artist img"/>
                    <span>
            <p>{item.artists[0].strBiographyEN}</p>
                    </span>
                    <a href={item.artists[0].strWebsite}>Website</a>
                    <a href={item.artists[0].strFacebook}>Facebook</a>
                    <a href={item.artists[0].strTwitter}>Twitter</a>
                </div>
            })
        }
       </div>
    }
}

export default FirstItems;