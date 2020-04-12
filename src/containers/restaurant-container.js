import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Restaurant } from '../components/restaurant';
import {
    addRestaurantRequest,
    removeRestaurantRequest,
    selectRestaurantRequest,
    deselectRestaurantRequest,
} from '../store/restaurants/thunks';

const mapStateToProps = ({ restaurants, auth }) => ({ restaurants, auth });

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            addRestaurant: addRestaurantRequest,
            removeRestaurant: removeRestaurantRequest,
            selectRestaurant: selectRestaurantRequest,
            deselectRestaurant: deselectRestaurantRequest,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
