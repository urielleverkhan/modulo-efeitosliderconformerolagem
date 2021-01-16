import React, {Component} from 'react';
import './core/slider.css';

class moduloSlider extends Component{
    constructor(props){
        super(props);
        this.state ={
            slideEsquerdaUnico: "sliderUnicoEsquerda",
            slideEsquerda: "sliderEsquerda",
            slideDireita: "sliderDireita",
            slideDireitaUnico: "sliderUnicoDireita"

        };
   
    }

  

    componentDidMount() {
        this.setState({
            slideEsquerdaUnico:"sliderUnicoEsquerda move",   
        }); 

         window.onscroll = () => {
            let telaAgora = document.documentElement.scrollTop;
            console.log(telaAgora);

            
                
            

            if(telaAgora >=300){
                this.setState({
                    slideEsquerda: "sliderEsquerda move",
                    slideDireita: "sliderDireita move",
                }); 
            }

            if(telaAgora >=1200){
                this.setState({
                    slideDireitaUnico: "sliderUnicoDireita move",
                }); 
            }
        }
          
    }

    render(){
        return(
            <div className="inteiro">
                <div className={this.state.slideEsquerdaUnico} />
                <div className="sliderDuplo">
                    <div className={this.state.slideEsquerda} />
                    <div className={this.state.slideDireita} />                   
                </div>
                <div className={this.state.slideDireitaUnico} />    
            </div>
        ); 
    }
}
export default moduloSlider;