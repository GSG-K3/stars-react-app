import React , {Component} from 'react';



class Translation extends Component {
    state={
        str:[]
    }
    
    clickHanddeler=()=>{
        const str = this.props.text;
        const translateText = (text)=>fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200401T052304Z.29988c43302dc2e8.cfa173c0be8d625af83e07a8a68bff6274912094&text=${text}&lang=en-ar`)
        
        translateText(str)
            .then(res=>res.json())
            .then(data=> this.setState({str:data.text}))
            .catch(err=>console.log(err))
    
    }

    render(){
        return <div>
        <button className="btnstyle" type="submit" onClick={this.clickHanddeler}>Translate</button>
        <span className="span">
        <p>{this.state.str[0]}</p>
    </span> 
        </div>
    }

}

export default Translation;