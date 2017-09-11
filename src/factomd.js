var got = require('got')

var postoptions = {
  body: {},
  json: true,
  headers: {
    'content-type': 'text/plain'},
  retries: 3,
  timeout: 2000
}
// const URL_BASE = 'https://courtesy-node.factom.com/v2'
var URL = 'http://courtesy-node.factom.com/v2'
// var URL = 'http://courtesy-node.factom.com'

/**
  * Set the URL of the factom node.
  * @method setFactomNode
  * @param {url} url of the factom node
 */
function setFactomNode (url) {
  URL = url
}

/**
  * Set the timeout of the JSON request to the factom node
  * @method setTimeout
  * @param {Number} timeout Set the timeout in milliseconds
 */
function setTimeout (timeout) {
  postoptions.timeout = timeout
}

/**
 * Utility commands for dispatching JSON commands to the factom server.
 * @method dispatch
 * @param {Array} jdata
 *
 */
function dispatch (jdata) {
  var opts = postoptions
  opts.body = jdata
  // console.log('============++++ ++++============')
  // console.log(jdata)
  // console.log('============++++ ++++============')
  return got.post(URL, opts)
    .then(response => {
      return response.body
    })
    .catch(error => {
      return error.response.body
    })
}

/**
 * The directory block head is the last known directory block by factom,
 * or in other words, the most recently recorded block.
 * @method directoryBlock
 * @param {Number} id Arbitrary reference id
 * @param {String} keymr
 *
 */
function directoryBlock (id, keymr) {
  var jdata = { 'jsonrpc': '2.0',
    'id': id,
    'method': 'directory-block',
    'params': {
      'KeyMR': keymr
    }}
  return dispatch(jdata)
}

/**
 * The directory block head is the last known directory block by factom,
 * or in other words, the most recently recorded block.
 * @method directoryBlockHead
 * @param {Number} id  arbitrary reference id
 *
 */
function directoryBlockHead (id) {
  var jdata = {'jsonrpc': '2.0', 'id': id, 'method': 'directory-block-head'}
  return dispatch(jdata)
}

/**
 * Returns various heights that allows you to view the state of the blockchain.
 * https://docs.factom.com/api#heights
 * @method heights
 * @param {Number} id  arbitrary reference id
 *
 */
function heights (id) {
  var jdata = {'jsonrpc': '2.0', 'id': id, 'method': 'heights'}
  return dispatch(jdata)
}

/**
 * Retrieve an entry or transaction in raw format, the data is a hex encoded string.
 * https://docs.factom.com/api#raw-data
 * @method rawData
 * @param {Number} id arbitrary reference id
 * @param {String} hash
 *
 */
function rawData (id, hash) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'raw-data',
    'params': {
      'hash': hash
    }}
  return dispatch(jdata)
}

/**
 * Retrieve a directory block given only its height.
 * @method dblockByHeight
 * @param {Number} id arbitrary reference id
 * @param {Number} height height of block requested
 *
 */
function dblockByHeight (id, height) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'dblock-by-height',
    'params': {
      'height': height
    }}
  return dispatch(jdata)
}

/**
 * Retrieve administrative blocks for any given height.
 * @method ablockByHeight
 * @param {Number} id arbitrary reference id
 * @param {Number} height height of block requested
 *
 */
function ablockByHeight (id, height) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'ablock-by-height',
    'params': {
      'height': height
    }}
  return dispatch(jdata)
}

/**
 * Retrieve the entry credit block for any given height.
 * These blocks contain entry credit transaction information.
 * @method ecblockByHeight
 * @param {Number} id arbitrary reference id
 * @param {Number} height height of block requested
 *
 */
function ecblockByHeight (id, height) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'ecblock-by-height',
    'params': {
      'height': height
    }}
  return dispatch(jdata)
}

/**
 * Retrieve the factoid block for any given height.
 * These blocks contain factoid arbitrary information.
 * @param {Number} id arbitrary reference id
 * @param {Number} height height of block requested
 *
 */
function fblockByHeight (id, height) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'fblock-by-height',
    'params': {
      'height': height
    }}
  return dispatch(jdata)
}

/**
 * Retrieve a specified factoid block given its merkle root key.
 * @method factoidBlock
 * @param {Number} id arbitrary reference id
 * @param {String} KeyMr Merkle root key
 *
 */
function factoidBlock (id, KeyMr) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'factoid-block',
    'params': {
      'KeyMr': KeyMr
    }}
  return dispatch(jdata)
}

