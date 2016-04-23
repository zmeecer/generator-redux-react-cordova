import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeSearch } from '../../actions/search';
import { Subheader } from '../../components';
import styles from './styles.scss';

class Posts extends React.Component {
  inputChanged(e) {
    const { dispatch } = this.props;
    dispatch(changeSearch(e.target.value));
  }

  render() {
    let features = this.props.features.filter((feature) =>
      this.props.phrase.length > 0
        ? feature.toLowerCase().search(this.props.phrase) > -1
        : true
    );

    return (
      <div>
        <Subheader
          title='Search'
        />
        <div className={styles.search}>
          <input
            onChange={this.inputChanged.bind(this)}
            defaultValue={this.props.phrase}
          />
          <ul>
            {features.map((feature, index) =>
              <li key={index}>{feature}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    features: state.features.features,
    phrase: state.search.phrase,
  }
);

Posts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  features: PropTypes.array.isRequired,
  phrase: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Posts);
