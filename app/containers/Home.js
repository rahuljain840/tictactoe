import { connect } from 'react-redux';
import { selectChance, resetGame } from '../actions';
import HomeComponent from '../components/Home';

const mapStateToProps = ({ state }, props) => {
    return {
        tictactoe: state.tictactoe
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        select: (index) => dispatch(selectChance(index)),
        reset: () => dispatch(resetGame())
    };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default Home;
