'use-strict'

var URL = 'http://courtesy-node.factom.com/v2'
var lib = URL.startsWith('https') ? require('https') : require('http')
var options = optinit()
var timeout = 2000

function optinit () {
  var opt = require('url').parse(URL)
  opt.headers = { 'content-type': 'text/plain', 'content-length': 0 }
  opt.method = 'POST'
  return opt
}

function newCounter () {
  let i = 0
  return function () {
    i++
    return i
  }
}

const APICounter = newCounter()

/**
  * Set the URL of the factom node.
  * @method setFactomNode
  * @param {url} url of the factom node
 */
function setFactomNode (url) {
  URL = url
  lib = URL.startsWith('https') ? require('https') : require('http')
  options = optinit()
}

/**
  * Set the timeout of the JSON request to the factom node
  * @method setTimeout
  * @param {Number} to Set the timeout in milliseconds
 */
function setTimeout (to) {
  timeout = to
}

/**
 * Utility commands for dispatching JSON commands to the factom server.
 * @method dispatch
 * @param {Array} jdata
 *
 */
function dispatch (jdata) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(jdata)
    options.headers['content-length'] = Buffer.byteLength(body)
    const request = new lib.ClientRequest(options)
    request.on('socket', socket => {
      socket.setTimeout(timeout)
      socket.on('timeout', () => request.abort())
    })
    request.end(body)
    request.on('response', response => {
      response.setEncoding('utf8')

      // temporary data holder
      const body = []
      // on every content chunk, push it to the data array
      response.on('data', data => body.push(data))
      // all done, resolve promise with those joined chunks
      response.on('end', function () {
        // handle http errors
        if (response.statusCode < 200 || response.statusCode > 299) {
          reject(JSON.parse(body.join('')).error)
        } else {
          resolve(JSON.parse(body.join('')).result)
        }
      })
    })
    // handle connection errors of the request
    request.on('error', err => reject(err))
  })
}

/**
 * The directory block head is the last known directory block by factom,
 * or in other words, the most recently recorded block.
 * @method directoryBlock
 * @param {String} keymr
 *
 */
function directoryBlock (keymr) {
  var jdata = { 'jsonrpc': '2.0',
    'id': APICounter(),
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
 *
 */
function directoryBlockHead () {
  var jdata = {'jsonrpc': '2.0', 'id': APICounter(), 'method': 'directory-block-head'}
  return dispatch(jdata)
}

/**
 * Returns various heights that allows you to view the state of the blockchain.
 * https://docs.factom.com/api#heights
 * @method heights
 *
 */
function heights () {
  var jdata = {'jsonrpc': '2.0', 'id': APICounter(), 'method': 'heights'}
  return dispatch(jdata)
}

/**
 * Retrieve an entry or transaction in raw format, the data is a hex encoded string.
 * https://docs.factom.com/api#raw-data
 * @method rawData
 * @param {String} hash
 *
 */
function rawData (hash) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
    'method': 'raw-data',
    'params': {
      'hash': hash
    }}
  return dispatch(jdata)
}

/**
 * Retrieve a directory block given only its height.
 * @method dblockByHeight
 * @param {Number} height height of block requested
 *
 */
function dblockByHeight (height) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
    'method': 'dblock-by-height',
    'params': {
      'height': height
    }}
  return dispatch(jdata)
}

/**
 * Retrieve administrative blocks for any given height.
 * @method ablockByHeight
 * @param {Number} height height of block requested
 *
 */
function ablockByHeight (height) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
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
 * @param {Number} height height of block requested
 *
 */
function ecblockByHeight (height) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
    'method': 'ecblock-by-height',
    'params': {
      'height': height
    }}
  return dispatch(jdata)
}

/**
 * Retrieve the factoid block for any given height.
 * These blocks contain factoid arbitrary information.
 * @param {Number} height height of block requested
 *
 */
function fblockByHeight (height) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
    'method': 'fblock-by-height',
    'params': {
      'height': height
    }}
  return dispatch(jdata)
}

