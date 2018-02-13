<!-- Generated by documentation.js. Update this documentation by updating the source code. -->
# factomdjs

JavaScript implementation of the factomd API v2.

## Installation

    $ npm install factomdjs --save

## Usage

```js
const factomdjs = require('factomdjs');

// By default the library connect to a courtesy node hosted by factom.com.
// Use setFactomNode to connect to a specific Factom Node.
// factomdjs.setFactomNode('http://localhost:8088/v2');

// Example to retrieve the content of an entry
factomdjs.entry(0, 'ce3df00a20b6aaaf14f8ff0a2c3efa854160245cf17ce9d36a8ff03090a1135e')
    .then(res => res.result)
    .then(res => Buffer.from(res.content, 'hex').toString('utf8'))
    .then(console.log);
```

## Table of Contents

-   [setFactomNode](#setfactomnode)
-   [setTimeout](#settimeout)
-   [dispatch](#dispatch)
-   [directoryBlock](#directoryblock)
-   [directoryBlockHead](#directoryblockhead)
-   [heights](#heights)
-   [rawData](#rawdata)
-   [dblockByHeight](#dblockbyheight)
-   [ablockByHeight](#ablockbyheight)
-   [ecblockByHeight](#ecblockbyheight)
-   [fblockByHeight](#fblockbyheight)
-   [factoidBlock](#factoidblock)
-   [entryCreditBlock](#entrycreditblock)
-   [adminBlock](#adminblock)
-   [entryBlock](#entryblock)
-   [entry](#entry)
-   [pendingEntries](#pendingentries)
-   [transaction](#transaction)
-   [ack](#ack)
-   [receipt](#receipt)
-   [pendingTransactions](#pendingtransactions)
-   [chainHead](#chainhead)
-   [entryCreditBalance](#entrycreditbalance)
-   [factoidBalance](#factoidbalance)
-   [entryCreditRate](#entrycreditrate)
-   [properties](#properties)
-   [factoidSubmit](#factoidsubmit)
-   [commit_chain](#commit_chain)
-   [revealChain](#revealchain)
-   [commitEntry](#commitentry)
-   [revealEntry](#revealentry)
-   [sendRawMessage](#sendrawmessage)

### setFactomNode

[src/factomd.js:20-22](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L20-L22 "Source code on GitHub")

Set the URL of the factom node.

**Parameters**

-   `url` **[url](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL)** of the factom node

### setTimeout

[src/factomd.js:29-31](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L29-L31 "Source code on GitHub")

Set the timeout of the JSON request to the factom node

**Parameters**

-   `timeout` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Set the timeout in milliseconds

### dispatch

[src/factomd.js:39-52](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L39-L52 "Source code on GitHub")

Utility commands for dispatching JSON commands to the factom server.

**Parameters**

-   `jdata` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

### directoryBlock

[src/factomd.js:62-70](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L62-L70 "Source code on GitHub")

The directory block head is the last known directory block by factom,
or in other words, the most recently recorded block.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Arbitrary reference id
-   `keymr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### directoryBlockHead

[src/factomd.js:79-82](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L79-L82 "Source code on GitHub")

The directory block head is the last known directory block by factom,
or in other words, the most recently recorded block.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id

### heights

[src/factomd.js:91-94](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L91-L94 "Source code on GitHub")

Returns various heights that allows you to view the state of the blockchain.
<https://docs.factom.com/api#heights>

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id

### rawData

[src/factomd.js:104-112](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L104-L112 "Source code on GitHub")

Retrieve an entry or transaction in raw format, the data is a hex encoded string.
<https://docs.factom.com/api#raw-data>

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `hash` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### dblockByHeight

[src/factomd.js:121-129](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L121-L129 "Source code on GitHub")

Retrieve a directory block given only its height.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `height` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** height of block requested

### ablockByHeight

[src/factomd.js:138-146](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L138-L146 "Source code on GitHub")

Retrieve administrative blocks for any given height.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `height` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** height of block requested

### ecblockByHeight

[src/factomd.js:156-164](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L156-L164 "Source code on GitHub")

Retrieve the entry credit block for any given height.
These blocks contain entry credit transaction information.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `height` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** height of block requested

### fblockByHeight

[src/factomd.js:173-181](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L173-L181 "Source code on GitHub")

Retrieve the factoid block for any given height.
These blocks contain factoid arbitrary information.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `height` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** height of block requested

### factoidBlock

[src/factomd.js:190-198](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L190-L198 "Source code on GitHub")

Retrieve a specified factoid block given its merkle root key.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `KeyMr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Merkle root key

### entryCreditBlock

[src/factomd.js:208-216](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L208-L216 "Source code on GitHub")

Retrieve a specified entrycredit block given its merkle root key.
The numbers are minute markers.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `KeyMr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Merkle root key

### adminBlock

[src/factomd.js:225-233](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L225-L233 "Source code on GitHub")

Retrieve a specified admin block given its merkle root key.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `KeyMr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Merkle root key

### entryBlock

[src/factomd.js:243-251](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L243-L251 "Source code on GitHub")

Retrieve a specified entry block given its merkle root key.
The entry block contains 0 to many entries

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `KeyMr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Merkle root key

### entry

[src/factomd.js:260-268](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L260-L268 "Source code on GitHub")

Get an Entry from factomd specified by the Entry Hash.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `hash` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** entry hash

### pendingEntries

[src/factomd.js:277-284](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L277-L284 "Source code on GitHub")

Returns an array of the entries that have been submitted
but have not been recoreded into the blockchain.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id

### transaction

[src/factomd.js:296-304](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L296-L304 "Source code on GitHub")

Retrieve details of a factoid arbitrary using a transactions hash.
Note that information regarding the directory block height,
directory block keymr, and transaction block keymr are also included.
The “blockheight” parameter in the reponse will always be 0 when using
this call, refer to “includedindirectoryblockheight” if you need the height.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id

### ack

[src/factomd.js:315-323](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L315-L323 "Source code on GitHub")

Find the status of a transaction, whether it be a factoid,
reveal entry, or commit entry.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `hash` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** entry hash
-   `chainid` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** chain id

### receipt

[src/factomd.js:334-342](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L334-L342 "Source code on GitHub")

Retrieve a reciept providing cryptographially verfiable proof that information
was recorded in the factom blockchain and that this was subsequently
anchored in the bitcoin blockchain.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `hash` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### pendingTransactions

[src/factomd.js:353-361](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L353-L361 "Source code on GitHub")

Retrieve a reciept providing cryptographially verfiable proof that information
was recorded in the factom blockchain and that this was subsequently
anchored in the bitcoin blockchain.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `Address` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### chainHead

[src/factomd.js:371-379](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L371-L379 "Source code on GitHub")

Return the keymr of the head of the chain for a chain ID
(the unique hash created when the chain was created).

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `ChainID` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** chain id

### entryCreditBalance

[src/factomd.js:388-396](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L388-L396 "Source code on GitHub")

Return its current balance for a specific entry credit address.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `address` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** entry credit address

### factoidBalance

[src/factomd.js:406-414](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L406-L414 "Source code on GitHub")

This call returns the number of Factoshis (Factoids \*10^-8) that are currently
available at the address specified.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `address` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** factoid address

### entryCreditRate

[src/factomd.js:424-427](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L424-L427 "Source code on GitHub")

Returns the number of Factoshis (Factoids \*10^-8) that purchase a single
Entry Credit. The minimum factoid fees are also determined by this rate,
along with how complex the factoid arbitrary is.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id

### properties

[src/factomd.js:436-439](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L436-L439 "Source code on GitHub")

Retrieve current properties of the Factom system,
including the software and the API versions.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id

### factoidSubmit

[src/factomd.js:450-458](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L450-L458 "Source code on GitHub")

Submit a factoid arbitrary with hex encoded string documented here:
<https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#factoid-transaction>
A factoid-submit api call can be composed with factom_walletd.compose-transaction

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `transaction` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** hex encoded string

### commit_chain

[src/factomd.js:470-478](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L470-L478 "Source code on GitHub")

Send a Chain Commit Message to factomd to create a new Chain
The commit chain hex encoded string is documented here:
<https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#chain-commit>
<https://docs.factom.com/api#factoid-submit>

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `message` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** hex encoded string

### revealChain

[src/factomd.js:490-498](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L490-L498 "Source code on GitHub")

Reveal the First Entry in a Chain to factomd after the Commit to compleate
the Chain creation. The reveal chain hex encoded string is documented here:
<https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#entry>
<https://docs.factom.com/api#factoid-submit>

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `entry` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** reveal chain hex encoded string

### commitEntry

[src/factomd.js:510-518](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L510-L518 "Source code on GitHub")

Send an Entry Commit Message to factom to create a new Entry. The entry commit
hex encoded string is documented here:
<https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#entry-commit>
<https://docs.factom.com/api#reveal-chain>

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `message` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** hex encoded string for entry

### revealEntry

[src/factomd.js:530-538](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L530-L538 "Source code on GitHub")

Reveal an Entry to factomd after the Commit to compleate the Entry creation.
The reveal entry hex encoded string is documented here:
<https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#entry>
<https://docs.factom.com/api#reveal-entry>

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `entry` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** hex encoded string for reveal entry

### sendRawMessage

[src/factomd.js:549-557](https://github.com/MyFactomWallet/factomdjs/blob/4250e16f0cd1148639078a278e68fe1524499c9e/src/factomd.js#L549-L557 "Source code on GitHub")

Send a raw hex encoded binary message to the Factom network.
This is mostly just for debugging and testing.
<https://docs.factom.com/api#send-raw-message>

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `message` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** raw hex encoded string
