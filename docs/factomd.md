<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

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

## setFactomNode

[src/factomd.js:17-19](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L17-L19 "Source code on GitHub")

Set the URL of the factom node.  Note: Security measures built into
modern browsers prevent the URL domain to differ from the server
domain without proper Cross-Origin Resource Sharing (CORS) configuration.
Please take note of this:
<http://blog.portswigger.net/2016/10/exploiting-cors-misconfigurations-for.html>

**Parameters**

-   `timeout` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Set the timeout in milliseconds

## setTimeout

[src/factomd.js:26-28](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L26-L28 "Source code on GitHub")

Set the timeout of the JSON request to the factom node

**Parameters**

-   `timeout` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Set the timeout in milliseconds

## dispatch

[src/factomd.js:36-43](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L36-L43 "Source code on GitHub")

Utility commands for dispatching JSON commands to the factom server.

**Parameters**

-   `jdata` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## directoryBlock

[src/factomd.js:53-61](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L53-L61 "Source code on GitHub")

The directory block head is the last known directory block by factom,
or in other words, the most recently recorded block.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Arbitrary reference id
-   `keymr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## directoryBlockHead

[src/factomd.js:70-73](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L70-L73 "Source code on GitHub")

The directory block head is the last known directory block by factom,
or in other words, the most recently recorded block.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## heights

[src/factomd.js:82-85](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L82-L85 "Source code on GitHub")

Returns various heights that allows you to view the state of the blockchain.
<https://docs.factom.com/api#heights>

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## rawData

[src/factomd.js:95-103](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L95-L103 "Source code on GitHub")

Retrieve an entry or transaction in raw format, the data is a hex encoded string.
<https://docs.factom.com/api#raw-data>

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `hash` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## dblockByHeight

[src/factomd.js:112-120](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L112-L120 "Source code on GitHub")

Retrieve a directory block given only its height.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `height` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** height of block requested
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## ablockByHeight

[src/factomd.js:129-137](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L129-L137 "Source code on GitHub")

Retrieve administrative blocks for any given height.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `height` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** height of block requested
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## ecblockByHeight

[src/factomd.js:147-155](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L147-L155 "Source code on GitHub")

Retrieve the entry credit block for any given height.
These blocks contain entry credit transaction information.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `height` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** height of block requested
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## fblockByHeight

[src/factomd.js:164-172](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L164-L172 "Source code on GitHub")

Retrieve the factoid block for any given height.
These blocks contain factoid arbitrary information.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `height` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** height of block requested
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## factoidBlock

[src/factomd.js:181-189](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L181-L189 "Source code on GitHub")

Retrieve a specified factoid block given its merkle root key.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `KeyMr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Merkle root key
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## entryCreditBlock

[src/factomd.js:199-207](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L199-L207 "Source code on GitHub")

Retrieve a specified entrycredit block given its merkle root key.
The numbers are minute markers.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `KeyMr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Merkle root key
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## adminBlock

[src/factomd.js:216-224](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L216-L224 "Source code on GitHub")

Retrieve a specified admin block given its merkle root key.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `KeyMr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Merkle root key
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## entryBlock

[src/factomd.js:234-242](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L234-L242 "Source code on GitHub")