/**
 * Retrieve a specified factoid block given its merkle root key.
 * @method factoidBlock
 * @param {String} keyMr Merkle root key
 *
 */
function factoidBlock (keyMr) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
    'method': 'factoid-block',
    'params': {
      'KeyMr': keyMr
    }}
  return dispatch(jdata)
}

/**
 * Retrieve a specified entrycredit block given its merkle root key.
 * The numbers are minute markers.
 * @method entryCreditBlock
 * @param {String} keyMr Merkle root key
 *
 */
function entryCreditBlock (keyMR) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
    'method': 'entrycredit-block',
    'params': {
      'KeyMR': keyMR
    }}
  return dispatch(jdata)
}

/**
 * Retrieve a specified admin block given its merkle root key.
 * @method adminBlock
 * @param {String} keyMr Merkle root key
 *
 */
function adminBlock (keyMR) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
    'method': 'admin-block',
    'params': {
      'KeyMR': keyMR
    }}
  return dispatch(jdata)
}

/**
 * Retrieve a specified entry block given its merkle root key.
 * The entry block contains 0 to many entries
 * @method entryBlock
 * @param {String} keyMr Merkle root key
 *
 */
function entryBlock (keyMR) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
    'method': 'entry-block',
    'params': {
      'KeyMR': keyMR
    }}
  return dispatch(jdata)
}

/**
 * Get an Entry from factomd specified by the Entry Hash.
 * @method entry
 * @param {String} hash entry hash
 *
 */
function entry (hash) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
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
 *
 */
function pendingEntries () {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
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
 *
 */
function transaction (hash) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
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
 * @param {String} hash entry hash
 * @param {String} chainid chain id
 *
 */
function ack (hash, chainid) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
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
 * @param {String} hash
 *
 */
function receipt (hash) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
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
 * @param {String} address
 *
 */
function pendingTransactions (address) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
    'method': 'pending-transactions',
    'params': {
      'Address': address
    }}
  return dispatch(jdata)
}

/**
 * Return the keymr of the head of the chain for a chain ID
 * (the unique hash created when the chain was created).
 * @method chainHead
 * @param {Number} chainID chain id
 *
 */
function chainHead (chainID) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
    'method': 'chain-head',
    'params': {
      'ChainID': chainID
    }}
  return dispatch(jdata)
}

/**
 * Return its current balance for a specific entry credit address.
 * @method entryCreditBalance
 * @param {String} address entry credit address
 *
 */
function entryCreditBalance (address) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
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
 * @param {String} address factoid address
 *
 */
function factoidBalance (address) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
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
 *
 */
function entryCreditRate () {
  var jdata = {'jsonrpc': '2.0', 'id': APICounter(), 'method': 'entry-credit-rate'}
  return dispatch(jdata)
}

/**
 * Retrieve current properties of the Factom system,
 * including the software and the API versions.
 * @method properties
 *
 */
function properties () {
  var jdata = {'jsonrpc': '2.0', 'id': APICounter(), 'method': 'properties'}
  return dispatch(jdata)
}

/**
 * Submit a factoid arbitrary with hex encoded string documented here:
 * https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#factoid-transaction
 * A factoid-submit api call can be composed with factom_walletd.compose-transaction
 * @method factoidSubmit
 * @param {String} transaction hex encoded string
 *
 */
function factoidSubmit (transaction) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
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
 * @param {String} message hex encoded string
 *
 */
function commitChain (message) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
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
 * @param {String} entry reveal chain hex encoded string
 *
 */
function revealChain (entry) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
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
 * @param {String} message hex encoded string for entry
 *
 */
function commitEntry (message) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
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
 * @param {String} entry hex encoded string for reveal entry
 *
 */
function revealEntry (entry) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
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
 * @param {String} message raw hex encoded string
 *
 */
function sendRawMessage (message) {
  var jdata = {'jsonrpc': '2.0',
    'id': APICounter(),
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
