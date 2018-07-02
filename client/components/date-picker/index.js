/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { Button, Dropdown } from '@wordpress/components';
import { stringify as stringifyQueryObject } from 'qs';
import moment from 'moment';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';
import DatePickerContent from './content';
import { getCurrentDates, isoDateFormat } from 'lib/date';

class DatePicker extends Component {
	constructor( props ) {
		super( props );
		this.state = this.addQueryDefaults( props.query );
		this.select = this.select.bind( this );
		this.getUpdatePath = this.getUpdatePath.bind( this );
		this.isValidSelection = this.isValidSelection.bind( this );
	}

	// @TODO change this to `getDerivedStateFromProps` in React 16.4
	UNSAFE_componentWillReceiveProps( nextProps ) {
		this.setState( this.addQueryDefaults( nextProps.query ) );
	}

	addQueryDefaults( { period, compare, after, before } ) {
		return {
			period: period || 'today',
			compare: compare || 'previous_period',
			after: after ? moment( after ) : null,
			before: before ? moment( before ) : null,
		};
	}

	select( update ) {
		this.setState( update );
	}

	getOtherQueries( query ) {
		const { period, compare, after, before, ...otherQueries } = query; // eslint-disable-line no-unused-vars
		return otherQueries;
	}

	getUpdatePath( selectedTab ) {
		const { path, query } = this.props;
		const otherQueries = this.getOtherQueries( query );
		const { period, compare, after, before } = this.state;
		const data = {
			period: 'custom' === selectedTab ? 'custom' : period,
			compare,
		};
		if ( 'custom' === selectedTab ) {
			Object.assign( data, {
				after: after ? after.format( isoDateFormat ) : '',
				before: before ? before.format( isoDateFormat ) : '',
			} );
		}
		const queryString = stringifyQueryObject( Object.assign( otherQueries, data ) );
		return `${ path }?${ queryString }`;
	}

	getButtonLabel() {
		const queryWithDefaults = this.addQueryDefaults( this.props.query );
		const { primary, secondary } = getCurrentDates( queryWithDefaults );
		return (
			<div className="woocommerce-date-picker__toggle-label">
				<p>
					{ primary.label } ({ primary.range })
				</p>
				<p>
					vs. { secondary.label } ({ secondary.range })
				</p>
			</div>
		);
	}

	isValidSelection( selectedTab ) {
		const { compare, after, before } = this.state;
		if ( 'custom' === selectedTab ) {
			return compare && after && before;
		}
		return true;
	}

	render() {
		const { period, compare, after, before } = this.state;
		return (
			<Dropdown
				className="woocommerce-date-picker"
				contentClassName="woocommerce-date-picker__content"
				position="bottom"
				expandOnMobile
				renderToggle={ ( { isOpen, onToggle } ) => (
					<Button
						className="woocommerce-date-picker__toggle"
						onClick={ onToggle }
						aria-expanded={ isOpen }
					>
						{ this.getButtonLabel() }
					</Button>
				) }
				renderContent={ ( { onClose } ) => (
					<DatePickerContent
						period={ period }
						compare={ compare }
						after={ after }
						before={ before }
						onSelect={ this.select }
						onClose={ onClose }
						getUpdatePath={ this.getUpdatePath }
						isValidSelection={ this.isValidSelection }
					/>
				) }
			/>
		);
	}
}

DatePicker.propTypes = {
	path: PropTypes.string.isRequired,
	query: PropTypes.object.isRequired,
};

export default DatePicker;
