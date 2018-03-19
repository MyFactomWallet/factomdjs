'use-strict'

function optinit (url) {
  const opt = require('url').parse(url)
  opt.headers = { 'content-type': 'text/plain', 'content-length': 0 }
  opt.method = 'POST'
  return opt
}

function newCounter () {
  let i = 0
  return function () {
    return ++i
  }
}

function Factomd () {
  this.timeout = 2000
  this.setFactomNode('http://courtesy-node.factom.com/v2')
  this.APICounter = newCounter()
}

/**
  * Set the URL of the factom node.
  * @method setFactomNode
  * @param {url} url of the factom node
 */
Factomd.prototype.setFactomNode = function (url) {
  this.URL = url
  this.options = optinit(url)
  this.lib = url.startsWith('https') ? require('https') : require('http')
}

/**
  * Get the URL of the factom node.
  * @method getUrl
 */
Factomd.prototype.getFactomNode = function () {
  return this.URL
}

/**
  * Set the timeout of the JSON request to the factom node
  * @method setTimeout
  * @param {Number} to Set the timeout in milliseconds
 */
Factomd.prototype.setTimeout = function (to) {
  this.timeout = to
}

/**
  * Get the timeout of the JSON request to the factom node
  * @method getTimeout
 */
Factomd.prototype.getTimeout = function () {
  return this.timeout
}

/**
 * Utility commands for dispatching JSON commands to the factom server.
 * @method dispatch
 * @param {Array} jdata
 *
 */
Factomd.prototype.dispatch = function (jdata) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(jdata)
    this.options.headers['content-length'] = Buffer.byteLength(body)
    const request = new this.lib.ClientRequest(this.options)
    request.on('socket', socket => {
      socket.setTimeout(this.timeout)
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
        const responseBody = body.join('')
        if (response.statusCode < 200 || response.statusCode > 299) {
          responseBody.includes('"jsonrpc":"2.0"') ? reject(JSON.parse(responseBody).error) : reject(responseBody)
        } else {
          resolve(JSON.parse(responseBody).result)
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
Factomd.prototype.directoryBlock = function (keymr) {
  const jdata = { 'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'directory-block',
    'params': {
      'KeyMR': keymr
    }}
  return this.dispatch(jdata)
}

/**
 * The directory block head is the last known directory block by factom,
 * or in other words, the most recently recorded block.
 * @method directoryBlockHead
 *
 */
Factomd.prototype.directoryBlockHead = function () {
  const jdata = {'jsonrpc': '2.0', 'id': this.APICounter(), 'method': 'directory-block-head'}
  return this.dispatch(jdata)
}

/**
 * Returns various heights that allows you to view the state of the blockchain.
 * https://docs.factom.com/api#heights
 * @method heights
 *
 */
Factomd.prototype.heights = function () {
  const jdata = {'jsonrpc': '2.0', 'id': this.APICounter(), 'method': 'heights'}
  return this.dispatch(jdata)
}

/**
 * Retrieve an entry or transaction in raw format, the data is a hex encoded string.
 * https://docs.factom.com/api#raw-data
 * @method rawData
 * @param {String} hash
 *
 */
Factomd.prototype.rawData = function (hash) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'raw-data',
    'params': {
      'hash': hash
    }}
  return this.dispatch(jdata)
}

/**
 * Retrieve a directory block given only its height.
 * @method dblockByHeight
 * @param {Number} height height of block requested
 *
 */
Factomd.prototype.dblockByHeight = function (height) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'dblock-by-height',
    'params': {
      'height': height
    }}
  return this.dispatch(jdata)
}

/**
 * Retrieve administrative blocks for any given height.
 * @method ablockByHeight
 * @param {Number} height height of block requested
 *
 */
Factomd.prototype.ablockByHeight = function (height) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'ablock-by-height',
    'params': {
      'height': height
    }}
  return this.dispatch(jdata)
}

/**
 * Retrieve the entry credit block for any given height.
 * These blocks contain entry credit transaction information.
 * @method ecblockByHeight
 * @param {Number} height height of block requested
 *
 */
Factomd.prototype.ecblockByHeight = function (height) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'ecblock-by-height',
    'params': {
      'height': height
    }}
  return this.dispatch(jdata)
}

/**
 * Retrieve the factoid block for any given height.
 * These blocks contain factoid arbitrary information.
 * @param {Number} height height of block requested
 *
 */
Factomd.prototype.fblockByHeight = function (height) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'fblock-by-height',
    'params': {
      'height': height
    }}
  return this.dispatch(jdata)
}

/**
 * Retrieve a specified factoid block given its merkle root key.
 * @method factoidBlock
 * @param {String} keyMr Merkle root key
 *
 */
Factomd.prototype.factoidBlock = function (keyMr) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'factoid-block',
    'params': {
      'KeyMr': keyMr
    }}
  return this.dispatch(jdata)
}

/**
 * Retrieve a specified entrycredit block given its merkle root key.
 * The numbers are minute markers.
 * @method entrycreditBlock
 * @param {String} keyMr Merkle root key
 *
 */
Factomd.prototype.entrycreditBlock = function (keyMR) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'entrycredit-block',
    'params': {
      'KeyMR': keyMR
    }}
  return this.dispatch(jdata)
}

/**
 * Retrieve a specified admin block given its merkle root key.
 * @method adminBlock
 * @param {String} keyMr Merkle root key
 *
 */
Factomd.prototype.adminBlock = function (keyMR) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'admin-block',
    'params': {
      'KeyMR': keyMR
    }}
  return this.dispatch(jdata)
}

