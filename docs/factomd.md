<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [setFactomNode](#setfactomnode)
-   [getUrl](#geturl)
-   [setTimeout](#settimeout)
-   [getTimeout](#gettimeout)
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
-   [entrycreditBlock](#entrycreditblock)
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

[src/factomd.js:28-32](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L28-L32 "Source code on GitHub")

Set the URL of the factom node.

**Parameters**

-   `url` **[url](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL)** of the factom node

## getUrl

[src/factomd.js:38-40](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L38-L40 "Source code on GitHub")

Get the URL of the factom node.

## setTimeout

[src/factomd.js:47-49](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L47-L49 "Source code on GitHub")

Set the timeout of the JSON request to the factom node

**Parameters**

-   `to` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Set the timeout in milliseconds

## getTimeout

[src/factomd.js:55-57](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L55-L57 "Source code on GitHub")

Get the timeout of the JSON request to the factom node

## dispatch

[src/factomd.js:65-96](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L65-L96 "Source code on GitHub")

Utility commands for dispatching JSON commands to the factom server.

**Parameters**

-   `jdata` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

## directoryBlock

[src/factomd.js:105-113](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L105-L113 "Source code on GitHub")

The directory block head is the last known directory block by factom,
or in other words, the most recently recorded block.

**Parameters**

-   `keymr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## directoryBlockHead

[src/factomd.js:121-124](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L121-L124 "Source code on GitHub")

The directory block head is the last known directory block by factom,
or in other words, the most recently recorded block.

## heights

[src/factomd.js:132-135](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L132-L135 "Source code on GitHub")

Returns various heights that allows you to view the state of the blockchain.
<https://docs.factom.com/api#heights>

## rawData

[src/factomd.js:144-152](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L144-L152 "Source code on GitHub")

Retrieve an entry or transaction in raw format, the data is a hex encoded string.
<https://docs.factom.com/api#raw-data>

**Parameters**

-   `hash` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## dblockByHeight

[src/factomd.js:160-168](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L160-L168 "Source code on GitHub")

Retrieve a directory block given only its height.

**Parameters**

-   `height` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** height of block requested

## ablockByHeight

[src/factomd.js:176-184](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L176-L184 "Source code on GitHub")

Retrieve administrative blocks for any given height.

**Parameters**

-   `height` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** height of block requested

## ecblockByHeight

[src/factomd.js:193-201](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L193-L201 "Source code on GitHub")

Retrieve the entry credit block for any given height.
These blocks contain entry credit transaction information.

**Parameters**

-   `height` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** height of block requested

## fblockByHeight

[src/factomd.js:209-217](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L209-L217 "Source code on GitHub")

Retrieve the factoid block for any given height.
These blocks contain factoid arbitrary information.

**Parameters**

-   `height` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** height of block requested

## factoidBlock

[src/factomd.js:225-233](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L225-L233 "Source code on GitHub")

Retrieve a specified factoid block given its merkle root key.

**Parameters**

-   `keyMr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Merkle root key

## entrycreditBlock

[src/factomd.js:242-250](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L242-L250 "Source code on GitHub")

Retrieve a specified entrycredit block given its merkle root key.
The numbers are minute markers.

**Parameters**

-   `keyMr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Merkle root key

## adminBlock

[src/factomd.js:258-266](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L258-L266 "Source code on GitHub")

Retrieve a specified admin block given its merkle root key.

**Parameters**

-   `keyMr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Merkle root key

## entryBlock

[src/factomd.js:275-283](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L275-L283 "Source code on GitHub")

Retrieve a specified entry block given its merkle root key.
The entry block contains 0 to many entries

**Parameters**

-   `keyMr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Merkle root key

## entry

[src/factomd.js:291-299](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L291-L299 "Source code on GitHub")

Get an Entry from factomd specified by the Entry Hash.

**Parameters**

-   `hash` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** entry hash

## pendingEntries

[src/factomd.js:307-314](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L307-L314 "Source code on GitHub")

Returns an array of the entries that have been submitted
but have not been recoreded into the blockchain.

## transaction

[src/factomd.js:325-333](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L325-L333 "Source code on GitHub")

Retrieve details of a factoid arbitrary using a transactions hash.
Note that information regarding the directory block height,
directory block keymr, and transaction block keymr are also included.
The “blockheight” parameter in the reponse will always be 0 when using
this call, refer to “includedindirectoryblockheight” if you need the height.

## ack

[src/factomd.js:343-351](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L343-L351 "Source code on GitHub")

Find the status of a transaction, whether it be a factoid,
reveal entry, or commit entry.

**Parameters**

-   `hash` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** entry hash
-   `chainid` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** chain id

## receipt

[src/factomd.js:361-369](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L361-L369 "Source code on GitHub")

Retrieve a reciept providing cryptographially verfiable proof that information
was recorded in the factom blockchain and that this was subsequently
anchored in the bitcoin blockchain.

**Parameters**

-   `hash` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## pendingTransactions

[src/factomd.js:379-387](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L379-L387 "Source code on GitHub")

Retrieve a reciept providing cryptographially verfiable proof that information
was recorded in the factom blockchain and that this was subsequently
anchored in the bitcoin blockchain.

**Parameters**

-   `address` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## chainHead

[src/factomd.js:396-404](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L396-L404 "Source code on GitHub")

Return the keymr of the head of the chain for a chain ID
(the unique hash created when the chain was created).

**Parameters**

-   `chainID` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** chain id

## entryCreditBalance

[src/factomd.js:412-420](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L412-L420 "Source code on GitHub")

Return its current balance for a specific entry credit address.

**Parameters**

-   `address` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** entry credit address

## factoidBalance

[src/factomd.js:429-437](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L429-L437 "Source code on GitHub")

This call returns the number of Factoshis (Factoids \*10^-8) that are currently
available at the address specified.

**Parameters**

-   `address` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** factoid address

## entryCreditRate

[src/factomd.js:446-449](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L446-L449 "Source code on GitHub")

Returns the number of Factoshis (Factoids \*10^-8) that purchase a single
Entry Credit. The minimum factoid fees are also determined by this rate,
along with how complex the factoid arbitrary is.

## properties

[src/factomd.js:457-460](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L457-L460 "Source code on GitHub")

Retrieve current properties of the Factom system,
including the software and the API versions.

## factoidSubmit

[src/factomd.js:470-478](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L470-L478 "Source code on GitHub")

Submit a factoid arbitrary with hex encoded string documented here:
<https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#factoid-transaction>
A factoid-submit api call can be composed with factom_walletd.compose-transaction

**Parameters**

-   `transaction` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** hex encoded string

## commit_chain

[src/factomd.js:489-497](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L489-L497 "Source code on GitHub")

Send a Chain Commit Message to factomd to create a new Chain
The commit chain hex encoded string is documented here:
<https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#chain-commit>
<https://docs.factom.com/api#factoid-submit>

**Parameters**

-   `message` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** hex encoded string

## revealChain

[src/factomd.js:508-516](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L508-L516 "Source code on GitHub")

Reveal the First Entry in a Chain to factomd after the Commit to compleate
the Chain creation. The reveal chain hex encoded string is documented here:
<https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#entry>
<https://docs.factom.com/api#factoid-submit>

**Parameters**

-   `entry` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** reveal chain hex encoded string

## commitEntry

[src/factomd.js:527-535](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L527-L535 "Source code on GitHub")

Send an Entry Commit Message to factom to create a new Entry. The entry commit
hex encoded string is documented here:
<https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#entry-commit>
<https://docs.factom.com/api#reveal-chain>

**Parameters**

-   `message` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** hex encoded string for entry

## revealEntry

[src/factomd.js:546-554](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L546-L554 "Source code on GitHub")

Reveal an Entry to factomd after the Commit to compleate the Entry creation.
The reveal entry hex encoded string is documented here:
<https://github.com/FactomProject/FactomDocs/blob/master/factomDataStructureDetails.md#entry>
<https://docs.factom.com/api#reveal-entry>

**Parameters**

-   `entry` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** hex encoded string for reveal entry

## sendRawMessage

[src/factomd.js:564-572](https://github.com/MyFactomWallet/factomdjs/blob/aebba6dc0acf8bd5017fcd17ff3988db0711d2ca/src/factomd.js#L564-L572 "Source code on GitHub")

Send a raw hex encoded binary message to the Factom network.
This is mostly just for debugging and testing.
<https://docs.factom.com/api#send-raw-message>

**Parameters**

-   `message` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** raw hex encoded string