/**
 * Retrieve a specified entrycredit block given its merkle root key.
 * The numbers are minute markers.
 * @method entryCreditBlock
 * @param {Number} id arbitrary reference id
 * @param {String} KeyMr Merkle root key
 *
 */
function entryCreditBlock (id, KeyMR) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'entrycredit-block',
    'params': {
      'KeyMR': KeyMR
    }}
  return dispatch(jdata)
}

/**
 * Retrieve a specified admin block given its merkle root key.
 * @method adminBlock
 * @param {Number} id arbitrary reference id
 * @param {String} KeyMr Merkle root key
 *
 */
function adminBlock (id, KeyMR) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'admin-block',
    'params': {
      'KeyMR': KeyMR
    }}
  return dispatch(jdata)
}

/**
 * Retrieve a specified entry block given its merkle root key.
 * The entry block contains 0 to many entries
 * @method entryBlock
 * @param {Number} id arbitrary reference id
 * @param {String} KeyMr Merkle root key
 *
 */
function entryBlock (id, KeyMR) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'entry-block',
    'params': {
      'KeyMR': KeyMR
    }}
  return dispatch(jdata)
}

/**
 * Get an Entry from factomd specified by the Entry Hash.
 * @method entry
 * @param {Number} id arbitrary reference id
 * @param {String} hash entry hash
 *
 */
function entry (id, hash) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'entry',
    'params': {
      'Hash': hash
    }}
  return dispatch(jdata)
}

/**
 * Returns an array of the entries that have been submitted
 * but have not been recoreded into the blockchain.
 * @method pendingEntries
 * @param {Number} id arbitrary reference id
 *
 */
function pendingEntries (id) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'pending-entries',
    'params': {
    }}
  return dispatch(jdata)
}

/**
 * Retrieve details of a factoid arbitrary using a transactions hash.
 * Note that information regarding the directory block height,
 * directory block keymr, and transaction block keymr are also included.
 * The “blockheight” parameter in the reponse will always be 0 when using
 * this call, refer to “includedindirectoryblockheight” if you need the height.
 * @method transaction
 * @param {Number} id arbitrary reference id
 *
 */
function transaction (id, hash) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'transaction',
    'params': {
      'hash': hash
    }}
  return dispatch(jdata)
}

/**
 * Find the status of a transaction, whether it be a factoid,
 * reveal entry, or commit entry.
 * @method ack
 * @param {Number} id arbitrary reference id
 * @param {String} hash entry hash
 * @param {String} chainid chain id
 *
 */
function ack (id, hash, chainid) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'ack',
    'params': {
      'hash': hash, 'chainid': chainid, 'fulltransaction': ''
    }}
  return dispatch(jdata)
}

/**
 * Retrieve a reciept providing cryptographially verfiable proof that information
 * was recorded in the factom blockchain and that this was subsequently
 * anchored in the bitcoin blockchain.
 * @method receipt
 * @param {Number} id arbitrary reference id
 * @param {String} hash
 *
 */
function receipt (id, hash) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'receipt',
    'params': {
      'hash': hash
    }}
  return dispatch(jdata)
}

/**
 * Retrieve a reciept providing cryptographially verfiable proof that information
 * was recorded in the factom blockchain and that this was subsequently
 * anchored in the bitcoin blockchain.
 * @method pendingTransactions
 * @param {Number} id arbitrary reference id
 * @param {String} Address
 *
 */
function pendingTransactions (id, Address) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'pending-transactions',
    'params': {
      'Address': Address
    }}
  return dispatch(jdata)
}

/**
 * Return the keymr of the head of the chain for a chain ID
 * (the unique hash created when the chain was created).
 * @method chainHead
 * @param {Number} id arbitrary reference id
 * @param {Number} ChainID chain id
 *
 */
function chainHead (id, ChainID) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'chain-head',
    'params': {
      'ChainID': ChainID
    }}
  return dispatch(jdata)
}

/**
 * Return its current balance for a specific entry credit address.
 * @method entryCreditBalance
 * @param {Number} id arbitrary reference id
 * @param {String} address entry credit address
 *
 */
function entryCreditBalance (id, address) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'entry-credit-balance',
    'params': {
      'address': address
    }}
  return dispatch(jdata)
}

/**
 * This call returns the number of Factoshis (Factoids *10^-8) that are currently
 * available at the address specified.
 * @method factoidBalance
 * @param {Number} id arbitrary reference id
 * @param {String} address factoid address
 *
 */
