var assert = require('assert')
var factomd = require('../lib/factomd.js')
var BN = require('bn.js')
const Buffer = require('safe-buffer').Buffer

//factomd.setTimeout(5000)
//factomd.setFactomNode('http://localhost:8088/v2')

describe('factomd.directory_block', function() {
  it('should call factomd.directory_block', function(done) {
  assert.doesNotThrow(function () {
      factomd.directory_block(0,'7ed5d5b240973676c4a8a71c08c0cedb9e0ea335eaef22995911bcdc0fe9b26b',function(data,response) {

      //console.log(data)
      console.log(response.rawEncoded)
      //console.log(response)
      done()
      })
    },done)
  })
})

describe('factomd.directory_block_head', function() {
  it('should call factomd.directory_block_head', function(done) {
    assert.doesNotThrow(function () {
      factomd.directory_block_head(0,function(data,response) {

      //   var expectjson= {
      //      'jsonrpc':'2.0',
      //      'id':0,
      //      'result':{
      //         'keymr':'7ed5d5b240973676c4a8a71c08c0cedb9e0ea335eaef22995911bcdc0fe9b26b'
      //      }
      //   }
      // assert.equal (JSON.stringify(expectjson) , response.rawEncoded)
      //console.log(data)
      //console.log(JSON.stringify(expectjson))
      console.log(response.rawEncoded)
      //console.log(response)
      done()
      })
    },done)
  })
})


describe('factomd.heights', function() {
  it('should call factomd.heights', function(done) {
    assert.doesNotThrow(function () {
      factomd.heights(0,function(data,response) {

      //console.log(data)
      console.log(response.rawEncoded)
      //console.log(response)
      done()
      })
    },done)
  })
})

describe('factomd.raw_data', function() {
  it('should call factomd.raw_data', function(done) {
    assert.doesNotThrow(function () {
      var hash = '0ae2ab2cf543eed52a13a5a405bded712444cc8f8b6724a00602e1c8550a4ec2'
      factomd.raw_data(0, hash, function(data,response) {

      var res = JSON.parse(response.rawEncoded)
      console.log(res.result.data)

      done()
      })
    },done)
  })
})

describe('factomd.dblock_by_height', function() {
  it('should call factomd.dblock_by_height', function(done) {
      assert.doesNotThrow(function () {
          var height = 14460
          factomd.dblock_by_height(0, height, function(data,response) {

          console.log(response.rawEncoded)

          done()
        })
      },done)
  })
})


