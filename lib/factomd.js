var rest = require('restler')

var post_options = {headers:{'content-type':'text/plain'},timeout:2000}
//const URL_BASE = 'https://courtesy-node.factom.com/v2'
var URL = 'http://courtesy-node.factom.com/v2'


/**
  * Set the URL of the factom node.  Note: Security measures built into
  * modern browsers prevent the URL domain to differ from the server
  * domain without proper Cross-Origin Resource Sharing (CORS) configuration.
  * Please take note of this:
  * http://blog.portswigger.net/2016/10/exploiting-cors-misconfigurations-for.html
  * @method setFactomNode
  * @param {Number} timeout Set the timeout in milliseconds
 */
function setFactomNode(url)
{
  URL = url
}

/**
  * Set the timeout of the JSON request to the factom node
  * @method setTimeout
  * @param {Number} timeout Set the timeout in milliseconds
 */
function setTimeout(timeout)
{
   post_options.timeout = timeout
}

/**
 * Utility commands for dispatching JSON commands to the factom server.
 * @method dispatch
 * @param {JSON} jdata
 * @param {function} cb function(data,response) as specified by the restler API
 */
function dispatch(jdata, cb)
{
  try {
    //console.log( JSON.stringify(jdata) )
    rest.postJson(URL, jdata, post_options ).on('complete', cb)
  } catch (err) {
    console.log(err)
  }
}

/**
 * The directory block head is the last known directory block by factom,
 * or in other words, the most recently recorded block.
 * @method directory_block
 * @param {Number} id Arbitrary reference id
 * @param {String} keymr
 * @param {function} cb function(data,response) as specified by the restler API
 */
function directory_block(id, keymr, cb) {
  var jdata = { 'jsonrpc': '2.0','id': id,'method': 'directory-block','params':{
    'KeyMR': keymr
  }}
  dispatch(jdata,cb)
}

/**
 * The directory block head is the last known directory block by factom,
 * or in other words, the most recently recorded block.
 * @method directory_block_head
 * @param {Number} id  arbitrary reference id
 * @param {function} cb function(data,response) as specified by the restler API
 */
function directory_block_head(id, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'directory-block-head'}
  dispatch(jdata,cb)
}

/**
 * Returns various heights that allows you to view the state of the blockchain.
 * https://docs.factom.com/api#heights
 * @method heights
 * @param {Number} id  arbitrary reference id
 * @param {function} cb function(data,response) as specified by the restler API
 */
function heights(id, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'heights'}
  dispatch(jdata,cb)
}

/**
 * Retrieve an entry or transaction in raw format, the data is a hex encoded string.
 * https://docs.factom.com/api#raw-data
 * @method raw_data
 * @param {Number} id arbitrary reference id
 * @param {String} hash
 * @param {function} cb function(data,response) as specified by the restler API
 */
function raw_data(id, hash, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'raw-data','params':{
    'hash': hash
  }}
  dispatch(jdata,cb)
}

/**
 * Retrieve a directory block given only its height.
 * @method dblock_by_height
 * @param {Number} id arbitrary reference id
 * @param {Number} height height of block requested
 * @param {function} cb function(data,response) as specified by the restler API
 */
function dblock_by_height(id, height, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'dblock-by-height','params':{
    'height':height
  }}
  dispatch(jdata,cb)
}

/**
 * Retrieve administrative blocks for any given height.
 * @method ablock_by_height
 * @param {Number} id arbitrary reference id
 * @param {Number} height height of block requested
 * @param {function} cb function(data,response) as specified by the restler API
 */
function ablock_by_height(id, height, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'ablock-by-height','params':{
    'height':height
  }}
  dispatch(jdata,cb)
}

/**
 * Retrieve the entry credit block for any given height.
 * These blocks contain entry credit transaction information.
 * @method ecblock_by_height
 * @param {Number} id arbitrary reference id
 * @param {Number} height height of block requested
 * @param {function} cb function(data,response) as specified by the restler API
 */
function ecblock_by_height(id, height, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'ecblock-by-height','params':{
    'height':height
  }}
  dispatch(jdata,cb)
}

/**
 * Retrieve the factoid block for any given height.
 * These blocks contain factoid arbitrary information.
 * @param {Number} id arbitrary reference id
 * @param {Number} height height of block requested
 * @param {function} cb function(data,response) as specified by the restler API
 */
function fblock_by_height(id, height, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'fblock-by-height','params':{
    'height':height
  }}
  dispatch(jdata,cb)
}

/**
 * Retrieve a specified factoid block given its merkle root key.
 * @method factoid_block
 * @param {Number} id arbitrary reference id
 * @param {String} KeyMr Merkle root key
 * @param {function} cb function(data,response) as specified by the restler API
 */
function factoid_block(id, KeyMr, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'factoid-block','params':{
    'KeyMr':KeyMr
  }}
  dispatch(jdata,cb)
}