function factoidBalance (id, address) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'factoid-balance',
    'params': {
      'address': address
    }}
  return dispatch(jdata)
}

/**
 * Returns the number of Factoshis (Factoids *10^-8) that purchase a single
 * Entry Credit. The minimum factoid fees are also determined by this rate,
 * along with how complex the factoid arbitrary is.
 * @method entryCreditRate
 * @param {Number} id arbitrary reference id
 *
 */
function entryCreditRate (id) {
  var jdata = {'jsonrpc': '2.0', 'id': id, 'method': 'entry-credit-rate'}
  return dispatch(jdata)
}

/**
 * Retrieve current properties of the Factom system,
 * including the software and the API versions.
 * @method properties
 * @param {Number} id arbitrary reference id
 *
 */
function properties (id) {
  var jdata = {'jsonrpc': '2.0', 'id': id, 'method': 'properties'}
  return dispatch(jdata)
}

/**
 * Submit a factoid arbitrary with hex encoded string documented here:
 * https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#factoid-transaction
 * A factoid-submit api call can be composed with factom_walletd.compose-transaction
 * @method factoidSubmit
 * @param {Number} id arbitrary reference id
 * @param {String} transaction hex encoded string
 *
 */
function factoidSubmit (id, transaction) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'factoid-submit',
    'params': {
      'transaction': transaction
    }}
  return dispatch(jdata)
}

/**
 * Send a Chain Commit Message to factomd to create a new Chain
 * The commit chain hex encoded string is documented here:
 * https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#chain-commit
 * https://docs.factom.com/api#factoid-submit
 * @method commit_chain
 * @param {Number} id arbitrary reference id
 * @param {String} message hex encoded string
 *
 */
function commitChain (id, message) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'commit-chain',
    'params': {
      'message': message
    }}
  return dispatch(jdata)
}

/**
 * Reveal the First Entry in a Chain to factomd after the Commit to compleate
 * the Chain creation. The reveal chain hex encoded string is documented here:
 * https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#entry
 * https://docs.factom.com/api#factoid-submit
 * @method revealChain
 * @param {Number} id arbitrary reference id
 * @param {String} entry reveal chain hex encoded string
 *
 */
function revealChain (id, entry) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'reveal-chain',
    'params': {
      'entry': entry
    }}
  return dispatch(jdata)
}

/**
 * Send an Entry Commit Message to factom to create a new Entry. The entry commit
 * hex encoded string is documented here:
 * https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#entry-commit
 * https://docs.factom.com/api#reveal-chain
 * @method commitEntry
 * @param {Number} id arbitrary reference id
 * @param {String} message hex encoded string for entry
 *
 */
function commitEntry (id, message) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'commit-entry',
    'params': {
      'message': message
    }}
  return dispatch(jdata)
}

/**
 * Reveal an Entry to factomd after the Commit to compleate the Entry creation.
 * The reveal entry hex encoded string is documented here:
 * https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#entry
 * https://docs.factom.com/api#reveal-entry
 * @method revealEntry
 * @param {Number} id arbitrary reference id
 * @param {String} entry hex encoded string for reveal entry
 *
 */
function revealEntry (id, entry) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'reveal-entry',
    'params': {
      'entry': entry
    }}
  return dispatch(jdata)
}

/**
 * Send a raw hex encoded binary message to the Factom network.
 * This is mostly just for debugging and testing.
 * https://docs.factom.com/api#send-raw-message
 * @method sendRawMessage
 * @param {Number} id arbitrary reference id
 * @param {String} message raw hex encoded string
 *
 */
function sendRawMessage (id, message) {
  var jdata = {'jsonrpc': '2.0',
    'id': id,
    'method': 'send-raw-message',
    'params': {
      'message': message
    }}
  return dispatch(jdata)
}

module.exports = {
  setTimeout,
  setFactomNode,
  directoryBlock,
  directoryBlockHead,
  heights,
  rawData,
  dblockByHeight,
  ablockByHeight,
  ecblockByHeight,
  fblockByHeight,
  factoidBlock,
  entryCreditBlock,
  adminBlock,
  entryBlock,
  entry,
  pendingEntries,
  transaction,
  ack,
  receipt,
  pendingTransactions,
  chainHead,
  entryCreditBalance,
  factoidBalance,
  entryCreditRate,
  properties,
  factoidSubmit,
  commitChain,
  revealChain,
  commitEntry,
  revealEntry,
  sendRawMessage
}
