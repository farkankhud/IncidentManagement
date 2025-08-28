using { sap.capire.incidents as my } from '../db/schema';

/**
 * Service used by support personell, i.e. the incidents' 'processors'.
 */
service ProcessorService { 
    @odata.draft.enabled
    entity Incidents as projection on my.Incidents actions{
        action setPriority(ID: UUID, urgency_code: String) returns String;
    };
    annotate ProcessorService.Incidents with @odata.draft.enabled; 
annotate ProcessorService with @(requires: 'support');

@readonly
@cds.redirection.target
entity Customers as projection  on my.Customers;
@cds.redirection.target
entity vh_Incidents as select distinct ID, customer, customer.name from my.Incidents;

// action setPriority(
//         ID          : UUID @(Common.ValueList: {
//                                 $Type : 'Common.ValueListType',
//                                 Label : 'Incident Value Help',
//                                 CollectionPath : 'vh_Incidents',
//                                 Parameters : [
//                                     {
//                                         $Type : 'Common.ValueListParameterInOut',
//                                         LocalDataProperty  : 'ID',
//                                         ValueListProperty : 'ID'
//                                     },
//                                     {
//                                         $Type : 'Common.ValueListParameterDisplayOnly',
//                                         ValueListProperty : 'name'
//                                     }
//                                 ]
//                             })
//         ,
//         urgency_code: String
//     ) returns String;

 
}

/**
 * Service used by administrators to manage customers and incidents.
 */
service AdminService {
    entity Customers as projection on my.Customers;
    entity Incidents as projection on my.Incidents;
    }
annotate AdminService with @(requires: 'admin');