/**
 * Retrieve a specified entrycredit block given its merkle root key.
 * The numbers are minute markers.
 * @method entrycredit_block
 * @param {Number} id arbitrary reference id
 * @param {String} KeyMr Merkle root key
 * @param {function} cb function(data,response) as specified by the restler API
 */
function entrycredit_block(id, KeyMR, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'entrycredit-block','params':{
    'KeyMR':KeyMR
  }}
  dispatch(jdata,cb)
}

/**
 * Retrieve a specified admin block given its merkle root key.
 * @method admin_block
 * @param {Number} id arbitrary reference id
 * @param {String} KeyMr Merkle root key
 * @param {function} cb function(data,response) as specified by the restler API
 */
function admin_block(id, KeyMR, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'admin-block','params':{
    'KeyMR':KeyMR
  }}
  dispatch(jdata,cb)
}

/**
 * Retrieve a specified entry block given its merkle root key.
 * The entry block contains 0 to many entries
 * @method entry_block
 * @param {Number} id arbitrary reference id
 * @param {String} KeyMr Merkle root key
 * @param {function} cb function(data,response) as specified by the restler API
 */
function entry_block(id, KeyMR, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'entry-block','params':{
    'KeyMR':KeyMR
  }}
  dispatch(jdata,cb)
}

/**
 * Get an Entry from factomd specified by the Entry Hash.
 * @method entry
 * @param {Number} id arbitrary reference id
 * @param {String} hash entry hash
 * @param {function} cb function(data,response) as specified by the restler API
 */
function entry(id, hash, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'entry','params':{
    'Hash':hash
  }}
  dispatch(jdata,cb)
}

/**
 * Returns an array of the entries that have been submitted
 * but have not been recoreded into the blockchain.
 * @method pending_entries
 * @param {Number} id arbitrary reference id
 * @param {function} cb function(data,response) as specified by the restler API
 */
function pending_entries(id, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'pending-entries','params':{
  }}
  dispatch(jdata,cb)
}

/**
 * Retrieve details of a factoid arbitrary using a transactions hash.
 * Note that information regarding the directory block height,
 * directory block keymr, and transaction block keymr are also included.
 * The “blockheight” parameter in the reponse will always be 0 when using
 * this call, refer to “includedindirectoryblockheight” if you need the height.
 * @method transaction
 * @param {Number} id arbitrary reference id
 * @param {function} cb function(data,response) as specified by the restler API
 */
function transaction(id, hash, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'transaction','params':{
    'hash':hash
  }}
  dispatch(jdata,cb)
}

/**
 * Find the status of a transaction, whether it be a factoid,
 * reveal entry, or commit entry.
 * @method ack
 * @param {Number} id arbitrary reference id
 * @param {String} hash entry hash
 * @param {String} chainid chain id
 * @param {function} cb function(data,response) as specified by the restler API
 */
function ack(id, hash, chainid, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'ack','params':{
    'hash':hash, 'chainid':chainid, 'fulltransaction':''
  }}
  dispatch(jdata,cb)
}

/**
 * Retrieve a reciept providing cryptographially verfiable proof that information
 * was recorded in the factom blockchain and that this was subsequently
 * anchored in the bitcoin blockchain.
 * @method receipt
 * @param {Number} id arbitrary reference id
 * @param {String} hash
 * @param {function} cb function(data,response) as specified by the restler API
 */
function receipt(id, hash, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'receipt','params':{
    'hash':hash
  }}
  dispatch(jdata,cb)
}

/**
 * Retrieve a reciept providing cryptographially verfiable proof that information
 * was recorded in the factom blockchain and that this was subsequently
 * anchored in the bitcoin blockchain.
 * @method pending_transactions
 * @param {Number} id arbitrary reference id
 * @param {String} Address
 * @param {function} cb function(data,response) as specified by the restler API
 */
function pending_transactions(id, Address, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'pending-transactions','params':{
    'Address':Address
  }}
  dispatch(jdata,cb)
}

/**
 * Return the keymr of the head of the chain for a chain ID
 * (the unique hash created when the chain was created).
 * @method chain_head
 * @param {Number} id arbitrary reference id
 * @param {Number} ChainID chain id
 * @param {function} cb function(data,response) as specified by the restler API
 */
function chain_head(id, ChainID, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'chain-head','params':{
    'ChainID':ChainID
  }}
  dispatch(jdata,cb)
}

/**
 * Return its current balance for a specific entry credit address.
 * @method entry_credit_balance
 * @param {Number} id arbitrary reference id
 * @param {String} address entry credit address
 * @param {function} cb function(data,response) as specified by the restler API
 */
function entry_credit_balance(id, address, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'entry-credit-balance','params':{
    'address':address
  }}
  dispatch(jdata,cb)
}

