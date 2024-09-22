<?php

namespace Uncanny_Automator_Pro;

/**
 * Webhook_Static_Content
 */
class Webhook_Static_Content {

	/**
	 * Anonymous JS function invoked as callback when clicking
	 * the custom button "Send test". The JS function requires
	 * the JS module "modal". Make sure it's included in
	 * the "modules" array
	 *
	 * @return string The JS code, with or without the <script> tags
	 */
	public static function get_samples_js() {
		// Start output
		ob_start();

		// It's optional to add the <script> tags
		// This must have only one anonymous function
		?>

		<script>
			// Do when the user clicks on send test
			function ($button, data, modules) {
				// Create a configuration object
				let config = {
					// In milliseconds, the time between each call
					timeBetweenCalls: 1000,
					// In milliseconds, the time we're going to check for samples
					checkingTime: 60 * 1000,
					// Links
					links: {
						noResultsSupport: "<?php echo esc_url_raw( Utilities::utm_parameters( 'https://automatorplugin.com/knowledge-base/webhook-triggers/', 'no_samples', 'get_help_link' ) ); ?>",
					},
					// i18n
					i18n: {
						checkingHooks: "<?php /* translators: Time in seconds */ printf( esc_attr__( "We're checking for a new hook. We'll keep trying for %1\$s seconds.", 'uncanny-automator-pro' ), '{{time}}' ); ?>",
						noResultsTrouble: "<?php esc_attr_e( 'We had trouble finding a sample.', 'uncanny-automator-pro' ); ?>",
						noResultsSupport: "<?php esc_attr_e( 'See more details or get help', 'uncanny-automator-pro' ); ?>",
						samplesModalTitle: "<?php esc_attr_e( "Here is the data we've collected", 'quickbooks-training' ); ?>",
						samplesModalWarning: "<?php /* translators: Confirmation button */ printf( esc_attr__( 'Clicking on \"%1$s\" will remove your current fields and will use the ones on the table above instead.', 'uncanny-automator-pro' ), '{{confirmButton}}' ); ?>", //phpcs:ignore WordPress.WP.I18n.MissingTranslatorsComment
						samplesTableValueType: "<?php esc_attr_e( 'Value type', 'uncanny-automator-pro' ); ?>",
						samplesTableReceivedData: "<?php esc_attr_e( 'Received data', 'uncanny-automator-pro' ); ?>",
						samplesModalButtonConfirm: "<?php esc_attr_e( 'Use these fields', 'uncanny-automator-pro' ); ?>",
						samplesModalButtonCancel: "<?php esc_attr_e( 'Do nothing', 'uncanny-automator-pro' ); ?>",
					}
				}

				// Get the date when this function started
				let startDate = new Date();

				// Create array with the data we're going to send
				let dataToBeSent = {
					action: 'get_samples_get_webhook_url',
					nonce: UncannyAutomator._site.rest.nonce,
					recipe_id: UncannyAutomator._recipe.recipe_id,
					item_id: data.item.id,
					webhook_url: data.values.WEBHOOK_URL,
					data_format: data.values.DATA_FORMAT,
					called_from_common: 'yes'
				};

				// Add notice to the item
				// Create notice
				let $notice = jQuery('<div/>', {
					'class': 'item-options__notice item-options__notice--warning'
				});

				// Add notice message
				$notice.html(config.i18n.checkingHooks.replace('{{time}}', parseInt(config.checkingTime / 1000)));

				// Get the notices container
				let $noticesContainer = jQuery('.item[data-id="' + data.item.id + '"] .item-options__notices');

				// Add notice
				$noticesContainer.html($notice);

				// Create the function we're going to use recursively to
				// do check for the samples
				var getSamples = function () {
					// Do AJAX call
					jQuery.ajax({
						method: 'POST',
						dataType: 'json',
						url: ajaxurl,
						data: dataToBeSent,
						// Set the checking time as the timeout
						timeout: config.checkingTime,
						success: function (response) {
							// Get new date
							let currentDate = new Date();

							// Define the default value of foundResults
							let foundResults = false;

							// Check if the response was successful
							if (response.success) {
								// Check if we got the rows from a sample
								if (response.samples.length > 0) {
									// Update foundResults
									foundResults = true;
								}
							}

							// Check if we have to do another call
							let shouldDoAnotherCall = false;

							// First, check if we don't have results
							if (!foundResults) {
								// Check if we still have time left
								if ((currentDate.getTime() - startDate.getTime()) <= config.checkingTime) {
									// Update result
									shouldDoAnotherCall = true;
								}
							}

							if (shouldDoAnotherCall) {
								// Wait and do another call
								setTimeout(function () {
									// Invoke this function again
									getSamples();
								}, config.timeBetweenCalls);
							} else {
								// Add loading animation to the button
								$button.removeClass('uap-btn--loading uap-btn--disabled');

								// Check if it has results
								if (foundResults) {
									// Remove notice
									$notice.remove();

									// Iterate samples and create an array with the rows
									let rows = [];
									let keys = {}
									jQuery.each(response.samples, function (index, sample) {
										// Iterate keys
										jQuery.each(sample, function (index, row) {
											// Check if we already added this key
											if (typeof keys[row.key] !== 'undefined') {
											} else {
												// Add row and save the index
												keys[row.key] = rows.push(row);
											}
										});
									});

									// Create table with the sample data
									let $sample = jQuery('<div><table><tbody></tbody></table></div>');


									// Get the body of the $sample table
									let $sampleBody = $sample.find('tbody');

									// Iterate the received sample and add rows
									jQuery.each(rows, function (index, row) {
										// Create row
										let $row = jQuery('<tr><td class="SAMPLE_WEBHOOK-sample-table-td-key">' + row.key + '</td><td>' + UncannyAutomator._core.i18n.tokens.tokenType[row.type] + '</td><td class="SAMPLE_WEBHOOK-sample-table-td-data">' + row.data + '</td></tr>');

										// Append row
										$sampleBody.append($row);
									});

									// Create modal box
									let modal = new modules.Modal({
										title: config.i18n.samplesModalTitle,
										content: $sample.html(),
										warning: config.i18n.samplesModalWarning.replace('{{confirmButton}}', '<strong>' + config.i18n.samplesModalButtonConfirm + '</strong>'),
										buttons: {
											cancel: config.i18n.samplesModalButtonCancel,
											confirm: config.i18n.samplesModalButtonConfirm,
										}
									}, {
										size: 'extra-large'
									});

									// Set modal events
									modal.setEvents({
										onConfirm: function () {
											// Get the field with the fields (WEBHOOK_DATA)
											let webhookFields = findWebhookField(data.item.options.WEBHOOK_DATA.fields); // Making it dynamic

											// Remove all the current fields
											webhookFields.fieldRows = [];

											// Add new rows. Iterate rows from the sample
											jQuery.each(rows, function (index, row) {
												// Add row
												webhookFields.addRow({
													KEY: row.key,
													VALUE_TYPE: row.type,
													SAMPLE_VALUE: row.data
												}, false);
											});

											// Render again
											webhookFields.reRender();

											// Destroy modal
											modal.destroy();
										},
									});
								} else {
									// Change the notice type
									$notice.removeClass('item-options__notice--warning').addClass('item-options__notice--error');

									// Create a new notice message
									let noticeMessage = config.i18n.noResultsTrouble;

									// Change the notice message
									$notice.html(noticeMessage + ' ');

									// Add help link
									let $noticeHelpLink = jQuery('<a/>', {
										target: '_blank',
										href: config.links.noResultsSupport
									}).text(config.i18n.noResultsSupport);
									$notice.append($noticeHelpLink);
								}
							}
						},

						statusCode: {
							403: function () {
								location.reload();
							}
						},

						fail: function (response) {
						}
					});
				}

				// Add loading animation to the button
				$button.addClass('uap-btn--loading uap-btn--disabled');

				// Try to get samples
				getSamples();

				function findWebhookField(fields, targetOptionCode = 'WEBHOOK_FIELDS'){
					for (let i = 0; i < fields.length; i++) {
						if (fields[i].attributes.optionCode === targetOptionCode) {
							return fields[i];
						}
					}
					return -1; // Return -1 if no matching optionCode is found
				}
			}

		</script>

		<?php

		// Get output
		// Return output
		return ob_get_clean();
	}