/**
 * Retrieve a specified entry block given its merkle root key.
 * The entry block contains 0 to many entries
 * @method entryBlock
 * @param {String} keyMr Merkle root key
 *
 */
Factomd.prototype.entryBlock = function (keyMR) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'entry-block',
    'params': {
      'KeyMR': keyMR
    }}
  return this.dispatch(jdata)
}

/**
 * Get an Entry from factomd specified by the Entry Hash.
 * @method entry
 * @param {String} hash entry hash
 *
 */
Factomd.prototype.entry = function (hash) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'entry',
    'params': {
      'Hash': hash
    }}
  return this.dispatch(jdata)
}

/**
 * Returns an array of the entries that have been submitted
 * but have not been recoreded into the blockchain.
 * @method pendingEntries
 *
 */
Factomd.prototype.pendingEntries = function () {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'pending-entries',
    'params': {
    }}
  return this.dispatch(jdata)
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
Factomd.prototype.transaction = function (hash) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'transaction',
    'params': {
      'hash': hash
    }}
  return this.dispatch(jdata)
}

/**
 * Find the status of a transaction, whether it be a factoid,
 * reveal entry, or commit entry.
 * @method ack
 * @param {String} hash entry hash
 * @param {String} chainid chain id
 *
 */
Factomd.prototype.ack = function (hash, chainid) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'ack',
    'params': {
      'hash': hash, 'chainid': chainid, 'fulltransaction': ''
    }}
  return this.dispatch(jdata)
}

/**
 * Retrieve a reciept providing cryptographially verfiable proof that information
 * was recorded in the factom blockchain and that this was subsequently
 * anchored in the bitcoin blockchain.
 * @method receipt
 * @param {String} hash
 *
 */
Factomd.prototype.receipt = function (hash) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'receipt',
    'params': {
      'hash': hash
    }}
  return this.dispatch(jdata)
}

/**
 * Retrieve a reciept providing cryptographially verfiable proof that information
 * was recorded in the factom blockchain and that this was subsequently
 * anchored in the bitcoin blockchain.
 * @method pendingTransactions
 * @param {String} address
 *
 */
Factomd.prototype.pendingTransactions = function (address) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'pending-transactions',
    'params': {
      'Address': address
    }}
  return this.dispatch(jdata)
}

/**
 * Return the keymr of the head of the chain for a chain ID
 * (the unique hash created when the chain was created).
 * @method chainHead
 * @param {Number} chainID chain id
 *
 */
Factomd.prototype.chainHead = function (chainID) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'chain-head',
    'params': {
      'ChainID': chainID
    }}
  return this.dispatch(jdata)
}

/**
 * Return its current balance for a specific entry credit address.
 * @method entryCreditBalance
 * @param {String} address entry credit address
 *
 */
Factomd.prototype.entryCreditBalance = function (address) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'entry-credit-balance',
    'params': {
      'address': address
    }}
  return this.dispatch(jdata)
}

/**
 * This call returns the number of Factoshis (Factoids *10^-8) that are currently
 * available at the address specified.
 * @method factoidBalance
 * @param {String} address factoid address
 *
 */
Factomd.prototype.factoidBalance = function (address) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'factoid-balance',
    'params': {
      'address': address
    }}
  return this.dispatch(jdata)
}

/**
 * Returns the number of Factoshis (Factoids *10^-8) that purchase a single
 * Entry Credit. The minimum factoid fees are also determined by this rate,
 * along with how complex the factoid arbitrary is.
 * @method entryCreditRate
 *
 */
Factomd.prototype.entryCreditRate = function () {
  const jdata = {'jsonrpc': '2.0', 'id': this.APICounter(), 'method': 'entry-credit-rate'}
  return this.dispatch(jdata)
}

/**
 * Retrieve current properties of the Factom system,
 * including the software and the API versions.
 * @method properties
 *
 */
Factomd.prototype.properties = function () {
  const jdata = {'jsonrpc': '2.0', 'id': this.APICounter(), 'method': 'properties'}
  return this.dispatch(jdata)
}

/**
 * Submit a factoid arbitrary with hex encoded string documented here:
 * https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#factoid-transaction
 * A factoid-submit api call can be composed with factom_walletd.compose-transaction
 * @method factoidSubmit
 * @param {String} transaction hex encoded string
 *
 */
Factomd.prototype.factoidSubmit = function (transaction) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'factoid-submit',
    'params': {
      'transaction': transaction
    }}
  return this.dispatch(jdata)
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
Factomd.prototype.commitChain = function (message) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'commit-chain',
    'params': {
      'message': message
    }}
  return this.dispatch(jdata)
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
Factomd.prototype.revealChain = function (entry) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'reveal-chain',
    'params': {
      'entry': entry
    }}
  return this.dispatch(jdata)
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
Factomd.prototype.commitEntry = function (message) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'commit-entry',
    'params': {
      'message': message
    }}
  return this.dispatch(jdata)
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
Factomd.prototype.revealEntry = function (entry) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'reveal-entry',
    'params': {
      'entry': entry
    }}
  return this.dispatch(jdata)
}

/**
 * Send a raw hex encoded binary message to the Factom network.
 * This is mostly just for debugging and testing.
 * https://docs.factom.com/api#send-raw-message
 * @method sendRawMessage
 * @param {String} message raw hex encoded string
 *
 */
Factomd.prototype.sendRawMessage = function (message) {
  const jdata = {'jsonrpc': '2.0',
    'id': this.APICounter(),
    'method': 'send-raw-message',
    'params': {
      'message': message
    }}
  return this.dispatch(jdata)
}

module.exports.Factomd = Factomd
