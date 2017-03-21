import React, {Component, PropTypes} from 'react'
import {Segment} from 'semantic-ui-react'

class Desk extends Component {
    static propTypes = {
        desk: PropTypes.object.isRequired
    };
    /**
     * Here we compare player's lvl with cell lvl. It will show visually all player's lvl
     *
     * @param lvl - cell with lvl number
     * @param info - players current lvl
     * @returns {*}
     * @constructor
     */
    CheckLvl = (lvl, info) => {
        let currentLvl;
        if (info === lvl) {
            currentLvl = this.props.desk.player.stats.name
        }
        return currentLvl;
    };

    render() {
        let statLvl = this.props.desk.player.stats.lvl;
        return (
            <Segment.Group horizontal>
                <Segment size='mini' textAlign='center'>1 <br/>{this.CheckLvl(1, statLvl)}</Segment>
                <Segment size='mini' textAlign='center'>2 <br/>{this.CheckLvl(2, statLvl)}</Segment>
                <Segment size='mini' textAlign='center'>3 <br/>{this.CheckLvl(3, statLvl)}</Segment>
                <Segment size='mini' textAlign='center'>4 <br/>{this.CheckLvl(4, statLvl)}</Segment>
                <Segment size='mini' textAlign='center'>5 <br/>{this.CheckLvl(5, statLvl)}</Segment>
                <Segment size='mini' textAlign='center'>6 <br/>{this.CheckLvl(6, statLvl)}</Segment>
                <Segment size='mini' textAlign='center'>7 <br/>{this.CheckLvl(7, statLvl)}</Segment>
                <Segment size='mini' textAlign='center'>8 <br/>{this.CheckLvl(8, statLvl)}</Segment>
                <Segment size='mini' textAlign='center'>9 <br/>{this.CheckLvl(9, statLvl)}</Segment>
                <Segment size='mini' textAlign='center'>10 <br/>{this.CheckLvl(10, statLvl)}</Segment>
            </Segment.Group>
        )
    }
}

export default Desk;
