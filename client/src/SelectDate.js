import React, { Component } from 'react';
import './App.css';
import { UpArrow, DownArrow } from './Arrows'
import { Typography } from '@material-ui/core'


const shortMonths = [4, 6, 9, 11]
const longMonths = [1, 3, 5, 7, 8, 10, 12]

export class SelectDate extends Component{  
    constructor(props){
        super(props)
        this.state = {
            showNextPage: false,
            month: new Date().getMonth() + 1,
            day: new Date().getDate(),
            year: new Date().getFullYear(),
        };
        this.adjustMonth = this.adjustMonth.bind(this);
        this.adjustDay = this.adjustDay.bind(this);
        this.adjustYear = this.adjustYear.bind(this);
    }


    adjustMonth(direction){
        if(direction === 'up'){
            if(this.state.month === 12){
                this.setState({month: 1})
            }else{
                this.setState({month: this.state.month + 1})
            }
        }
        else if(direction === 'down'){
            if(this.state.month === 1){
                this.setState({month: 12})
            }else{
                this.setState({month: this.state.month - 1})
            }
        }
    }

    adjustDay(direction){
        if(direction === 'up'){
            if((shortMonths.includes(this.state.month) && this.state.day === 30) || (longMonths.includes(this.state.month) && this.state.day === 31 || (this.state.day ===28 && this.state.month === 2))){
                this.setState({day: 1})
            }else{
                this.setState({day: this.state.day + 1})
            }
        }
        else if(direction === 'down'){
            if(this.state.day === 1 && shortMonths.includes(this.state.month)){
                this.setState({day: 30})
            }
            else if(this.state.day === 1 && longMonths.includes(this.state.month)){
                this.setState({day: 31})
            }
            else if(this.state.day === 1 && this.state.month === 2){
                this.setState({day: 28})
            }else{
                this.setState({day: this.state.day - 1})
            }
        }
    }

    adjustYear(direction){
        if(direction === 'up'){
            if(this.state.year !== new Date().getFullYear() + 2){
                this.setState({year: this.state.year + 1})
            }
        }
        else if(direction === 'down'){
            if(this.state.year !== 1988){
                this.setState({year: this.state.year - 1})
            }
        }
    }

    render() {   
      return(
        <div id="custom-dial-container">
            <div>
                <UpArrow adjust={this.adjustMonth}/>
                <Typography id="dial-text">{this.state.month}</Typography>
                <DownArrow adjust={this.adjustMonth}/>
            </div>

            <div>
                <UpArrow adjust={this.adjustDay}/>
                <Typography id="dial-text">{this.state.day < 10 ? '0' : ''}{this.state.day}</Typography>
                <DownArrow adjust={this.adjustDay}/>
            </div>

            <div>
                <UpArrow adjust={this.adjustYear}/>
                <Typography id="dial-text">{this.state.year}</Typography>
                <DownArrow adjust={this.adjustYear}/>
            </div>
        </div>
      );
    }
}