	/**
	 * Anonymous JS function used to filter the tokens of this item
	 * This function will receive an object with the tokens, and it must
	 * return an object with the same structure
	 *
	 * @return string The JS code, with or without the <script> tags
	 */
	public static function filter_tokens_js() {
		// Start output
		ob_start();

		// It's optional to add the <script> tags
		// This must have only one anonymous function
		?>

		<script>

			// Filters tokens
			// We will use this function to use to overwrite the tokenType of
			// the tokens created using the "key" fields with the value of
			// the "value_type" fields
			function ( tokensGroup, item ) {
				// Create a helper function to get data from a token coming from a repeater
				const getTokenParts = ( token ) => {
					// Get the token parts
					// "ITEM_ID:ITEM_CODE:REPEATER_FIELD_CODE|ROW_INDEX|FIELD_CODE" => [ "ITEM_ID", "ITEM_CODE", "REPEATER_FIELD_CODE|ROW_INDEX|FIELD_CODE" ]
					const [ itemID, itemCode, fieldReference ] = token.id.split( ':' );

					// Get the field reference parts
					// "REPEATER_FIELD_CODE|ROW_INDEX|FIELD_CODE" => [ "REPEATER_FIELD_CODE", "ROW_INDEX", "FIELD_CODE" ]
					const [ repeaterFieldCode, rowIndex, fieldCode ] = fieldReference.split( '|' );

					return {
						// (int) The item ID, unique to each trigger/action added to the recipe
						itemID: itemID,

						// (string) The item code, like "WP_ANON_WEBHOOKS"
						itemCode: itemCode,

						fieldReference: {
							// (string) The code of the repeater field, like "WEBHOOK_FIELDS"
							repeaterFieldCode: repeaterFieldCode,

							// (integer) The index of the row the field creating this token is in
							rowIndex: rowIndex,

							// (string) The code of the field creating this token
							fieldCode: fieldCode,
						}
					}
				}

				// Get the token type of each row
				const tokenTypeByRowIndex = {};

				// Get the field type of each row, and then remove the token created by the "Value type" field
				tokensGroup.tokens = tokensGroup.tokens.filter( ( token ) => {
					// Check if it's the "Value type" field
					if ( token.fieldId !== 'VALUE_TYPE' ) {
						return true;
					}

					// Get the token types
					tokenTypeByRowIndex[ `row_${ getTokenParts( token ).fieldReference.rowIndex }` ] = token.value;

					// Remove the token coming from the "Value type" field
					return false;
				} );

				// Change the token type of the tokens created by the "Key" field
				tokensGroup.tokens = tokensGroup.tokens.map( ( token ) => {
					// Check if it's the "Key" field
					if ( token.fieldId !== 'KEY' ) {
						return token;
					}

					// Get the token data
					const tokenParts = getTokenParts( token );

					// Update the token type
					token.type = tokenTypeByRowIndex[ `row_${ tokenParts.fieldReference.rowIndex }` ];

					// Update the name of the token
					token.name = '<?php /* translators: 1. Field ID (number), 2. Field name */ printf( esc_attr__( 'Field #%1$s %2$s' ), '{{indexRow}}', '{{tokenValue}}' ); ?>'
						.replace( '{{indexRow}}', ( parseInt( tokenParts.fieldReference.rowIndex ) + 1 ) )
						.replace( '{{tokenValue}}', '<strong>' + token.value + '</strong>' );

					/**
					 * Create custom token syntax
					 * @since 4.6
					 */
					token.id = `${ token.id }:${ token.value }`;

					// Create a clone using the old format
					token.hasClone = true;

					// Return token
					return token;
				});

				// Clone tokens that need to use the old format
				const clonedTokens = [];

				tokensGroup.tokens.forEach( ( token ) => {
					// Check if we should clone it
					if ( ! token.hasClone ) {
						return;
					}

					// Clone the token
					// A shallow copy is enough
					const clonedToken = Object.assign( {}, token );

					// We'll clone this token, so this _is_ the clone
					clonedToken.hasClone = false;

					// Get the token parts
					const tokenParts = getTokenParts( clonedToken );

					/**
					 * Update the token ID
					 * This is the format used before 4.6
					 */
					clonedToken.id = [
						tokenParts.itemID,
						tokenParts.itemCode,
						tokenParts.fieldReference.repeaterFieldCode,
						clonedToken.value
					].join( ':' );

					// Deprecate the token (don't show it on the list)
					clonedToken.deprecated = true;

					// Clone it
					clonedTokens.push( clonedToken );
				} );

				// Add cloned tokens to the tokens group
				tokensGroup.tokens = [ ...tokensGroup.tokens, ...clonedTokens ];

				return tokensGroup;
			}

		</script>

		<?php

		// Get output
		// Return output
		return ob_get_clean();
	}

	/**
	 * A piece of CSS that it's added only when this item
	 * is on the recipe
	 *
	 * @return string The CSS, with the CSS tags
	 */
	public static function inline_css() {
		// Start output
		ob_start();

		?>

		<style>

			.SAMPLE_WEBHOOK-sample-table-td-key {
				color: #1b92e5 !important;
				font-weight: 500 !important;
			}

			.SAMPLE_WEBHOOK-sample-table-td-data {
				color: #616161 !important;
				font-style: italic !important;
			}

		</style>

		<?php

		// Get output
		// Return output
		return ob_get_clean();
	}
}
