import { bindActionCreators } from 'redux';
import { Restaurant } from '../components/restaurant';
import { addRestaurantRequest, removeRestaurantRequest } from '../store/restaurants/thunks';
import { connect } from 'react-redux';

const mapStateToProps = ({ restaurants, auth }) => ({ restaurants, auth });

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            addRestaurant: addRestaurantRequest,
            removeRestaurant: removeRestaurantRequest,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
