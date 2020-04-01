import React , {Component} from 'react';



class Translation extends Component {
    
    clickHanddeler=()=>{
        const str = this.props.text
        const translated=[];
        const translateText = (text)=>fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200401T052304Z.29988c43302dc2e8.cfa173c0be8d625af83e07a8a68bff6274912094&text=${text}&lang=en-ar`)
        
        translateText(str)
            .then(res=>res.json())
            .then(data=> translated.push(data))
            // .then(res=>console.log(translated[0].text))
            .then(res=>this.bebo(translated[0].text) )
            .catch(err=>console.log(err))
    
    }
    bebo=(str)=>{
        console.log(str[0])
        return <span>
        <p>{str[0]}</p>
    </span> 
        
        
    }

    render(){
        return <div>
        <button type="submit" onClick={this.clickHanddeler}>Translate</button>
        <bebo />
        </div>
    }

}

export default Translation;