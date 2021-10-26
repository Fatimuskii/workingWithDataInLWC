import { LightningElement, wire} from 'lwc';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';

const COLUMNS = [
    {label: 'Contact Name', fieldName: FIRSTNAME_FIELD.fieldApiname, type: 'text' }, 
    {label: 'Contact LastName', fieldName: LASTNAME_FIELD.fieldApiname, type: 'text' }, 
    {label: 'Contact Email', fieldName: EMAIL_FIELD.fieldApiname, type: 'text' }
];
export default class ContactList extends LightningElement {

    columns = COLUMNS; 
    @wire(getContacts)
    contacts;
}