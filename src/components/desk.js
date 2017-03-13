import React, {Component} from 'react';
class Desk extends Component {
    CheckLvl = (lvl, info) => {
        let currentLvl;
        if(info == lvl){
            currentLvl = this.props.desk.Player.name
        }
        return currentLvl;
    };

    render() {
        return (
            <div className='desk col-md-12'>
                <div className='col-md-1 text-center' >
                    1 <br/>
                    {this.CheckLvl(1, this.props.desk.Player.lvl)}
                </div>
                <div className='col-md-1 text-center'>
                    2 <br/>
                    {this.CheckLvl(2, this.props.desk.Player.lvl)}
                </div>
                <div className='col-md-1 text-center'>
                    3 <br/>
                    {this.CheckLvl(3, this.props.desk.Player.lvl)}
                </div>
                <div className='col-md-1 text-center'>
                    4 <br/>
                    {this.CheckLvl(4, this.props.desk.Player.lvl)}
                </div>
                <div className='col-md-1 text-center'>
                    5 <br/>
                    {this.CheckLvl(5, this.props.desk.Player.lvl)}
                </div>
                <div className='col-md-1 text-center'>
                    6 <br/>
                    {this.CheckLvl(6, this.props.desk.Player.lvl)}
                </div>
                <div className='col-md-1 text-center'>
                    7 <br/>
                    {this.CheckLvl(7, this.props.desk.Player.lvl)}
                </div>
                <div className='col-md-1 text-center'>
                    8 <br/>
                    {this.CheckLvl(8, this.props.desk.Player.lvl)}
                </div>
                <div className='col-md-1 text-center'>
                    9 <br/>
                    {this.CheckLvl(9, this.props.desk.Player.lvl)}
                </div>
                <div className='col-md-1 text-center'>
                    10 <br/>
                    {this.CheckLvl(10, this.props.desk.Player.lvl)}
                </div>
            </div>
        )
    }
}

export default Desk