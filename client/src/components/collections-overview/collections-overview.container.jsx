import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching, //what WithSpinner expects
});

const CollectionsOverViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);
//compose evaluates from right -> left

export default CollectionsOverViewContainer;
