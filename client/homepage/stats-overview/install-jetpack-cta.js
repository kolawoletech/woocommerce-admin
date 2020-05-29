/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { Button } from '@wordpress/components';
import { useState } from 'react';
import { withDispatch } from '@wordpress/data';
import PropTypes from 'prop-types';

/**
 * WooCommerce dependencies
 */
import { H } from '@woocommerce/components';
import { getAdminLink, getSetting } from '@woocommerce/wc-admin-settings';
import { PLUGINS_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import withSelect from 'wc-api/with-select';
import Connect from 'dashboard/components/connect';
import { recordEvent } from 'lib/tracks';

function InstallJetpackCta( props ) {
	const {
		installAndActivatePlugins,
		isInstalling,
		isJetpackConnected,
		getCurrentUserData,
		updateCurrentUserData,
	} = props;
	const [ isConnecting, setIsConnecting ] = useState( false );
	const [ isDismissed, setIsDismissed ] = useState(
		( getCurrentUserData().homepage_stats || {} ).installJetpackDismissed
	);
	const plugins = getSetting( 'plugins', {
		installedPlugins: [],
		activePlugins: [],
	} );
	const isJetpackInstalled = plugins.installedPlugins.includes( 'jetpack' );
	const isJetpackActivated = plugins.activePlugins.includes( 'jetpack' );

	async function install() {
		recordEvent( 'statsoverview_install_jetpack' );

		const pluginInstall = await installAndActivatePlugins( [ 'jetpack' ] );
		if ( Object.keys( pluginInstall.errors.errors ).length ) {
			// @todo Error handling.
			return;
		}

		setIsConnecting( ! isJetpackConnected );
	}

	function dismiss() {
		if ( isInstalling || isConnecting ) {
			return;
		}

		const homepageStats = getCurrentUserData().homepage_stats || {};

		homepageStats.installJetpackDismissed = true;

		updateCurrentUserData( { homepage_stats: homepageStats } );

		setIsDismissed( true );
		recordEvent( 'statsoverview_dismiss_install_jetpack' );
	}

	function getConnector() {
		return (
			<Connect
				autoConnect
				onError={ () => setIsConnecting( false ) }
				redirectUrl={ getAdminLink(
					'admin.php?page=wc-admin&reset-profiler=0'
				) }
			/>
		);
	}

	if ( isDismissed || ( isJetpackInstalled && isJetpackActivated ) ) {
		return null;
	}

	return (
		<article className="woocommerce-stats-overview__install-jetpack-promo">
			<H>
				{ __( 'Get traffic stats with Jetpack', 'woocommerce-admin' ) }
			</H>
			<p>
				{ __(
					'Keep an eye on your views and visitors metrics with ' +
						'Jetpack. Requires Jetpack plugin and a WordPress.com ' +
						'account.',
					'woocommerce-admin'
				) }
			</p>
			<footer>
				<Button isPrimary onClick={ install } isBusy={ isInstalling }>
					{ ! isJetpackInstalled
						? __( 'Get Jetpack', 'woocommerce-admin' )
						: __( 'Activate Jetpack', 'woocommerce-admin' ) }
				</Button>
				<Button onClick={ dismiss } isBusy={ isInstalling }>
					{ __( 'No thanks', 'woocommerce-admin' ) }
				</Button>
			</footer>

			{ isConnecting && getConnector() }
		</article>
	);
}

InstallJetpackCta.propTypes = {
	/**
	 * Is the Jetpack plugin connected.
	 */
	isJetpackConnected: PropTypes.bool.isRequired,
	/**
	 * A method to get user meta.
	 */
	getCurrentUserData: PropTypes.func.isRequired,
	/**
	 * A method to update user meta.
	 */
	updateCurrentUserData: PropTypes.func.isRequired,
};

export default compose(
	withSelect( ( select ) => {
		const { installAndActivatePlugins, isJetpackConnected, isPluginsRequesting } = select( PLUGINS_STORE_NAME );
		const { getCurrentUserData } = select( 'wc-api' );

		return {
			installAndActivatePlugins,
			isInstalling: isPluginsRequesting( 'installPlugins' ) || isPluginsRequesting( 'activatePlugins' ),
			isJetpackConnected: isJetpackConnected(),
			getCurrentUserData,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { updateCurrentUserData } = dispatch( 'wc-api' );

		return {
			updateCurrentUserData,
		};
	} )
)( InstallJetpackCta );
