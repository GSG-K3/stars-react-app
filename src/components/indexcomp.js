import React , {Component} from 'react';


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
       return <div id="Items">
        {
            this.state.data.map((item)=>{
                console.log('item  :',item.artists[0].strArtist)
                return <div>
                    <h3>{item.artists[0].strArtist}</h3>
                    <a href={item.artists[0].strWebsite}>{item.artists[0].strWebsite}</a>
                    <a href={item.artists[0].strFacebook}>{item.artists[0].strFacebook}</a>
                    <img src={item.artists[0].strArtistFanart} alt="artist img"/>
                    <span>
            <p>{item.artists[0].strBiographyEN}</p>
                    </span>
                </div>
            })
        }
       </div>
    }
}

export default FirstItems;