const cds = require('@sap/cds');

// class MyService extends cds.ApplicationService {
//     init() {
//         // The handler uses this.on() with just the action name.
        // this.on('setPriority', async (req) => {
        //     console.log("success");
        //     const { ID, urgency_code } = req.data;
        //     console.log("success");
        //     // ... your logic
        // });
//         return super.init();
//     }
// }
// module.exports = { MyService };

module.exports = srv => {
 srv.on('setPriority', async (req) => {
            console.log("success");
            const { ID, urgency_code } = req.data;
           await UPDATE('Incidents').set({'Priority': 'High'}).where`ID = ${req.data.ID}`;
        //     console.log("success");
            // ... your logic
        });

}