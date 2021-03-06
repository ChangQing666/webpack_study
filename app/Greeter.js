/*常规语法*/
// var config = require('./config.json')
// module.exports = function(){
//     var greet = document.createElement('div')
//     greet.textContent = config.greetText
//     return greet;
// }

/*ES6语法*/
import React,{Component} from 'react'
import config from './config.json'
import styles from './Greeter.css'
class Greeter extends Component{
    render(){
        return (
            <div className={styles.root}>
            {config.greetText}
              <h1 className ={styles.h1}>你好aaaaa</h1>
            </div>
        )
    }
}
export default Greeter