const cds = require('@sap/cds');
const { log } = require('console');
const {Books} = cds.entities;
const db = cds.connect.to('db');


module.exports = cds.service.impl(srv => {
        srv.before('READ','Books',capitalizename);
        //  srv.before('READ','Order_Items',capitalizeitem);
     });

     async function capitalizename (req){
//       console.log("hello");
      let db_data = "SELECT * " +  
      "FROM MY_BOOKSHOP_BOOKS "
//       let data=`UPDATE "604FAE256F504D23AAD5EFA380439A24".MY_BOOKSHOP_BOOKS 
//       SET title="CaseStudy"
//       WHERE  ID=1;`


//       let data =`INSERT INTO "604FAE256F504D23AAD5EFA380439A24".MY_BOOKSHOP_BOOKS values(1001,'mAVNE',220)`;
       let content = await cds.run(db_data);
//        let c1=await cds.run(data);
       console.log(content);
//        console.log(c1);

        
     }