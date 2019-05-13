export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */

 this.get('/purchase-history', function(schema,request){ 
  return {
    "@base": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/",
    "title": "PurchaseHistory",
    "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory",
    "author": {
       "name": null
    },
    "link": {
       "@rel": "self",
       "@title": "PurchaseHistory",
       "@href": "PurchaseHistory"
    },
    "count": "67",
    "entry": [
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('4118456760370201')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('4118456760370201')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "4118456760370201"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001000363"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "12"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/25/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190325"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1000363"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('4118456760370202')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('4118456760370202')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "4118456760370202"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001000363"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "12"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/25/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190325"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1000363"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('4118456760370203')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('4118456760370203')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "4118456760370203"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001000363"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "13"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/25/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190325"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1000363"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('4118456760370204')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('4118456760370204')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "4118456760370204"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "1"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/25/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190325"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('4118456760370205')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('4118456760370205')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "4118456760370205"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "1"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/25/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190325"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('4118456760370206')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('4118456760370206')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "4118456760370206"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/25/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190325"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('4118456760370207')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('4118456760370207')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "4118456760370207"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000005324967"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/25/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190325"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "5324967"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('4118456760370208')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('4118456760370208')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "4118456760370208"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001009695"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/22/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190322"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1009695"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "02"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('4118456760370209')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('4118456760370209')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "4118456760370209"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000004056818"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "20"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/22/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190322"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "4056818"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "03"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702010')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702010')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702010"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000004056818"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "20"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/22/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190322"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "4056818"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "03"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702011')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702011')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702011"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000004056818"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "20"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/22/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190322"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "4056818"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "03"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702012')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702012')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702012"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001000819"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z200"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "31.1"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "1"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/21/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "31.1"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190321"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1000819"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702013')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702013')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702013"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001142140"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "1"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/21/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190321"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1142140"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702014')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702014')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702014"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001267103"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z200"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "30"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "1"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/21/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "30"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190321"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1267103"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "02"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702015')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702015')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702015"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "1"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/21/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190321"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702016')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702016')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702016"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "5"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/21/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190321"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702017')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702017')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702017"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001000363"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "14"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/20/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190320"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1000363"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702018')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702018')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702018"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001000363"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "23"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/20/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190320"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1000363"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702019')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702019')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702019"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001000363"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/19/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190319"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1000363"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702020')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702020')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702020"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001000363"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "12"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/19/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190319"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1000363"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702021')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702021')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702021"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001284363"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/19/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190319"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1284363"
                },
                "Type": {
                   "@type": "Edm.String",
                   "@null": "true"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702022')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702022')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702022"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001557255"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "45"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/19/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "45"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190319"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1557255"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702023')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702023')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702023"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/19/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190319"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702024')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702024')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702024"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "5"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/19/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190319"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702025')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702025')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702025"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/19/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190319"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702026')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702026')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702026"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/19/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190319"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702027')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702027')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702027"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/19/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190319"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702028')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702028')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702028"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "22"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/19/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190319"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702029')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702029')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702029"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "22"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/19/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190319"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702030')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702030')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702030"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001000710"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "3.13"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/18/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "3.13"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190318"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1000710"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702031')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702031')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702031"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001009695"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "5"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/18/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190318"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1009695"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "02"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702032')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702032')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702032"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "1"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/18/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190318"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702033')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702033')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702033"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/18/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190318"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702034')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702034')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702034"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/18/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190318"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702035')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702035')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702035"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/18/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190318"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702036')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702036')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702036"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/18/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190318"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702037')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702037')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702037"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000003609716"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "100"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/18/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190318"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "3609716"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702038')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702038')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702038"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001000173"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "2300"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/15/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "2.3"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190315"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1000173"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702039')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702039')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702039"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10000"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "1"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/15/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190315"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702040')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702040')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702040"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10000"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/15/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190315"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702041')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702041')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702041"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10000"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/15/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190315"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702042')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702042')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702042"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001000173"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "2300"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "6"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/14/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "2.3"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190314"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1000173"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702043')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702043')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702043"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001000363"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "1"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/14/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190314"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1000363"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702044')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702044')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702044"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001000363"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "1"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/14/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "117"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190314"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1000363"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702045')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702045')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702045"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001055565"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "18.09"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/14/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "18.09"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190314"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1055565"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "02"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702046')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702046')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702046"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001055565"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "18.09"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/14/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "18.09"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190314"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1055565"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "02"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702047')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702047')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702047"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001088863"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "64"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/14/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "64"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190314"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1088863"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "2N"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702048')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702048')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702048"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "1"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/14/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190314"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702049')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702049')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702049"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "3"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/14/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190314"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702050')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702050')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702050"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "5"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/14/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190314"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702051')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702051')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702051"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/14/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190314"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702052')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702052')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702052"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001000173"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "2.3"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/13/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "2.3"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190313"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1000173"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702053')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702053')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702053"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/13/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190313"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702054')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702054')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702054"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/13/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190313"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702055')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702055')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702055"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/13/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190313"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702056')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702056')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702056"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000003609716"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "1"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/13/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190313"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "3609716"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702057')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702057')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702057"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000003609716"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/13/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190313"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "3609716"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702058')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702058')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702058"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000003609716"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/13/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "0"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190313"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "3609716"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702059')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702059')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702059"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001009695"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/12/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190312"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1009695"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "02"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702060')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702060')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702060"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001557255"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "45"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "1"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/12/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "45"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190312"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1557255"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702061')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702061')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702061"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001557255"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "45"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "1"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/12/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "45"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190312"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1557255"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702062')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702062')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702062"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001557255"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "45"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "1"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/12/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "45"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190312"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1557255"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702063')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702063')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702063"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002123456"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "25"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/12/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "25"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190312"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2123456"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "03"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702064')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702064')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702064"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000002877224"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/12/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "10"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190312"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "2877224"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "04"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702065')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702065')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702065"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001054162"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "56"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/11/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "56"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190311"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1054162"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702066')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702066')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702066"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001054162"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "56"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "2"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/11/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "56"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190311"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1054162"
                },
                "Type": {
                   "@type": "Edm.String"
                }
             }
          }
       },
       {
          "id": "http://dh9hdb01.cardinalhealth.net:8080/cahservices/pharma/sfdc/history.xsodata/PurchaseHistory('41184567603702067')",
          "title": null,
          "author": {
             "name": null
          },
          "link": {
             "@rel": "self",
             "@title": "PurchaseHistory",
             "@href": "PurchaseHistory('41184567603702067')"
          },
          "category": {
             "@term": "cahservices.pharma.sfdc.PurchaseHistoryType",
             "@scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
          },
          "content": {
             "properties": {
                "ID": {
                   "@type": "Edm.String",
                   "#text": "41184567603702067"
                },
                "MATNR": {
                   "@type": "Edm.String",
                   "#text": "000000000001088863"
                },
                "OrderType": {
                   "@type": "Edm.String",
                   "#text": "Z100"
                },
                "PricePaid": {
                   "@type": "Edm.Decimal",
                   "#text": "32"
                },
                "QuantitySold": {
                   "@type": "Edm.Decimal",
                   "#text": "1"
                },
                "OrderedDate": {
                   "@type": "Edm.String",
                   "#text": "03/11/2019"
                },
                "SellPrice": {
                   "@type": "Edm.Decimal",
                   "#text": "64"
                },
                "OrderedDte": {
                   "@type": "Edm.String",
                   "#text": "20190311"
                },
                "CIN": {
                   "@type": "Edm.String",
                   "#text": "1088863"
                },
                "Type": {
                   "@type": "Edm.String",
                   "#text": "2N"
                }
             }
          }
       }
    ]
};
 });
}