Retrieve a specified entry block given its merkle root key.
The entry block contains 0 to many entries

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `KeyMr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Merkle root key
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## entry

[src/factomd.js:251-259](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L251-L259 "Source code on GitHub")

Get an Entry from factomd specified by the Entry Hash.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `hash` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** entry hash
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## pendingEntries

[src/factomd.js:268-275](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L268-L275 "Source code on GitHub")

Returns an array of the entries that have been submitted
but have not been recoreded into the blockchain.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## transaction

[src/factomd.js:287-295](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L287-L295 "Source code on GitHub")

Retrieve details of a factoid arbitrary using a transactions hash.
Note that information regarding the directory block height,
directory block keymr, and transaction block keymr are also included.
The “blockheight” parameter in the reponse will always be 0 when using
this call, refer to “includedindirectoryblockheight” if you need the height.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## ack

[src/factomd.js:306-314](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L306-L314 "Source code on GitHub")

Find the status of a transaction, whether it be a factoid,
reveal entry, or commit entry.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `hash` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** entry hash
-   `chainid` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** chain id
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## receipt

[src/factomd.js:325-333](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L325-L333 "Source code on GitHub")

Retrieve a reciept providing cryptographially verfiable proof that information
was recorded in the factom blockchain and that this was subsequently
anchored in the bitcoin blockchain.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `hash` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## pendingTransactions

[src/factomd.js:344-352](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L344-L352 "Source code on GitHub")

Retrieve a reciept providing cryptographially verfiable proof that information
was recorded in the factom blockchain and that this was subsequently
anchored in the bitcoin blockchain.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `Address` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## chainHead

[src/factomd.js:362-370](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L362-L370 "Source code on GitHub")

Return the keymr of the head of the chain for a chain ID
(the unique hash created when the chain was created).

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `ChainID` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** chain id
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## entryCreditBalance

[src/factomd.js:379-387](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L379-L387 "Source code on GitHub")

Return its current balance for a specific entry credit address.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `address` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** entry credit address
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## factoidBalance

[src/factomd.js:397-405](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L397-L405 "Source code on GitHub")

This call returns the number of Factoshis (Factoids \*10^-8) that are currently
available at the address specified.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `address` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** factoid address
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler AP

## entryCreditRate

[src/factomd.js:415-418](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L415-L418 "Source code on GitHub")

Returns the number of Factoshis (Factoids \*10^-8) that purchase a single
Entry Credit. The minimum factoid fees are also determined by this rate,
along with how complex the factoid arbitrary is.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## properties

[src/factomd.js:427-430](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L427-L430 "Source code on GitHub")

Retrieve current properties of the Factom system,
including the software and the API versions.

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## factoidSubmit

[src/factomd.js:441-449](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L441-L449 "Source code on GitHub")

Submit a factoid arbitrary with hex encoded string documented here:
<https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#factoid-transaction>
A factoid-submit api call can be composed with factom_walletd.compose-transaction

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `transaction` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** hex encoded string
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## commit_chain

[src/factomd.js:461-469](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L461-L469 "Source code on GitHub")

Send a Chain Commit Message to factomd to create a new Chain
The commit chain hex encoded string is documented here:
<https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#chain-commit>
<https://docs.factom.com/api#factoid-submit>

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `message` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** hex encoded string
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## revealChain

[src/factomd.js:481-489](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L481-L489 "Source code on GitHub")

Reveal the First Entry in a Chain to factomd after the Commit to compleate
the Chain creation. The reveal chain hex encoded string is documented here:
<https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#entry>
<https://docs.factom.com/api#factoid-submit>

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `entry` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** reveal chain hex encoded string
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## commitEntry

[src/factomd.js:501-509](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L501-L509 "Source code on GitHub")

Send an Entry Commit Message to factom to create a new Entry. The entry commit
hex encoded string is documented here:
<https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#entry-commit>
<https://docs.factom.com/api#reveal-chain>

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `message` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** hex encoded string for entry
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## revealEntry

[src/factomd.js:521-529](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L521-L529 "Source code on GitHub")

Reveal an Entry to factomd after the Commit to compleate the Entry creation.
The reveal entry hex encoded string is documented here:
<https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#entry>
<https://docs.factom.com/api#reveal-entry>

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `entry` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** hex encoded string for reveal entry
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API

## sendRawMessage

[src/factomd.js:540-548](https://github.com/MyFactomWallet/factomdjs/blob/be81a6ab8d10b14bd58f5ac01b744fe6184ecb95/src/factomd.js#L540-L548 "Source code on GitHub")

Send a raw hex encoded binary message to the Factom network.
This is mostly just for debugging and testing.
<https://docs.factom.com/api#send-raw-message>

**Parameters**

-   `id` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** arbitrary reference id
-   `message` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** raw hex encoded string
-   `cb` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function(data,response) as specified by the restler API