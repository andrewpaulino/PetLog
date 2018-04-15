
import { connect } from 'react-redux';
import ExContainer from './ExContainer'

function mapStoreToProps(store) {
    return {
        testing: store.testreducer
        // testreducer: store.testreducer.testReducer
    }
};

export default connect(mapStoreToProps)(ExContainer);