import { connect } from 'react-redux';
import { selectChance, resetGame } from '../actions';
import Board from '../components/Scoreboard';

const mapStateToProps = ({ state }, props) => {
    return {
        game: state.game
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        select: (index) => dispatch(selectChance(index)),
        reset: () => dispatch(resetGame())
    };
};

const Score = connect(mapStateToProps, mapDispatchToProps)(Board);
export default Score;