describe('factomd.ablock_by_height', function() {
  it('should call factomd.ablock_by_height', function(done) {
    assert.doesNotThrow(function () {
        var height = 1
        factomd.ablock_by_height(0, height, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})


describe('factomd.ecblock_by_height', function() {
  it('should call factomd.ecblock_by_height', function(done) {
      assert.doesNotThrow(function () {
          var height = 10000
          factomd.ecblock_by_height(0, height, function(data,response) {

          console.log(response.rawEncoded)

          done()
        })
      },done)
  })
})


describe('factomd.fblock_by_height', function() {
  it('should call factomd.fblock_by_height', function(done) {
    assert.doesNotThrow(function () {
        var height = 1
        factomd.fblock_by_height(0, height, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})

describe('factomd.factoid_block', function() {
  it('should call factomd.factoid_block', function(done) {
    assert.doesNotThrow(function () {
      var keymr = '1df843ee64f4b139047617a2df1007ea4470fabd097ddf87acabc39813f71480'
      factomd.factoid_block(0, keymr, function(data,response) {

      console.log(response.rawEncoded)

      done()
    })
    },done)
  })
})

describe('factomd.entrycredit_block', function() {
  it('should call factomd.entrycredit_block', function(done) {
    assert.doesNotThrow(function () {
        var keymr = '2050b16701f29238d6b99bcf3fb0ca55d6d884139601f06691fc370cda659d60'
        factomd.entrycredit_block(0, keymr, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})

describe('factomd.admin_block', function() {
  it('should call factomd.admin_block', function(done) {
      assert.doesNotThrow(function () {
          var keymr = 'cc03cb3558b6b1acd24c5439fadee6523dd2811af82affb60f056df3374b39ae'
          factomd.admin_block(0, keymr, function(data,response) {

          console.log(response.rawEncoded)

          done()
        })
      },done)
  })
})


describe('factomd.entry_block', function() {
  it('should call factomd.entry_block', function(done) {
      assert.doesNotThrow(function () {
          var keymr = '041c3fed14469a3d0f1a022e3d5321583065e691edb9223605c86766ff881883'
          factomd.entry_block(0, keymr, function(data,response) {

          console.log(response.rawEncoded)

          done()
        })
      },done)
  })
})

describe('factomd.entry', function() {
  it('should call factomd.entry', function(done) {
      assert.doesNotThrow(function () {
          var hash = '24674e6bc3094eb773297de955ee095a05830e431da13a37382dcdc89d73c7d7'
          factomd.entry(0, hash, function(data,response) {

          console.log(response.rawEncoded)

          done()
        })
      },done)
  })
})

describe('factomd.pending_entries', function() {
  it('should call factomd.pending_entries', function(done) {
    assert.doesNotThrow(function () {
        factomd.pending_entries(0, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})

describe('factomd.transaction', function() {
  it('should call factomd.transaction', function(done) {
    assert.doesNotThrow(function () {
        var hash = '64251aa63e011f803c883acf2342d784b405afa59e24d9c5506c84f6c91bf18b'
        factomd.transaction(0, hash, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})

describe('factomd.ack', function() {
  it('should call factomd.ack', function(done) {
    assert.doesNotThrow(function () {
        var hash = 'e96cca381bf25f6dd4dfdf9f7009ff84ee6edaa3f47f9ccf06d2787482438f4b'
        var chainid = 'f9164cd66af9d5773b4523a510b5eefb9a5e626480feeb6671ef2d17510ca300'
        factomd.ack(0, hash, chainid, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})

describe('factomd.receipt', function() {
  it('should call factomd.receipt', function(done) {
    assert.doesNotThrow(function () {
        var hash = '0ae2ab2cf543eed52a13a5a405bded712444cc8f8b6724a00602e1c8550a4ec2'
        factomd.receipt(0, hash, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})


describe('factomd.pending_transactions', function() {
  it('should call factomd.pending_transactions', function(done) {
    assert.doesNotThrow(function () {
        var ecaddress = 'EC2DKSYyRcNWf7RS963VFYgMExoHRYLHVeCfQ9PGPmNzwrcmgm2r'
        factomd.pending_transactions(0, ecaddress, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})

describe('factomd.chain_head', function() {
  it('should call factomd.chain_head', function(done) {
    assert.doesNotThrow(function () {
        //var chainid = '5a77d1e9612d350b3734f6282259b7ff0a3f87d62cfef5f35e91a5604c0490a3'
        //{'jsonrpc':'2.0','id':0,'error':{'code':-32009,'message':'Missing Chain Head'}}

        var chainid = '03e57f8dd02506fdc1f6858d36bf3dfaa16aa98653108240968182aaffc19723'
        factomd.chain_head(0, chainid, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})

describe('factomd.entry_credit_balance', function() {
  it('should call factomd.entry_credit_balance', function(done) {
    assert.doesNotThrow(function () {
        var address = 'EC2DKSYyRcNWf7RS963VFYgMExoHRYLHVeCfQ9PGPmNzwrcmgm2r'
        factomd.entry_credit_balance(0, address, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})

describe('factomd.entry_credit_balance', function() {
  it('should call factomd.entry_credit_balance', function(done) {
    assert.doesNotThrow(function () {
        var address = 'EC2DKSYyRcNWf7RS963VFYgMExoHRYLHVeCfQ9PGPmNzwrcmgm2r'
        factomd.entry_credit_balance(0, address, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})

describe('factomd.factoid_balance', function() {
  it('should call factomd.factoid_balance', function(done) {
      assert.doesNotThrow(function () {
          var address = 'FA2jK2HcLnRdS94dEcU27rF3meoJfpUcZPSinpb7AwQvPRY6RL1Q'
          factomd.factoid_balance(0, address, function(data,response) {

          console.log(response.rawEncoded)

          done()
        })
      },done)
  })
})


describe('factomd.entry_credit_rate', function() {
  it('should call factomd.entry_credit_rate', function(done) {
    assert.doesNotThrow(function () {
        factomd.entry_credit_rate(0, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})


describe('factomd.factoid_submit', function() {
  it('should call factomd.factoid_submit', function(done) {
    assert.doesNotThrow(function () {
        var fct_submit = '0201565d109233010100b0a0e100646f3e8750c550e4582eca5047546ffef89c13a175985e320232bacac81cc428afd7c200ce7b98bfdae90f942bc1fe88c3dd44d8f4c81f4eeb88a5602da05abc82ffdb5301718b5edd2914acc2e4677f336c1a32736e5e9bde13663e6413894f57ec272e28dc1908f98b79df30005a99df3c5caf362722e56eb0e394d20d61d34ff66c079afad1d09eee21dcd4ddaafbb65aacea4d5c1afcd086377d77172f15b3aa32250a'
        factomd.factoid_submit(0, fct_submit, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})

describe('factomd.commit_chain', function() {
  it('should call factomd.commit_chain', function(done) {
    assert.doesNotThrow(function () {

        var msg = '00015507b2f70bd0165d9fa19a28cfaafb6bc82f538955a98c7b7e60d79fbf92655c1bff1c76466cb3bc3f3cc68d8b2c111f4f24c88d9c031b4124395c940e5e2c5ea496e8aaa2f5c956749fc3eba4acc60fd485fb100e601070a44fcce54ff358d606698547340b3b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da2946c901273e616bdbb166c535b26d0d446bc69b22c887c534297c7d01b2ac120237086112b5ef34fc6474e5e941d60aa054b465d4d770d7f850169170ef39150b'
        factomd.commit_chain(0, msg, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})

describe('factomd.reveal_chain', function() {
  it('should call factomd.reveal_chain', function(done) {
    assert.doesNotThrow(function () {

        var entry = '007E18CCC911F057FB111C7570778F6FDC51E189F35A6E6DA683EC2A264443531F000E0005746573745A0005746573745A48656C6C6F20466163746F6D21'
        factomd.reveal_chain(0, entry, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})

describe('factomd.commit_entry', function() {
  it('should call factomd.commit_entry', function(done) {
    assert.doesNotThrow(function () {

        var entry = '00015507C1024BF5C956749FC3EBA4ACC60FD485FB100E601070A44FCCE54FF358D60669854734013B6A27BCCEB6A42D62A3A8D02A6F0D73653215771DE243A63AC048A18B59DA29F4CBD953E6EBE684D693FDCA270CE231783E8ECC62D630F983CD59E559C6253F84D1F54C8E8D8665D493F7B4A4C1864751E3CDEC885A64C2144E0938BF648A00'
        factomd.commit_entry(0, entry, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})

describe('factomd.reveal_entry', function() {
  it('should call factomd.reveal_entry', function(done) {
    assert.doesNotThrow(function () {

        var entry = '007E18CCC911F057FB111C7570778F6FDC51E189F35A6E6DA683EC2A264443531F000E0005746573745A0005746573745A48656C6C6F20466163746F6D21'
        factomd.reveal_entry(0, entry, function(data,response) {

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})

describe('factomd.send_raw_message', function() {
  it('should call factomd.send_raw_message', function(done) {
    assert.doesNotThrow(function () {

        var msg = '0401554b9c15b100015507b2f70bd0165d9fa19a28cfaafb6bc82f538955a98c7b7e60d79fbf92655c1bff1c76466cb3bc3f3cc68d8b2c111f4f24c88d9c031b4124395c940e5e2c5ea496e8aaa2f5c956749fc3eba4acc60fd485fb100e601070a44fcce54ff358d606698547340b3b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da2946c901273e616bdbb166c535b26d0d446bc69b22c887c534297c7d01b2ac120237086112b5ef34fc6474e5e941d60aa054b465d4d770d7f850169170ef39150b'
        factomd.send_raw_message(0, msg, function(data,response) {
        //this one seems to fail
        //{'jsonrpc':'2.0','id':0,'error':{'code':-32602,'message':'Invalid params'}}

        console.log(response.rawEncoded)

        done()
      })
    },done)
  })
})