/**
 * This call returns the number of Factoshis (Factoids *10^-8) that are currently
 * available at the address specified.
 * @param {Number} id arbitrary reference id
 * @param {String} address factoid address
 * @param {function} cb function(data,response) as specified by the restler AP
 */
function factoid_balance(id, address, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'factoid-balance','params':{
    'address':address
  }}
  dispatch(jdata,cb)
}

/**
 * Returns the number of Factoshis (Factoids *10^-8) that purchase a single
 * Entry Credit. The minimum factoid fees are also determined by this rate,
 * along with how complex the factoid arbitrary is.
 * @method entry_credit_rate
 * @param {Number} id arbitrary reference id
 * @param {function} cb function(data,response) as specified by the restler API
 */
function entry_credit_rate(id, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'entry-credit-rate'}
  dispatch(jdata,cb)
}

/**
 * Retrieve current properties of the Factom system,
 * including the software and the API versions.
 * @method properties
 * @param {Number} id arbitrary reference id
 * @param {function} cb function(data,response) as specified by the restler API
 */
function properties(id, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'properties'}
  dispatch(jdata,cb)
}

/**
 * Submit a factoid arbitrary with hex encoded string documented here:
 * https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#factoid-transaction
 * A factoid-submit api call can be composed with factom_walletd.compose-transaction
 * @method factoid_submit
 * @param {Number} id arbitrary reference id
 * @param {String} transaction hex encoded string
 * @param {function} cb function(data,response) as specified by the restler API
 */
function factoid_submit(id, transaction, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'factoid-submit', 'params':{
    'transaction': transaction
  }}
  dispatch(jdata,cb)
}

/**
 * Send a Chain Commit Message to factomd to create a new Chain
 * The commit chain hex encoded string is documented here:
 * https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#chain-commit
 * https://docs.factom.com/api#factoid-submit
 * @method commit_chain
 * @param {Number} id arbitrary reference id
 * @param {String} message hex encoded string
 * @param {function} cb function(data,response) as specified by the restler API
 */
function commit_chain(id, message, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'commit-chain', 'params':{
    'message': message
  }}
  dispatch(jdata,cb)
}

/**
 * Reveal the First Entry in a Chain to factomd after the Commit to compleate
 * the Chain creation. The reveal chain hex encoded string is documented here:
 * https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#entry
 * https://docs.factom.com/api#factoid-submit
 * @method reveal_chain
 * @param {Number} id arbitrary reference id
 * @param {String} entry reveal chain hex encoded string
 * @param {function} cb function(data,response) as specified by the restler API
 */
function reveal_chain(id, entry, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'reveal-chain', 'params':{
    'entry': entry
  }}
  dispatch(jdata,cb)
}

/**
 * Send an Entry Commit Message to factom to create a new Entry. The entry commit
 * hex encoded string is documented here:
 * https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#entry-commit
 * https://docs.factom.com/api#reveal-chain
 * @method commit_entry
 * @param {Number} id arbitrary reference id
 * @param {String} message hex encoded string for entry
 * @param {function} cb function(data,response) as specified by the restler API
 */
function commit_entry(id, message, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'commit-entry', 'params':{
    'message':message
  }}
  dispatch(jdata,cb)
}

/**
 * Reveal an Entry to factomd after the Commit to compleate the Entry creation.
 * The reveal entry hex encoded string is documented here:
 * https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#entry
 * https://docs.factom.com/api#reveal-entry
 * @method reveal_entry
 * @param {Number} id arbitrary reference id
 * @param {String} entry hex encoded string for reveal entry
 * @param {function} cb function(data,response) as specified by the restler API
 */
function reveal_entry(id, entry, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'reveal-entry', 'params':{
    'entry':entry
  }}
  dispatch(jdata,cb)
}

/**
 * Send a raw hex encoded binary message to the Factom network.
 * This is mostly just for debugging and testing.
 * https://docs.factom.com/api#send-raw-message
 * @method send_raw_message
 * @param {Number} id arbitrary reference id
 * @param {String} message raw hex encoded string
 * @param {function} cb function(data,response) as specified by the restler API
 */
function send_raw_message(id, message, cb)
{
  var jdata = {'jsonrpc': '2.0','id': id,'method':'send-raw-message', 'params':{
    'message':message
  }}
  dispatch(jdata,cb)
}

module.exports = {
  setTimeout,
  setFactomNode,
  directory_block,
  directory_block_head,
  heights,
  raw_data,
  dblock_by_height,
  ablock_by_height,
  ecblock_by_height,
  fblock_by_height,
  factoid_block,
  entrycredit_block,
  admin_block,
  entry_block,
  entry,
  pending_entries,
  transaction,
  ack,
  receipt,
  pending_transactions,
  chain_head,
  entry_credit_balance,
  factoid_balance,
  entry_credit_rate,
  properties,
  factoid_submit,
  commit_chain,
  reveal_chain,
  commit_entry,
  reveal_entry,
  send_raw_message
}
